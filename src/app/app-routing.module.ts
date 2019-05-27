import { HomeComponent } from '@shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectiveStrategyService } from '@shared/services/selective-strategy.service';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'category', loadChildren: './modules/categories/categories.module#CategoriesModule'},
  { path: 'user', 
    data: { preload: true },
    loadChildren: '@modules/user/user.module#UserModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: SelectiveStrategyService})
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
// export const RoutingComponents = [  ];
