import React from "react";
import { Link } from "gatsby";
import cookie from "react-cookies";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PortfolioScreenshot from "./../components/PortfolioScreenshot";
import portfolioStyles from "./portfolioStyles.module.css";

import portfolioItems from "../portfolioItems.js";

const displayItems = [
  portfolioItems["quoraDesign"],
  portfolioItems["quoraDesignManagement"],
  portfolioItems["hustleDesignManagement"],
  portfolioItems["retargeting"]
];

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: cookie.load("password") };
    this.correctPassword = "daivernon";

    this.handleChange = this.handleChange.bind(this);

    console.log("Cookie says passowrd is: " + cookie.load("password"));
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    cookie.save("password", event.target.value);
  }

  renderPassword() {
    return (
      <div className={portfolioStyles.passwordArea}>
        <label>
          Please enter password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }

  renderPortfolio() {
    return displayItems.map((item, index) => (
      <div className={portfolioStyles.tile} key={item["name"]}>
        <div className={portfolioStyles.tileImage}>
          <PortfolioScreenshot queryKey={item["work"][0]["queryKey"]} />
        </div>

        <div className={portfolioStyles.tileText}>
          <div>
            <Link to={item["link"]}>{item["name"]}</Link>
          </div>
          <div className={portfolioStyles.year}>{item["year"]}</div>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <Layout title="Joel Lewenstein Portfolio">
        <SEO title="Joel Lewenstein Portfolio" />
        {this.state.password === this.correctPassword && this.renderPortfolio()}
        {this.state.password !== this.correctPassword && this.renderPassword()}
      </Layout>
    );
  }
}

export default PortfolioPage;
