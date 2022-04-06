import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { commentCreate } from "./redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    console.log("redux state > ", state);
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
    console.log('comments props >', comments);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit textCommit >", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };
  console.log('comments >>>', comments);
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          required
          value={textComment}
          onChange={handleInput}
        />
        <input type="submit" hidden />
      </form>
      {comments.length > 0 ? (
        <div>
          {comments.map((res) => {
            return <SingleComment key={res.id} data={res} />;
          })}
        </div>
      ) : (
        <div style={{ fontSize: "2rem" }}>Enter your commits</div>
      )}
    </div>
  );
}

export default Comments;
