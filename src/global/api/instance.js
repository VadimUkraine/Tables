import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-test.test.aws.the8app.com/campaigns/sampledata/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
