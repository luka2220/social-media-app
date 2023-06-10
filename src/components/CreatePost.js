import React, { useState, useRef, useContext } from "react";

import { PostContext } from "../App";

function CreatePost({ user }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const imageInputRef = useRef();

  const { dispatch } = useContext(PostContext);

  function handleNewPost(event) {
    event.preventDefault();

    // Send created post to <App />
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    // handleAddPost(post);

    // Reset state values to defualt
    setContent("");
    imageInputRef.current.value = "";
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleNewPost}>
        <input
          onChange={(event) => setContent(event.target.value)}
          type="text"
          placeholder="Add Post Content"
          value={content}
        />
        <input
          onChange={(event) => setImage(event.target.files[0])}
          type="file"
          ref={imageInputRef}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
