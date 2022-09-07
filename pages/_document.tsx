import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link
            crossOrigin="anonymous"
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <meta content="light" name="color-scheme" />

          <meta content="gitHub contribution graph,github api" name="keywords" />
          <meta
            content="Review all the contributions you've made to GitHub over the years."
            name="description"
          />
          <meta content="LeoKu (https://github.com/Codennnn)" name="author" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
