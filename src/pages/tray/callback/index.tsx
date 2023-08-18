import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from 'src/components/PageHeader';
import TrayCallbackTemplate from 'src/templates/TrayCallbackTemplate';

const TrayCallbackPage: React.FC = () => {

  const location = useLocation();
  const [storeCode, setStoreCode] = useState<string>('');
  const [urlBack, setUrlBack] = useState<string>('');

  useEffect(() => {
    // Read URL parameters
    const searchParams = new URLSearchParams(location.search);

    // Get values of the URL parameters
    const storeCodeParam = searchParams.get('store');
    const urlBackParam = searchParams.get('url');

    setStoreCode(storeCodeParam || '');
    setUrlBack(urlBackParam || '');

  }, [location.search]);

  return (
    <>
      <PageHeader/>
      <TrayCallbackTemplate storeCode={storeCode} urlBack={urlBack}/>
    </>
  )
}

export default TrayCallbackPage;