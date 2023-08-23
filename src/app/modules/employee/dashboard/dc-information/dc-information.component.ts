import { Component, OnInit } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dc-information',
  templateUrl: './dc-information.component.html',
  styleUrls: ['./dc-information.component.css'],
})
export class DcInformationComponent implements OnInit {
  loggedUserData: any; //variable to store complete data from MIS
  collapseClient: boolean = true;
  collapseReportee: boolean = true;
  selectedCouncil: string = 'pimco-de';
  constructor(private userDataService: LoggedUserDataService) {
    const email = 'siddhesh.pansare@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      console.log(this.loggedUserData);
    });
  }

  ngOnInit(): void {
    //this.loadData();
  }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  loadData(): void {}

  toggleClient() {
    this.collapseClient = !this.collapseClient;
  }
}
