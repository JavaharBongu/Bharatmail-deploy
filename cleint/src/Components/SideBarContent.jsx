import { CreateOutlined } from '@mui/icons-material'
import { Box, Button, List, ListItem, styled} from '@mui/material'
import React, { useState } from 'react'
import sidebarConfig from '../config/sidebarConfig'
import ComposeMail from './ComposeMail';
import { useParams, NavLink } from "react-router-dom";
import { routes } from '../routes/routes';


const ComposeButton= styled(Button)({
    background : '#f1ccff',
    color : '#001d35',
    padding: 15,
    borderRadius : 16,
    minWidth : 140,
    textTransform: 'none'
});
const Container = styled(Box)({
   padding : 8,
   '& > ul' : {
        padding : '10px 0 0 5px',
        fontSize : 14,
        fontWeight : 500,
        cursor : 'pointer',
        '& > a':{
          textDecoration : 'none',
          color: 'inherit',
        }
   } ,
   '& > ul > a > li > svg': {
    marginRight : 17,
   }
})

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const {type} = useParams();
  const onComposeClick = () =>{
    setOpenDialog(true);
  }

  return (
    
    <Container>
       
         <ComposeButton onClick={() => onComposeClick()}><CreateOutlined/>Compose</ComposeButton>
       
       <List>
        {
            sidebarConfig.map(data =>(
              <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                <ListItem color='action' style={type === data.name.toLowerCase() ? {backgroundColor:'#d3e3fd', borderRadius:'0 16px 16px 0'} : {}}>
                    <data.icon fontSize='small'/>{data.title}
                </ListItem>
              </NavLink>
            ))
        }
       </List>
       <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  )
}

export default SideBarContent
