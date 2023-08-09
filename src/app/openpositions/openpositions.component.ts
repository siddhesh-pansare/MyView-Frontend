import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ActiveData{
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
  selector: 'app-openpositions',
  templateUrl: './openpositions.component.html',
  styleUrls: ['./openpositions.component.css']
})
export class OpenpositionsComponent implements OnInit{
  active: ActiveData[] = [];
  closed: ClosedData[] = [];
  activeTab: string = 'Active';
  displayedColumns: string[] = ['Role', 'Council', 'SkillsRequired' , 'Experience' , 'Count'];

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



}



