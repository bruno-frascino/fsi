import PageHeader from "src/components/PageHeader";
import TrayCallbackAuthTemplate from "./TrayCallbackAuthTemplate";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIntegrationByStoreCode } from "src/util/api";
import { Integration } from "src/model/models";

const TrayCallbackAuthPage: React.FC = () => {

  const location = useLocation();
  const [authCode, setAuthCode] = useState<string>('');
  const [admUser, setAdmUser] = useState<string>('');
  const [storeCode, setStoreCode] = useState<string>('');
  const [apiUrl, setApiUrl] = useState<string>('');
  const [integrationData, setIntegrationData] = useState<Integration>();

  useEffect( () => {
    // Read URL parameters
    const searchParams = new URLSearchParams(location.search);

    // Get values of the URL parameters
    const authCodeParam = searchParams.get('code');
    const admUserParam = searchParams.get('adm_user');    
    const apiUrlParam = searchParams.get('url');
    const storeCodeParam = searchParams.get('store');

    async function fetchIntegration(storeCode: string) {

      const responseData =  await getIntegrationByStoreCode(storeCode);
      if(responseData){
        setIntegrationData(responseData);
      }
    }

    storeCodeParam && fetchIntegration(storeCodeParam);

    setAuthCode(authCodeParam || '');
    setAdmUser(admUserParam || '');
    setStoreCode(storeCodeParam || '');
    setApiUrl(apiUrlParam || '');

  }, [location.search]);
  
  return (
    <>
    <PageHeader/>
    <TrayCallbackAuthTemplate storeCode={storeCode} authCode={authCode} apiUrl={apiUrl} admUser={admUser} integration={integrationData}/>
    </>
  )
};

export default TrayCallbackAuthPage;