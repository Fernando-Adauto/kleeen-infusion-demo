import { WidgetTypes, Transformation, ElementDisplayType, StatisticalDataType } from '@kleeen/types';

export const widgets = [
  {
    actions: [],
    attributes: [],
    chartType: WidgetTypes.CUSTOM,
    component: 'workflow-1/components/custom-view-c-33-y-x-8-xzrra-jzqj-aqian-jt',
    id: `595d986f-c36b-4507-bd8e-25497cab91a3`,
    name: 'Custom View 1',
    scope: undefined,
    title: `Custom View 1`,
    type: 'custom',
    viableSolutions: [],
    viewId: 'ks-view-c33yX8xzrraJzqjAqianJT',
    viewOrder: 1,
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Report 1',
    scope: undefined,
    type: 'report',
    viableSolutions: [],
    viewId: 'ks-view-k2Yfd24bRUWVALoJ8q72By',
    viewOrder: 2,
    widgets: [
      {
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
        scope: undefined,
        sortOrder: 0,
        title: `Widget 1`,
        viableSolutions: [],
        viewId: 'ks-view-k2Yfd24bRUWVALoJ8q72By',
      },
    ],
  },
];
