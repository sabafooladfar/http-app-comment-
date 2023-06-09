import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewComment = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const nameChangeHandler = (e) => {
    setComment({ ...comment, name: e.target.value });
  };
  const emailChangeHandler = (e) => {
    setComment({ ...comment, email: e.target.value });
  };
  const bodyChangeHandler = (e) => {
    setComment({ ...comment, body: e.target.value });
  };
  const postCommentHandler = (e) => {
    e.preventDefault();
    axios
      .post("/comments", {
        ...comment,
        postId: 10,
      })
      .then(() => {
        navigate("/");
        axios.get("/comments");
      })
      .catch();
  };
  return (
    <div>
      <h3 style={{textAlign:"center", margin:"20px"}}>New Comment</h3>
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
            onChange={(e) => bodyChangeHandler(e)}
          ></textarea>
        </div>
        <button onClick={postCommentHandler}>Add New Comment</button>
      </form>
    </div>
  );
};

export default NewComment;
