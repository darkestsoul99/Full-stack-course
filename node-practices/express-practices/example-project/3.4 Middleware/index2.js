import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("tiny")); // log requests to the console

// parse incoming requests data (https://github.com/expressjs/body-parser)
//   this middleware is for parsing JSON, URL-encoded, and multipart/form-data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
