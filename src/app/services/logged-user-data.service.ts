import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserDataService {

  private apiUrl = 'https://misapi.geminisolutions.com/api/External/OrgDetails?key=Ks5GSWiV2tZjuF87rSIJgQ==&token=9849AE58-1CF2-4D97-8F1A-5B4D7A52BAA5'; // Replace with your API endpoint

  private data: any; // Store the fetched data here
  loggedUserData: any;     //variable to store complete data from MIS

  constructor(private http: HttpClient) {}

  fetchDataByEmail(email: string): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data) => this.filterDataByEmployeeEmail(data.Result, email))
    );
  }

  getData(): any {
    // Return the stored data
    return this.data;
  }

  setData(data: any): void {
    // Set the data received from the API
    this.data = data;
  }

  filterDataByEmployeeEmail(data: any, employeeEmail: string): any{
    return data.filter((item:any) => item.EmailId === employeeEmail)
  }
}
