const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AddEmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = AddEmployee = mongoose.model("employee", AddEmployeeSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Schema
// const ItemSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = Item = mongoose.model("item", ItemSchema);
