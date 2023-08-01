import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { ScratchpadComponent } from '../../Dialogue/scratchpad/scratchpad.component';
import { trigger,transition,style,animate } from "@angular/animations";

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
        panelClass: ['animate__animated','animate__slideInUp'],
        width:'400px',
        height: '410px',
        position: {right:'50px', top: '270px'}
        
      })
    }
}
