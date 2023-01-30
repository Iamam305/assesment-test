import React, { useEffect, useState } from "react";
import UpdateEmploye from "../components/employees/updateEmployee";
import NavLayout from "../components/layout/nav-layout";
import { deleteEmployee, getEmployees } from "../services/employee-services";
import AddEmployee from "../components/employees/addEmploye";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getEmployees().then((res) => setEmployees(res.data));
  }, []);

  //   {
  //     "id": 1,
  //     "employee_name": "Tiger Nixon",
  //     "employee_salary": 320800,
  //     "employee_age": 61,
  //     "profile_image": ""
  // }

  return (
    <NavLayout>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Employees</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="flex flex-col justify-center mx-auto shadow-md rounded-lg overflow-hidden">
              <div className="flex justify-end my-2">
                <AddEmployee/>
              </div>
              <table className=" leading-normal table-fixed">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      salary
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      age
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees?.map((employee) => (
                    <tr className="" key={employee?.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {employee?.employee_name}
                        </p>
                      
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {employee?.employee_salary}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {employee?.employee_age}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <div className="flex gap-2">
                          <UpdateEmploye data={employee} />

                          <button onClick={e => deleteEmployee(employee.id)} className=" mt-5 bg-red-600 text-white p-2 rounded-md font-semibold tracking-tight">
                            Remove Employee
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default Employees;
