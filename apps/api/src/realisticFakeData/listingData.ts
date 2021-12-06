import { DataListingArgs, GetListingDataResults } from '../types';
import { FakeDataSource, filterList } from './filters/filters';
import { getPropertyFormat, toPropertyName } from './utils';

import { FakeDataEntity } from '@kleeen/types';
import { GenericEntityItem } from './types';
import { KapiCrud } from './kapiCrud';
import camelcase from 'lodash.camelcase';
import { sortList } from './sorting';

const addAttributes = (attributes, entityItem) =>
  attributes.reduce((acc, attr) => {
    acc[attr.name] = entityItem[attr.name];
    return acc;
  }, {});

const addAttributesFormat = (entityName, attributes) =>
  attributes.reduce((acc, attr) => {
    const attributeName = entityName === attr.name ? 'displayValue' : attr.name;
    acc[attr.name] = getPropertyFormat(entityName, attributeName);
    return acc;
  }, {});

export const getListingData = ({
  attributes,
  entity,
  filters,
  sorting,
}: DataListingArgs): GetListingDataResults | any => {
  const params = { attributes };

  if (entity === '[KS] GlobalApp') {
    const propName = toPropertyName(camelcase(attributes[0].name));
    const rawData = KapiCrud.rawList(camelcase(attributes[0].name)) as GenericEntityItem[];

    const format = addAttributesFormat(propName, attributes);

    return { format, data: [{ [propName]: rawData }] };
  }

  const rawData = KapiCrud.list(camelcase(entity), params) as FakeDataEntity[];
  const filteredData = filterList({
    entityName: entity,
    fakeDataSource: FakeDataSource.ListingData,
    filters,
    list: rawData,
  });
  const sortedData = sortList(filteredData, sorting);
  const entityName = toPropertyName(camelcase(entity));
  const displayValueCol = `displayValue::${entityName}`;

  const format = addAttributesFormat(entityName, attributes);

  const data = sortedData.map((entityItem) => {
    const withAttributes = addAttributes(attributes, entityItem);
    const parsedEntityItem = {
      id: entityItem.id,
      [displayValueCol]: entityItem[displayValueCol],
      ...withAttributes,
    };

    return parsedEntityItem;
  }) as GenericEntityItem[];

  return { format, data };
};
