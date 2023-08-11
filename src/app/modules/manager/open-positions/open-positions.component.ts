import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ActiveData{
  Priority:string;
   Role:String;
   Council:string;
   SkillsRequired:string;
   Experience:string;
   Count:number;
}

interface ClosedData{
  Role:String;
  Council:string;
  SkillsRequired:string;
  Experience:string;
  Count:number;
  Status:string;
}

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.css']
})
export class OpenPositionsComponent implements OnInit {
  active: ActiveData[] = [];
  closed: ClosedData[] = [];
  activeTab: string = 'Active';
  displayedColumns: string[] = ['Role', 'Council', 'SkillsRequired' , 'Experience' , 'Count'];
  isButtonClicked: boolean = false;

  
constructor(private http: HttpClient){ }

setActiveTab(tab: string) {
  this.activeTab = tab;
   this.fetchData(this.activeTab);
}

ngOnInit() {
  this.fetchData(this.activeTab);
}

fetchData(tab:string) {
  let url = '';

  if (tab === 'Active') {
    url = 'assets/temp_data/active.json';
  } else if (tab === 'Closed') {
    url = 'assets/temp_data/closed.json';
  } 
  this.http.get<any>(url).subscribe((data) => {
    if (tab === 'Active') {
      this.active = data.active;
    } else if (tab === 'Closed') {
      this.closed = data.closed;
    } 
  });
}

toggleButtonClass() {
  this.isButtonClicked = !this.isButtonClicked;
}

deleteRow(index: number) {

  this.active.splice(index, 1);

};
}
