import PageHeader from "src/components/PageHeader";
import TrayCallbackAuthTemplate from "./TrayCallbackAuthTemplate";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const TrayCallbackAuthPage: React.FC = () => {

  const location = useLocation();
  const [authCode, setAuthCode] = useState<string>('');
  const [storeCode, setStoreCode] = useState<string>('');
  const [apiUrl, setApiUrl] = useState<string>('');

  useEffect(() => {
    // Read URL parameters
    const searchParams = new URLSearchParams(location.search);

    // Get values of the URL parameters
    const authCodeParam = searchParams.get('code');
    const storeCodeParam = searchParams.get('store');
    const apiUrlParam = searchParams.get('api_address');

    setAuthCode(authCodeParam || '');
    setStoreCode(storeCodeParam || '');
    setApiUrl(apiUrlParam || '');

  }, [location.search]);
  
  return (
    <>
    <PageHeader/>
    <TrayCallbackAuthTemplate storeCode={storeCode} authCode={authCode} apiUrl={apiUrl}/>
    </>
  )
};

export default TrayCallbackAuthPage;