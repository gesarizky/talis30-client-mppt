import axios from "axios";

const setSyncSystem = async (mpptIp, params) => {
  try {
    const url = `http://${mpptIp}/set-sync-system-voltage-current`;
    const response = await axios.post(url, params);
    console.log("file: setSyncSystem.js: ~ .then ~ response:", response);
  } catch (error) {
    console.log("error setSyncSystem.js : ", error);
  }
};
export default setSyncSystem;
