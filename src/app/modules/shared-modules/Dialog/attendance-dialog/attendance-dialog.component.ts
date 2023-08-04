import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface ClientVisit {
  date: string;
  event: string;
  status: string;
}

@Component({
  selector: 'app-attendance-dialog',
  templateUrl: './attendance-dialog.component.html',
  styleUrls: ['./attendance-dialog.component.css']
})
export class AttendanceDialogComponent implements OnInit {
  clientvisit: ClientVisit[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchClientVisit();
  }

  fetchClientVisit() {
    this.http.get<{ clientvisit: ClientVisit[] }>('assets/temp_data/clientvisit.json').subscribe((data) => {
      this.clientvisit = data.clientvisit;
    });
  }
}
