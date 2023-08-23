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
 
}
