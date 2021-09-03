export interface MobilePhone {
  id: number;
  imgURL: string;
  manufacturer: string;
  model: string;
  price: number;
  reviews: number;
  specs: {
    sim: string;
    mobileNetwork: string;
    memory: string[];
    memoryRam: string[];
  };
  stars: number;
}
