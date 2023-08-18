export interface Integration {
  // id: number;
  sellerName?: string;
  sellerSId?: number;
  sellerSKey?: string;
  sellerSSecret?: string;
  sellerSAccessToken?: string;
  sellerSRefreshToken?: string;
  sellerSAccessExpirationDate?: number; // stored in Unix time
  sellerSRefreshExpirationDate?: number;
  sellerTStoreCode: string;
  sellerTStoreAccessCode?: string;
  sellerTStoreUrl?: string;
  sellerTAccessToken?: string;
  sellerTRefreshToken?: string;
  sellerTAccessExpirationDate?: number;
  sellerTRefreshExpirationDate?: number;
  createDate?: Date;
  active: number;
}

export interface IntegrationData {
  integration: Integration;
  consumerKey: string;
}