import {
  AvatarGroup,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import {
  AvatarWithTooltip 
} from '../../components/AvatarWithTooltip';
import useMediaQuery from '@mui/material/useMediaQuery';


export const RoutesTable = ({
  data: routes
}) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const isMediumScreen = useMediaQuery('(min-width:900px)');

  return (
    <Table
      aria-label='simple table'
    >
      <TableBody>
        {routes.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell 
              align='left'
              sx={{
                width: '1%',
                padding: '16px' 
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#616161',
                }}
              >
                {row.date}
              </Typography>
            </TableCell>
            <TableCell
              align='left'
              sx={{
                minWidth: 240
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#212121',
                }}
              >
                {row.area}
                <Typography
                  component='span'
                  sx={{
                    fontSize: '14px',
                    color: '#616161',
                    marginLeft: '16px'
                  }}
                >
                  #{row.id}
                </Typography>
              </Typography>
            </TableCell>
            <TableCell
              align='right'
              sx={{
                minWidth: 160,
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#212121',
                }}
              >
                {row.duration}
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#616161',
                }}
              >
                {row.startTime} - {row.endTime}
              </Typography>
            </TableCell>
            {isMediumScreen && (
              <>
                <TableCell
                  align='center'
                  sx={{
                    width: '1%',
                    paddingRight: '0px',
                    paddingLeft: '48px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '16px',
                      color: '#616161',
                    }}
                  >
                    Supervisor
                  </Typography>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    width: '1%',
                    paddingLeft: '8px'
                  }}
                >
                  <AvatarWithTooltip
                    name={row.manager}
                    profilePicture={row.manager_picture}
                  />
                </TableCell>
              </>
            )}
            {isLargeScreen && (
              <>
                <TableCell
                  align='right'
                  sx={{
                    width: '1%',
                    paddingRight: '0px',
                    paddingLeft: '16px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '16px',
                      color: '#616161',
                    }}
                  >
                    Recolectores
                  </Typography>
                </TableCell>
                <TableCell
                  align='right'
                  sx={{
                    width: '1%',
                    paddingLeft: '8px',
                  }}
                >
                  <AvatarGroup
                    max={2}
                  >
                    <AvatarWithTooltip
                      name={row.collector1}
                      profilePicture={row.collector1_picture}
                    />
                    <AvatarWithTooltip
                      name={row.collector2}
                      profilePicture={row.collector2_picture}
                    />
                  </AvatarGroup>
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}