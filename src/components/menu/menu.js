import React from "react";
import "./menu.css";

const MenuComponent = () => {
  return (
    <section>
      <div className="menu">
        <a href="#messages">Messages</a>
        <a href="#calls" style={{ color: "gainsboro" }}>
          Calls
        </a>
        <a href="#groups" style={{ color: "gainsboro" }}>
          Groups
        </a>
      </div>
    </section>
  );
};
export const Menu = MenuComponent;
