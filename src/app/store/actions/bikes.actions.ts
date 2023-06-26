import { IBike } from '../../models/bike.model';

export class SetBikes {
  static readonly type = '[Search Bike Button] Set Bikes';

  constructor(public bikes: IBike[]) {
  }
}

export class SetSelectedBike {
  static readonly type = '[Bikes List] Set Selected Bike';

  constructor(public bike: IBike) {
  }
}
