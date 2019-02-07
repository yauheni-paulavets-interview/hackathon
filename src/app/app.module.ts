import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from '../angular-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RelativePostsComponent } from './relative-posts/relative-posts.component';
import { FacebookWidgetComponent } from './facebook-widget';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from './store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        FacebookWidgetComponent,
        RelativePostsComponent
    ],
    entryComponents: [
        RelativePostsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatExpansionModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [Store],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
