
import { Component , Input} from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

@Component({
  selector: 'app-ec-information',
  templateUrl: './ec-information.component.html',
  styleUrls: ['./ec-information.component.css']
})
export class ECInformationComponent {

  loggedUserData: any;     //variable to store complete data from MIS

  constructor(){}
}
