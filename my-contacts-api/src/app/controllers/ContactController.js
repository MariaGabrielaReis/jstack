const ContactRepository = require("../repositories/ContactRepository");
class ContactController {
  async index(request, response) {
    // get all data

    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  show() {
    // get specific data
  }

  store() {
    // create new data
  }

  update() {
    // update data
  }

  delete() {
    // delete data
  }
}

// Singleton (unique instance)
module.exports = new ContactController();
