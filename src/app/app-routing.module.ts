import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/layouts/main/main.component';
import { AuthGuard } from './gaurds/auth-gaurd';

const routes : Routes = [

	{path: '',component: MainComponent,pathMatch: "full",loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},

	{path: "home",component: MainComponent,loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},

  {path: 'auth',loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},

  {path: 'rooms',component: MainComponent,loadChildren: () => import('./components/rooms/rooms.module').then(m => m.RoomsModule)}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
