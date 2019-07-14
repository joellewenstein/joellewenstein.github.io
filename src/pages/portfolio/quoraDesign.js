import React from "react";

import PortfolioItem from "../../components/portfolioItem";

import portfolioItems from "../../portfolioItems.js";
const item = portfolioItems["quoraDesign"];

const RetargetingPage = () => <PortfolioItem item={item} />;

export default RetargetingPage;
