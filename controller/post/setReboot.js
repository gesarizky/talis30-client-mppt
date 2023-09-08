import axios from "axios";

/**
 * @description fungsi untuk melakukan reboot 
 * @param {*} mpptIp alamat ip device 
 * @param {*} params nilai json yang akan di post
 */
const setReboot = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-reboot`;
    const response = await axios.post(url, params);
    console.log("file: setReboot.js: ~ response:", response.status);
  } catch (error) {
    console.log("error setReboot.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default setReboot;
