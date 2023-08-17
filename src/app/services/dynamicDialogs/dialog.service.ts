import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  openDynamicDialog(dialogComponentType: any, config: any) {
    const dialogRef = this.dialog.open(dialogComponentType, config);

    dialogRef.afterClosed().subscribe(result => {
      // Handle any data returned when the dialog is closed
    });
  }
}
