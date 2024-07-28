import axios from 'axios';

const baseUrl = 'https://v1.nocodeapi.com/zafarzhon/pipedrive/vbivYexqYOzxbAyF';

export const requester = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createPersonJob = (data: any) => requester.post('/persons', data);
