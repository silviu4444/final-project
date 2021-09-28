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
