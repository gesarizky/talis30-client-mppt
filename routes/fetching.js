import getSystemData from "../controller/get/getSystemData.js";
import getUserNetwork from "../controller/get/getUserNetwork.js";

const dataFetching = async (app) => {
  // FETCHING DATA

  app.get("/get-system-data", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const response = await getSystemData(requstedIP);
      res.json({ status: 200, data: response });
    } catch (error) {
      throw ("error index : get/get-system-data :", error);
    }
  });

  app.get("/get-user-network", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const response = await getUserNetwork(requstedIP);
      res.json({ status: 200, data: response });
    } catch (error) {
      throw ("error index : get/get-user-network :", error);
    }
  });
};
export default dataFetching;
