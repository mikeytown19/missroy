export default {
  name: "column",
  title: "Column",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      title: "Justify Block",
      name: "justifyBlock",
      type: "string",
      options: {
        list: [
          { title: "start", value: "start" },
          { title: "center", value: "center" },
          { title: "end", value: "end" },
        ], // <-- predefined values
      },
    },

    { name: "body", title: "Body", type: "blockContent" },
  ],
};
