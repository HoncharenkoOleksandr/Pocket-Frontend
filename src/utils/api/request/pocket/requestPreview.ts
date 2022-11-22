import axios, { AxiosRequestConfig } from 'axios';

const key = '9f25e6b8168fbbbea708452841120a17';

export const requestPreview = ({ link, config }: any): Promise<any> =>
  axios.get(`http://api.linkpreview.net/?key=${key}&q=${link}`);
