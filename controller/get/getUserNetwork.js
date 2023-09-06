import axios from "axios";
const getUserNetwork = async (mpptIp) => {
  const resultData = {};
  try {
    const url = `http://${mpptIp}/get-user-network-setting`;
    const respons = await axios.get(url, { timeout: 5000 });
    // const url = `http://${mpptIp}`;
    const data = respons.data;
    resultData.code = respons.status;
    resultData.mppt_data = data;
    return resultData;
  } catch (error) {
    const data = {};
    resultData.code = 404;
    resultData.mppt_data = data;
    return resultData;
  }
};
export default getUserNetwork;