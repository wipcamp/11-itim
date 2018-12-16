import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>

          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.11.2/antd.css" integrity="sha256-Px4z35WMarLJCT3K+yaUCxcGYegwNX2TPBxWaId4Dmg=" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>

      </html>

    )
  }
}
