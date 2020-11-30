import axios from './instance';

class СampaignsService {

  fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      throw new Error(`error in request: ${err}`);
    }
  };
}

export default new СampaignsService();
