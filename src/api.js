import { API_KEY } from './key';
import axios from 'axios';

export const getArticlesByWord = async (word) => {
  const data = await axios.get(
    `https://content.guardianapis.com/search?q=${word}&api-key=${API_KEY}`,
    { withCredentials: false});
  return data;
}

export const getArticlesByTag = async (tag) => {
  const data = await axios.get(
    `https://content.guardianapis.com/search?tag=${tag}&api-key=${API_KEY}`,
    { withCredentials: false});
  return data;
}