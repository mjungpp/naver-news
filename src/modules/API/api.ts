import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://openapi.naver.com', 
  headers: {
    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
  },
});

export const fetchAPI = async () => {
  const response = await axiosInstance.get('/v1/search/news.json', {
    params: {
      query: '테스트',
      sort: 'sim',
      display: 4,
    },
  });
  console.log('response : ', response)
  return response;
};
