import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
export default function Profile() {
  const[user, setUser]= useState({})
  const {username}= useParams();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const fetchUsers= async()=>{
    const res= await axios.get(`/users?username=${username}`)
    setUser(res.data);
    console.log(res)
      };
    fetchUsers();
  },[])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || PF + "person/NoImage.jpg"}
                
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.coverPicture || PF + "person/user.png"}

                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user/>
          </div>
        </div>
      </div>
    </>
  );
}
