import PropTypes from "prop-types";
import React from "react";

export function Post(props) {
  return (
    <>
      <article>
        <strong>
          {props.post.read ? <s>{props.post.title}</s> : props.post.title}
        </strong>{" "}
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>{" "}
        <br />
        <span>{props.post.subtitle}</span> <br />
        <small>Curtidas: {props.likes}</small>
      </article>

      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
