export const api = "http://35.172.185.74:5000/api";
//export const api = "http://localhost:5000/api"
//export const uploads = "http://localhost:5000/uploads";
export const uploads = "http://35.172.185.74:5000/uploads";
export const MERCADOPAGO_PUBLIC_KEY = "TEST-6ae6319a-a4d1-4f71-8d65-21a3ebcf8278";
export const MERCADOPAGO_TOKEN ="TEST-8692405970692299-102715-2fa856e37823b179a4a37bb727eb794d-102783479";

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      method: method,
      body: data,
      headers: {
        // "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin':'*',
      },
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method: method,     
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
      },
    };
  } else {
    config = {
        method: method, 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*',
        },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
