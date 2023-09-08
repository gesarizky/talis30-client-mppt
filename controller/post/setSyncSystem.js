import axios from "axios";

/**
 * @description fungsi untuk mengatur nilai voltage dan current mppt
 * @param {*} mpptIp alamat ip device 
 * @param {*} params nilai json yang akan di post
 */
const setSyncSystem = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-sync-system-voltage-current`;
    const response = await axios.post(url, params);
    console.log("file: setSyncSystem.js: ~ response:", response.status);
  } catch (error) {
    console.log("error setSyncSystem.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default setSyncSystem;
