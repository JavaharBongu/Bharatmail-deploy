import { Box, Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
    const error = useRouteError(); //this error is debugging purpose
    console.log(error);
  return (
    <Box style={{ marginLeft:200 }}>
        <Typography variant='h4'>
            There was an error loading this page
        </Typography>
    </Box>
  )
}

export default ErrorComponent;
