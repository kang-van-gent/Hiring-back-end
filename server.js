const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("Cannot connect to DB", err);
  });
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Listening to request on port ${port}`);
});
