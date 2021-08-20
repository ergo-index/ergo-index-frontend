import axios from 'axios';
import { mockServerBase } from './api';

export const http = axios.create({
    baseURL: mockServerBase
});


