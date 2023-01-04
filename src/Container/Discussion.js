import { useEffect, useState } from "react";
import Comment from "../Components/Comment";
import FullComment from "../Components/FullComment";
import NewComment from "../Components/NewComment";
import { toast } from "react-toastify";
import { getAllComments } from "../services/getAllCommentsService";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // axios
    //   .get("http://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getComments();
  }, []);
  async function getComments() {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      setError(true);
    }
  }
  const selectCommentHandler = (id) => {
    // console.log(id);
    setSelectedId(id);
  };
  const renderComment = () => {
    let renderValue = <p>loading ...</p>;
    if (error) {
      renderValue = <p>fetching data failed !</p>;
      toast.error("comments not found");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };

  return (
    <div className="container">
      <section className="commentContainer">{renderComment()}</section>
      <section className="FullCommentContainer">
        {/* <h3>Full Comment</h3> */}
        <FullComment commentId={selectedId} setComments={setComments} setSelectedId={setSelectedId} />
      </section>
      <section className="newCommentContainer">
        <NewComment setComments={setComments} />
      </section>
    </div>
  );
};

export default Discussion;
