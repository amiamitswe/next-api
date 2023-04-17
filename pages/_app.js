import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#5534ff",
  },
};

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="this is next js app testing" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
