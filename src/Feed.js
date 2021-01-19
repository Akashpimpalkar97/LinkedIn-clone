import CreateIcon from "@material-ui/icons/Create";
import React, { useEffect, useState } from "react";
import "./feed.css";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import DuoIcon from "@material-ui/icons/Duo";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Post } from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={DuoIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventIcon} title="Event" color="#A0B4B7" />
          <InputOption
            Icon={AssignmentIcon}
            title="Write Article"
            color="#F5987E"
          />
        </div>
        <FlipMove>
          {post.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feed;
