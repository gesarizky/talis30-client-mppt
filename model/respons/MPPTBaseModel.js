import MPPTModel from "./MPPTModel.js";
/**
 * @description modeling data constructor basic
 */
class MPPTBaseModel {
  constructor(data) {
    this.code = data.code;
    this.mppt_data = new MPPTModel(data);
  }
}

export default MPPTBaseModel;
