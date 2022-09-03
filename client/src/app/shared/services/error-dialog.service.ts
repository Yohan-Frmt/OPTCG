import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { ExtendableError } from '../models/deckbuilder/errors/ExtendableError.error';

@Injectable()
export class ErrorDialogService {
  private opened = false;

  constructor(private dialog: MatDialog) {}

  openDialog(error: ExtendableError): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(ErrorDialogComponent, {
        data: { message: error.message, name: error.name },
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }
}
