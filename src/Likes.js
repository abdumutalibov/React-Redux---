import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";
function Likes(props) {
  console.log("render>", props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLike}>💙{props.likes}</button>
      <button onClick={props.onDecrementLike}>{props.dislikes}👎</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { likesReducer } = state;
  return {
    // likes: state.likes,
    // dislikes: state.dislikes,
    likes: likesReducer.likes,
    dislikes: likesReducer.dislikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLike: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLike: () => {
      dispatch(decrementLikes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
