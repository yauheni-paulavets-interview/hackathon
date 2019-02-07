import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule, MatButtonModule, MatTooltipModule, OverlayModule],
  exports: [MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule, MatButtonModule, MatTooltipModule, OverlayModule],
})
export class MaterialModule { }
