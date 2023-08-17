import { Component, HostBinding, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ScratchpadComponent } from '../../Dialogue/scratchpad/scratchpad.component';
import { trigger, transition, style, animate, AnimationEvent } from "@angular/animations";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0ms linear', style({ transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideOutDown', [
      transition(':leave', [
        animate('500ms linear', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class SideBarComponent {
  constructor(private dialog: MatDialog) { }

  OpenScratch(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(ScratchpadComponent, {
      panelClass: ['animate__animated', 'animate__slideInUp'],
      position: { right: '3%', bottom: '40px' },
      backdropClass: 'cdk-overlay-transparent-backdrop',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    // Subscribe to the beforeClosed event to handle the slideOutDown animation when the dialog is closing.
    dialogRef.beforeClosed().subscribe(() => {
      dialogRef.removePanelClass('animate__slideInUp'); // Remove the slideInUp class to prevent conflicts with the slideOutDown animation.
      dialogRef.addPanelClass('animate__slideOutDown');
    });
  }

  clicked(){

  }
}
