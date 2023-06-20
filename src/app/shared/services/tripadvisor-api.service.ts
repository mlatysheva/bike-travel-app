import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../einvironments/environment";
import { apiUrl } from "../../constants/apiUrl";

@Injectable({
  providedIn: 'root'
})
export class TripadvisorAPIService {

  private baseUrl = apiUrl;
  constructor(private http: HttpClient) { }

  fetchLocations(searchQuery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/location/search?key=${environment.apiKey}&searchQuery=${searchQuery}&language=en`)
  }
}
