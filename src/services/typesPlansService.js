import { api, requestConfig } from "../utils/config";

// Get types plans
const getTypePlansById = async (id) => {
  const config = requestConfig("GET", null);

  try {
    const res = await fetch(api + "/plans/types/" + id, config)
      .then((res) => {res.json()})
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

const typesPlansService = {
  getTypePlansById,
  getAllTypesPlans
};

export default typesPlansService;
