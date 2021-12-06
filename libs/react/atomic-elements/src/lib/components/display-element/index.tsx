import {
  getAttributeBackendFormat,
  getAttributeFormat,
  getAttributeFormatType,
  getAttributeTransformation,
  getFormat,
} from '../../utils/format';

import { DisplayElementProps } from './display-element.model';
import { Loader } from '@kleeen/react/components';
import { getDisplayElement } from './display-element-catalog';
import { useAttributeValue } from '../../hooks';
import { useWidgetContext } from '@kleeen/react/hooks';

export function DisplayElement({
  attributes,
  chartType,
  elements,
  params,
  taskName,
  widgetId,
}: DisplayElementProps) {
  const [firstAttribute] = attributes;
  const { data, isLoading } = useWidgetContext({ params: { ...params, attributes }, taskName, widgetId });
  const attributeValue = useAttributeValue({
    attribute: firstAttribute,
    data,
    isDisplay: true,
    isLoading,
    params,
  });

  const attributeFormat = getAttributeFormat(params);
  const attributeFormatType = getAttributeFormatType(params);
  const attributeTransformation = getAttributeTransformation(params);
  const backendFormat = getAttributeBackendFormat(firstAttribute.name)(data);
  const format = getFormat({ attributeFormat, backendFormat });

  if (isLoading) {
    return <Loader />;
  }

  const { displayComponent } = elements;
  const DisplayComponent = getDisplayElement(displayComponent);

  return (
    <DisplayComponent
      attribute={firstAttribute}
      chartType={chartType}
      element={displayComponent}
      format={format}
      formatType={attributeFormatType}
      params={params}
      transformation={attributeTransformation}
      value={attributeValue}
      widgetId={widgetId}
    />
  );
}
