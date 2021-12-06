/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { MultiTransFormationArgs } from '../../../types';
import { DataSource } from 'apollo-datasource';
import { getMultiTransFormationData } from '../../../realisticFakeData';

export class WidgetFakeApi extends DataSource {
  async widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }
}
