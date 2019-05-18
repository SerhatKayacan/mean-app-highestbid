const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
const app = express();
app.use(bodyParser.json());
const db = require("./config/keys").mongoURL;
mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));
app.use("/api/items", items);
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
