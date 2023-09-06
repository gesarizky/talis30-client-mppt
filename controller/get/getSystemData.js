// import getMPPT from "./getMPPT.js";
// import MPPT from "../../model/settings/mppt.js";

// const getSystemData = async () => {
//   try {
//     const response = await MPPT.findAll();
//     if (!(response == 0)) {
//       const resultData = [];
//       for (let i = 0; i < response.length; i++) {
//         const mpptIp = response[i].mppt_ip; // Access mppt_ip for each element
//         //   const url = `http://${mpptIp}/get-data`;
//         const url = `http://${mpptIp}`;
//         const uuid = response[i].uuid_user;
//         const rack = response[i].rack_sn;
//         const sn = response[i].mppt_sn;
//         const data = await getMPPT(url, uuid, rack, sn);
//         resultData.push(data);
//       }
//       return resultData;
//     }
//   } catch (error) {
//     throw ("error getSystemData :", error);
//   }
// };
// export default getSystemData;

import getMPPT from "./getMPPT.js";

const getSystemData = async (mpptIp) => {
  try {
          const url = `http://${mpptIp}/get-data`;
        // const url = `http://${mpptIp}`;
        const data = await getMPPT(url);
      return data;
  } catch (error) {
    throw ("error getSystemData :", error);
  }
};
export default getSystemData;

