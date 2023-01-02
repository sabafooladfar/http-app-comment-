const Comment = ({ name, email, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>
        <b>name</b> : {name}
      </p>
      <p>
        <b>email</b> : {email}
      </p>
    </div>
  );
};

export default Comment;
