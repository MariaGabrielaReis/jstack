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
        .json({ error: "This e-mail is already in use" });

    const newContact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.send(newContact);
  }

  async update(request, response) {
    // update data

    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExistsById = await ContactRepository.findById(id);
    if (!contactExistsById)
      return response.status(400).json({ error: "User not found" });

    if (!name) return response.status(400).json({ error: "Name is required" });

    const contactExistsByEmail = await ContactRepository.findByEmail(email);
    if (contactExistsByEmail && contactExistsByEmail.id !== id)
      return response
        .status(400)
        .json({ error: "This e-mail is already in use" });

    const updatedContact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(updatedContact);
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
