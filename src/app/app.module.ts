import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './pages/index';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './reducers/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ viewproduct: ProductReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
