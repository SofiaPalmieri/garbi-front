import {
  Box,
  CircularProgress,
  Paper,
  TableContainer
} from '@mui/material';
import {
  SearcherPaginated
} from '../SearcherPaginated';
import {
  HEIGHT_HEADER_FILTER_SIDE_COMPONENT
} from '../../config';
import {
  usePagination
} from '../../hooks/usePagination';
import {
  useEffect 
} from 'react';


export const CommonTableList = ({
  reloadTable, table: Table, fetchData, isLoadingFetchData, mapper, placeHolderInput, inputWidth, button=true, datePicker=true, buttonText, onClick
}) => {

  const {
    data,
    prevFetch,
    nextFetch,
    disabledPrevBtn,
    disabledNextBtn,
    refetchData
  } = usePagination({
    fetch: fetchData,
    mapper
  })

  useEffect(() => {
    if (reloadTable) {
      refetchData();
    }
  }, [reloadTable]);

  return (
    <Box
      sx={{
        padding: '32px',
        width: '100%',
        height: `calc(100% - ${HEIGHT_HEADER_FILTER_SIDE_COMPONENT})`,
      }}
    >
      <Paper
        sx={{
          width: '100%',
          height: '100%'
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            paddingX: '1rem',
            height: '100%',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          <SearcherPaginated
            prevFetch={prevFetch}
            nextFetch={nextFetch}
            disabledNextBtn={disabledNextBtn || isLoadingFetchData}
            disabledPrevBtn={disabledPrevBtn || isLoadingFetchData}
            placeholderInput={placeHolderInput}
            inputWidth={inputWidth}
            button={button}
            datePicker={datePicker}
            buttonText={buttonText}
            onClick={onClick}
          />
          <Box
            sx={{
              height: 'calc(100% - 4.5rem)',
              overflow: 'auto',
              width: '100%'
            }}
          >
            {
              isLoadingFetchData ?
                <Box
                  sx={{
                    width: 1,
                    display: 'flex',
                    p: 2,
                    justifyContent: 'center'
                  }}
                >
                  <CircularProgress />
                </Box>
                :
                <Table
                  data={data}
                />
            }
          </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
}
