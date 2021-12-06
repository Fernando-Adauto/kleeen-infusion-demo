/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
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
