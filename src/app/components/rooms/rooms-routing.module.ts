import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditRoomComponent } from './create-edit-room/create-edit-room.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  { path: '', component: RoomsComponent, pathMatch: 'full' },
  { path: 'create', component:CreateEditRoomComponent},
  { path: 'edit/:id', component:CreateEditRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
