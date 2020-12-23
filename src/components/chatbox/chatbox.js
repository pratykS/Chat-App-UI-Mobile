import React from "react";
import { getFriend } from "../../services/friendslist";
import "./chatbox.css";

const ChatBoxComponent = (props) => {
  const { data, goBack } = props;
  const onClickHandler = () => {
    goBack(false);
  };

  console.log(data);

  const friend = data[0].id ? getFriend(data[0].id) : null;
  return (
    <>
      <div className="chat-header">
        <span onClick={onClickHandler}>
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>
        <span className="friend-name">{friend[0].name}</span>
        <p className="indicator-p">
          <span className={"indicator-text"}>{`${
            friend[0].active ? "Active now" : "Inactive"
          }`}</span>
          <span
            className={`indicator ${friend[0].active ? "active" : "inactive"}`}
          ></span>
        </p>
      </div>

      <div className="msger">
        <div className="msger-chat">
          {data.length > 0 &&
            data[0].message &&
            data[0].message.map((dm) => {
              return (
                <div
                  className={
                    dm.sender === "p1" ? "msg left-msg" : "msg right-msg"
                  }
                  key={Math.random()}
                >
                  <div className="msg-bubble">
                    <div className="msg-text">{dm.text}</div>
                  </div>
                  <div className="msg-info">
                    <small className="msg-info-time">{dm.timestamp}</small>
                  </div>
                </div>
              );
            })}
        </div>
        <form className="msger-inputarea">
          <input
            type="text"
            className="msger-input"
            placeholder="Type Something..."
          />
          {/* <span contentEditable="true" classname="msger-input"></span> */}
          <button type="submit" className="msger-send-btn">
            <i className="far fa-paper-plane fa-2x"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export const ChatBox = ChatBoxComponent;
