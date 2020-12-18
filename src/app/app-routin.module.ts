import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './navegacao/top-bar/top-bar.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { pathToFileURL } from 'url';

const rotas: Routes = [
  {
    path:'topBar', component: TopBarComponent
  },
  {
    path:"footer", component: FooterComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ]
})
export class AppRoutinModule { }
