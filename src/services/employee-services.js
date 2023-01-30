import axios from 'axios';

const URI = "https://dummy.restapiexample.com"

export const getEmployees = async () => {
  // const body = JSON.stringify(detailsBody);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      `${URI}/api/v1/employees`,
      config
    );
    // //console.log(response);
    const { data } = await response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};


export const addNewEmployee = async (detailsBody) =>{
const body = JSON.stringify(detailsBody);
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${URI}/api/v1/create	`,
      body,
      config
    );
    // //console.log(response);
    const { data } = await response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const editEmployee = async(detailsBody, id) =>{
    const body = JSON.stringify(detailsBody);
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      `${URI}/api/v1/update/${id}`,
      body,
      config
    );
    // //console.log(response);
    const { data } = await response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteEmployee = async( id) =>{
   
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.delete(
      `${URI}/api/v1/delete/${id}`,
     
      config
    );
    // //console.log(response);
    const { data } = await response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}