import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';


export const TableWithEditAndDeleteButtons = ({
  tableHeaders, rows, handleOnClickEditButton, handleOnClickDeleteButton, renderRow 
}) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          paddingRight: '113px'
        }}
      >
        <TableContainer>
          <Table
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      minWidth: header.minWidth
                    }}
                  >
                    {header.value}
                  </TableCell>
                ))}

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                renderRow(row)
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align='center'
                    sx={{
                      width: 113,
                      borderLeft: '1px solid #0000001F'
                    }}
                  >Acciones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => <TableRow
                  key={row.id + '-action'}
                  sx={{
                    height: '61px'
                  }}
                >
                  <TableCell
                    align='center'
                    sx={{
                      height: '61px',
                      padding: 0,
                      borderLeft: '1px solid #0000001F'
                    }}
                  >
                    <Button
                      sx={{
                        width: 'fit-content',
                        minWidth: 'unset',
                        borderRadius: '50%'
                      }}
                      onClick={() => handleOnClickEditButton(row)}
                    >
                      <EditIcon
                        sx={{
                          color: '#0000008F',
                        }}
                      />

                    </Button>
                    <Button
                      sx={{
                        width: 'fit-content',
                        minWidth: 'unset',
                        borderRadius: '50%'
                      }}
                      onClick={() => handleOnClickDeleteButton(row)}
                    >
                      <DeleteIcon
                        sx={{
                          color: '#0000008F',
                        }}
                      />

                    </Button>
                  </TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={3}
        rowsPerPage={3}
        page={6}

      />

    </>
  )
}
