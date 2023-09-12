import axios from "axios";
import MPPTBaseModel from "../../model/respons/MPPTBaseModel.js";
/**
 * @description mengambil data mppt dan destructuring
 * @param {*} url nilai ip yang akan di fetching  
 * @returns mengembalikan nilai maping data
 */
const getMPPT = async (url) => {
  let data;
  try {
    const respons = await axios.get(url, { timeout: 5000 });
    data = new MPPTBaseModel(respons.data);
    data.code = 200;
    return data;
  } catch (error) {
    console.log("error getMPPT.js : ", error);
    throw {
      message: error.message,
    };
  }
};
export default getMPPT;

