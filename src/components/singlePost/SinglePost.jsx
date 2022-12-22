import { Link } from "react-router-dom";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  // const {id}= useParams();
  // console.log(id);

  const {user}= useContext(Context);
  const location= useLocation();
  const path= location.pathname.split("/")[2];
  const [post, setPost]= useState({});
  const PF = "http://localhost:5000/images/";
  const history= useHistory();

  useEffect(()=>{
    const fetchPost= async ()=>{
      const res= await axios.get("/posts/"+ path);
      setPost(res.data);
    };
    fetchPost();
  },[path])

  const handleDelete= async ()=>{
    try {
      await axios.delete(`/posts/${post._id}`,{
        data:{username: user.username},
      });
      history.push("/");
    } catch (error) {
      
    }
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={PF + post.photo}
          alt=""
        />
        <h1 className="singlePostTitle">
           {post.title}
           {post.username === user?.username && (
             <div className="singlePostEdit">
             <i className="singlePostIcon far fa-edit"></i>
             <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
           </div>
           )}
         
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
