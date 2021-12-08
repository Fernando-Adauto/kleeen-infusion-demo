/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { DataListingArgs, MultiTransFormationArgs } from '../../../types';
import { DataSource } from 'apollo-datasource';
import { getListingData, getMultiTransFormationData } from '../../../realisticFakeData';

export class WidgetFakeApi extends DataSource {
  async object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27(args: DataListingArgs) {
    return getListingData(args);
  }

  async widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }
}
