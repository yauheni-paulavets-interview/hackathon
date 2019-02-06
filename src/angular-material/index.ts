import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule],
  exports: [MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatListModule],
})
export class MaterialModule { }
