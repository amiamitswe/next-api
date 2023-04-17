import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";

function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="this is a a login page" />
      </Head>
      <div className="login">Login</div>
    </>
  );
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
