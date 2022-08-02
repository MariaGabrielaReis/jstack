const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Maby",
    email: "maby@gmail.com",
    phone: "12999999999",
    category: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
