import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifCardComponent } from './gif-card/gif-card.component';
import { GifListComponent } from './gif-list/gif-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GifService } from './service/gif.service';

@NgModule({
  declarations: [AppComponent, GifCardComponent, GifListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GifService],
  bootstrap: [AppComponent],
})
export class AppModule {}
