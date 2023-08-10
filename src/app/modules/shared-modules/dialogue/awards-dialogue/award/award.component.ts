// award.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AwardData {
  Date: string;
  Award: string;
  Nominated_By: string;
}

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css'],
})
export class AwardComponent implements OnInit {
  awardData: AwardData[] = [];
  displayedColumns: string[] = ['Date', 'Award', 'Nominated_By'];
  // isDataLoaded: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<{ awards: AwardData[] }>('./assets/temp_data/award.json')
      .subscribe((data) => {
        this.awardData = data.awards;
        // this.isDataLoaded = true;
      });
  }
}
