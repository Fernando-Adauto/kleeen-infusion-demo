/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { DataListingArgs, MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_774a5f4e_a6b0_49fe_a5a9_ca01abadf081(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_a571ff29_a98d_4519_9c43_c04dc40f5e27(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1(args.input, {
            ...rest,
          })
        : result;
    },
  },
};
