export function getAppCallbackUrl(){
  const domain = process.env.REACT_APP_DOMAIN || 'http://localhost:3000';
  const path = process.env.REACT_APP_CALLBACK_PATH || '/tray/callback/auth';

  return `${domain}${path}`;
}