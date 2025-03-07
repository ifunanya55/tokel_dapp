import { Config, WindowSize } from 'vars/defines';

interface ResponsiveType {
  XL: string;
  L: string;
  M: string;
  S: string;
}

const responsiveFactory = (property: string) =>
  Object.entries(WindowSize).reduce(
    (o, [name, size]) => ({ ...o, [name]: `@media (${property}: ${size}px)` }),
    {}
  ) as ResponsiveType;

export const Responsive = {
  above: responsiveFactory('min-width'),
  below: responsiveFactory('max-width'),
};

export const randomColor = () => `hsla(${(360 * Math.random()).toString()}, 70%, 80%, 1)`;

// Number().toString() to cut down unnecessary trailing 0s
export const formatDec = (num: number) => {
  return Number(num.toFixed(Config.DECIMAL)).toString();
};

export const formatFiat = (num: number) => {
  return Number(num.toFixed(Config.DECIMAL_FIAT)).toString();
};

export const limitLength = (value: string, len: number) => value.substr(0, len);

export const isAddressValid = (address: string) => /^[a-km-zA-HJ-NP-Z1-9]{26,35}$/.test(address);

export const stringifyAddresses = addresses => {
  if (!addresses || !addresses.length) {
    return null;
  }
  if (!Array.isArray(addresses)) {
    return addresses;
  }
  if (addresses.length === 1) {
    return addresses[0];
  }
  if (addresses.length === 2) {
    return `${addresses[0]}, ${addresses[1]}`;
  }
  return `${addresses[0]}, ${addresses[1]} , ${addresses.length - 2} addresses`;
};
