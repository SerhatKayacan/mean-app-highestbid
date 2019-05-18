const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");

// GET api/items
router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

// POST api/items
/*
router.post("/", (req, res) => {
  const newItem = new Item({
    number: req.body.number
  });
  newItem.save().then(item => res.json(item));
});
*/

//PUT api/items/:id
router.put("/:id", function(req, res, next) {
  Item.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      Item.findOne({ _id: req.params.id }).then(function(ninja) {
        res.send(ninja);
      });
    })
    .catch(next);
});

module.exports = router;
