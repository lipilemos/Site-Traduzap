import { api, requestConfig } from "../utils/config";

//create new plan
const insertPlans = async (data, token) => {
  const config = requestConfig("POST", data, token, false);

  try {
    const res = await fetch(api + "/plans", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get user plans
const getUserPlans = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/plans/user/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    if(res)
      localStorage.setItem("userPlan", JSON.stringify(res));
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get plans
const getPlansById = async (id,token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/plans/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
// Delete a plans
const deletePlans = async (id, token) => {
  const config = requestConfig("DELETE", "", token);

  try {
    const res = await fetch(api + "/plans/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Update a plans
const updatePlans = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/plans/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get all plans
const getAllPlans = async (token) => {  
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/plans", config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};
// Get all types plans
const getAllTypesPlans = async () => {  
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/plans/types", config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const plansService = {
  insertPlans,
  getUserPlans,
  getPlansById,
  getAllPlans,
  deletePlans,
  updatePlans
};

export default plansService;
