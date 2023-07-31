import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { ScratchpadComponent } from '../../Dialogue/scratchpad/scratchpad.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    constructor(private dialog:MatDialog){}

    OpenScratch(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.hasBackdrop = false;
      this.dialog.open(ScratchpadComponent,{
        width:'400px',
        height: '400px'

      })
    }
}
