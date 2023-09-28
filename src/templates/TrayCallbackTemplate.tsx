import log from 'src/logger';
import './TrayCallbackTemplate.css';
import { initiateIntegration } from 'src/util/api';
import { IntegrationData } from 'src/model/models';
import { getAppCallbackUrl } from 'src/util/util';

interface TrayCallbackTemplateProps {
  storeCode: string;
  urlBack: string;
}

const TrayCallbackTemplate: React.FC<TrayCallbackTemplateProps> = ({storeCode, urlBack}) => {  

  const handleInstall = async () => {
    const integrationData: IntegrationData = await initiateIntegration({storeCode});

    log.info(`Integration for ${storeCode} has been initiated`);
    const consumerKey = integrationData.consumerKey;
    
    const callBackUrl = `${urlBack}/auth.php?response_type=code&consumer_key${consumerKey}&callback=${getAppCallbackUrl()}`
    window.location.href = callBackUrl; 
  }
  
  return (    
    <div className='body'>
      <div className='centered'>
        <main>
          <section>
            A Farmer Shop, um marketplace dedicado ao mundo country, oferece a oportunidade de integrar facilmente sua loja na plataforma Tray. Faça isso utilizando a robusta API da Farmer Shop.
          </section>
        </main>
      </div>
      <div className='g-row centered'>
        <button className='g-button' type='button' onClick={handleInstall}>Instale agora</button>
      </div>
    </div>
  )
}

export default TrayCallbackTemplate;

