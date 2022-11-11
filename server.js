const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST = 'mongodb+srv://antonyzaychenko:Vagazo721adzhantis1@cluster0.3fxrhmh.mongodb.net/?retryWrites=true&w=majority', PORT = 8083 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Database connection successful`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
