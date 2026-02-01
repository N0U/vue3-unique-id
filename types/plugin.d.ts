import type { Plugin } from 'vue';

type IdTable = Record<string, string>;

declare const IdPlugin: Plugin;
export default IdPlugin;

declare module "vue" {
  interface ComponentCustomProperties {
    $id: (key : string) => string;
    _idTable?: IdTable,
  }
}

