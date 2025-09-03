export interface AppState {
  reactiveFormData: any[];
}

export interface ItemState {
  items: Item[];
  loading: boolean;
}

export interface Item {
  id: number;
  name: string;
  timestamp: string;
}