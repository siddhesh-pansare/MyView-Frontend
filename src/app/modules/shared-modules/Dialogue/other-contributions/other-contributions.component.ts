import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ContributionData {
  Date: string;
  Details: string;
}

@Component({
  selector: 'app-other-contributions',
  templateUrl: './other-contributions.component.html',
  styleUrls: ['./other-contributions.component.css']
})
export class OtherContributionsComponent implements OnInit {

  contributions: ContributionData[] = [];
  displayedColumns: string[] = ['Date', 'Details'];
  hasContributions: boolean = false; // New property to track if there are contributions

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{ contributions: ContributionData[] }>('assets/temp_data/contributions.json').subscribe((data) => {
      this.contributions = data.contributions;
      
      this.hasContributions = this.contributions.length > 0; // Update the hasContributions property
    });
  }
  deleteRow(index: number) {
    // Remove the row from the array based on the given index
    this.contributions.splice(index, 1);
  };
}