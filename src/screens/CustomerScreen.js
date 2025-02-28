import React from "react";
import Layout from "../layouts/Layout";
import Slider from "react-slick";
import { advancedTechnologies } from "../constants";
import { useNavigate } from "react-router-dom";

const CustomerScreen = () => {
  const navigate = useNavigate();

  const settings3 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div className="bg-white overflow-hidden mt-[67px]">
        <div className="p-5 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
            <div className="text-blue-600 font-semibold text-base mb-4">
              AI-Generated MRO Service Insights
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 border-l-4 border-blue-600 p-3 rounded">
                <div className="font-semibold text-sm mb-1">
                  Maintenance Efficiency
                </div>
                <div className="text-xl font-bold text-blue-600">94.2%</div>
                <div className="text-sm">7.5% increase from last quarter</div>
              </div>

              <div className="bg-gray-50 border-l-4 border-blue-600 p-3 rounded">
                <div className="font-semibold text-sm mb-1">
                  Average Response Time
                </div>
                <div className="text-xl font-bold text-blue-600">2.3 hrs</div>
                <div className="text-sm">Down from 3.7 hrs last month</div>
              </div>

              <div className="bg-gray-50 border-l-4 border-blue-600 p-3 rounded">
                <div className="font-semibold text-sm mb-1">
                  Parts Availability
                </div>
                <div className="text-xl font-bold text-blue-600">98.1%</div>
                <div className="text-sm">
                  Critical components always in stock
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-blue-600 p-3 rounded">
                <div className="font-semibold text-sm mb-1">
                  Customer Satisfaction
                </div>
                <div className="text-xl font-bold text-blue-600">4.8/5</div>
                <div className="text-sm">Based on 234 recent reviews</div>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              These AI-powered insights help enhance your MRO experience by
              providing real-time analytics on service performance and
              identifying opportunities for improvement.
            </p>
          </div>

          <div className="text-center my-8 flex justify-center gap-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors duration-200" 
              onClick={() => navigate("/createServiceRequest")}
            >
              Create New Service Request
            </button>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition-colors duration-200" 
              onClick={() => navigate("/appointmentDetails")}
            >
              View Appointments
            </button>
          </div>

          <div className="mt-6">
            <div className="font-semibold text-base mb-4">
              Advanced Technology in MRO Services
            </div>

            <div className="w-full">
              <Slider {...settings3} className="collection-slider">
                {advancedTechnologies.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
                  >
                    <img
                      src={item.image}
                      className="w-full h-64 object-cover bg-gray-200 flex items-center justify-center"
                      alt={item.title}
                    />
                    <div className="p-3">
                      <div className="font-semibold text-sm mb-1">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerScreen;