import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RenderComponent } from './render/render.component';
import { TextosComponent } from './textos/textos.component';
import { AnimacionComponent } from './animacion/animacion.component';
import { FormularioComponent } from './formulario/formulario.component';
// import { AppModule } from './app.module';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'render', component: RenderComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'textos', component: TextosComponent },
  { path: 'animacion', component: AnimacionComponent },
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '/' },
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InicioComponent, RenderComponent ]