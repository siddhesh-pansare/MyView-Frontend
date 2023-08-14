import { Component, Input, OnInit } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-dc-information',
  templateUrl: './dc-information.component.html',
  styleUrls: ['./dc-information.component.css']
})
export class DcInformationComponent implements OnInit{

  loggedUserData: any;     //variable to store complete data from MIS
  collapseClient : boolean = false;
  collapseReportee : boolean = false;

  @Input() showmanager: boolean = true;
  @Input() showbill: boolean = true;
  @Input() showrag: boolean = true;

  constructor(private userDataService: LoggedUserDataService ){
    const email = 'mohit.choudhary1@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      console.log(this.loggedUserData);

    });
  }


  ngOnInit(): void {
    //this.loadData();
  }

  loadData(): void {

  }

  toggleClient(){
    this.collapseClient = !this.collapseClient;
  }

}
