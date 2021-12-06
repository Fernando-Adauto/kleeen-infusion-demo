import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add261015: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api261015.addEntity(input.entity, input.parent),
    }),
    list261015: (_parent, args, { dataSources }) => ({ data: dataSources.api261015.listEntity(args) }),
    get261015: (_parent, { id }, { dataSources }) => ({ data: dataSources.api261015.getEntity(id) }),
    delete261015: (_parent, { id }, { dataSources }) => ({ data: dataSources.api261015.deleteEntity(id) }),
    update261015: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api261015.updateEntity(entity),
    }),
    autoComplete261015: (_parent, params, { dataSources }) => ({
      data: dataSources.api261015.getAutoCompleteValues(params.input),
    }),

    // Hoodie Resolvers
    add279875: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api279875.addEntity(input.entity, input.parent),
    }),
    list279875: (_parent, args, { dataSources }) => ({ data: dataSources.api279875.listEntity(args) }),
    get279875: (_parent, { id }, { dataSources }) => ({ data: dataSources.api279875.getEntity(id) }),
    delete279875: (_parent, { id }, { dataSources }) => ({ data: dataSources.api279875.deleteEntity(id) }),
    update279875: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api279875.updateEntity(entity),
    }),
    autoComplete279875: (_parent, params, { dataSources }) => ({
      data: dataSources.api279875.getAutoCompleteValues(params.input),
    }),

    // Jeans Resolvers
    add279876: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api279876.addEntity(input.entity, input.parent),
    }),
    list279876: (_parent, args, { dataSources }) => ({ data: dataSources.api279876.listEntity(args) }),
    get279876: (_parent, { id }, { dataSources }) => ({ data: dataSources.api279876.getEntity(id) }),
    delete279876: (_parent, { id }, { dataSources }) => ({ data: dataSources.api279876.deleteEntity(id) }),
    update279876: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api279876.updateEntity(entity),
    }),
    autoComplete279876: (_parent, params, { dataSources }) => ({
      data: dataSources.api279876.getAutoCompleteValues(params.input),
    }),
  },
};
