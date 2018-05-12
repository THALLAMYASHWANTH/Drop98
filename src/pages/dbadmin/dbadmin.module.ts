import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbadminPage } from './dbadmin';

@NgModule({
  declarations: [
    DbadminPage,
  ],
  imports: [
    IonicPageModule.forChild(DbadminPage),
  ],
})
export class DbadminPageModule {}
