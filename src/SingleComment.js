import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {commentDelete, commentUpdate} from './redux/actions'
function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;
const dispatch = useDispatch()
const handleUpdate=(e)=>{
    e.preventDefault();
    console.log('submit =>', commentText);
    dispatch(commentUpdate(commentText, id))
}

const handleDelete=(e)=>{
e.preventDefault();
dispatch(commentDelete(id))
}
  useEffect(()=>{
      if(text){
          setCommentText(text)
      }
  },[text])

  const handleInput = (e) =>{
      setCommentText(e.target.value)
      
  }
  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
          <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="24px" 
    viewBox="0 0 24 24" 
    width="24px" 
    fill="#463">
    <circle cx="12" cy="12" r="8" fill="#ffffff"/>
    <path 
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>
</div>
      <input type="text" value={commentText} onChange={handleInput}/>
      <input type='submit' hidden />
    </form>
  );
}

export default SingleComment;
// &Omicron;