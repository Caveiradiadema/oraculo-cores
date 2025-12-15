import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* 🔥 PRÉ-CONECTAR origens críticas */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* 🔥 Font Awesome: async com media query para não bloquear */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          media="print"
          onLoad="this.media='all'"
          crossOrigin="anonymous"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            crossOrigin="anonymous"
          />
        </noscript>

        {/* 🔥 Google Fonts: preload + swap */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* 🔥 Seu CSS local */}
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
