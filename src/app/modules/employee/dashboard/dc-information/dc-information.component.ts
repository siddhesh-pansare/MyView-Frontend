import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dc-information',
  templateUrl: './dc-information.component.html',
  styleUrls: ['./dc-information.component.css']
})
export class DcInformationComponent implements OnInit{

  loggedUserData: any;     //variable to store complete data from MIS
  collapseClient : boolean = true;
  collapseReportee : boolean = true;
  selectedCouncil!: string ;
  isDropdownOpen: boolean = false;
@Input() DcData: any;

  constructor(private http:HttpClient, private cdr: ChangeDetectorRef){}


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('DcData' in changes) {
      console.log('jsonDataFromParent changed:', this.DcData);
      console.log('jsonDataFromParent changed:', this.DcData?.dc?.dc_name);
      this.selectedCouncil = this.DcData?.dc?.dc_name;
    }
  }

  // This function can be called whenever you need to trigger change detection manually.
  updateView() {
    this.cdr.detectChanges();
  }



  toggleDropdownImage() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  toggleClient(){
    this.collapseClient = !this.collapseClient;
  }

}

