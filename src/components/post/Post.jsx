import { Link } from "react-router-dom";
import "./post.css";
import {format} from "timeago.js";
import { useParams } from "react-router-dom";
export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
         <img
         className="postImg"
         src={PF + post.photo}
         alt=""
       />
      )}
     
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category)=>(
            <span key={category} className="postCat">
             {category}
           </span>
          ))}
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              
            </Link>
            {post.categories}
          </span>
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{format(post.createdAt)}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}
