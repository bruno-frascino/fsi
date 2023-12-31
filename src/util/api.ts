import axios from "axios";
import log from "src/logger";
import { Integration } from "src/model/models";

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

interface initiateIntegrationParams {
  storeCode: string;
}

export async function initiateIntegration({storeCode}: initiateIntegrationParams): Promise<any> {
  try {
    const response = await axios.post(`${apiUrl}/integration`, { storeCode });
    return response.data
  } catch(err) {
    log.info(`Error trying to create Integration record for store: ${storeCode} with error: ${err}`);
  }
}

export async function updateIntegration(integration: Integration): Promise<any> {
  try {
    const response = await axios.put(`${apiUrl}/integration`, integration);
    return response.data
  } catch(err) {
    log.info(`Error trying to update Integration for store: ${integration.sellerTStoreCode} with error: ${err}`);
  }
}

export async function getIntegrationByStoreCode(storeCode: string): Promise<any> {
  try {
    const response = await axios.get(`${apiUrl}/integration?storeCode=${storeCode}`);
    return response.data
  } catch(err) {
    log.info(`Error trying to get Integration for store: ${storeCode} with error: ${err}`);
  }
}

