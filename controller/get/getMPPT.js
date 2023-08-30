// import axios from "axios";
// import MPPTBaseModel from "../../model/respons/MPPTBaseModel.js";
// const getMPPT = async (url, datauser, datarack, datasn) => {
//   let data;
//   try {
//     const respons = await axios.get(url, { timeout: 5000 });
//     data = new MPPTBaseModel(respons.data);
//     data.code = 200;
//     data.UUID_User = datauser;
//     data.rack_sn = datarack;
//     data.mppt_sn = datasn;
//     return data;
//   } catch (error) {
//     data = new MPPTBaseModel({
//       mppt_data: [],
//     });
//     data.code = 404;
//     data.UUID_User = datauser;
//     data.rack_sn = datarack;
//     data.mppt_sn = datasn;
//     return data;
//   }
// };
// export default getMPPT;

import axios from "axios";
import MPPTBaseModel from "../../model/respons/MPPTBaseModel.js";
const getMPPT = async (url) => {
  let data;
  try {
    const respons = await axios.get(url, { timeout: 5000 });
    data = new MPPTBaseModel(respons.data);
    data.code = 200;
    return data;
  } catch (error) {
    data = new MPPTBaseModel({
      mppt_data: [],
    });
    data.code = 404;
    return data;
  }
};
export default getMPPT;

