import { ApiTimestamp } from '../../custom/entityResolvers/api261015';
import { ApiHoodie } from '../../custom/entityResolvers/api279875';
import { ApiJeans } from '../../custom/entityResolvers/api279876';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { FormatCheckApi } from '../../custom/formatCheckResolver/formatCheckApi';
import { FormatCheckFakeApi } from './formatCheckFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  formatCheckFakeApi: new FormatCheckFakeApi(),
  formatCheckApi: new FormatCheckApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api261015: new ApiTimestamp(),
  api279875: new ApiHoodie(),
  api279876: new ApiJeans(),
});
