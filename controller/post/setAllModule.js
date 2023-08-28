import axios from "axios";

const setAllModule = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-all-module`;
    const response = await axios.post(url, params);
    console.log("file: setAllModule.js: ~ .then ~ response:", response);
  } catch (error) {
    console.log("error setAllModule.js : ", error);
  }
};
export default setAllModule;
