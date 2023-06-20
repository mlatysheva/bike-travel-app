export class SetSearchQuery {
  static readonly type = '[Search] Set Search Query';
  constructor(public searchQuery: string) {}
}
