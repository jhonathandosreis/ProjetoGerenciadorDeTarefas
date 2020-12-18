import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { TopBarComponent } from './navegacao/top-bar/top-bar.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { AppRoutinModule } from './app-routin.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutinModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
