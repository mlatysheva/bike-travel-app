export interface IBike {
  id: string;
  date_stolen?: string,
  description?: string,
  cycle_type?: string,
  frame_colors?: string[],
  frame_model?: string,
  is_stock_img?: boolean,
  large_img?: string,
  location_found?: string,
  manufacturer_name?: string,
  external_id?: number,
  registry_name?: string,
  registry_url?: string,
  serial?: string,
  status?: string,
  stolen?: boolean,
  stolen_coordinates?: [number, number],
  stolen_location?: string,
  thumb?: string,
  title?: string,
  url?: string,
  year?: number
}
