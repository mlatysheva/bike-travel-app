import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {
  private online$: Observable<boolean>;

  constructor() {
    const isOnline$ = fromEvent(window, 'online').pipe(map(() => true));
    const isOffline$ = fromEvent(window, 'offline').pipe(map(() => false));

    this.online$ = merge(isOnline$, isOffline$);
  }

  getOnlineStatus(): Observable<boolean> {
    return this.online$;
  }
}
