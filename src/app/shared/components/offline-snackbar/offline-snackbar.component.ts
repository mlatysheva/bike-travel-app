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
    this.networkStatusService.getOnlineStatus()
      .subscribe(isOnline => {
        if (!isOnline) {
          this.snackBar.open('You are offline', 'Loading cached resources...', {
            duration: 3000,
            panelClass: ['offline-snackbar'],
          });
        }
      });
  }
}
