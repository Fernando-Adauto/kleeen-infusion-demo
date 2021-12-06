import { useKleeenActions, useKleeenContext, useUrlQueryParams } from './index';

import { FormatProps } from '@kleeen/types';
import camelcase from 'lodash.camelcase';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { pathOr } from 'ramda';
import { useEffect } from 'react';

interface WidgetDataType {
  entity: {
    [key: string]: { displayValue: string };
  };
  isLoading?: boolean;
  status: {
    version: number;
  };
}

export function useGetDisplayValue({
  formatType,
  objectValue,
  taskName,
}: {
  formatType?: string;
  objectValue: string;
  taskName: string;
}): { displayValue: string; objectValueId: string; format?: FormatProps } {
  const attributes = [{ name: objectValue, aggregation: 'noAggregation' }];
  const { getRequest } = useKleeenActions(taskName) || {};
  const widgetData: WidgetDataType = useKleeenContext(taskName);
  const { paramsBasedOnRoute } = useUrlQueryParams();

  if (isNilOrEmpty(taskName) || isNilOrEmpty(objectValue)) {
    return { displayValue: '', objectValueId: '' };
  }

  const getDisplayValue = pathOr('', ['entity', objectValue, 'displayValue']);
  const getObjectValueId = pathOr('', ['entity', objectValue, 'id']);
  const geStatusVersion = pathOr('', ['status', 'version']);
  const format = pathOr({}, ['data', 'format', objectValue], widgetData);

  const displayValue = getDisplayValue(widgetData);
  const statusVersion = geStatusVersion(widgetData);
  const objectValueId = getObjectValueId(widgetData);

  const entityValue = paramsBasedOnRoute[camelcase(objectValue)];

  useEffect(() => {
    if (isNilOrEmpty(entityValue)) return;
    const areDifferentEntities = entityValue !== widgetData?.entity?.id;

    if (isNilOrEmpty(displayValue) || areDifferentEntities) {
      getRequest({
        entity: objectValue,
        params: {
          attributes,
          baseModel: objectValue,
          formatType,
          id: entityValue,
          taskName,
          value: entityValue,
        },
      });
    }
  }, [displayValue, entityValue, objectValue, statusVersion, taskName]);

  return { displayValue, objectValueId, format };
}
