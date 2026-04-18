import UIKit
import WebKit

class ViewController: UIViewController {

    // Cambia esto cuando tengas el dominio
    private let liveURL = URL(string: "https://PLACEHOLDER_DOMAIN")!

    private var webView: WKWebView!

    override func loadView() {
        let config = WKWebViewConfiguration()
        // Permite que el JS de Canvas API acceda al portapapeles al exportar
        config.preferences.javaScriptEnabled = true
        config.allowsInlineMediaPlayback = true

        webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.scrollView.bounces = false
        // Oculta la barra de Safari que aparecería al hacer scroll
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Fondo negro durante la carga (evita flash blanco)
        view.backgroundColor = .black
        loadLive()
    }

    override var prefersStatusBarHidden: Bool { true }

    private func loadLive() {
        var req = URLRequest(url: liveURL, cachePolicy: .returnCacheDataElseLoad)
        req.timeoutInterval = 8
        webView.load(req)
    }

    private func loadBundled() {
        guard let path = Bundle.main.path(forResource: "index", ofType: "html") else { return }
        let fileURL = URL(fileURLWithPath: path)
        webView.loadFileURL(fileURL, allowingReadAccessTo: fileURL.deletingLastPathComponent())
    }
}

extension ViewController: WKNavigationDelegate {
    func webView(_ webView: WKWebView, didFailProvisionalNavigation _: WKNavigation!, withError _: Error) {
        loadBundled()
    }

    func webView(_ webView: WKWebView, didFail _: WKNavigation!, withError _: Error) {
        loadBundled()
    }

    func webView(_ webView: WKWebView, didFinish _: WKNavigation!) {
        // Inyecta CSS para que el layout use el área segura en iPhone con notch
        let safeAreaCSS = """
        document.documentElement.style.setProperty(
          '--safe-top', window.visualViewport ? '0px' : 'env(safe-area-inset-top)'
        );
        """
        webView.evaluateJavaScript(safeAreaCSS, completionHandler: nil)
    }
}
