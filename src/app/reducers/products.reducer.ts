import { Products } from '../models/products.model';
import { ProductAction, ProductsActionTypes } from '../actions/product.actions';
import { Links } from '../models/links.model';

const links: Links = {
  website: {
    url: 'https://aimo-fit.com/',
    img: 'new_window',
  },
};
const initialState: Array<Products> = [
  {
    id: 1,
    title: 'AIMO',
    content: [
      { cardText: 'AIMO-fit', techStack: ['IONIC, Angular, SCSS, D3js'] },
    ],
    link: [links],
  },
];

export function ProductReducer(
  state: Array<Products> = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case ProductsActionTypes.LOAD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
