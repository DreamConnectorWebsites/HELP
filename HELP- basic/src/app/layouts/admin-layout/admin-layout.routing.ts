import { Routes } from '@angular/router';

import { DashboardComponent } from '../../students/dashboard.component';
import { UserProfileComponent } from '../../doctors/user-profile.component';
import { TableListComponent } from '../../report and analytics/table-list.component';
import { TypographyComponent } from '../../user-admin/typography.component';
import { MapsComponent } from '../../medicines/maps.component';
import { NotificationsComponent } from '../../trainning/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
