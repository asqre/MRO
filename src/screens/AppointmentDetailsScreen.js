import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { FiCalendar, FiClock, FiFileText, FiMessageSquare, FiDownload, FiDollarSign, FiTruck, FiAlertCircle } from "react-icons/fi";

const AppointmentDetailsScreen = () => {
  const [showDocumentHistory, setShowDocumentHistory] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);
  const [showPlanPopup, setShowPlanPopup] = useState(false);
  const [showBillingPopup, setShowBillingPopup] = useState(false);
  const [showAIQuestions, setShowAIQuestions] = useState(false);
  const [selectedReqId, setSelectedReqId] = useState("REQ-2025-004");
  
  // Sample appointment data - this would come from your API in a real app
  const appointmentData = {
    requestId: "REQ-2025-004",
    proposedDate: "March 15, 2025",
    additionalDetails: "Annual inspection and maintenance for aircraft systems. Replace worn components as identified in previous service report.",
    aircraftRegNum: "N12345",
    communicationChannel: "Email & Phone",
    contractDocument: "Annual-Service-Contract-2025.pdf",
    allocationDate: "March 10, 2025",
    currentStatus: "Scheduled",
    deliveryStatus: "Parts in Transit"
  };

  // Sample document history
  const documentHistory = [
    { name: "Initial Service Request", date: "Feb 25, 2025", user: "John Smith" },
    { name: "Annual-Service-Contract-2025.pdf", date: "Feb 27, 2025", user: "System" },
    { name: "Parts Order Confirmation", date: "Mar 01, 2025", user: "Sarah Johnson" },
    { name: "Compliance Documentation", date: "Mar 03, 2025", user: "Technical Team" }
  ];

  // AI generated questions
  const aiQuestions = [
    { id: 1, question: "Are there any specific issues with your aircraft's performance?" },
    { id: 2, question: "Do you have any preferred maintenance timeframes or flight routes?" }
  ];

  const handleReqIdChange = (e) => {
    setSelectedReqId(e.target.value);
  };

  const handleAIQuestionSubmit = (e) => {
    e.preventDefault();
    // Process AI question responses
    alert("Your responses have been saved!");
    setShowAIQuestions(false);
  };

  return (
    <Layout>
      <div className="bg-white overflow-hidden mt-[67px]">
        <div className="p-5 max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="text-2xl font-semibold mb-4">Appointment Details</div>
            
            {/* Request ID and Date Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Request ID
                </label>
                <div className="relative">
                  <select
                    value={selectedReqId}
                    onChange={handleReqIdChange}
                    className="w-full p-2 border border-gray-300 rounded appearance-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="REQ-2025-004">REQ-2025-004</option>
                    <option value="REQ-2025-003">REQ-2025-003</option>
                    <option value="REQ-2025-002">REQ-2025-002</option>
                    <option value="REQ-2025-001">REQ-2025-001</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proposed Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={appointmentData.proposedDate}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <FiCalendar />
                  </div>
                </div>
              </div>
            </div>

            {/* Request Summary */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="text-lg font-medium mb-2">Request Summary</div>
              <p className="text-gray-700">{appointmentData.additionalDetails}</p>
            </div>

            {/* AI Generated Questions */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setShowAIQuestions(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200 flex items-center"
              >
                <FiAlertCircle className="mr-2" />
                AI Generated Questions
              </button>
            </div>

            {/* Appointment Details Table */}
            <div className="overflow-hidden border border-gray-200 rounded-lg mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Appointment ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aircraft Reg Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Communication Channel
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contract Document
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Allocation Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{appointmentData.requestId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointmentData.aircraftRegNum}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointmentData.communicationChannel}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        onClick={() => setShowDocumentHistory(true)}
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <FiFileText className="mr-1" />
                        {appointmentData.contractDocument}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointmentData.allocationDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div 
                        onClick={() => {}}
                        className="cursor-pointer"
                      >
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {appointmentData.currentStatus}
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Delivery Status */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <FiTruck className="mr-1" />
                  Delivery Status: {appointmentData.deliveryStatus}
                </span>
                <button 
                  onClick={() => setShowDeliveryDetails(true)}
                  className="ml-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </button>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowPlanPopup(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200 text-sm"
                >
                  View Plan
                </button>
                <button 
                  onClick={() => setShowBillingPopup(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200 text-sm flex items-center"
                >
                  <FiDollarSign className="mr-1" />
                  Billing Details
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors duration-200"
              >
                Submit Button
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Document History Popup */}
      {showDocumentHistory && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowDocumentHistory(false)}></div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Document History</h3>
              <button 
                onClick={() => setShowDocumentHistory(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <div className="space-y-3">
                {documentHistory.map((doc, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">{doc.name}</div>
                      <div className="text-xs text-gray-500">Added by: {doc.user}</div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">{doc.date}</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <FiDownload />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delivery Details Popup */}
      {showDeliveryDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowDeliveryDetails(false)}></div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Delivery Details</h3>
              <button 
                onClick={() => setShowDeliveryDetails(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-500">Tracking Number</div>
                <div className="text-base">TRK-98765432</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Estimated Arrival</div>
                <div className="text-base">March 8, 2025</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Status</div>
                <div className="text-base text-blue-600">In Transit</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Parts Included</div>
                <ul className="list-disc pl-5 text-sm">
                  <li>Hydraulic system components</li>
                  <li>Electrical wiring harness</li>
                  <li>Navigation system updates</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowDeliveryDetails(false)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Plan Popup */}
      {showPlanPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowPlanPopup(false)}></div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Maintenance Plan</h3>
              <button 
                onClick={() => setShowPlanPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <div className="font-medium">Pre-Inspection</div>
                <div className="text-sm text-gray-600">March 15, 9:00 AM - 11:00 AM</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <div className="font-medium">Systems Maintenance</div>
                <div className="text-sm text-gray-600">March 15, 11:00 AM - 3:00 PM</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <div className="font-medium">Component Replacement</div>
                <div className="text-sm text-gray-600">March 16, 9:00 AM - 2:00 PM</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <div className="font-medium">Testing & Quality Assurance</div>
                <div className="text-sm text-gray-600">March 16, 2:00 PM - 5:00 PM</div>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowPlanPopup(false)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Billing Popup */}
      {showBillingPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowBillingPopup(false)}></div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Billing Details</h3>
              <button 
                onClick={() => setShowBillingPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <div className="text-sm font-medium">Service Fee</div>
                <div className="text-sm">$2,500.00</div>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div className="text-sm font-medium">Parts</div>
                <div className="text-sm">$1,850.00</div>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div className="text-sm font-medium">Labor (16 hours)</div>
                <div className="text-sm">$1,600.00</div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="text-base font-semibold">Total</div>
                <div className="text-base font-semibold">$5,950.00</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <button
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <FiDollarSign className="mr-1" />
                Pay Now
              </button>
              <button
                onClick={() => setShowBillingPopup(false)}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Questions Popup */}
      {showAIQuestions && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowAIQuestions(false)}></div>
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-lg w-full z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">AI Generated Questions</h3>
              <button 
                onClick={() => setShowAIQuestions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleAIQuestionSubmit}>
              <div className="space-y-4 mb-6">
                {aiQuestions.map((q) => (
                  <div key={q.id} className="border rounded-lg p-3 bg-gray-50">
                    <div className="font-medium mb-2">{q.id}. {q.question}</div>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      rows="2"
                      placeholder="Enter your response..."
                    ></textarea>
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAIQuestions(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AppointmentDetailsScreen;