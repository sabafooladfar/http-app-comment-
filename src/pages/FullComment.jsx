import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const FullComment = () => {
  const commentId = useParams().id;
  const navigate = useNavigate();
  const [comment, setComment] = useState(null);
  
  useEffect(() => {
    if (commentId) {
      axios
        .get(`/comments/${commentId}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
      }
    }, [commentId]);
  
  const deleteHandler = (e) => {
      e.preventDefault();
      axios
      .delete(`/comments/${commentId}`)
      .then(() => {
        setComment(null);
        navigate("/");
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
