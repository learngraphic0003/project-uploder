const express = require("express");
const {
    createProject,
    getAllProjects,
    searchProjects,
    updateProject,
    deleteProject,
    getProjectById,
} = require("../controllers/project.controller");
const auth = require("../middlewares/auth.middleware");
const { uploadProjectFiles } = require("../middlewares/multer.middleware");

const router = express.Router();

// 🔹 Create a project (Authenticated users)
router.post("/upload", auth, uploadProjectFiles, createProject);

// 🔹 Get all projects (Public)
router.get("/all", getAllProjects);

// 🔹 Search projects by name (Public)
router.get("/search", searchProjects);

// 🔹 Update a project (Owner/Admin)
router.put("/:id", auth, updateProject);

// 🔹 Delete a project (Owner/Admin)
router.delete("/:id", auth, deleteProject);

// 🔹 Get single project by ID (Admin Access)
router.get("/:id", auth, getProjectById);

module.exports = router;