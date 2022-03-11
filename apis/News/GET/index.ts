import instance from 'apis/config';

export default {
  getNews: async ({ queryKey }: { queryKey: any }) => {
    const [key, limit, offset] = queryKey;
    const { data } = await instance({
      method: 'GET',
      url: `/v1/${key}/?limit=${limit}&offset=${offset}`,
    });
    return data;
  },
};
