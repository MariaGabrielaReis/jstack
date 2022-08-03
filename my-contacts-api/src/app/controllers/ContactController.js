const ContactRepository = require("../repositories/ContactRepository");
class ContactController {
  async index(request, response) {
    // get all data

    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // get specific data

    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    return !contact
      ? response.status(404).json({ error: "User not found" })
      : response.json(contact);
  }

  async store(request, response) {
    // create new data
    const { name, email, phone, category_id } = request.body;

    if (!name) return response.status(400).json({ error: "Name is required" });

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists)
      return response
        .status(400)
        .json({ error: "This e-mail is already been taken" });

    const newContact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.send(newContact);
  }

  update() {
    // update data
  }

  async delete(request, response) {
    // delete data

    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) return response.status(404).json({ error: "User not found" });

    await ContactRepository.delete(id);
    response.sendStatus(204);
  }
}

// Singleton (unique instance)
module.exports = new ContactController();
