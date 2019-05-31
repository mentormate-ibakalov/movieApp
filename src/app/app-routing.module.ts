import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectiveStrategyService } from '@shared/services';


const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full', data: { animations: 'isRight' } },
  { path: '', loadChildren: './modules/home/home.module#HomeModule', data: { animations: 'isRight' } },
  { path: 'category', loadChildren: './modules/categories/categories.module#CategoriesModule', data: { animations: 'isleft' }}, 
  { path: 'user', 
    data: { preload: true, animations: 'isleft' },
    loadChildren: '@modules/user/user.module#UserModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: SelectiveStrategyService})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

