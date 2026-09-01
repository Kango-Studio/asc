export const SITE_URL = 'https://asc.srv.br';
export const SITE_NAME = 'ASC Assessoria Contábil';
export const SITE_DESCRIPTION =
  'Atendimento ágil e desburocratizado, com linguagem acessível, ética e sigilo para apoiar sua empresa.';

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString();
