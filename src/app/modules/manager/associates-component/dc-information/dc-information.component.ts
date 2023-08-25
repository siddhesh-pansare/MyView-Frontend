import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-information',
  templateUrl: './dc-information.component.html',
  styleUrls: ['./dc-information.component.css']
})
export class DcInformationComponent implements OnInit{

  loggedUserData: any;     //variable to store complete data from MIS
  collapseClient : boolean = true;
  collapseReportee : boolean = true;

  @Input() showmanager: boolean = true;
  @Input() showbill: boolean = true;
  @Input() showrag: boolean = true;
  @Input() isMentee: boolean = true; // Set to true for mentees screen
  @Input() isReportee: boolean = false;

  constructor(){}


  ngOnInit(): void {
    //this.loadData();
  }

  loadData(): void {

  }

  toggleClient(){
    this.collapseClient = !this.collapseClient;
  }

}
