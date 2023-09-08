import axios from "axios";

/**
 * @description fungsi untuk menjalankan dan menghentikan mppt
 * @param {*} mpptIp alamat ip device
 * @param {*} params nilai json yang akan di post
 */
const setAllModule = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-all-module`;
    const response = await axios.post(url, params);
    console.log("file: setAllModule.js: ~ response:", response.status);
  } catch (error) {
    console.log("error setAllModule.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default setAllModule;
