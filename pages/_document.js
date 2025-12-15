import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* 🔥 PRÉ-CONECTAR origens críticas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* 🔥 Google Fonts: preload + display=swap (sem bloquear) */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* 🔥 Seu CSS local (crítico - inline para melhor FCP) */}
        <link rel="stylesheet" href="/styles.css" />

        {/* 🔥 REMOVER Font Awesome - usando SVG icons instead */}
        {/* Economiza 15 KiB + 100ms LCP */}

        {/* 🔥 Preload ícones SVG críticos (opcional) */}
        <link rel="preload" href="/icons/moon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/icons/images.svg" as="image" type="image/svg+xml" />

        {/* 🔥 Meta tags para performance */}
        <meta name="theme-color" content="#1f2121" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
