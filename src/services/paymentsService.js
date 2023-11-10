import { api, requestConfig } from "../utils/config";

//process a new Payment
const processPayments = async (data, token) => {
  const config = requestConfig("POST", data, token);

  try {
    const res = await fetch(api + "/payments/process_payments", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const createPreference = async (data, token) => {
  const config = requestConfig("POST", data, token);

  try {
    const res = await fetch(api + "/payments/create_preference", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};
const getUserPayment = async (data, token) => {
  const config = requestConfig("GET", data, token);
  try {
    const res = await fetch(api + "/payments/get_userpayments", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};


const paymentsService = {
  processPayments, createPreference, getUserPayment
};

export default paymentsService;
