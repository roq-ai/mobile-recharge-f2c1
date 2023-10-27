interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Account Manager'],
  tenantName: 'Company',
  applicationName: 'Mobile Recharge App ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal account balance',
    'Recharge personal account',
    'View personal transactions',
    'View companies and teams',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage recharge information',
    'Manage account balance',
    'Manage transactions',
    'Manage team details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fd64392c-fa05-447d-afb7-bdbc95fae78e',
};
