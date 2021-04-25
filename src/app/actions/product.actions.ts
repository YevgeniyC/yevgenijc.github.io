import { Action } from '@ngrx/store';
import { Products } from '../models/products.model';

export enum ProductsActionTypes {
  ADD_ITEM = '[PRODUCT] Add Item',
  LOAD_ITEM = '[PRODUCT] Load product',
}

export class AddProductAction implements Action {
  readonly type = ProductsActionTypes.ADD_ITEM;
  constructor(public payload: Products) {}
}

export class LoadProductAction implements Action {
  readonly type = ProductsActionTypes.LOAD_ITEM;
  constructor(public payload: Products) {}
}

export type ProductAction = AddProductAction | LoadProductAction;
