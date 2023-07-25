import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //declare variables
  loggedUserData: any;     //variable to store complete data from MIS

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getDataFromMisApi();
  }

  getDataFromMisApi(){
    const apiUrl = 'https://misapi.geminisolutions.com/api/External/OrgDetails?key=Ks5GSWiV2tZjuF87rSIJgQ==&token=9849AE58-1CF2-4D97-8F1A-5B4D7A52BAA5';
    this.http.get<any>(apiUrl).pipe(
      map((data) => this.filterDataByEmployeeEmail(data.Result,'siddhesh.pansare@geminisolutions.com'))
    ).subscribe((filteredData)=>{
      this.loggedUserData = filteredData[0];
    });



  }

  //function to filter complete mis data to particular user
  filterDataByEmployeeEmail(data: any, employeeEmail: string): any{
    return data.filter((item:any) => item.EmailId === employeeEmail)
  }

  // getProfileUrl(){
  //   const matchingUser = this.detailsArray.find(user => user.EmailId === this.userId);
  // if (matchingUser) {
  //   localStorage.setItem('imagePath', matchingUser.ImagePath);
  //   this.imagePath = localStorage.getItem('imagePath')
  // } else {
  //   console.log('Email not found');
  // }

}
