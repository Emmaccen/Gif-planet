import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifCardComponent } from './gif-card/gif-card.component';
import { GifListComponent } from './gif-list/gif-list.component';

const routes: Routes = [{ path: '', component: GifListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
