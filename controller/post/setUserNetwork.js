import axios from "axios";

const setUserNetwork = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-network`;
    const response = await axios.post(url, params);
    console.log("file: setUserNetwork.js: ~ .then ~ response:", response);
  } catch (error) {
    console.log("error setUserNetwork.js : ", error);
  }
};
export default setUserNetwork;
