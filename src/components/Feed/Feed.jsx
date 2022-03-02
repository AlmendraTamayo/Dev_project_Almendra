import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { cta } from "../../helpers/button-cta";
import { firestore } from "../../firebase/firebase";
import { sortPostsList } from "../../helpers/sortPostsList";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import PostContent from "../PostContent/PostContent";

import "./feed.css";

function Feed() {
  const { user, postsList, loggedUsers } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const infoUser = loggedUsers
    .filter((logged) => logged.uid === user.uid)
    .map((user) => {
      return {
        color: user.color,
        photo: user.photo,
      };
    });

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  const addPost = () => {
    const authorPost = loggedUsers.filter((logged) => logged.uid === user.uid);

    authorPost.map((author) =>
      firestore.collection("posts").add({
        authorColor: author.color,
        authorEmail: author.email,
        authorNickname: author.nickname,
        authorPhoto: author.photo,
        authorUid: author.uid,
        date: new Date(),
        likes: [],
        message: message,
      })
    );

    setMessage("");
  };

  sortPostsList(postsList);

  return (
    <>
      <header className="feed__header">
        <Link to={"/profile"}>
          {infoUser.map((info) => (
            <Avatar
              borderColor={info.color}
              classNameImg="avatar__feed"
              key={info.photo}
              src={info.photo}
            />
          ))}
        </Link>

        <Logo
          classNameContainer="logo__horizontal"
          classNameLogo="logo__horizontal-logotype"
          classNameNaming="logo__horizontal-naming"
        />
      </header>

      <main>
        <section className="feed__main-section">
          {infoUser.map((info) => (
            <Avatar
              src={info.photo}
              classNameImg="avatar__feed-input"
              key={info.photo}
            />
          ))}

          <div className="feed__main-div">
            <textarea
              className="feed__main-textarea"
              maxLength="200"
              onChange={getMessage}
              placeholder="What’s happening?"
              value={message}
            ></textarea>

            <div className="feed__main-counter">
              <div
                className="feed__main-progressBar"
                style={{ width: `${message.length / 2}%` }}
              ></div>

              <p className="feed__main-count">
                <span>{message.length}</span>
                <span>200 max.</span>
              </p>
            </div>

            <Button
              classNameBtn={"button_post"}
              cta={cta.post}
              handle={addPost}
            />
          </div>
        </section>

        {postsList.map((post) => (
          <PostContent
            authorUid={post.authorUid}
            color={post.authorColor}
            key={post.id}
            message={post.message}
            nickname={post.authorNickname}
            photo={post.authorPhoto}
            postId={post.id}
            email={post.authorEmail}
          />
        ))}
      </main>
    </>
  );
}

export default Feed;
