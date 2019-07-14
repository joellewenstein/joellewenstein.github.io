import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "./layout";
import PortfolioScreenshot from "./PortfolioScreenshot";

import portfolioItemStyles from "./portfolioItem.module.css";

const PortfolioItem = ({ item }) => (
  <Layout title={item["name"]} subtitle={item["year"]}>
    <div className={portfolioItemStyles.section}>
      <h3>Context</h3>
      <p>{item["context"]}</p>
    </div>
    {item["role"] && (
      <div className={portfolioItemStyles.section}>
        <h3>Role</h3>
        <p>{item["role"]}</p>
      </div>
    )}
    <div className={portfolioItemStyles.section}>
      <h3>Work</h3>
      {item["work"].map((workItem, index) => (
        <div key={workItem["queryKey"]}>
          <PortfolioScreenshot
            queryKey={workItem["queryKey"]}
            caption={workItem["caption"]}
          />
        </div>
      ))}
    </div>
    {item["results"] && (
      <div className={portfolioItemStyles.section}>
        <h3>Results</h3>
        <p>{item["results"]}</p>
      </div>
    )}
  </Layout>
);

export default PortfolioItem;
