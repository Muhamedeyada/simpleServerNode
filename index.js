const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const Article = require("./models/Article");
//iy9aAnuyqaJmtE3u
mongoose
  .connect(
    "mongodb+srv://mohamedayadama:iy9aAnuyqaJmtE3u@cluster99.rtnff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster99"
  )
  .then(() => {
    console.log("connected ");
  })
  .catch((error) => {
    console.log("error", error);
  });
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/mo", (req, res) => {
  res.send("Hellomiooooo, World!");
});
app.post("/addComment", (req, res) => {
  res.send("post request on add comment ");
});
app.put("/momo", (req, res) => {
  res.send("momomo!");
});
app.get("/findSum", (req, res) => {
  console.log(req.body);

  res.send("ffffffff");
});

app.delete("/delete", (req, res) => {
  res.send("Delete");
});

app.post("/articles", async (req, res) => {
  const newArticle = new Article();
  const artTitle = req.body.title;
  const artBody = req.body.articleBody;
  newArticle.title = artTitle;
  newArticle.body = artBody;
  await newArticle.save();

  res.json(newArticle);
});
app.get("/articles/", async (req, res) => {
  const articles = await Article.find();

  res.json(articles);
});

app.get("/articles/:articleId", async (req, res) => {
  const id = req.params.articleId;

  try {
    const article = await Article.findById(id);
    res.json(article);
    return;
  } catch (error) {
    console.log("error , id", id);
  }
});
app.delete("/articles/:articleId", async (req, res) => {
  const id = req.params.articleId;

  try {
    const article = await Article.findByIdAndDelete(id);
    res.json(article);
    return;
  } catch (error) {
    console.log("error , id", id);
  }
});
app.listen(3000, () => {
  console.log("listening");
});
