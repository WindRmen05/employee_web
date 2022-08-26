const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
    console.log('uncaughtException', err);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require('./app');

const DB = process.env.MONGODB_DATABASE.replace(
  "<password>",
  process.env.MONGODB_PASS
);

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then((con) => console.log('DB connection successfull'));

const port = process.env.PORT || 3000;
const server = app.listen(port,(req,res) => {
    console.log('App running on port :: '+ process.env.PORT);
});

process.on('unhandledRejection', (err) => {
    console.log(err);
    console.log('Unhandled rejection .... Shutting down');

    server.close(() => {
        process.exit(1);
    });
});