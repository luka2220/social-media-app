import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

function Post({ image, content, user, id }) {
  // Retrieving data from <App /> with useContext hook
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;

  const { dispatch } = useContext(PostContext);

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } })
  }

  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          style={{ height: 200, width: 200, objectFit: "cover" }}
          alt="Post"
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && "green" }}>{user}</div>
      <div>
        {isCurrentUser && <button onClick={handleDeletePost}>Delete Post</button>}
      </div>
    </>
  );
}

export default Post;
