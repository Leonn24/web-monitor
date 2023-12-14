import axios from 'axios';

export const checkUrl = async (url: string, config = {}) => {
  try {
    console.time(url)
    const response = await axios.get(url, config);
    await response.data;
    if (response.status === 200) {
      console.log(url, 'OK');
    }
    console.timeEnd(url);
  } catch (e: any) {
    console.log(url, e.code);
  }
};

checkUrl('https://api.github.com/orgs/nodejs/repos');