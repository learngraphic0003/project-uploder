const Project = require("../models/project.model");
const User = require("../models/user.model");

// 🔹 Create Project
exports.createProject = async (req, res) => {
    try {
        const { project_name, status, category, tags, description } = req.body;
        const { image, video, file } = req.files;

        const project = new Project({
            project_name,
            image: image ? image[0].path : null,
            video: video ? video[0].path : null,
            file: file ? file[0].path : null,
            status,
            category,
            tags: tags.split(","),
            description,
            createdBy: req.user.userId,
        });

        await project.save();
        res.status(201).json({ message: "✅ Project uploaded successfully", project });
    } catch (error) {
        res.status(500).json({ message: "❌ Error: " + error.message });
    }
};

// 🔹 Get All Projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate("createdBy", "email");
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "❌ Error: " + error.message });
    }
};

// 🔹 Search Projects by project_name
exports.searchProjects = async (req, res) => {
    try {
        const { project_name, tags } = req.query;

        const projects = await Project.find({
          $or: [
            { project_name: { $regex: project_name || '', $options: 'i' } },
            { tags: { $regex: tags || '', $options: 'i' } }
          ]
        });
        
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "❌ Error: " + error.message });
    }
};

// 🔹 Update Project (Only Owner or Admin)
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "❌ Project not found" });

        if (req.user.userId !== project.createdBy.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: "⛔ Access Denied" });
        }

        const { project_name, status, category, tags, description } = req.body;
        project.project_name = project_name || project.project_name;
        project.status = status || project.status;
        project.category = category || project.category;
        project.tags = tags ? tags.split(",") : project.tags;
        project.description = description || project.description;

        await project.save();
        res.json({ message: "✅ Project updated successfully", project });
    } catch (error) {
        res.status(500).json({ message: "❌ Error: " + error.message });
    }
};

// 🔹 Delete Project (Only Owner or Admin)
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "❌ Project not found" });

        if (req.user.userId !== project.createdBy.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: "⛔ Access Denied" });
        }

        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "✅ Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "❌ Error: " + error.message });
    }
};

// 🔹 Get Single Project (Admin Access)
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("createdBy", "email");
        if (!project) return res.status(404).json({ message: "❌ Project not found" });

        res.json(project);
    } catch (error) {
        res.status(500).json({ message: "❌ Error: " + error.message });
    }
};