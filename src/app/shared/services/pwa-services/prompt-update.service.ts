import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(evt => {
        if (this.promptUser(evt)) {
          // Reload the page to update to the latest version.
          document.location.reload();
        }
      });
  }

  private promptUser(evt: VersionReadyEvent): boolean {
    return confirm('A new version is available. Update now?');
  }
}
