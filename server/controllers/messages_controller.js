let messages = [
  {
    id: 0,
    text: "Hello World",
    time: 1200
  },
  {
    id: 1,
    text: "So original",
    time: 1201
  },
  {
    id: 2,
    text: "Gaaaaah!",
    time: 1203
  }
];
let messageId = 3;

module.exports = {
  // POST
  create: (req, res) => {
    let {text, time} = req.body;
    let newMessage = {
      id: messageId,
      text: text,
      time: time
    };
    messageId++;

    messages.push(newMessage);
    res.status(200).send(messages);
  },

  // GET
  read: (req, res) => {
    res.status(200).send(messages);
  },

  // PUT
  update: (req, res) => {
    const { text } = req.body;
    const id = req.params.id;
    const index = messages.findIndex(message => message.id == id);

    messages[index].text = text;
    res.status(200).send(messages);
  },

  // DELETE
  delete: (req, res) => {
    const index = messages.findIndex(message => message.id == req.params.id);
    messages.splice(index, 1);

    res.status(200).send(messages);
  }
}