import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) },
   {path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) },
  { path: 'CarDetails', loadChildren: () => import('./car-details/car-details.module').then(m => m.CarDetailsModule) },
  { path: 'erreur', loadChildren: () => import('./erreur/erreur.module').then(m => m.ErreurModule) },
  { path: '**', redirectTo: "erreur" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
