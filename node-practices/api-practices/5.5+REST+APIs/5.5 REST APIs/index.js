import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "960fedf2-2648-4962-872e-a751f74d35a9";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  const secret = req.body.secret;
  const score = req.body.score;
  try {
    const result = await axios.post(API_URL + "/secrets", {
      secret: secret,
      emScore: score
    },config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  try {
    const result = await axios.put(API_URL + "/secrets", {
      id: searchId,
      secret: secret,
      emScore: score
    }, config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch {
    res.render("index.ejs", {content: JSON.stringify(error.response.data)});
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;
  try {
    const result = await axios.put(API_URL + "/secrets", {
      id: searchId,
      secret: secret,
      emScore: score
    }, config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch {
    res.render("index.ejs", {content: JSON.stringify(error.response.data)});
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.put(API_URL + "/secrets", {
      id: searchId
    }, config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch {
    res.render("index.ejs", {content: JSON.stringify(error.response.data)});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});