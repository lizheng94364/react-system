import Qs from 'qs';
export default function UrlSearch(url) {
  return Qs.parse(url.split('?')[1]);
}
