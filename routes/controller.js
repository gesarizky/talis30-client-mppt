import setReboot from "../controller/post/setReboot.js";
import setFactoryReset from "../controller/post/setFactoryReset.js";
import setAllModule from "../controller/post/setAllModule.js";
import setSyncSystem from "../controller/post/setSyncSystem.js";
import setUserNetwork from "../controller/post/setUserNetwork.js";

const setControlling = async (app) => {
  // CONTROLLER
  app.post("/set-reboot", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const params = { reboot: 1 };
      await setReboot(requstedIP, params);
      res.json({ status: 200, message: "mppt is Reboot" });
    } catch (error) {
      throw ("error index : post/set-reboot :", error);
    }
  });

  app.post("/set-factory-reset", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const params = { factory_reset: 1 };
      await setFactoryReset(requstedIP, params);
      res.json({ status: 200, message: "mppt is Factory Reset" });
    } catch (error) {
      throw ("error index : post/set-factory-reset :", error);
    }
  });

  app.post("/set-all-module-on", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const params = { disable: 0 };
      await setAllModule(requstedIP, params);
      res.json({ status: 200, message: "mppt is on" });
    } catch (error) {
      throw ("error index : post/set-all-module :", error);
    }
  });

  app.post("/set-all-module-off", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const params = { disable: 1 };
      await setAllModule(requstedIP, params);
      res.json({ status: 200, message: "mppt is off" });
    } catch (error) {
      throw ("error index : post/set-all-module :", error);
      ``;
    }
  });

  app.post("/set-sync-system", async (req, res) => {
    try {
      const requstedIP = req.query.mppt_ip;
      const paramvoltage = req.query.voltage;
      const paramcurrent = req.query.total_current;
      const params = { voltage: paramvoltage, total_current: paramcurrent };
      await setSyncSystem(requstedIP, params);
      res.json({ status: 200, message: "mppt is sync" });
    } catch (error) {
      throw ("error index : post/set-sync-system :", error);
    }
  });

  app.post("/set-user-network", async (req, res) => {
    try {
      const { default_ip, ssid, pass, ip, gateway, subnet, server, mode } =
        req.body;
      const params = {
        ssid: ssid,
        pass: pass,
        ip: ip,
        gateway: gateway,
        subnet: subnet,
        server: server,
        mode: mode,
      };
      await setUserNetwork(default_ip, params);
      res.json({ status: 200, message: "mppt user network is inserted" });
    } catch (error) {
      throw ("error index : post/set-user-network :", error);
    }
  });
};
export default setControlling;
