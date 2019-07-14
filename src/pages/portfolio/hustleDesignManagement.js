import React from "react";

import PortfolioItem from "../../components/portfolioItem";

import portfolioItems from "../../portfolioItems.js";
const item = portfolioItems["hustleDesignManagement"];

const RetargetingPage = () => <PortfolioItem item={item} />;

export default RetargetingPage;
