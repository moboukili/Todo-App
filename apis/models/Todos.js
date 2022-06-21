const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todos = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
  },
  {
    collection: "todo",
  }
);

module.exports = mongoose.model("Todos", Todos);

