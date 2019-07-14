import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

import { TextFieldComponent } from './text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShellComponent,
    FormComponent,
    InputComponent,
    ButtonComponent,
    TextFieldComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
