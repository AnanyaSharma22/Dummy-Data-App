import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { DummydataComponent } from './dummydata/dummydata.component';
import { AddeditdummydataComponent } from './addeditdummydata/addeditdummydata.component';
// import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DummydataComponent,
    AddeditdummydataComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
