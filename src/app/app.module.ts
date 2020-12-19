import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RenderComponent } from './render/render.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // RenderComponent,
    // InicioComponent
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
