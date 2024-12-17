const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const upload = require("../config/multer");

router.get("/", newsController.getAllNews);
router.post("/", upload.fields([{ name: "logo" }, { name: "thumbnail" }]), newsController.addNews);
router.put("/:id", upload.fields([{ name: "logo" }, { name: "thumbnail" }]), newsController.updateNews);
router.delete("/:id", newsController.deleteNews);


module.exports = router;
