import {
  useState 
} from 'react';
import apiClient from '../api/config/apiClient';

export function useFetch({
  url 
}) {
  const [isLoading, setIsLoading] = useState(false);

  const commonFetch = async ({
    uri = '', body, method 
  }) => {
    setIsLoading(true);

    try {
      const response = await apiClient.request({
        url: url + uri,
        data: body,
        method,
      });

      return response.data;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    commonFetch,
  };
}
