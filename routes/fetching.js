import getSystemData from "../controller/get/getSystemData.js";
import getUserNetwork from "../controller/get/getUserNetwork.js";

/**
 * @description routing fetching
 */

const dataFetching = async (app) => {
  // FETCHING DATA

  app.get("/get-system-data", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const response = await getSystemData(requstedIP);
      res.json({ status: 200, data: response });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: error.message,
      });
    }
  });

  app.get("/get-user-network", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const response = await getUserNetwork(requstedIP);
      res.json({ status: 200, data: response });
    } catch (error) {
     res.status(400).json({
       code: 400,
       message: error.message,
     });
    }
  });
};
export default dataFetching;
