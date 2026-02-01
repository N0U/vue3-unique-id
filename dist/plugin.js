import { useId } from "vue";
export default {
    install: (app) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$id = function (key) {
            if (!this._idTable) {
                this._idTable = {};
            }
            const idTable = this._idTable;
            if (key in idTable) {
                return idTable[key];
            }
            const id = useId();
            idTable[key] = id;
            return id;
        };
    }
};
//# sourceMappingURL=plugin.js.map