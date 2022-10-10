const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Article = require("../models/articleModel");

// @desc Get user articles
// @route GET /api/articles
// access Private
const getArticles = asyncHandler(async function (req, res) {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new error("User not found");
  }

  const articles = await Article.find({ user: req.user.id });

  res.status(200).json(articles);
});



// @desc Get user article
// @route GET /api/articles/:id
// access Private
const getArticle = asyncHandler(async function (req, res) {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new error("User not found");
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }

  if (article.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  res.status(200).json(article);
});

// @desc Create a new article
// @route POST /api/articles
// access Private
const createArticle = asyncHandler(async function (req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error("Please add a title and content");
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new error("User not found");
  }

  const article = await Article.create({
    title,
    content,
    user: req.user.id,
    status: "new",
  });

  res.status(201).json(article);
});

// @desc Delete article
// @route DELETE /api/articles/:id
// access Private
const deleteArticle = asyncHandler(async function (req, res) {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new error("User not found");
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }

  if (article.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  await article.remove();

  res.status(200).json({ success: true });
});

// @desc Update article
// @route UPDATE /api/articles/:id
// access Private
const updateArticle = asyncHandler(async function (req, res) {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new error("User not found");
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    res.status(404);
    throw new Error("Article not found");
  }

  if (article.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedArticle);
});

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
};
