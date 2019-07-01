import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { SetIntervalComponent } from './set-interval/set-interval.component';
import { EnterNumbersComponent } from './enter-numbers/enter-numbers.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { ShellComponent } from './shell/shell.component';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';

@NgModule({
  declarations: [AppComponent, InputComponent, HeaderComponent, SetIntervalComponent, EnterNumbersComponent, GoodbyeComponent, ShellComponent, ButtonComponent, TextFieldComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
