import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { CadastroClienteModule } from './modules/cadastro-cliente/cadastro-cliente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteModule } from './modules/cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProtocoloModule } from './modules/protocolo/protocolo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CadastroClienteModule,
    BrowserAnimationsModule,
    ClienteModule,
    FooterComponent,
    HeaderComponent,
    ProtocoloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
