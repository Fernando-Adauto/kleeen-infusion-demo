import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: ``,
    logo: `assets/logo.png`,
    menuOptions: [
      {
        title: `Workflow 1`,
        path: `/workflow-1`,
        icon: `ks-navigation-sJQYJmitDQFM4cjHqoMbts`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
    ],
  };
};
