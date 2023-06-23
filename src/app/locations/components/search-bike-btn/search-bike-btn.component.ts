import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search-bike-btn',
  templateUrl: './search-bike-btn.component.html',
  styleUrls: ['./search-bike-btn.component.scss']
})
export class SearchBikeBtnComponent {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  goToBikeSearch() {
    console.log('go to bike search');
    this.http.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=Berlin&distance=10&stolenness=proximity&access_token=hvte2kG0HA_wdy5xzO6XyhTXw9vh9UQieiUEKxTyMAk')
      .subscribe((data) => {
        console.log('bikes: ', data);
      });
    this.router.navigate(['/bikes']);
  }
}
