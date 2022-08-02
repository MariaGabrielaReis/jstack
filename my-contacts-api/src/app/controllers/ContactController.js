class ContactController {
  index(request, response) {
    // get all data
    response.send("Send from Contact Controller");
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
