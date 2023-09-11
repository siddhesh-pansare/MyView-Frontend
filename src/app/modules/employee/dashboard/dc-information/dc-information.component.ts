import { Component, OnInit } from '@angular/core';
import { ReporteesComponent } from 'src/app/modules/manager/associates-component/reportees/reportees.component';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dc-information',
  templateUrl: './dc-information.component.html',
  styleUrls: ['./dc-information.component.css'],
})
export class DcInformationComponent implements OnInit {
  loggedUserData: any; //variable to store complete data from MIS
  collapseClient: boolean = true;
  collapseReportee: boolean = true;

  constructor(
    private userDataService: LoggedUserDataService,
    private dialog: MatDialog
  ) {
    const email = 'siddhesh.pansare@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      console.log(this.loggedUserData);
    });
  }

  ngOnInit(): void {
    //this.loadData();
  }

  loadData(): void {}

  toggleClient() {
    this.collapseClient = !this.collapseClient;
  }

  openReporteesDialog() {
    this.dialog.open(ReporteesComponent, {
      panelClass: 'custom-dialog-class',
      width: 'auto', // Set the width as needed, or remove this line to
    });
  }
}
