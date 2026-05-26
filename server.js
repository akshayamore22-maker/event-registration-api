const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb://MoreAkshaya:akshu123@ac-d7vzqei-shard-00-00.7y6cuql.mongodb.net:27017,ac-d7vzqei-shard-00-01.7y6cuql.mongodb.net:27017,ac-d7vzqei-shard-00-02.7y6cuql.mongodb.net:27017/?ssl=true&replicaSet=atlas-ze6k6r-shard-0&authSource=admin&appName=Cluster0",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const eventRoutes = require("./routes/eventRoutes");

app.use("/", eventRoutes);

app.get("/", (req, res) => {
  res.send("Event Registration API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
