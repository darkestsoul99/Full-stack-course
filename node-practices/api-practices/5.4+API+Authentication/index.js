import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "berkeko";
const yourPassword = "berkek123";
const yourAPIKey = "79faee86-80a4-42ec-aa8d-6faaed0f8b87";
const yourBearerToken = "960fedf2-2648-4962-872e-a751f74d35a9";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "all?page=2", {
      auth: {
        "username": yourUsername,
        "password": yourPassword
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey      
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: error.message });
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` }
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { content: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
