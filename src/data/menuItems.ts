import {IMenuItem} from '../interfaces/appInterfaces';

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    id: 2,
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    id: 3,
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    id: 4,
    name: 'Alerts',
    icon: 'warning-outline',
    component: 'AlertScreen',
  },
  {
    id: 5,
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    id: 6,
    name: 'PullToRefresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    id: 7,
    name: 'SectionList',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    id: 8,
    name: 'Modals',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    id: 9,
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
];
