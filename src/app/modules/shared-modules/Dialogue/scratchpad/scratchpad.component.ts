import { Component, HostBinding } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-scratchpad',
  templateUrl: './scratchpad.component.html',
  styleUrls: ['./scratchpad.component.css'],
  animations: [
    trigger('expandCollapse', [
      state(
        'expanded',
        style({
          width: '{{expandedWidth}}',
          height: '{{expandedHeight}}'
        }),
        { params: { expandedWidth: '550px', expandedHeight: '520px' } }
      ),
      state(
        'collapsed',
        style({
          width: '{{originalWidth}}',
          height: '{{originalHeight}}'
        }),
        { params: { originalWidth: '370px', originalHeight: '380px' } }
      ),
      // transition(
      //   'expanded <=> collapsed',
      //   animate(
      //     '300ms',
      //     keyframes([
      //       style({ width: '{{originalWidth}}', height: '{{originalHeight}}', offset: 0 }),
      //       style({ width: '{{expandedWidth}}', height: '{{expandedHeight}}', offset: 1 })
      //     ])
      //   )
      // )
      
    ])
  ]
})
export class ScratchpadComponent {
  @HostBinding('@expandCollapse') public isExpanded = 'collapsed';

  private originalWidth = '370px';
  private originalHeight = '380px';
  private expandedWidth = '550px';
  private expandedHeight = '520px';

  constructor(public dialogRef: MatDialogRef<ScratchpadComponent>) {}

  expandDialog() {
    this.isExpanded = this.isExpanded === 'collapsed' ? 'expanded' : 'collapsed';
  }
}
