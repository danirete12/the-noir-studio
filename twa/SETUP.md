# TWA Setup — The Noir Studio

## Qué es este directorio
Proyecto Trusted Web Activity para publicar en Google Play Store.
El APK envuelve la URL del editor como app nativa de Android.

## Pasos para publicar (cuando tengas el dominio)

### 1. Sustituir el dominio en twa-manifest.json
Reemplaza todos los `PLACEHOLDER_DOMAIN` por tu dominio real (ej: `thenoirstudio.com`).

### 2. Generar el keystore de firma
```bash
cd twa/
keytool -genkey -v -keystore android.keystore \
  -alias noir-studio \
  -keyalg RSA -keysize 2048 -validity 10000
```
Guarda bien la contraseña — sin ella no puedes actualizar la app en Play Store.

### 3. Instalar bubblewrap y generar el proyecto Android
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://TUDOMINIO/manifest.json
bubblewrap build
```
Salida: `app-release-signed.apk` y `app-release.aab` (el AAB es el que pide Play Store).

### 4. Añadir assetlinks.json al servidor
Necesitas subir este archivo a `https://TUDOMINIO/.well-known/assetlinks.json`:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.thenoirstudio.app",
    "sha256_cert_fingerprints": ["HUELLA_SHA256_DEL_KEYSTORE"]
  }
}]
```

Para obtener la huella SHA256:
```bash
keytool -list -v -keystore android.keystore -alias noir-studio
```
Copia el valor "SHA256:" y pégalo en assetlinks.json.

### 5. Subir a Play Store
- Crea cuenta en play.google.com/console ($25 única vez)
- Nueva aplicación → Android → sube el AAB
- Rellena ficha: descripción, capturas, política de privacidad
- Lanzamiento en producción o prueba cerrada

## Cuenta de Google Play
Necesitas una cuenta de Google Play Developer:
- Registro: play.google.com/console
- Pago único: $25 USD

## Política de privacidad (obligatoria)
Play Store exige URL de política de privacidad. Mínima:
"The Noir Studio no recopila datos personales. Todo el procesamiento
de imágenes ocurre en el dispositivo del usuario. No se envían datos
a ningún servidor."
