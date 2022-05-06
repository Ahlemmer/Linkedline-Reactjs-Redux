import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [post, setpost] = useState([]);
  const [input, setinput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    const database = collection(db, "Post");
    const q = query(database, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setpost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => unsub();
  }, []);
  const sendpost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "Post"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photourl: user.Photoprofil || "",
      timestamp: Timestamp.fromDate(new Date()),
    });
    setinput("");
  };
  console.log(user.name);
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
            />
            <button onClick={sendpost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {post.map(({ id, data: { name, description, message, photourl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              messsage={message}
              photoUrl={photourl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
