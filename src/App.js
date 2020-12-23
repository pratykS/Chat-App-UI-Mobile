import React, { useEffect, useState } from "react";
import { FriendsList, Search, Favourites, Menu, ChatBox } from "./components";
import { getFriends, getChat } from "./services";
import useDebounce from "./utils/debounce";
import "./styles.css";

export default function App() {
  const frlist = getFriends();
  const [value, setValue] = useState("");
  const [list, setList] = useState(frlist);
  const [favourites, setFavourites] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);
  const debouncedText = useDebounce(value, 500);

  useEffect(() => {
    let filteredFrList = frlist;

    if (debouncedText) {
      filteredFrList = filteredFrList.filter(
        (ffl) =>
          ffl.lastChat.toLowerCase().includes(debouncedText.toLowerCase()) ||
          ffl.name.toLowerCase().includes(debouncedText.toLowerCase())
      );
      setList(filteredFrList);
    } else {
      setList(filteredFrList);
    }
  }, [debouncedText, frlist]);

  useEffect(() => {
    let favourites = frlist.filter((l) => l.favourite);
    if (favourites.length > 0) {
      setFavourites(favourites);
    }
  }, [list, frlist]);

  const selectChat = (id) => {
    setChatData(getChat(id));
    setChatVisible(true);
  };

  return (
    <div className="App">
      {!chatVisible ? (
        <>
          <Search value={value} setValue={setValue} />
          <Menu></Menu>
          <Favourites favourites={favourites}></Favourites>
          <FriendsList list={list} selectChat={selectChat} />
        </>
      ) : (
        <ChatBox
          data={chatData}
          goBack={(flag) => {
            setChatVisible(flag);
          }}
        />
      )}
    </div>
  );
}
