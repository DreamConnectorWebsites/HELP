import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Students',  icon: 'design_app', class: '' },
    { path: '/maps', title: 'Medicines',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Training',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'Doctors',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Report and Analytics',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Admin',  icon:'text_caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
