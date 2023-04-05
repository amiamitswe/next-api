import Footer from "@/components/Footer";
import React from "react";

function Login() {
  return <div className="login">Login</div>;
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
