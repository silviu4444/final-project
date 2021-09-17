import { HomeService } from './home.service';
import { Laptop } from './models/laptop.model';
import { MobilePhone } from './models/phone.model';

const phoneExample: MobilePhone = {
  id: 2,
  imgURL: 'test',
  manufacturer: 'test',
  model: 'test',
  price: 649,
  oldPrice: 900,
  reviews: 825,
  specs: {
    colors: {
      Red: ['test2']
    },
    sim: 'Dual SIM',
    memory: ['64', '256'],
    memoryRam: ['3'],
    mobileNetwork: '4G'
  },
  stars: 4.8,
  type: 'mobilePhones'
};

const phoneWithoutDualSimExample: MobilePhone = {
  id: 2,
  imgURL: 'test',
  manufacturer: 'test',
  model: 'test',
  price: 649,
  oldPrice: 900,
  reviews: 825,
  specs: {
    colors: {
      Red: ['test2']
    },
    sim: null,
    memory: ['64', '256'],
    memoryRam: ['3'],
    mobileNetwork: '4G'
  },
  stars: 4.8,
  type: 'mobilePhones'
};

const laptopExample: Laptop = {
  id: 101,
  imgURL:
    'https://s13emagst.akamaized.net/products/33874/33873196/images/res_2ce18bde5ec79adc307a8d4fc03e40a3.jpg?width=150&height=150&hash=A649F6B481D5B3EB10B7C31C7851B679',
  manufacturer: 'Apple',
  model: 'MacBook Air',
  oldPrice: 1199,
  price: 999,
  reviews: 113,
  specs: {
    colors: { 'Space Grey': ['test'] },
    display: 'True Tone',
    inch: 13,
    memory: 'SSD 256GB',
    processor: 'Apple M1'
  },
  stars: 4.9,
  type: 'laptops'
};

describe('HomeService', () => {
  let service: HomeService;
  beforeEach(() => (service = new HomeService()));

  it('getTitle should call getPhoneTitle if the item is a mobile phone', () => {
    const spyOnGetPhoneTitle = spyOn(service, 'getPhoneTitle');
    service.getTitle(phoneExample);
    expect(spyOnGetPhoneTitle).toHaveBeenCalledWith(phoneExample);
  });

  it('getTitle should call getLaptopTitle if the item is a laptop', () => {
    const spyOnGetLaptopTitle = spyOn(service, 'getLaptopTitle');
    service.getTitle(laptopExample);
    expect(spyOnGetLaptopTitle).toHaveBeenCalledWith(laptopExample);
  });

  it('getPhoneTitle should set phone title on itemTitle observable', () => {
    service.getPhoneTitle(phoneExample);
    service.itemTitle.subscribe((title) =>
      expect(title).toBe('test test, Dual SIM, 3GB RAM, 4G, Red')
    );
  });

  it('getPhoneTitle should set laptop title but without DUAL SIM if the phone doens\'t has this feature', () => {
    service.getPhoneTitle(phoneWithoutDualSimExample);
    service.itemTitle.subscribe((title) => {
      expect(title).toBe('test test, 3GB RAM, 4G, Red')
    })
  })

  it('getLapotpTitle should set laptop title on itemTitle observable', () => {
    service.getLaptopTitle(laptopExample);
    service.itemTitle.subscribe((title) =>
      expect(title).toBe('Apple MacBook Air, Apple M1, 13", SSD 256GB')
    );
  });

  it('homeService.updateColorOnTitle should update previous title with a color that was provided', () => {
    service.updateColorOnTitle(
      'Purple',
      'test test, Dual SIM, 3GB RAM, 4G, Red'
    );
    service.itemTitle.subscribe((updatedTitle) => {
      expect(updatedTitle).toBe('test test, Dual SIM, 3GB RAM, 4G, Purple');
      expect(updatedTitle).toContain('Purple');
    });
  });

  it('updateGBsOnTitle should update GBs from a phone title', () => {
    service.itemTitle.next('test test, Dual SIM, 3GB RAM, 4G, Red');
    service.updateGBsOnTitle('10');
    service.itemTitle.subscribe((title) =>
      expect(title).toEqual('test test, Dual SIM, 10GB RAM, 4G, Red')
    );
  });
});
