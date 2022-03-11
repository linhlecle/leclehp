import instance from 'apis/config';

export default {
  getContactDetail: async ({ queryKey }: { queryKey: any }) => {
    const [key] = queryKey;
    const { data } = await instance({
      method: 'GET',
      url: `/v1/${key}/`,
    });
    return data;
  },
  getProjectType: async ({ queryKey }: { queryKey: any }) => {
    const [key] = queryKey;
    const { data } = await instance({
      method: 'GET',
      url: `/v1/${key}/`,
    });
    return data;
  },
};
