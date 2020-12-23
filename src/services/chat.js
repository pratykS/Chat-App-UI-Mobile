const chatData = [
  {
    id: 1,
    message: [
      {
        text: "Hi, this is Alex 😀",
        timestamp: "12.45",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p1"
      },
      {
        text: "Hello 😀",
        timestamp: "12.46",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p2"
      },
      {
        text: "Not sure",
        timestamp: "12.45",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p1"
      },
      {
        text:
          "Or maybe not, let me check logistics and call 🤙 you. Give me sometime",
        timestamp: "12.45",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p1"
      },
      {
        text: "no problem",
        timestamp: "12.46",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p2"
      },
      {
        text: "whenever you have it ready please send it across 👍",
        timestamp: "12.46",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p2"
      }
    ]
  },
  {
    id: 2,
    message: [
      {
        text: "Hi, this is me Bob",
        timestamp: "2.05",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p1"
      },
      {
        text: "Hello Bob , long time no see !",
        timestamp: "2.46",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p2"
      }
    ]
  },
  {
    id: 3,
    message: [
      {
        text: "Hi, how are you doing today ?",
        timestamp: "1.01",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p1"
      },
      {
        text: "I am doing good , thanks",
        timestamp: "1.09",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p2"
      },
      {
        text: "how about you ?",
        timestamp: "1.09",
        read: false,
        type: "text",
        attachments: [{ attachmentType: "Picture", ref: "url" }],
        sender: "p2"
      }
    ]
  }
];

const getChatById = (id) => {
  const chats = chatData.filter((cd) => cd.id === id);
  return chats.length > 0 ? chats : [{ id: id, message: [] }];
};

export const getChat = getChatById;
