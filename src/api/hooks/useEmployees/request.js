import {
  useFetch 
} from '../../../hooks/useFetch';
import {
  baseIntegrationUri 
} from '../../config/apiClient';
import {
  HTTPMethods 
} from '../../config/HTTPMethods';
import QueryBuilder from '../../queryBuilder/QueryBuilder';
import {
  LIMIT_DEFAULT 
} from '../../../config';

const baseEmployeesUri = baseIntegrationUri + '/user'

export const useCreateEmployee = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseEmployeesUri,
  });

  const createEmployee = ({
    companyId, name, surname, personalPhone, personalEmail, companyPhone, companyEmail, workingShift, role 
  }) => {
    return commonFetch({
      method: HTTPMethods.POST,
      body: {
        companyId,
        name, 
        surname, 
        personalPhone, 
        personalEmail, 
        companyPhone,
        companyEmail,
        workingShift,
        role
      },
    });
  };

  return {
    createEmployee,
    isLoading,
  };
};

export const useFetchEmployees = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    baseUri: baseEmployeesUri,
  });

  const fetchEmployees = (lastKey = null, queryParamsFilter, limit = LIMIT_DEFAULT) => {
    const queryBuilder = new QueryBuilder()

    queryBuilder
      .addParam('lastKey', lastKey)
      .addParam('limit', limit)

    queryParamsFilter.forEach(element => {
      queryBuilder.addParam(element.key, element.value)
    });

    const uri = queryBuilder.build();
    

    return commonFetch({
      uri,
      method: HTTPMethods.GET
    })
  }


  return {
    fetchEmployees,
    isLoading
  }
};

export const useModifyEmployee = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseEmployeesUri,
  });

  const modifyEmployee = (userId, employeeBody) => {
    return commonFetch({
      uri: '/' + userId,
      method: HTTPMethods.PUT,
      body: employeeBody,
    });
  };

  return {
    modifyEmployee,
    isLoading,
  };
};

export const useDeleteEmployee = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseEmployeesUri,
  });

  const deleteEmployee = (userId) => {
    return commonFetch({
      uri: '/' + userId,
      method: HTTPMethods.DELETE,
    });
  };

  return {
    deleteEmployee,
    isLoading,
  };
};

export const useFetchEmployee = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseEmployeesUri,
  });

  const fetchEmployee = (userId) => {
    return commonFetch({
      uri: '/' + userId,
      method: HTTPMethods.GET
    })
  }


  return {
    fetchEmployee,
    isLoading
  }
};