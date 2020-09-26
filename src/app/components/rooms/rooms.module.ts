import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { CreateEditRoomComponent } from './create-edit-room/create-edit-room.component';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CreateEditRoomComponent, RoomsComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,SharedModule
  ]
})
export class RoomsModule { }
