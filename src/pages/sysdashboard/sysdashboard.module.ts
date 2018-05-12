import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SysdashboardPage } from './sysdashboard';

@NgModule({
  declarations: [
    SysdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SysdashboardPage),
  ],
})
export class SysdashboardPageModule {}
