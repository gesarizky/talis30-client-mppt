import axios from "axios";

const setFactoryReset = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/factory-reset`;
    const response = await axios.post(url, params);
    console.log("file: setFactoryReset.js: ~ .then ~ response:", response.status);
  } catch (error) {
    console.log("error setFactoryReset.js : ", error);
  }
};
export default setFactoryReset;
