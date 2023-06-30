import { IBike } from '../../models/bike.model';
import { IManufacturer } from "../../models/manufacturer.model";
import { IBikeType } from "../../models/bikeType.model";
import { IColor } from "../../models/color.model";

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

export class SetManufacturers {
  static readonly type = '[Theft Report] Set Manufacturers';

  constructor(public manufacturers: IManufacturer[]) {
  }
}

export class SetFrameColors {
  static readonly type = '[Theft Report] Set Frame Colors';

  constructor(public frameColors: IColor[]) {
  }
}

export class SetBikeTypes {
  static readonly type = '[Theft Report] Set Bike Type';

  constructor(public bikeTypes: IBikeType[]) {
  }
}
