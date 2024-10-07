import {
  FilterSideComponent
} from '../../components/FilterSideComponent';
import {
  HomeFilters 
} from '../../filters/HomeFilters/HomeFilters';
import HomeMainContent from './HomeMainContent';
import {
  useForm 
} from 'react-hook-form';
import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object 
} from 'yup';
import {
  useAreas 
} from '../../api/hooks/useAreas/useAreas';
import {
  useEffect, useState 
} from 'react';
import {
  useContainers 
} from '../../api/hooks/useContainers/useContainers';
import {
  formatContainers 
} from '../../api/hooks/useReports/mappers';
import {
  useFetchCompany 
} from '../../api/hooks/useCompanies/request';

const createReportSchema = object({
}).required();


export default function HomePage() {
  const [areas, setAreas] = useState([])
  const [areasToRender, setAreasToRender] = useState([])
  const [containers, setContainers] = useState([]);
  const [containersToRender, setContainersToRender] = useState([])
  const [containerSelected, setContainerSelected] = useState(null);

  

  const {
    control, handleSubmit, setValue, formState: {
      errors
    }, 
    reset
  } = useForm({
    defaultValues: {
      areaId: '',
      minLlenado: '',
      maxLlenado: '',
      minBateria: '',
      maxBateria: ''
    },
    resolver: yupResolver(createReportSchema),
  });

  const {
    getAreas: {
      getAreas,
      isLoadingGetAreas
    }
  } = useAreas()
  const {
    getCompany, isLoading 
  } = useFetchCompany();
  const [company, setCompany] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));
  const companyId = user?.companyId;

  useEffect(() => {
    if (companyId && !company) { 
      getCompany(companyId).then((response) => {
        setCompany(response);
      });
    }
  }, [companyId, company, getCompany]);
  

  const {
    getAllContainers: {
      getAllContainers
    }
  } = useContainers();


  useEffect(() => {
    const fetchAreas = async () => {
      const areasRetrieved = await getAreas()
      setAreas(areasRetrieved.result)
      setAreasToRender(areasRetrieved.result)
    }

    fetchAreas()
  }, [])

  // se podria mejorar para no duplicar codigo ? 
  useEffect(() => {
    const retrieveContainers = async () => {
      const containersUnformated = await getAllContainers();
      const containersFormated = formatContainers(containersUnformated.result);

      setContainers(containersFormated);
      setContainersToRender(containersFormated);
    };

    try {
      retrieveContainers();
    } catch (e) {
      console.log(e);
    }
  }, []);


  const whenFiltersSubmit = ({
    areaId, minLlenado, maxLlenado, minBateria, maxBateria 
  }) => {
    const containersCondition = []
    const areasCondition = []

    const areaIdSelected = areaId !== '' ? areaId : null;
    const minLlenadoValue = minLlenado !== '' ? Number(minLlenado) : 0;
    const maxLlenadoValue = maxLlenado !== '' ? Number(maxLlenado) : 100;
    const minBateriaValue = minBateria !== '' ? Number(minBateria) : 0;
    const maxBateriaValue = maxBateria !== '' ? Number(maxBateria) : 100;

    if (areaId) {
      containersCondition.push(container => container.areaId == areaId)
      areasCondition.push(area => area.id == areaId)
    }

    containersCondition.push(container => container.capacity >= minLlenadoValue && container.capacity <= maxLlenadoValue);
    containersCondition.push(container => container.battery >= minBateriaValue && container.battery <= maxBateriaValue);

    const filteredContainers = containers.filter(container =>
      containersCondition.every(condition => condition(container))
    );

    const filteredAreas = areas.filter(area =>
      areasCondition.every(condition => condition(area))
    )

    setAreasToRender(filteredAreas)
    setContainersToRender(filteredContainers)
  }

  const cleanFilters = () => {
    reset({
      areaId: '',
      minLlenado: '',
      maxLlenado: '',
      minBateria: '',
      maxBateria: ''
    });
    setAreasToRender(areas);
    setContainersToRender(containers);
  };

  const colors = {
    LOW_CAPACITY: '#D32F2F',
    MEDIUM_CAPACITY: '#EF6C00',
    HIGH_CAPACITY: '#2E7D32',
  };
  

  const information = company && company.threshold ? [
    {
      color: colors.HIGH_CAPACITY,
      valor: '-' + company.threshold.warning + '%'
    },
    {
      color: colors.MEDIUM_CAPACITY,
      valor: company.threshold.warning +'% - ' + company.threshold.full +'%'
    },
    {
      color: colors.LOW_CAPACITY,
      valor: '+' + company.threshold.full + '%'
    },
    
   
  ] : [];


  return <FilterSideComponent
    title={'Mapa'}
    handleClean={cleanFilters}
    component={
      () =>
        <HomeMainContent
          areas={areasToRender}
          containers={containersToRender}
          setContainerSelected={setContainerSelected}
          containerSelected={containerSelected}
          information={information}
          company={company}
        />
    }
    renderFilters={() => <HomeFilters
      control={control}
      areas={areas}
    />}
    handleSubmit={handleSubmit(whenFiltersSubmit)}
  />;
}
