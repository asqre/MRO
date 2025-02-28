import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { FiUploadCloud, FiPaperclip, FiInfo, FiCheck, FiX } from "react-icons/fi";

const CreateServiceRequest = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    secondaryName: "",
    secondaryEmail: "",
    secondaryPhone: "",
    aircraftDetails: "",
    aircraftRegNo: "",
    copyingDetails: false,
    additionalDetails: ""
  });

  // Sample request data for the table
  const requestData = [
    {
      reqNo: "REQ-2025-001",
      submissionDate: "24-02-2025",
      aircraftReg: "N12345",
      status: "Pending",
      queue: "Technical",
      hasDownload: true
    },
    {
      reqNo: "REQ-2025-002",
      submissionDate: "22-02-2025",
      aircraftReg: "G-ABCD",
      status: "In Progress",
      queue: "Parts",
      hasDownload: true
    },
    {
      reqNo: "REQ-2025-003",
      submissionDate: "18-02-2025",
      aircraftReg: "N67890",
      status: "Completed",
      queue: "Documentation",
      hasDownload: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Files:", files);
    setShowSuccessPopup(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
      // Optionally reset form
      // setFormData({...})
      // setFiles([])
    }, 3000);
  };

  return (
    <Layout>
      <div className="bg-white overflow-hidden mt-[67px]">
        <div className="p-5 max-w-6xl mx-auto">
          <div className="text-2xl font-semibold mb-6">Create New Service Request</div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                {/* Document Upload Section */}
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 text-center bg-gray-50"
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOver}
                >
                  <FiUploadCloud className="mx-auto text-gray-400 text-4xl mb-3" />
                  <p className="font-semibold mb-2">Drag & Drop Documents or Browse</p>
                  <p className="text-sm text-gray-500 mb-4">Upload relevant documentation for this service request</p>
                  <input 
                    type="file" 
                    id="fileUpload" 
                    multiple 
                    className="hidden" 
                    onChange={handleFileSelect}
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById("fileUpload").click()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                  >
                    Browse Files
                  </button>
                </div>

                {/* Files List */}
                {files.length > 0 && (
                  <div className="mb-6">
                    <p className="font-semibold text-sm mb-2">Attached Files:</p>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border">
                          <div className="flex items-center">
                            <FiPaperclip className="text-gray-500 mr-2" />
                            <span className="text-sm truncate max-w-xs">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FiX />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Aircraft Details */}
                <div className="mb-6">
                  <div className="font-semibold text-base mb-3">Aircraft Details</div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Aircraft Details
                      </label>
                      <input
                        type="text"
                        name="aircraftDetails"
                        value={formData.aircraftDetails}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Aircraft type, model, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Aircraft Registration Number
                      </label>
                      <input
                        type="text"
                        name="aircraftRegNo"
                        value={formData.aircraftRegNo}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. N12345"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Request Summary */}
                <div className="mb-6">
                  <div className="font-semibold text-base mb-3">Request Summary & Additional Details</div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the service required, issues, etc."
                    ></textarea>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mb-6">
                  <div className="font-semibold text-base mb-3">Contact Details</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Secondary Name
                      </label>
                      <input
                        type="text"
                        name="secondaryName"
                        value={formData.secondaryName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Secondary Email
                      </label>
                      <input
                        type="email"
                        name="secondaryEmail"
                        value={formData.secondaryEmail}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Secondary Phone
                      </label>
                      <input
                        type="tel"
                        name="secondaryPhone"
                        value={formData.secondaryPhone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Copying Details */}
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input
                        id="copyingDetails"
                        name="copyingDetails"
                        type="checkbox"
                        checked={formData.copyingDetails}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <label htmlFor="copyingDetails" className="ml-2 block text-sm text-gray-700">
                        Copying Details
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors duration-200"
                  >
                    Submit Request
                  </button>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    Note: Additional fields may be added after testing to CMP
                  </p>
                </div>
              </div>
            </div>
          </form>

          {/* Recent Requests Table */}
          <div className="mt-8">
            <div className="font-semibold text-base mb-4">Recent Service Requests</div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Req No
                    </th>
                    <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submission Date
                    </th>
                    <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aircraft Reg No
                    </th>
                    <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Queue
                    </th>
                    <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {requestData.map((request, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 text-sm">{request.reqNo}</td>
                      <td className="py-2 px-4 text-sm">{request.submissionDate}</td>
                      <td className="py-2 px-4 text-sm">{request.aircraftReg}</td>
                      <td className="py-2 px-4">
                        <span 
                          className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                            request.status === "Completed" 
                              ? "bg-green-100 text-green-800"
                              : request.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="py-2 px-4 text-sm">{request.queue}</td>
                      <td className="py-2 px-4 text-sm">
                        {request.hasDownload && (
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            Download
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <FiCheck className="text-green-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Thank you!</h3>
            <p className="text-center text-gray-600 mb-4">
              Your request was submitted successfully.
            </p>
            <p className="text-center text-sm text-gray-500 mb-4">
              Request ID: REQ-2025-004
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CreateServiceRequest;