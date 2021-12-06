import { ElementComponents, WidgetProps } from '@kleeen/types';

export interface DisplayElementProps
  extends Pick<WidgetProps, 'attributes' | 'chartType' | 'params' | 'taskName' | 'widgetId'> {
  elements: ElementComponents;
}
