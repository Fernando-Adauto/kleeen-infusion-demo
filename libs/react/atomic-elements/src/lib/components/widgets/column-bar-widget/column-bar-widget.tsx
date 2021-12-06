import {
  useAttributeContextMenu,
  useIsPreview,
  useWidgetContext,
  useWorkflowContext,
} from '@kleeen/react/hooks';

import { KsColumnBar } from '../../column-bar';
import { Loader } from '@kleeen/react/components';
import { WidgetProps } from '@kleeen/types';
import { getDataPointsFromHighchartsEventClick } from '@kleeen/frontend/utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './column-bar-widget.styles';

export function ColumnBarWidget({ attributes, chartType, params, taskName, widgetId }: WidgetProps) {
  const classes = useStyles();
  const widgetData = useWidgetContext({
    params,
    taskName,
    widgetId,
  });
  const { openMenu } = useAttributeContextMenu();
  const workflowData = useWorkflowContext();
  const isPreview = useIsPreview();

  if (isNilOrEmpty(widgetData)) {
    return <Loader />;
  }

  function handleDataPointClickEvent(event: Highcharts.SeriesClickEventObject) {
    if (isPreview) {
      return;
    }
    const dataPoints = getDataPointsFromHighchartsEventClick({
      attributes,
      event,
    });
    return openMenu({
      chartType,
      dataPoints,
      e: event,
      params,
      widgetId,
      workflowData,
    });
  }
  return (
    <div className={classes.widgetContent}>
      <KsColumnBar
        attributes={attributes}
        base={params.baseModel}
        context={widgetData}
        onDataPointClickEvent={handleDataPointClickEvent}
        params={params}
        subType={chartType}
        widgetId={widgetId}
      />
    </div>
  );
}
