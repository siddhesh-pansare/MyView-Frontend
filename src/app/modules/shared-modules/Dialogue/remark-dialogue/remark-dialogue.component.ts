import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RemarkData {
  Date: string;
  Feedback: string;
  editable: boolean;
}

@Component({
  selector: 'app-remark-dialogue',
  templateUrl: './remark-dialogue.component.html',
  styleUrls: ['./remark-dialogue.component.css']
})
export class RemarkDialogueComponent implements OnInit {
  remarkdata: RemarkData[] = [];
  displayedColumns: string[] = ['Date', 'Feedback'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{ remarks: RemarkData[] }>('assets/temp_data/remarks.json').subscribe((data) => {
      this.remarkdata = data.remarks;
    });
  }


  deleteRow(index: number) {
    // Remove the row from the array based on the given index
    this.remarkdata.splice(index, 1);
  };


}
