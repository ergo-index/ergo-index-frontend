import axios from 'axios';
import { mockServerBase } from './api';

const http = axios.create({
  baseURL: mockServerBase,
});

export default http;
