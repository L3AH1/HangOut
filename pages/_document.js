import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Function MyDocument
 * @returns A next.js document who's commonly used to augment application's <html> and <body> tags
 */
class MyDocument extends Document {
  /**
   * Async function
   * @param {ctx} context the context.
   * @returns {...initialProps} Props.
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <script
            src="https://secure-apijs.viamichelin.com/apijsv2/api/js?key=JSV2GP20210416014252446000089045$165380&lang=fra&protocol=https"
            type="text/javascript"
          >
            {" "}
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
          <title>HangOut</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
