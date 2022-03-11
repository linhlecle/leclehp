import instance from 'apis/config';

export const PROJECT_URL = `/v1/projects/?limit=5&offset=0`;
export const PROJECT_URL_PRODUCT = `/v1/projects/?category=product&limit=5&offset=0`;
export const PROJECT_URL_BUSINESS = `/v1/projects/?category=business&limit=5&offset=0`;
export const PROJECT_URL_BLOCKCHAIN = `/v1/projects/?category=blockchain&limit=5&offset=0`;
export const PROJECT_URL_OUTSOURCING = `/v1/projects/?category=outsourcing&limit=5&offset=0`;

export default {
  getAllProjects: async (pageParam: any) => {
    const { data } = await instance({
      method: 'GET',
      url: !pageParam ? PROJECT_URL : pageParam,
    });
    return data;
  },
  getProjectsByCategory: async (pageParam: any, queryKey: any) => {
    const [, category] = queryKey;
    const { data } = await instance({
      method: 'GET',
      url: !pageParam ? `PRODUCT_URL_${category.toUpperCase()}` : pageParam,
    });
    return data;
  },
};
