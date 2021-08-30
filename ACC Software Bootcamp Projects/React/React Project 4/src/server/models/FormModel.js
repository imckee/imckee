const mongoose = require('mongoose')

let formSchema = mongoose.Schema({
  fname: {
      type: String,
      required: [true, "Must have a first name."],
  },
  lname: {
      type: String,
      required: [true, "Must have a last name."],
  },
  email: {
      type: String,
      required: [true, "Must have an email."],
  },
  phone: String,
  message: {
      type: String,
      default: "No message submitted",
  },
});

module.exports.FormModel = mongoose.model("Form", formSchema);