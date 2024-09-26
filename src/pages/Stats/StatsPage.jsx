import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RouteIcon from '@mui/icons-material/Route';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box, Divider, Paper, Typography 
} from '@mui/material'
import {
  SelectForm 
} from '../../components/SelectForm/SelectForm'
import {
  useForm 
} from 'react-hook-form'
import {
  DateRangePicker 
} from '../../components/DateRangePicker'
import {
  StatsBarChart 
} from '../../components/BarChart';
import {
  LineBarChart 
} from '../../components/LineBarChart';

export const StatsPage = () => {

  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  return (
    <Box
      sx={{
        width: 1
      }}
    >
      <Box
        sx={{
          width: 1,
          Height: '4.5rem',
          padding: '1rem 4rem .8125rem'
        }}
      >
        <Typography
          sx={{
            fontSize: '2.125rem',
            fontWeight: 400,
            lineHeight: '2.6244rem'
          }}
        >
          Estadisticas
        </Typography>

      </Box>
      <Divider />
      <Box
        sx={{
          width: 1,
          padding: '2rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              width: '15rem'
            }}
          >
            <SelectForm
              control={control}
              name={'area'}
              label={'Área'}
              options={[]}
            />
          </Box>
          <Box>
            <DateRangePicker />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              height: '112px',
              flex: 1
            }}
          >
            <Box
              sx={{
                height: '3rem'
              }}
            >
              <DeleteOutlineOutlinedIcon
                sx={{
                  fontSize: '3rem',
                  color: '#9E9E9E'
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '4rem'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      lineHeight: '1.5rem'
                    }}
                  >
                    Tiempo promedio de llenado
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      lineHeight: '1.5rem'
                    }}
                  >
                    6 hr 50 min
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '2.5rem'
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '1.25rem',
                      color: '#9E9E9E'
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      lineHeight: '1.5rem'
                    }}
                  >
                    Cantidad total de contenedores
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      lineHeight: '1.5rem'
                    }}
                  >
                    120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '2.5rem'
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '1.25rem',
                      color: '#9E9E9E'
                    }}
                  />
                </Box>
              </Box>
            </Box>

          </Paper>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              height: '112px',
              flex: 1
            }}
          >
            <Box
              sx={{
                height: '3rem'
              }}
            >
              <RouteIcon
                sx={{
                  fontSize: '3rem',
                  color: '#9E9E9E'
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '4rem'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      lineHeight: '1.5rem'
                    }}
                  >
                    Tiempo promedio por ruta
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      lineHeight: '1.5rem'
                    }}
                  >
                    1 hr 30 min
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '2.5rem'
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '1.25rem',
                      color: '#9E9E9E'
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      lineHeight: '1.5rem'
                    }}
                  >
                    Cantidad total de contenedores
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      lineHeight: '1.5rem'
                    }}
                  >
                    5.3 km
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '2.5rem'
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '1.25rem',
                      color: '#9E9E9E'
                    }}
                  />
                </Box>
              </Box>
            </Box>

          </Paper>
        </Box>
        <Paper
          sx={{
            padding: '1rem 1.5rem'
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center'
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  lineHeight: '1.5rem',
                }}
              >
                Contenedores que superaron el umbral
              </Typography>
              <InfoOutlinedIcon
                sx={{
                  fontSize: '1.25rem',
                  color: '#9E9E9E'
                }}
              />
            </Box>
            <Box
              sx={{
                mt: '8px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography
                sx={{
                  fontSize: '.875rem',
                  fontWeight: 400,
                  lineHeight: '1.3125rem',
                }}
              >
                Promedio: {' '}
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    lineHeight: '1.6875rem',
                  }}
                  component={'span'}
                >
                  15%
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box>
            <StatsBarChart />
          </Box>
        </Paper>
        <Paper
          sx={{
            padding: '1rem 1.5rem'
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center'
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  lineHeight: '1.5rem',
                }}
              >
                Nivel de llenado promedio por hora
              </Typography>
              <InfoOutlinedIcon
                sx={{
                  fontSize: '1.25rem',
                  color: '#9E9E9E'
                }}
              />
            </Box>
          </Box>
          <Box>
            <LineBarChart />
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}
