import { ENV } from './env';

const hosts = {
  stg: 'https://www.fastmock.site/mock/583aa603c6fdf8b9a730d468b002600c/project',
  prd: 'http://lz-prd.com'
}

export const HOST = hosts[ENV];
export const SYSTEM_API_BASE = `${HOST}`;