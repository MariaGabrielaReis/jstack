import PropTypes from "prop-types";
import React from "react";

export function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <hr />
      <br />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = { title: `Meu Blog` };
