import { useState } from 'react';
import './TrayCallbackAuthTemplate.css';
import { finaliseIntegration } from 'src/util/api';
import { Integration } from 'src/model/models';

interface TrayCallbackAuthTemplateProps {
    apiUrl: string;
    authCode: string;
    storeCode: string;
}

const TrayCallbackAuthTemplate: React.FC<TrayCallbackAuthTemplateProps> = ({storeCode, authCode, apiUrl}) => {

  const [sellerName, setSellerName] = useState<string>('');
  const [sellerCode, setSellerCode] = useState<string>('');
  const [sellerKey, setSellerKey] = useState<string>('');
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [sellerSecret, setSellerSecret] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('Falha ao tentar finalisar integração')


  const sellerNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSellerName(event.target.value)
  }

  const sellerCodeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSellerCode(event.target.value)
  }

  const sellerKeyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSellerKey(event.target.value)
  }

  const sellerSecretHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSellerSecret(event.target.value)
  }
  
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const integration: Integration = {
      sellerSKey: sellerKey,
      sellerSSecret: sellerSecret,
      sellerName,
      // ?: sellerCode, //
      sellerTStoreCode: storeCode,
      sellerTStoreAccessCode: authCode,
      sellerTStoreUrl: apiUrl,
      active: 1,
    }
    const res = await finaliseIntegration(integration);
    if(res){
      setDisplayMessage(true);
      setResponseMessage('Integração realizada com sucesso!')
    }
    // TODO Where to redirect it to?
  };

  return (
    <main className='tcb-body'>
      <section>
        <h2>Finalise a configuração de sua integração de sua loja da Tray com sua loja da Farmer Shop</h2>
      </section>
      <form onSubmit={handleSubmit}>
        <div className='tcb-form-row'>
          <label htmlFor="sellerName">Nome da Loja: </label>
          <input id="sellerName" name="sellerName" type="text" value={sellerName} onChange={sellerNameHandler} placeholder="Loja" maxLength={60} required aria-required/>
        </div>
        <div className='tcb-form-row'>
          <label htmlFor="sellerCode">Código da Loja: </label>
          <input id="sellerCode" name="sellerCode" type="text" value={sellerCode} onChange={sellerCodeHandler} placeholder="Código" maxLength={10} required aria-required/>
        </div>
        <div className='tcb-form-row'>
          <label htmlFor="sellerKey">Key: </label>
          <input id="sellerKey" name="sellerKey" type="text" value={sellerKey} onChange={sellerKeyHandler} placeholder="Key" maxLength={60} required aria-required/>
        </div>
        <div className='tcb-form-row'>
          <label htmlFor="sellerSecret">Secret: </label>
          <input id="sellerSecret" name="sellerSecret" type="text" value={sellerSecret} onChange={sellerSecretHandler} placeholder="Secret" maxLength={60} required aria-required/>
        </div>
        <div className='tcb-form-row tcb-form-submit-container'>
          <button className='tcb-form-submit' type='submit'>Salvar</button>
        </div>
        {displayMessage && 
          <div className='alert-box'>
            <span>{responseMessage}</span>
          </div>
        }
      </form>
    </main>
  )
}

export default TrayCallbackAuthTemplate;
