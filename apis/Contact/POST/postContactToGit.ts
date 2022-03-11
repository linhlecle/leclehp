import axios from 'axios';

export const postContactToGit = async (variables: any) => {
  const { email, type1, detail } = variables;
  const { data } = await axios({
    method: 'post',
    url: 'https://cvpsjow0ik.execute-api.ap-northeast-2.amazonaws.com/prod/createInquiryIssue',
    data: {
      email,
      inquiry: type1,
      message: detail,
    },
  });
  return data;
};
