import axios from "axios";

/**
 * @description fungsi untuk melakukan factory reset
 * @param {*} mpptIp alamat ip adress 
 * @param {*} params nilai json yang akan dipost
 */

const setFactoryReset = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/factory-reset`;
    const response = await axios.post(url, params);
    console.log("file: setFactoryReset.js: ~ response:", response.status);
  } catch (error) {
    console.log("error setFactoryReset.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default setFactoryReset;
