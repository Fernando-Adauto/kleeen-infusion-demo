import { State } from '@kleeen/react/state-management';
import { initializeHighcharts } from './high-charts';
import { thirdPartyInitialize } from './third-party-initialize';

export const initializeThirdParties = (currentUser: State.CurrentUser) => {
  initializeHighcharts();
  thirdPartyInitialize.forEach((initializeFunc: (currentUser: State.CurrentUser) => void) => {
    initializeFunc(currentUser);
  });
};
