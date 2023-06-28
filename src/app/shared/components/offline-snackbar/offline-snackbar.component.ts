import { Component, OnInit } from '@angular/core';
import { NetworkStatusService } from "../../services/network-status.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-offline-snackbar',
  template: '',
  // styleUrls: ['./offline-snackbar.component.scss']
})
export class OfflineSnackbarComponent implements OnInit {

  constructor(
    private networkStatusService: NetworkStatusService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    console.log('OfflineSnackbarComponent');
    this.networkStatusService.getOnlineStatus()
      .subscribe(isOnline => {
        if (!isOnline) {
          console.log('You are offline');
          this.snackBar.open('You are offline', 'Loading cached resources...', {
            duration: 50000,
            panelClass: ['offline-snackbar'],
          });
        }
      });
  }
}
