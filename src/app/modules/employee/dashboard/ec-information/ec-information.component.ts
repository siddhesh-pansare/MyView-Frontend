import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenteesComponent } from 'src/app/modules/manager/associates-component/mentees/mentees.component';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-ec-information',
  templateUrl: './ec-information.component.html',
  styleUrls: ['./ec-information.component.css']
})
export class ECInformationComponent {

  loggedUserData: any;     //variable to store complete data from MIS

  constructor(private userDataService: LoggedUserDataService,private dialog: MatDialog ){
    const email = 'siddhesh.pansare@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      console.log(this.loggedUserData);

    });
  }
  openMenteesDialog() {
    this.dialog.open(MenteesComponent, {
    
      panelClass: 'custom-dialog-class',
      width: 'auto', // Set the width as needed, or remove this line to
    
    });

    // You can add event handlers or handle the dialog result here if needed
  }
}
