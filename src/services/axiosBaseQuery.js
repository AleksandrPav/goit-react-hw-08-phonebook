import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: 'https://connections-api.herokuapp.com' }) =>
  async ({ url, method, data }, { getState }) => {
    try {
      const token = getState().token;
      axios.defaults.headers.common.Authorization = token ? `${token}` : '';
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
export default axiosBaseQuery;
