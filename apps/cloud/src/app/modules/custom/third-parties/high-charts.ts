import Highcharts from 'highcharts';
import { fontFamily } from '@kleeen/settings';

export function initializeHighcharts() {
  // Add font to highcharts
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily,
      },
    },
  });
}
