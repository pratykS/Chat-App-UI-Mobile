import React from "react";
import "./avatar.css";
const AvatarComponent = (props) => {
  const { image, name } = props;
  return <img src={image} alt={name} className="avatar-img" />;
};

export const Avatar = AvatarComponent;
