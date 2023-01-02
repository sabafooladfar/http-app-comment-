import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const FullComment = ({ commentId }) => {
  // console.log(commentId);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);
  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  let commentDetail = <p>please select a comment ... </p>;

  if (commentId) commentDetail = <p>loading ... </p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
