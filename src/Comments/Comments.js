import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import FullComment from "../pages/FullComment";
import NewComment from "../Components/NewComment";
import { toast } from "react-toastify";
import { getAllComments } from "../services/getAllCommentsService";
import { Link } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  async function getComments() {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      setError(true);
    }
  }
  getComments();

  const renderComment = () => {
    let renderValue = <p>loading ...</p>;
    if (error) {
      renderValue = <p>fetching data failed !</p>;
      toast.error("comments not found");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
        <Comment
         
          name={c.name}
          email={c.email}
          
        />
        </Link>
      ));
    }
    return renderValue;
  };

  return (
    <div className="container">
      <section className="commentContainer">{renderComment()}</section>
    </div>
  );
};

export default CommentList;
