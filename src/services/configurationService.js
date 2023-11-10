import { api, requestConfig } from "../utils/config";

// insert an user's configurations
const insertConfiguration = async (data, token) => {
  const config = requestConfig("POST", data, token);
  try {
    const res = await fetch(api + "/configuration", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const insertNewConfiguration = async (token) => {
  const config = requestConfig("POST", null, token);
  try {
    const res = await fetch(api + "/configuration", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
// Get user photos
const getUserConfiguration = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/configuration/user/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

      if(res)
      localStorage.setItem("userConfiguration", JSON.stringify(res));
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get configuration
const getConfigurationById = async (id,token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/configuration/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Delete a configuration
const deleteConfiguration = async (id, token) => {
  const config = requestConfig("DELETE", "", token);

  try {
    const res = await fetch(api + "/configuration/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Update a configuration
const updateConfiguration = async (data, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/configuration/" + data._id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get all configurations
const getAllConfigurations = async (token) => {  
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/configuration", config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// add contact
const addContactList = async (id, data, token) => {
  const config = requestConfig("PUT", data, token);
  try {
    const res = await fetch(api + "/configuration/addcontacts/" + id.id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
// delete contact
const deleteContactList = async (data,id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/configuration/deletecontacts/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const configurationService = {
  insertConfiguration,
  getUserConfiguration,
  getConfigurationById,
  deleteConfiguration,
  updateConfiguration,
  getAllConfigurations,
  addContactList,
  deleteContactList,
  insertNewConfiguration
};

export default configurationService;
