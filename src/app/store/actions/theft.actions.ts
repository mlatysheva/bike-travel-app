import { IBike } from '../../models/bike.model';
import { TheftStateModel } from "../state.model";

export class SetStolenBike {
  static readonly type = '[Theft Report] Set Stolen Bike';

  constructor(public bike: IBike) {
  }
}

export class UpdateFormValue {
  static readonly type = '[Theft Report] Update Form Value';

  constructor(public payload: Partial<TheftStateModel>) {
  }
}

export class UpdateFormStatus {
  static readonly type = '[Theft Report] Update Form Status';

  constructor(public status: string) {
  }
}

export class UpdateFormErrors {
  static readonly type = '[Theft Report] Update Form Errors';

  constructor(public errors: any) {
  }
}

export class SubmitTheftReport {
  static readonly type = '[Theft Report] Submit Theft Report';

}
