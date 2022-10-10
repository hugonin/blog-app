const express = require("express")
const router = express.Router()
const { getArticles,getArticle, createArticle, updateArticle, deleteArticle} = require("../controllers/articleController")
const { protect } = require("../middleware/authMiddleware")

router.get("/", protect, getArticles)
router.get("/:id", protect, getArticle)
router.post("/", protect, createArticle)
router.put("/:id", protect, updateArticle)
router.delete("/:id", protect, deleteArticle)


module.exports = router

