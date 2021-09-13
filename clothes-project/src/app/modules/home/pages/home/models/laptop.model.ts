export interface Laptop {
  id: number;
  imgURL: string;
  manufacturer: string;
  model: string;
  price: number;
  oldPrice: number;
  reviews: number;
  specs: {
    inch: number;
    memory: string;
    processor: string;
    display: string;
  };
  stars: number;
  type: string;
}
