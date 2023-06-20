export interface ILocation {
  location_id: string,
  name: string,
  address_obj: IAddressObject,
}

export interface IAddressObject {
  street1?: string,
  street2?: string,
  city?: string,
  country?: string,
  postalcode?: string,
  address_string?: string
}
