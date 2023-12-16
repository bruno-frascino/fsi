export interface Integration {
  id?: number;
  sellerName?: string;
  sellerSKey?: string;
  sellerSSecret?: string;
  sellerTStoreCode: string;
  sellerTStoreAccessCode?: string;
  sellerTStoreAdminUser?: string;
  sellerTStorePath?: string;
  createDate?: Date;
  active: number;
}

export interface IntegrationData {
  integration: Integration;
  consumerKey: string;
}