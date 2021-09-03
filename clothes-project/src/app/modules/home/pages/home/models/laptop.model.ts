export interface Laptop {
  id: number;
  imgURL: string;
  manufacturer: string;
  model: string;
  price: number;
  oldPrice: string;
  reviews: number;
  specs: {
    inch: number;
    memory: string;
    processor: string;
    display: string;
  };
  stars: number;
}
