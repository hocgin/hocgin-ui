import { Utils } from '@hocgin/ui';

export default {
  /**
   * 初始化数据
   * @param action
   * @param id
   */
  async initialValues(action?: string) {
    return Utils.Request.get(action);
  },

};
