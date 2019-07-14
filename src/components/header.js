import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import headerStyles from "./header.module.css";

const Header = ({ title, subtitle }) => (
  <header className={headerStyles.header}>
    <div className="content">
      <div className={headerStyles.titles}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

Header.defaultProps = {
  title: ``,
  subtitle: ``
};

export default Header;
