# iOS App — The Noir Studio

## Requisitos
- Mac con Xcode (gratis en Mac App Store)
- Cuenta Apple Developer: developer.apple.com ($99/año)
- El dominio real activo con HTTPS

---

## Paso 1 — Sustituir el dominio

En `Sources/ViewController.swift`, línea 7:
```swift
private let liveURL = URL(string: "https://PLACEHOLDER_DOMAIN")!
```
Cambia `PLACEHOLDER_DOMAIN` por tu dominio real.

---

## Paso 2 — Crear el proyecto en Xcode

1. Abre Xcode → **Create New Project**
2. Selecciona **iOS → App**
3. Rellena:
   - Product Name: `NoirStudio`
   - Bundle Identifier: `com.thenoirstudio.app`
   - Interface: **Storyboard**
   - Language: **Swift**
4. Guarda el proyecto **dentro** de la carpeta `ios/` de este repo

## Paso 3 — Añadir los archivos al proyecto

En Xcode, borra los archivos que genera por defecto (`ViewController.swift`, `ContentView.swift`) y añade los de este repo:

- Arrastra `Sources/AppDelegate.swift` al proyecto
- Arrastra `Sources/ViewController.swift` al proyecto
- Arrastra `Assets.xcassets/` (reemplaza el que Xcode creó)
- Arrastra `LaunchScreen.storyboard` (reemplaza el de Xcode)
- En **Build Settings → Info.plist File**, apunta a `Info.plist`

## Paso 4 — Añadir index.html como recurso offline

Copia el `index.html` del repo a la carpeta `ios/`:
```bash
cp ../index.html .
cp -r ../icons .
```
En Xcode: **File → Add Files** → selecciona `index.html` e `icons/`.
Asegúrate de marcar **"Copy items if needed"** y **"Add to target: NoirStudio"**.

## Paso 5 — Build & Run

1. Conecta un iPhone por USB (o usa el simulador)
2. Selecciona tu dispositivo en la barra superior de Xcode
3. ⌘R para compilar y lanzar
4. Si hay error de firma: **Signing & Capabilities → Team** → selecciona tu cuenta Apple

## Paso 6 — Subir a App Store

1. **Product → Archive** (con el iPhone desconectado, selecciona "Any iOS Device")
2. Se abre el Organizer → **Distribute App → App Store Connect**
3. Sigue el asistente (sube el .ipa a App Store Connect)
4. En App Store Connect (appstoreconnect.apple.com):
   - Nueva app → iOS → Bundle ID: `com.thenoirstudio.app`
   - Rellena descripción, capturas de pantalla, política de privacidad
   - Enviar a revisión (tarda 1-3 días)

---

## Política de privacidad (obligatoria para App Store)

Apple exige una URL pública. Texto mínimo válido:

> The Noir Studio no recopila datos personales. El procesamiento de imágenes
> ocurre íntegramente en el dispositivo. No se envían datos a ningún servidor.

Puedes publicarla en una página simple de tu dominio: `tudominio.com/privacidad`

---

## Capturas de pantalla requeridas

App Store exige capturas para iPhone 6.9" (iPhone 16 Pro Max):
- Mínimo 3 capturas
- Tamaño: 1320×2868 px
- Puedes hacerlas con el simulador de Xcode: Device → iPhone 16 Pro Max → ⌘S
