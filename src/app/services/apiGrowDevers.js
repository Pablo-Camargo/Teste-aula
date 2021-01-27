import axios from 'axios';

const apiGrowDevers = axios.create({
  baseURL: 'https://growdev-test-node.herokuapp.com',
});

export default apiGrowDevers;
