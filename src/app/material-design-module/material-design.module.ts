import {NgModule} from '@angular/core';

import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ], exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialDesignModule {
}
