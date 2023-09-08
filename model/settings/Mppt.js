import { DataTypes } from "sequelize";
import DBSETTINGS from "../../config/setting/database.js";

/**
 * @description modeling database mppt
 */

const MPPT = DBSETTINGS.define("mppt", {
  mppt_sn: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  mppt_ip: {
    type: DataTypes.STRING,
  },
});

export default MPPT;

(async () => {
  // await DBSETTINGS.sync({ alter: true });
  await DBSETTINGS.sync();
  console.log("MPPT Table is ready");
})();
