import { Component , Input} from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-ec-information',
  templateUrl: './ec-information.component.html',
  styleUrls: ['./ec-information.component.css']
})
export class ECInformationComponent {

  loggedUserData: any;     //variable to store complete data from MIS

  @Input() isMentee: boolean = true; // Set to true for mentees screen
  @Input() isReportee: boolean = false; 

  constructor(private userDataService: LoggedUserDataService ){
    const email = 'mohit.choudhary1@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      console.log(this.loggedUserData);

    });
  }
}
