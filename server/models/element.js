const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ElementSchema = new Schema({
  title: { type: String },
  description: { type: String }
});

ElementSchema.statics.editDescription = (id, description) => {
  const Element = mongoose.model('element');

  return this.findById(id)
    .then(element => {
      const desc = new Element({ description })
      desc.elements.push(desc);
      return Promise.all([desc.save()])
    })
};

module.exports = mongoose.model('element', ElementSchema);