import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'scheme',
    loadChildren: () =>
      import('./scheme/scheme-page.module').then((m) => m.SchemePageModule),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./reservation/reservation-page.module').then(
        (m) => m.ReservationPageModule
      ),
  },
  { path: 'comments', component: CommentsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 90], // [x, y] - adjust scroll offset
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
