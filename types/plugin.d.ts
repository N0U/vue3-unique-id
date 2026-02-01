import type { Plugin } from 'vue';

type IdTable = Record<string, string>;

declare const VueUniqueId: Plugin;
export default VueUniqueId;

declare module "vue" {
  interface ComponentCustomProperties {
    $id: (key : string) => string;
    _idTable?: IdTable,
  }
}

