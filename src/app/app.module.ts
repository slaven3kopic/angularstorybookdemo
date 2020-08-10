import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CplaceButtonModule } from '@cplace/design';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CplaceButtonModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
