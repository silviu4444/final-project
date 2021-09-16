interface SpecsDetails {
  general: General;
  display: Display;
  memory: {
    capacity: string;
  };
  hardDisk: HardDisk;
  video: {
    type: string;
  };
  software: string;
}

interface General {
  weight: number;
  model: string;
}

interface Display {
  inch: number;
  display: string[];
  resolution: string;
}

interface HardDisk {
  type: string;
  capacity: string;
}

interface LaptopSpecs {
  inch: number;
  memory: string;
  processor: string;
  display: string;
  color: string;
}

export interface LaptopDetails {
  id: number;
  images: object;
  specs: SpecsDetails;
}

export interface Laptop {
  id: number;
  imgURL: string;
  manufacturer: string;
  model: string;
  price: number;
  oldPrice: number;
  reviews: number;
  specs: LaptopSpecs;
  stars: number;
  type: string;
  inDepthDetails?: LaptopDetails;
}
