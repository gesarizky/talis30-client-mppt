import express from "express";
import dotenv from "dotenv";
import MPPT from "./model/settings/mppt.js";
import getSystemData from "./controller/get/getSystemData.js";
import getUserNetwork from "./controller/get/getUserNetwork.js";
import setReboot from "./controller/post/setReboot.js";
import setFactoryReset from "./controller/post/setFactoryReset.js";
import setAllModule from "./controller/post/setAllModule.js";
import setSyncSystem from "./controller/post/setSyncSystem.js";
import setUserNetwork from "./controller/post/setUserNetwork.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ status: 200, message: "Our node.js app works" });
});

// MPPT

app.post("/mppt", async (req, res) => {
  try {
    await MPPT.upsert(req.body);
    res.json({ status: 200, message: "mppt is inserted" });
  } catch (error) {
    throw ("error index : post/mppt :", error);
  }
});

app.get("/mppt", async (req, res) => {
  try {
    const response = await MPPT.findAll();
    res.json({ status: 200, data: response });
  } catch (error) {
    throw ("error index : get/mppt :", error);
  }
});

app.get("/mppt/:mppt_sn", async (req, res) => {
  try {
    const requestedDevice = req.params.mppt_sn;
    const response = await MPPT.findOne({
      where: { mppt_sn: requestedDevice },
    });
    res.json({ status: 200, data: response });
  } catch (error) {
    throw ("error index : get/mppt/:mppt_sn :", error);
  }
});

app.delete("/mppt/:mppt_sn", async (req, res) => {
  try {
    const requestedDevice = req.params.mppt_sn;
    await MPPT.destroy({ where: { mppt_sn: requestedDevice } });
    res.json({
      status: 200,
      message: `Data MPPT ${requestedDevice} is deleted`,
    });
  } catch (error) {
    throw ("error index : get/mppt/:mppt_sn :", error);
  }
});

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

// CONTROLLER
app.post("/set-reboot", async (req, res) => {
  try {
    const requstedIP = req.query.mppt_ip;
    const params = { "reboot": 1 };
    await setReboot(requstedIP, params);
    res.json({ status: 200, message: "mppt is Reboot" });
  } catch (error) {
    throw ("error index : post/set-reboot :", error);
  }
});

app.post("/set-factory-reset", async (req, res) => {
  try {
    const requstedIP = req.query.mppt_ip;
    const params = { "factory_reset": 1 };
    await setFactoryReset(requstedIP, params);
    res.json({ status: 200, message: "mppt is Factory Reset" });
  } catch (error) {
    throw ("error index : post/set-factory-reset :", error);
  }
});

app.post("/set-all-module-on", async (req, res) => {
  try {
    const requstedIP = req.query.mppt_ip;
    const params = { "disable": 0 };
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
    throw ("error index : post/set-all-module :", error);``
  }
});

app.post("/set-sync-system", async (req, res) => {
  try {
    const requstedIP = req.query.mppt_ip;
    const paramvoltage = req.query.voltage;
    const paramcurrent = req.query.total_current;
    const params = { "voltage": paramvoltage, "total_current":paramcurrent };
    await setSyncSystem(requstedIP, params);
    res.json({ status: 200, message: "mppt is sync" });
  } catch (error) {
    throw ("error index : post/set-sync-system :", error);
  }
});

app.post("/set-user-network", async (req, res) => {
  try {
    const { default_ip , ssid, pass, ip, gateway, subnet, server, mode } = req.body;
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



app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
