import { Laptop } from 'src/app/modules/home/pages/home/models/laptop.model';
import { MobilePhone } from 'src/app/modules/home/pages/home/models/phone.model';

export const updatePhoneTitleGBs = (title: string, gbToReplace: string) => {
  const splittedTitle = title.split(',');
  const filterRAM = splittedTitle.filter(
    (element) => element.indexOf('RAM') > -1
  );
  const indexOfRAM = splittedTitle.indexOf(filterRAM[0]);
  splittedTitle.splice(indexOfRAM, 1, ' ' + gbToReplace + 'GB RAM');
  const updatedTitle = splittedTitle.join(',');
  return updatedTitle;
};

export const createPhoneTitle = (phone: MobilePhone) => {
  const colorKeys = Object.keys(phone.specs.colors);
  const color = colorKeys[0];
  const manufacturer = phone.manufacturer;
  const model = phone.model;
  const sim = phone.specs.sim ? ', ' + phone.specs.sim : '';
  const memoryRAM = phone.specs.memoryRam[0];
  const network = phone.specs.mobileNetwork;
  return `${manufacturer} ${model}${sim}, ${memoryRAM}GB RAM, ${network}, ${color}`;
};

export const createLaptopTitle = (laptop: Laptop) => {
  const manufacturer = laptop.manufacturer;
    const model = laptop.model;
    const processor = laptop.specs.processor;
    const inch = laptop.specs.inch;
    const memory = laptop.specs.memory;
    return `${manufacturer} ${model}, ${processor}, ${inch}", ${memory}`;
}
