import {
  Transformation,
  ElementDisplayType,
  StatisticalDataType,
  WidgetTypes,
  WidgetScope,
} from '@kleeen/types';
import { WidgetByIdMap } from '../types';

export const widgets: WidgetByIdMap = {
  'c1f9472f-9842-4b2a-8c0e-984e898e6af1': {
    actions: [],
    attributes: [
      {
        aggregation: Transformation.CountTotal,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        elements: {
          displayComponent: ElementDisplayType.Label,
        },
        format: {},
        formatType: `string`,
        id: 279875,
        isFilterable: { in: false, out: false },
        label: `Count of Hoodie`,
        name: `hoodie`,
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
    ],
    chartType: WidgetTypes.SUMMARY_STATISTICS,
    entityId: 279875,
    entityName: `hoodie`,
    id: `c1f9472f-9842-4b2a-8c0e-984e898e6af1`,
    params: {
      operationName: `widget_statisticsc1f9472f_9842_4b2a_8c0e_984e898e6af1`,
      value: {
        format: {},
        formatType: `string`,
        label: `Hoodie`,
        name: `hoodie`,
        transformations: [
          {
            transformation: Transformation.CountTotal,
            isPrimary: true,
          },
        ],
      },
    },
    scope: WidgetScope.Collection,
    sortOrder: 0,
    title: `Widget 1`,
    viableSolutions: [],
  },
};
