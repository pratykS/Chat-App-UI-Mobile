const friendslist = [
  {
    id: 1,
    name: "Alex",
    picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
    latest_timestamp: "just now",
    lastChat:
      "Or maybe not, let me check logistics and call you. Give me sometime",
    unseenChat: [
      { message: "ok", timestamp: "12.03" },
      { message: "let", timestamp: "12.02" },
      { message: "me", timestamp: "12.02" },
      { message: "check", timestamp: "12.01" },
      { message: "ok", timestamp: "12.03" },
      { message: "let", timestamp: "12.02" },
      { message: "me", timestamp: "12.02" },
      { message: "check", timestamp: "12.01" },
      { message: "ok", timestamp: "12.03" },
      { message: "let", timestamp: "12.02" },
      { message: "me", timestamp: "12.02" },
      { message: "check", timestamp: "12.01" }
    ],
    favourite: true,
    active: true
  },
  {
    id: 2,
    name: "Katie",
    picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
    latest_timestamp: "12:12",
    lastChat: "nothing",
    unseenChat: [],
    favourite: false,
    active: false
  },
  {
    id: 3,
    name: "Bob",
    picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
    latest_timestamp: "12:30",
    lastChat: "Alright",
    unseenChat: [
      { message: "ok", timestamp: "12.03" },
      { message: "let", timestamp: "12.02" },
      { message: "me", timestamp: "12.02" },
      { message: "check", timestamp: "12.01" }
    ],
    favourite: true,
    active: false
  },
  {
    id: 4,
    name: "Luke",
    picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
    latest_timestamp: "14:12",
    lastChat: "I will look into it",
    unseenChat: [
      { message: "ok", timestamp: "12.03" },
      { message: "let", timestamp: "12.02" },
      { message: "me", timestamp: "12.02" }
    ],
    favourite: false,
    active: true
  },
  {
    id: 5,
    name: "Bane",
    picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
    latest_timestamp: "17:53",
    lastChat: "Exactly my point!",
    unseenChat: [],
    favourite: false,
    active: false
  },
  {
    id: 6,
    name: "Darth Vader",
    picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
    latest_timestamp: "1:09",
    lastChat: "Not quite the same.",
    unseenChat: [],
    favourite: false,
    active: false
  },
  {
    id: 7,
    name: "Zach",
    picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
    latest_timestamp: "Yesterday",
    lastChat: "I thought that the event was over long ago",
    unseenChat: [],
    favourite: false,
    active: false
  },
  {
    id: 8,
    name: "Chloe",
    picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
    latest_timestamp: "Wednesday",
    lastChat: "sure i'll take it from you",
    unseenChat: [],
    favourite: true,
    active: false
  },
  {
    id: 9,
    name: "Kennith",
    picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
    latest_timestamp: "Wednesday",
    lastChat: "Take care, bye",
    unseenChat: [],
    favourite: false,
    active: true
  },
  {
    id: 10,
    name: "Tara",
    picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
    latest_timestamp: "Monday",
    lastChat: "Not today",
    unseenChat: [],
    favourite: true,
    active: true
  },
  {
    id: 11,
    name: "Gary",
    picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
    latest_timestamp: "Sunday",
    lastChat: "Whatever works for you!",
    unseenChat: [],
    favourite: false,
    active: true
  },
  {
    id: 12,
    name: "Zoey",
    picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
    latest_timestamp: "8/12/2017",
    lastChat: "Will get in touch",
    unseenChat: [],
    favourite: true,
    active: true
  },
  {
    id: 13,
    name: "Ash",
    picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
    latest_timestamp: "6/12/2017",
    lastChat: "Ok",
    unseenChat: [],
    favourite: false,
    active: false
  },
  {
    id: 14,
    name: "Zen",
    picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
    latest_timestamp: "19/11/2017",
    lastChat: "Lol",
    unseenChat: [],
    favourite: false,
    active: false
  }
];

const getFriendsList = () => {
  return friendslist;
};

const getFriendById = (id) => {
  return friendslist.filter((f) => f.id === id);
};

export const getFriends = getFriendsList;
export const getFriend = getFriendById;
