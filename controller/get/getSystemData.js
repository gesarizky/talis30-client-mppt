import getMPPT from "./getMPPT.js";

/**
 * @description fetching system data perangkat MPPT
 * @param {*} mpptIp alamat ip device
 * @returns mengembalikan data fetching
 */

const getSystemData = async (mpptIp) => {
  try {
    const url = `http://${mpptIp}/get-data`;
    // const url = `http://${mpptIp}`;
    const data = await getMPPT(url);
    return data;
  } catch (error) {
    console.log("error getSystemData.js :", error);
    throw {
      message: error.message,
    };
  }
};
export default getSystemData;
