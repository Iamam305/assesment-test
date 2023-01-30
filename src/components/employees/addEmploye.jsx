import React, { useState } from "react";
import { addNewEmployee } from "../../services/employee-services";


const AddEmployee = () => {
  const [showPopup, setshowPopup] = useState(false);
  const [addEmployeeData, setAddEmployeeData] = useState({});

  const handleChange = (event) => {
    setAddEmployeeData({
      ...addEmployeeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    const detailsBody = {
      ...addEmployeeData,
      profile_image: "",
      id: Math.random().toString(16).slice(2)
    };
    addNewEmployee(detailsBody)
      .then((res) => {
        alert("employee added  succesfull");
        setshowPopup(false);
      })
      .catch((e) => alert("something went wrong"));
  };

  return (
    <div>
      <button
        className="w-full mt-5 bg-indigo-600 text-white p-2 rounded-md font-semibold tracking-tight"
        onClick={(e) => setshowPopup(true)}
      >
        Add Employee
      </button>
      {showPopup ? (
        <div
          onClick={(e) => setshowPopup(false)}
          className="fixed top-0 left-0 right-0 z-50  w-[100vw] h-screen flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-[#22222257]"
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              className="flex items-center justify-center   w-96 max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white py-6 rounded-md px-4 w-full shadow-md">
                <h1 className="text-center text-lg font-bold text-gray-500">
                Add Employee
                </h1>
                <div className="space-y-4 mt-6 w-full">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="employee_name"
                      className="px-4 py-2 bg-gray-50 w-full"
                      name="employee_name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="employee_salary"
                      placeholder="employee_salary"
                      className="px-4 py-2 bg-gray-50 w-full"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="employee_age"
                      placeholder="employee_age"
                      className="px-4 py-2 bg-gray-50 w-full"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
                  Add employee
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddEmployee;
