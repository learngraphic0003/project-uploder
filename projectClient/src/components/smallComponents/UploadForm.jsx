import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../index.css";
import { UploadCloud } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadForm = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput('');
      toast.success('Tag added successfully!');
    } else if (tags.includes(trimmed)) {
      toast.warning('Tag already exists!');
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter(t => t !== tag));
    toast.info('Tag removed');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!status || !category) {
      toast.error('Please select status and category');
      return;
    }

    toast.success('Form submitted successfully!');
    // Add your form submit logic here
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-[92%] sm:w-[80%] lg:w-[55%] mx-auto bg-white-opacity rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Upload Your Project</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="text" placeholder="Project Name" className="form-input" />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-input text-base"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

            {status && (
              <p className={`text-sm font-medium mt-1 ${status === 'Pending' ? 'text-red-600' : 'text-green-600'}`}>
                Status: {status}
              </p>
            )}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-input text-base"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Other">Other</option>
            </select>

            <textarea placeholder="Project Description" className="form-input h-28 resize-none" />
          </div>

          {/* Upload Cards */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <label className="upload-card">
              <UploadCloud size={34} className="text-indigo-500" />
              <p className="text-sm mt-2">Upload Image</p>
              <input type="file" accept="image/*" hidden />
            </label>

            <label className="upload-card">
              <UploadCloud size={34} className="text-indigo-500" />
              <p className="text-sm mt-2">Upload Video</p>
              <input type="file" accept="video/*" hidden />
            </label>

            <label className="upload-card">
              <UploadCloud size={34} className="text-indigo-500" />
              <p className="text-sm mt-2">Upload Files</p>
              <input type="file" accept=".zip,.pdf,.doc,.docx" hidden />
            </label>
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Enter tag"
                className="form-input flex-grow"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-indigo-200"
                  onClick={() => removeTag(tag)}
                >
                  {tag} ✕
                </span>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
