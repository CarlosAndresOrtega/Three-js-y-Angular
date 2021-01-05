import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RenderComponent } from './render/render.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { routingComponents} from './app-routing.module';
import { TextosComponent } from './textos/textos.component';
import { AnimacionComponent } from './animacion/animacion.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    // RenderComponent,
    // InicioComponent
    routingComponents,
    TextosComponent,
    AnimacionComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
