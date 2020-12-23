import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RenderComponent } from './render/render.component';
// import { AppModule } from './app.module';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'render', component: RenderComponent },
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '/' },
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InicioComponent, RenderComponent ]