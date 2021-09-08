interface SpecsDetails {
  general: General;
  display: Display;
  fotoVideo: FotoVideo;
  battery: Battery;
}

interface General {
  phoneType: string;
  sim: string;
  simType: string;
  os: string;
  osVerios: string;
  connectivity: string[];
  package: string[];
  year: number;
}

interface Display {
  screenSize: number;
  display: string;
  resolution: string;
}

interface FotoVideo {
  numberOfCameras: number;
  mainCamera: string[];
}

interface Battery {
  type: string;
  capacity: number;
}

interface Specs {
  sim: string;
  mobileNetwork: string;
  memory: string[];
  memoryRam: string[];
}

export interface PhoneDetails {
  id: number;
  images: object;
  specs: SpecsDetails;
}

export interface MobilePhone {
  id: number;
  imgURL: string;
  manufacturer: string;
  model: string;
  price: number;
  oldPrice: number;
  reviews: number;
  specs: Specs;
  stars: number;
  type: string;
  inDepthDetails: PhoneDetails;
}
