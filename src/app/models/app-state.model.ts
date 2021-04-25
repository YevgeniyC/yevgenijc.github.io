import { Products } from './products.model';

export interface AppState {
  readonly products: Array<Products>;
}
