/* eslint-disable @typescript-eslint/no-var-requires */
export const environment = {
  production: true,
  version: require('../../../../package.json').version + '-dev',
  auth: {
    clientId: 'client_id',
    clientSecret: 'client_secret'
  },
  baseUrl:''
};
