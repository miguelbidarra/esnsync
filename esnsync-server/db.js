const mongoose = require("mongoose");


module.exports.connection = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB", error);
    });
};
