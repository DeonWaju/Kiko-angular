import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { EmpComponentComponent } from './emp-component/emp-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { SchoolComponentComponent } from './school-component/school-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImageComponentComponent,
    EmpComponentComponent,
    FormComponentComponent,
    SchoolComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
