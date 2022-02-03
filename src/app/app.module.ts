import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { GridSpaceComponent } from './components/grid-space/grid-space.component';
import { GridTableComponent } from './components/grid-space/grid-table/grid-table.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { PhoneCellRendererComponent } from './components/renderer/phone-cell-renderer/phone-cell-renderer.component';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GridSpaceComponent,
    GridTableComponent,
    PhoneCellRendererComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AgGridModule.withComponents([AppComponent, GridSpaceComponent, GridTableComponent, PhoneCellRendererComponent]),
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
