import PropTypes from "prop-types";
import React from "react";

export function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      {props.children}
      <hr />
      <br />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = { title: `Meu Blog` };
