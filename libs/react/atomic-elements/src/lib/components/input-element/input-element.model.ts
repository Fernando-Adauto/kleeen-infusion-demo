import { ElementComponents, RegisterEvents, WidgetProps } from '@kleeen/types';

export interface InputElementProps
  extends Pick<WidgetProps, 'attributes' | 'params' | 'taskName' | 'widgetId'> {
  elements: ElementComponents;
  registerEvents: RegisterEvents;
}
