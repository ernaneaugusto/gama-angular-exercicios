import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotoesNavegacaoComponent } from './botoes-navegacao/botoes-navegacao.component';
import { ContadorComponent } from './contador/contador.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinguagensComponent } from './linguagens/linguagens.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'counter', component: ContadorComponent },
  { path: 'languages', component: LinguagensComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BotoesNavegacaoComponent,
    ContadorComponent,
    HomeComponent,
    LinguagensComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
