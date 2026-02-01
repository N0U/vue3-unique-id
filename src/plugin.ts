import { App, useId } from "vue";

type IdTable = Record<string, string>;

export default {
  install: (app : App) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$id = function (key : string) : string {
      if(!this._idTable) {
        this._idTable = {};
      }
      const idTable = this._idTable as IdTable;
      if(key in idTable) {
        return idTable[key];
      }
      const id = useId();
      idTable[key] = id;
      return id;
    }
  }
}
