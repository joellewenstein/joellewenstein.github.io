import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import indexStyles from "./index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.contents}>
      <p>
        I lead the design team at{" "}
        <a href="http://www.hustle.com" target="_blank">
          Hustle
        </a>
        . Previously, I was a designer & design manager at{" "}
        <a href="http://www.quora.com" target="_blank">
          Quora
        </a>
        , worked on an app for{" "}
        <a href="http://www.getamplify.org" target="_blank">
          grassroots political resistance
        </a>
        , and was a designer at{" "}
        <a href="http://www.goodguide.com" target="_blank">
          GoodGuide
        </a>
        .
      </p>
      <p>
        You can read my thoughts on{" "}
        <a href="https://qr.ae/TUtS5h" target="_blank">
          political tech
        </a>
        ,{" "}
        <a href="https://qr.ae/TUnulT" target="_blank">
          management
        </a>
        ,{" "}
        <a href="https://qr.ae/TUnulI" target="_blank">
          bias
        </a>
        ,{" "}
        <a href="https://qr.ae/TUnuz8" target="_blank">
          adversity
        </a>
        ,{" "}
        <a href="https://qr.ae/TUnult" target="_blank">
          decision making
        </a>
        , and{" "}
        <a href="https://qr.ae/TUnulv" target="_blank">
          socializing.
        </a>
      </p>
      <p>Portfolio available upon request.</p>
      <p>
        You can reach me at{" "}
        <a href="mailto:joel.lewenstein@gmail.com">joel.lewenstein@gmail.com</a>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
