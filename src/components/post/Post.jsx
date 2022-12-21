import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {format} from "timeago.js"
import { AuthContext } from "../../context/AuthContext";
export default function Post({ post }) {
  const[user, setUser]= useState({});
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const {user: currentUser}= useContext(AuthContext );
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const fetchPosts= async()=>{
    const res= await axios.get(`/users?userId=${post.userId}`)
    setUser(res.data);
    console.log(res)
    };
    fetchPosts();
  },[post.userId])

  const likeHandler =()=>{
    try {
      axios.put("/posts/" + post._id + "/like", {userId: currentUser._id})
    } catch (error) {
      
    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to ={`/profile/${user.username}`}>
            <img
              className="postProfileImg"
              src={user.profilePicture ? PF + user.profilePicture : PF + "/user.png"}
              alt=""
            />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
             
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={PF + "like.png"} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={PF + "heart.png"} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}


// && if a is false then it returns a but if a is true it evaluates and returns b

// || if a is true then it returns a but if a is false then it return and evaluate b 