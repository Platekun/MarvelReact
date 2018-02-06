import CryptoJS from 'crypto-js';
import moment from 'moment';
import { PUBLIC_MARVEL_API_KEY, PRIVATE_MARVEL_API_KEY } from '../constants';

export const buildTimestamp = () => moment().unix();

export const buildHash = timestamp => CryptoJS
  .MD5(timestamp + PRIVATE_MARVEL_API_KEY + PUBLIC_MARVEL_API_KEY)
  .toString(CryptoJS.enc.Hex);
