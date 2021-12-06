/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { MultiTransFormationArgs, AuthContext } from '../../../types';
import { widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1 } from '../../custom/widgetResolvers/widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args: MultiTransFormationArgs) {
    return widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args, this.context);
  }
}
