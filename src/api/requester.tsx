import axios from 'axios';

const baseUrl = 'https://v1.nocodeapi.com/zafarzhon/pipedrive/vbivYexqYOzxbAyF';

export const requester = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
