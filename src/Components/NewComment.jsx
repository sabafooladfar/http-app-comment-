import axios from "axios";
import { useState } from "react";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const nameChangeHandler = (e) => {
    setComment({ ...comment, name: e.target.value });
  };
  const emailChangeHandler = (e) => {
    setComment({ ...comment, email: e.target.value });
  };
  const contentChangeHandler = (e) => {
    setComment({ ...comment, content: e.target.value });
  };
  const postCommentHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 10,
      })
      .then((res) => console.log(res.data))
      .catch();
  };
  return (
    <div>
      <h3>New Comment</h3>
      <form action="" className="newCommentForm">
        <div>
          <label htmlFor="">name</label>
          <input type="text" onChange={(e) => nameChangeHandler(e)} />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="email" onChange={(e) => emailChangeHandler(e)} />
        </div>
        <div>
          <label htmlFor="">body</label>
          <textarea
            name=""
            id=""
            cols="25"
            rows="5"
            onChange={(e) => contentChangeHandler(e)}
          ></textarea>
        </div>
        <button onClick={postCommentHandler}>Add New Comment</button>
      </form>
    </div>
  );
};

export default NewComment;
