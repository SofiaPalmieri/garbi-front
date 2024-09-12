import {
  useEffect,
  useState
} from 'react';
import {
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  styled 
} from '@mui/system';
import {
  reportStates 
} from '../../enums/reportStates';
import {
  useReports 
} from '../../api/hooks/useReports/useReports';

const SmallKeyboardArrowDownIcon = (color) =>
  styled(KeyboardArrowDownIcon)(({
    _ 
  }) => ({
    fontSize: '16px',
    color: color + '!important',
  }));

export const ReportStatusSelect = ({
  reportId, reportState, handleOpenModalReportResolved, statusUpdated
}) => {
  useEffect(() => {
    // This effect will run whenever `statusUpdated` changes
    if (statusUpdated) {
      // Trigger necessary actions or re-render logic here
      // For example, you might want to reset or update some local state
      console.log('Status has been updated, re-rendering or handling changes...');
      console.log('statusUpdated: ' + statusUpdated)
      console.log('reportState: ' + reportState)
      console.log('selectedValueTest: ' + selectedValueTest)
      setSelectedValue(selectedValueTest);
    }
  }, [statusUpdated]);
  console.log('out useEffect')

  const [selectedValue, setSelectedValue] = useState(reportState);
  const [selectedValueTest, setSelectedValueTest] = useState(reportState);

  const {
    reviewReport: {
      reviewReport,
      isReviewReportLoading 
    },
  } = useReports(); 

  const user = JSON.parse(localStorage.getItem('user'));
  const userPersonalEmail = user.personalEmail;
  const userId = user.id;

  const handleChange = async (event) => {
    const newValue = event.target.value;
    setSelectedValueTest(newValue);
    //setSelectedValue(newValue);
    console.log('out useEffect - in hadleChange')
    if (newValue === reportStates.RECHAZADO.text) {
      console.log('out useEffect in RECHAZADO')
      handleOpenModalReportResolved(reportId, 'Cambiar a Rechazado', reportStates.RECHAZADO.text);
      /*if (statusUpdated) {
        console.log("inside statusupdated if")
        setSelectedValue(newValue);
      } else {
        console.log("NOT in status rechazado")
      }*/
    } else if (newValue === reportStates.RESUELTO.text) {
      console.log('out useEffect in RESUELTO')
      handleOpenModalReportResolved(reportId, 'Cambiar a Resuelto', reportStates.RESUELTO.text);
      /*if (statusUpdated) {
        console.log("inside statusupdated if")
        setSelectedValue(newValue);
      } else {
        console.log("NOT in status resuelto")
      }*/
    } else if (newValue === reportStates['EN REVISIÓN'].text) {
      setSelectedValue(newValue);
      try {
        const reviewReportBody = {
          email: userPersonalEmail,
          managerId: userId,
        }

        const response = await reviewReport(reportId, reviewReportBody);

        //TODO later: validar que la respuesta sea la esperada, y sino tirar error.
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
    <FormControl
      size='small'
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiOutlinedInput-root': {
          '& .MuiSvgIcon-root': {
            right: '20px',
          },
          '& fieldset': {
            borderColor: reportStates[selectedValue].color,
          },
          '&:hover fieldset': {
            borderColor: reportStates[selectedValue].color,
          },
          '&.Mui-focused fieldset': {
            borderColor: reportStates[selectedValue].color,
          },
        },
      }}
    >
      <Select
        value={selectedValue}
        onChange={handleChange}
        IconComponent={SmallKeyboardArrowDownIcon(reportStates[selectedValue].colorText)}
        sx={{
          height: '30px',
          color: reportStates[selectedValue].colorText,
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '22px',
        }}
      >
        <MenuItem 
          value='NUEVO'
          sx={{
            color: selectedValue === reportStates.NUEVO.text ? reportStates['NUEVO'].colorText : 'inherit',
          }}
        >
          NUEVO
        </MenuItem>
        <MenuItem
          value='EN REVISIÓN'
          sx={{
            color: selectedValue === reportStates['EN REVISIÓN'].text ? reportStates['EN REVISIÓN'].colorText : 'inherit',
          }}
        >
          EN REVISIÓN
        </MenuItem>
        <MenuItem
          value='RECHAZADO'
          sx={{
            color: selectedValue === reportStates.RECHAZADO.text ? reportStates['RECHAZADO'].colorText : 'inherit',
          }}
        >
          RECHAZADO
        </MenuItem>
        <MenuItem
          value='RESUELTO'
          sx={{
            color: selectedValue === reportStates.RESUELTO.text ? reportStates['RESUELTO'].colorText : 'inherit',
          }}
        >
          RESUELTO
        </MenuItem>
      </Select>
    </FormControl>
  );
};