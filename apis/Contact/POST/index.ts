import instance from 'apis/config';

export default {
  postContact: async (variables: any) => {
    const { data } = await instance({
      method: 'POST',
      url: `/v1/contact/`,
      data: variables,
    });
    return data;
  },
  postContactFile: async (variables: any) => {
    const { data } = await instance({
      method: 'POST',
      url: `/v1/contact/file`,
      data: variables,
    });
    return data;
  },
};
