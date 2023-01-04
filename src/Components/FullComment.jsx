import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const FullComment = ({ commentId, setComments,setSelectedId }) => {
  // console.log(commentId);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);
  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`/comments/${commentId}`)
      .then(() => axios.get("/comments"))
      .then((res) => {
        setComments(res.data);
        setSelectedId(null);
        setComment(null);
      })
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
