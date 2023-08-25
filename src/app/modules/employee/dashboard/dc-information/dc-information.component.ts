import { Component, OnInit } from '@angular/core';
import { LoggedUserDataService } from 'src/app/services/logged-user-data.service';

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
  isDropdownOpen: boolean = false;
  items: any[] = [
    { Id: 1, Name: 'PIMCO - DE' },
    { Id: 2, Name: 'PIMCO - TechOps' },
  ];
  constructor(private userDataService: LoggedUserDataService) {
    const email = 'siddhesh.pansare@geminisolutions.com';

    this.userDataService.fetchDataByEmail(email).subscribe((filteredData) => {
      this.loggedUserData = filteredData[0];
      console.log(this.loggedUserData);
    });
  }

  hoveredItem: number | null = null;

  isItemHovered(itemId: number): boolean {
    return this.hoveredItem === itemId;
  }

  setItemHovered(itemId: number, value: boolean): void {
    if (value) {
      this.hoveredItem = itemId;
    } else if (this.hoveredItem === itemId) {
      this.hoveredItem = null;
    }
  }

  isItemSelected(itemId: number): boolean {
    return parseInt(this.selectedCouncil, 10) === itemId;
  }
  SelectItem(event: any) {
    const filterVal = event.target.value;
    if (filterVal !== null) {
      const id = parseInt(filterVal, 10);
      // Your code here
      console.log('Selected ID:', id);
    }
  }
  ngOnInit(): void {
    //this.loadData();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleDropdownImage() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  loadData(): void {}

  toggleClient() {
    this.collapseClient = !this.collapseClient;
  }
}
