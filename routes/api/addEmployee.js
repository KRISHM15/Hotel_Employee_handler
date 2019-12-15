const express = require("express");
const router = express.Router();

// AddEmployee model
const AddEmployee = require("../../models/AddEmployee");

// @route GET api/items
//  @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  AddEmployee.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false }));
});
// @route GET api/items
//  @desc Get All Items  based upon Highest salary
// @access Public
router.get("/highsal", (req, res) => {
  AddEmployee.find()
    .sort({ salary: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false }));
});

// @route GET api/items
//  @desc Get All the avg salary of type [0 / senior]
// @access Public
router.get("/senior", (req, res) => {
  AddEmployee.aggregate([
    { $match: { Type: "senior" } },
    { $group: { _id: "$Type", salary_average: { $avg: "$salary" } } }
  ])
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false }));
});

// @route POST api/items
//  @des Create a Item
// @access Public
router.post("/", (req, res) => {
  const Employee = new AddEmployee({
    name: req.body.name,
    salary: req.body.salary,
    Type: req.body.Type
  });

  Employee.save().then(item => res.json(item));
});

module.exports = router;
