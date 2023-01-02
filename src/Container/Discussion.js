import { useEffect, useState } from "react";
import Comment from "../Components/Comment";
import FullComment from "../Components/FullComment";
import NewComment from "../Components/NewComment";
import axios from "axios";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    async function getComments() {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/comments"
        );
        setComments(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    }
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

  const selectCommentHandler = (id) => {
    // console.log(id);
    setSelectedId(id);
  };

  return (
    <div className="container">
      <section className="commentContainer">
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>loading ...</p>
        )}
      </section>
      <section className="FullCommentContainer">
        {/* <h3>Full Comment</h3> */}
        <FullComment commentId={selectedId} />
      </section>
      <section className="newCommentContainer">
        <NewComment />
      </section>
    </div>
  );
};

export default Discussion;
