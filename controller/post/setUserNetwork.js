import axios from "axios";

/**
 * @description fungsi untuk mengatur networking mppt
 * @param {*} mpptIp alamat ip device 
 * @param {*} params nilai json yang akan di post
 */
const setUserNetwork = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-network`;
    const response = await axios.post(url, params);
    console.log("file: setUserNetwork.js: ~ response:", response.status);
  } catch (error) {
    console.log("error setUserNetwork.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default setUserNetwork;
