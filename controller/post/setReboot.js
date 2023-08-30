import axios from "axios";

const setReboot = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/reboot`;
    const response = await axios.post(url, params);
    console.log("file: setFactoryReset.js: ~ .then ~ response:", response);
  } catch (error) {
    console.log("error setReboot.js : ", error);
  }
};
export default setReboot;
