import dataFetching from "./fetching.js";
import setControlling from "./controller.js";
/**
 * @description main routing
 */
export default (app) => {
  app.get("/", async (req, res) => {
    res.json({ status: 200, message: "Our node.js app works" });
  });
  dataFetching(app);
  setControlling(app);
};
