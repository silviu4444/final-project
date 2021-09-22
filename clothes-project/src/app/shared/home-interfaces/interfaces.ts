interface RAM {
  ramOptions: string[];
  itemIdx: number;
}

interface Storage {
  storageOptions: string[];
  itemIdx: number;
}

export interface PhoneMemory {
  ram: RAM;
  storage: Storage;
}

export interface TableSpecs {
  property: string;
  value: string[] | string | number;
}
