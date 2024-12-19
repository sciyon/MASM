"use client";

import React, { useState } from 'react';

const Page = () => {
  const [notification, setNotification] = useState(false);

  const handleApprove = (e) => {
    e.preventDefault();
    setNotification(true);
    setTimeout(() => setNotification(false), 3000); 
  };

  return (
    <div className="mt-5 mr-5 mb-5 ml-5 bg-white p-8 rounded-lg shadow-lg mx-auto">
      <div className="hidden bg-green-600 text-3xl text-black">
          Appointment Approved
      </div>
      <form className="grid grid-cols-6 gap-4 text-[#006D77]">
        <h1 className="col-span-6 text-4xl font-semibold text-teal-600 mb-4">Patient Name</h1>

  
        <div className="col-span-6 flex space-x-6">
          <div className="flex-1">
            <label>Appointment Status*</label>
            <div className="col-span-6 sm:col-span-2 flex items-center space-x-4 border border-gray-300 rounded-md p-4">
              <div className="flex items-center space-x-2">
                <span className="text-[#006D77]">Pending</span>
                <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label>Appointment ID</label>
            <h1 className="text-4xl font-semibold text-teal-600 mb-4">XXXX-XXXX</h1>
          </div>
        </div>

        <div className="col-span-6">
          <label>Short Description of Concern *</label>
          <input 
            type="text" 
            placeholder="Checkup / Medical Exam" 
            className="w-full p-4 border border-gray-300 rounded-md" 
          />
        </div>
        <div className="col-span-6">
          <label>Description of Concern*</label>
          <input 
            type="text" 
            placeholder="Fever for more than 3 days" 
            className="w-full h-24 p-4 border border-gray-300 rounded-md" 
          />
        </div>
        
        <div className="col-span-6 sm:col-span-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg p-4">
          <label className="text-center text-[#006D77]">Upload Photo</label>
          <input type="file" accept="image/*" className="hidden" id="upload-photo" />
          <label htmlFor="upload-photo" className="cursor-pointer mt-2 text-[#006D77]">
            Drag and drop a photo or select from files.
          </label>
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label className="text-[#006D77]">Select Date</label>
          <input type="date" className="w-full p-4 border border-gray-300 rounded-md" />
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label className="text-[#006D77]">Preferred Start Time</label>
          <select className="w-full p-4 border border-gray-300 rounded-md">
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 NN">12:00 NN</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
          </select>
        </div>

     
        <div className="col-span-6 flex justify-end space-x-4">
          <button 
            type="submit" 
            className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-6 rounded">
            View Patient Detail
          </button>
          <button 
            type="submit" 
            className="bg-violet-400 hover:bg-violet-500 text-white py-2 px-6 rounded">
            Update
          </button>
          <button 
            type="button" 
            onClick={handleApprove} 
            className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded">
            Approve
          </button>
          <button 
            type="submit" 
            className="bg-red-400 hover:bg-red-500 text-white py-2 px-6 rounded">
            Deny
          </button>
        </div>
      </form>


      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg">
          You created a booking!
        </div>
      )}
    </div>
  );
};

export default Page;
