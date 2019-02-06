import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule, MatButtonModule, MatTooltipModule],
  exports: [MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule, MatButtonModule, MatTooltipModule],
})
export class MaterialModule { }
