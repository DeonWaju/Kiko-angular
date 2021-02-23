import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { EmpComponentComponent } from './emp-component/emp-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImageComponentComponent,
    EmpComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
