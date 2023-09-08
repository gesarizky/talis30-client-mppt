import axios from "axios";
/**
 * @description fetching data user network yang berisi uraian network dari device MPPT
 * @param {*} mpptIp alamat ip untuk fetching data
 * @returns mengembalikan data fetching
 */
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
    console.log("error getUserNetwork.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default getUserNetwork;
