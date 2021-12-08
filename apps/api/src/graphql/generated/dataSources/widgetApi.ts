/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, MultiTransFormationArgs, AuthContext } from '../../../types';
import { object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081 } from '../../custom/widgetResolvers/object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081';
import { object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27 } from '../../custom/widgetResolvers/object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27';
import { widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1 } from '../../custom/widgetResolvers/widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081(args: DataListingArgs) {
    return object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081(args, this.context);
  }

  async object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27(args: DataListingArgs) {
    return object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27(args, this.context);
  }

  async widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args: MultiTransFormationArgs) {
    return widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args, this.context);
  }
}
