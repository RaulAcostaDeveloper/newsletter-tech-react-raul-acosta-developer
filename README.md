# Newsletter Widget

Widget embebible para suscripción a newsletter.

> Este elemento fue desarrollado con fines de prueba técnica.

---

## Tag público del componente

```html
<newsletter-tech-react-raul-acosta-developer
  api-key="1234"
  api-url="https://neubox.com/newsletter"
  disabled
></newsletter-tech-react-raul-acosta-developer>
```

### Nombre del tag
```<newsletter-tech-react-raul-acosta-developer>```
Este es el tag público del componente embebido.

### Parámetros del widget
### api-key

Obligatorio.
API key utilizada para la conexión al servicio.

Ejemplo:

api-key="1234"
### api-url

Opcional.
URL del servicio que consumirá el widget.

Valor por defecto:

https://neubox.com/newsletter

Ejemplo:

api-url="https://neubox.com/newsletter"
### disabled

Opcional.
Parámetro booleano para habilitar o deshabilitar el componente.

Comportamiento:

// nada → habilitado

disabled="false" → habilitado

disabled → deshabilitado

disabled="" → deshabilitado

disabled="true" → deshabilitado

Ejemplo:

<newsletter-tech-react-raul-acosta-developer
  api-key="1234"
  disabled
></newsletter-tech-react-raul-acosta-developer>

## Uso del widget en diferentes frameworks

Lo más importante es no cargar el script múltiples veces.

### Uso en HTML, WordPress, CMS o landing builders

En plataformas donde se pueda editar el HTML directamente, se debe:

1. Añadir el script
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js"></script>
  </body>
</html>
```

2. Usar el componente

```
<newsletter-tech-react-raul-acosta-developer
  api-key="1234"
  api-url="https://neubox.com/newsletter"
