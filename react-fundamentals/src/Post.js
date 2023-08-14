import PropTypes from "prop-types";
import React from "react";

export function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong> <br />
        <span>{props.post.subtitle}</span> <br />
        <small>Curtidas: {props.likes}</small>
      </article>

      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
};
