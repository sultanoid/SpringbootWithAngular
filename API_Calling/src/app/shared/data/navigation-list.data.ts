import { NavItem } from '../models/nav-item.model';

export class NavigationList {
  static get items(): NavItem[] {
    return [
      // {
      //   displayName: 'Robots',
      //   iconName: 'precision_manufacturing',
      //   route: '',
      //   children: [
      //     {
      //       displayName: 'Robot List',
      //       iconName: 'list',
      //       route: 'robots',
      //     },
      //     {
      //       displayName: 'Add Robot',
      //       iconName: 'control_point',
      //       route: 'robots/add',
      //     },
      //   ],
      // },
      {
        displayName: 'Robot List',
        iconName: 'list',
        route: 'robots',
      },
      {
        displayName: 'Add Robot',
        iconName: 'control_point',
        route: 'robots/add',
      },
    ];
  }
}
