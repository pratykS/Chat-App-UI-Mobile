import React from "react";
import "./friendList.css";

const FriendsListComponent = (props) => {
  const { list, selectChat } = props;

  const onClickHandler = (e, id) => {
    selectChat(id);
  };

  return (
    <section className="friends-container">
      {list.length > 0
        ? list.map((f) => {
            return (
              <article
                className="profile profile--padding"
                key={f.id}
                onClick={(e) => onClickHandler(e, f.id)}
              >
                <div className="profile__img">
                  <img src={f.picture} alt={f.name} />
                </div>
                <div className="profile__info">
                  <span className="chat-time">{f.latest_timestamp}</span>
                  {f.unseenChat.length > 0 ? (
                    <span className="unseen-chat">{f.unseenChat.length}</span>
                  ) : null}
                  <h3 className="profile__info__name">{f.name}</h3>
                  <p className="profile__info__message">{f.lastChat}</p>
                </div>
              </article>
            );
          })
        : "No results found"}
    </section>
  );
};
export const FriendsList = FriendsListComponent;
