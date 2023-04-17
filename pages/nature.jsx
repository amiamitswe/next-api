import Head from "next/head";
import Image from "next/image";
import React from "react";
import img from "../public/img/1.jpg";

function Nature() {
  return (
    <>
      <Head>
        <title>Nature</title>
      </Head>
      <div>Nature</div>
      <div>
        <Image
          src={img}
          placeholder="blur"
          alt="nature"
          width="280"
          height="480"
        />
        {["1", "2", "3", "4", "5"].map((item) => (
          <Image
            key={item}
            src={`/img/${item}.jpg`}
            alt="nature"
            width="280"
            height="480"
          />
        ))}
      </div>
    </>
  );
}

export default Nature;
