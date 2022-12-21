import { Link } from "react-router-dom";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
export default function SinglePost() {
  // const {id}= useParams();
  // console.log(id);
  const location= useLocation();
  const path= location.pathname.split("/")[2];
  const [post, setPost]= useState({});

  useEffect(()=>{
    const fetchPost= async ()=>{
      const res= await axios.get("/posts/"+ path);
      setPost(res.data);
    };
    fetchPost();
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
        <h1 className="singlePostTitle">
           {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
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
