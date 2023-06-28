import { IBike } from '../../models/bike.model';

export class SetStolenBike {
  static readonly type = '[Theft Report] Set Stolen Bike';

  constructor(public bike: IBike) {
  }
}
