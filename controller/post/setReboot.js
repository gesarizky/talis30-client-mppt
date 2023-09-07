import axios from "axios";

const setReboot = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-reboot`;
    const response = await axios.post(url, params);
    console.log("file: setFactoryReset.js: ~ .then ~ response:", response.status);
  } catch (error) {
    console.log("error setReboot.js : ", error);
  }
};
export default setReboot;