></newsletter-tech-react-raul-acosta-developer>
```
### Uso en WordPress

En WordPress, lo ideal es cargar el script una sola vez, por ejemplo desde el tema o mediante un bloque/widget HTML personalizado.

Opción 1: agregar el script en el tema

Se puede registrar en functions.php para evitar cargarlo manualmente varias veces:

```
function load_newsletter_widget_script() {
    wp_enqueue_script(
        'newsletter-widget',
        'https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'load_newsletter_widget_script');
```

Opción 2: usar un bloque HTML personalizado

Si el sitio permite agregar HTML personalizado, basta con:

Asegurarse de que el script ya se cargó globalmente.

Insertar el componente donde se quiera mostrar.

Recomendación: no insertar el <script> dentro de cada bloque o página si ya fue cargado desde el tema.

### Uso en PHP

En un proyecto PHP tradicional, se recomienda cargar el script en el layout principal o en el archivo compartido de encabezado/pie, para que esté disponible en toda la aplicación.

Ejemplo en una plantilla PHP

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Newsletter Widget</title>
  </head>
  <body>
    <script src="https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js"></script>

    <newsletter-tech-react-raul-acosta-developer
      api-key="1234"
      api-url="https://neubox.com/newsletter"
    ></newsletter-tech-react-raul-acosta-developer>
  </body>
</html>
```

Ejemplo usando variables de PHP

```
<?php
  $apiKey = "1234";
  $apiUrl = "https://neubox.com/newsletter";
?>

<newsletter-tech-react-raul-acosta-developer
  api-key="<?php echo htmlspecialchars($apiKey, ENT_QUOTES, 'UTF-8'); ?>"
  api-url="<?php echo htmlspecialchars($apiUrl, ENT_QUOTES, 'UTF-8'); ?>"
></newsletter-tech-react-raul-acosta-developer>
```

### Uso en Laravel

En Laravel, lo ideal es cargar el script una sola vez desde un layout Blade, por ejemplo en resources/views/layouts/app.blade.php.

1. Cargar el script en el layout

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
  </head>
  <body>
    @yield('content')

    <script src="https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js"></script>
  </body>
</html>
```

2. Usar el componente en una vista Blade
```
@extends('layouts.app')

@section('content')
  <newsletter-tech-react-raul-acosta-developer
    api-key="1234"
    api-url="https://neubox.com/newsletter"
  ></newsletter-tech-react-raul-acosta-developer>
@endsection
```
Ejemplo usando variables de entorno

También puede configurarse con valores del archivo .env:

```
<newsletter-tech-react-raul-acosta-developer
  api-key="{{ env('NEWSLETTER_API_KEY') }}"
  api-url="{{ env('NEWSLETTER_API_URL', 'https://neubox.com/newsletter') }}"
></newsletter-tech-react-raul-acosta-developer>
```

### Uso en React

De preferencia, cargar el script en index.html.
Si eso no es posible, se puede cargar desde un componente aparte.

Componente para cargar el script
```
export const LoadNewsletterWidget = () => {
  return (
    <script src="https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js"></script>
  );
};
```

Componente para usar el widget

```
export const NewsletterWidget = () => {
  return (
    <>
      <newsletter-tech-react-raul-acosta-developer
        api-key="1234"
      />
    </>
  );
};
```

### Uso en Next.js

Next.js recomienda usar su propio componente Script.

También se puede cargar el script en app/layout.tsx.

```
import Script from "next/script";

export const LoadNewsletterWidget = () => {
  return (
    <Script src="https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js" />
  );
};
```

### Soporte para TypeScript

Es posible que TypeScript marque error si no reconoce el elemento personalizado.
Para evitarlo, se puede declarar el componente en un archivo global.d.ts.

```
declare namespace JSX {
  interface IntrinsicElements {
    "newsletter-tech-react-raul-acosta-developer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "api-key"?: string;
      "api-url"?: string;
      disabled?: boolean;
    };
  }
}
```

## API key de integración

Es importante proporcionar una API key válida para la conexión a:

https://neubox.com/newsletter

Ejemplo con la API key proporcionada:

```
<newsletter-tech-react-raul-acosta-developer
  api-key="6f897086c76602ede819e109eeeb0ff43f4b42212a80b4d48d3bf1fe6d6d8b40"
></newsletter-tech-react-raul-acosta-developer>
```

## Consideraciones de CORS

Para que el widget pueda conectarse correctamente al servicio, es necesario habilitar el consumo vía CORS.

Recomendaciones
Habilitar CORS para los dominios donde se va a integrar el widget.
Permitir entornos de desarrollo como localhost.
Contar con un servidor de integración, por ejemplo:
https://stage.neubox.com/newsletter

Esto facilitaría pruebas, integración y versionado.

## Documentación técnica
### ¿Por qué se eligió esta arquitectura?
React + Vite permite usar proxy para conectarse sin problemas de CORS.
React ofrece gran flexibilidad para configuración de componentes, separación de lógica, manejo de peticiones y rendimiento.
CSS Modules permite aislar los estilos del widget.
La normalización de estilos con :host ayuda a controlar la apariencia interna del componente.
Cloudflare ofrece una plataforma con plan gratuito ideal para distribuir el widget de manera simple y directa.
TypeScript permite construir componentes robustos, modernos y fáciles de mantener.
### Ventajas y limitaciones
Ventajas
Distribuible fácilmente
Configurable
Posibilidad de deshabilitar el componente
Conexión más segura mediante api-key
Restricción de acceso mediante CORS
Limitaciones
Los cambios deben subirse manualmente
Para pruebas, puede ser necesario configurar proxy si no existe una versión liberada del backend
### Cómo se evitan conflictos de estilos

Para evitar conflictos visuales con la aplicación anfitriona, el widget utiliza:

Shadow DOM
CSS Modules
Normalización de estilos con :host

Esto ayuda a encapsular el estilo y reducir interferencias externas.

### Estrategia de versionado

El widget puede versionarse publicándolo en carpetas específicas dentro de Cloudflare.

Ejemplo:

/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js

Esto permite mantener múltiples versiones activas y controlar mejor los cambios.

## Ejemplo completo
<script src="https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/NewsletterTechReactRaulAcostaDeveloper.js"></script>

```<newsletter-tech-react-raul-acosta-developer
  api-key="1234"
  api-url="https://neubox.com/newsletter"
></newsletter-tech-react-raul-acosta-developer>
```

## Capturas

<img width="436" height="390" alt="image" src="https://github.com/user-attachments/assets/cf52e85c-54ec-486e-bfa8-f6bad0ac7585" />

<img width="1273" height="246" alt="image" src="https://github.com/user-attachments/assets/9e8bdeed-de75-46f4-92ee-f8fd80b39731" />

<img width="1125" height="748" alt="image" src="https://github.com/user-attachments/assets/c2d39804-1090-4e73-8c92-dab853211950" />
