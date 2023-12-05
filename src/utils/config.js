
//prod
export const api = "http://35.172.26.88:5000/api";
export const uploads = "http://35.172.26.88:5000/uploads";
export const MERCADOPAGO_PUBLIC_KEY = "APP_USR-0513651a-c5f6-4fa1-8ffa-6e7726b7a4c2";
export const MERCADOPAGO_TOKEN ="APP_USR-8692405970692299-102715-51bd6b29d0bdb00b6b0e982b2d325b65-102783479";
//dev
//export const api = process.env.API
//export const uploads = process.env.UPLOADS
//export const MERCADOPAGO_PUBLIC_KEY = "TEST-6ae6319a-a4d1-4f71-8d65-21a3ebcf8278";
//export const MERCADOPAGO_TOKEN ="TEST-8692405970692299-102715-2fa856e37823b179a4a37bb727eb794d-102783479";

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
