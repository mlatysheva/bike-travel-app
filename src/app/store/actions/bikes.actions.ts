import { IBike } from '../../models/bike.model';

export class SetBikes {
  static readonly type = '[Selected Location] Set Bikes';

  constructor(public bikes: IBike[]) {
  }
}

export class SetSelectedBike {
  static readonly type = '[Bikes List] Set Selected Bike';

  constructor(public bike: IBike) {
  }
}
