const express = require("express");
const { register, login, forgotPassword, resetPassword } = require("../controllers/user.controller");
const { uploadAvatar } = require("../middlewares/multer.middleware"); // ✅ Fix: Correct Import

const router = express.Router();

router.post("/register", uploadAvatar, register); // ✅ Fix: Use `uploadAvatar` instead of `upload.single("avatar")`
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
