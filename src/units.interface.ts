export enum EtherUnitKeys {
  wei = "wei",
  kwei = "kwei",
  mwei = "mwei",
  gwei = "gwei",
  microether = "microether",
  milliether = "milliether",
  ether = "ether",
}

export enum EtherUnitNames {
  wei = "wei",
  kwei = "Kwei (babbage)",
  mwei = "Mwei (lovelace)",
  gwei = "Gwei (shannon)",
  microether = "microether (szabo)",
  milliether = "milliether (finney)",
  ether = "ether",
}

export enum EtherUnitWei {
  wei = 1,
  kwei = 1000,
  mwei = 1000000,
  gwei = 1000000000,
  microether = 1000000000000,
  milliether = 1000000000000000,
  ether = 1000000000000000000,
}

export interface ConvertedUnits {
  wei: number;
  kwei: number;
  mwei: number;
  gwei: number;
  microether: number;
  milliether: number;
  ether: number;
}
