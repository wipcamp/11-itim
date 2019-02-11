import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    }
  }

  render () {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <title>สมัครค่าย WIP Camp #11 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Sarabun:300,400,700"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta charset="utf-8"/>
          <meta name="keywords" content="wipcamp,itcamp,ค่ายไอที,ค่ายคอม,สมัครค่ายไอที,สมัครค่ายคอม,สมัครค่าย"/>
          <meta property="og:title" content="สมัครค่าย WIP Camp #11 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที "/>
          <meta property="og:type" content="company"/>
          <meta property="og:url" content="https://itim.wip.camp/"/>
          <meta property="og:image" content="/static/img/logo.png"/>
          <meta property="og:site_name" content="สมัครค่าย WIP Camp #11 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png"/>
          <meta name="msapplication-TileColor" content="#304151"/>
          <meta name="theme-color" content="#304151"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
