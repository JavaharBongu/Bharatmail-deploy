import React from 'react';
import {AppBar, InputBase, Toolbar, styled, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import image from '../constants/images.jpg';
import {AccountCircleOutlined, Apps, HelpOutline, Search, SettingsOutlined, Tune} from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
    background : '#bf80ff' ,
    // background : '#ffa366',
    boxShadow : 'none'

 })
const SearchWrapper = styled(Box)({
    background : '#f1ccff',
    marginLeft : 50,
    borderRadius : 8,
    minWidth : 690,
    maxWidth : 720,
    height : 30,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : '0 20px',
    '& > div':{
        width: '100%',
        padding: '0 10px'
    }

})
const OptionWrapper = styled(Box)({
    width: '100%',
    display:'flex',
    justifyContent:'end',
    '& > svg' : {
        marginLeft: 20,
    }

})

const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position='static'>
        <Toolbar>
          <MenuIcon color='action' onClick={toggleDrawer}/>
          <img src={image} alt="logo" style={{width:25, marginLeft:10, marginRight:5}}/>
          BharatMail
          <SearchWrapper>
          <Search color='action'/>
          <InputBase placeholder='Search mail'/>
          <Tune color='action'/>
          </SearchWrapper>
          <OptionWrapper>
          <HelpOutline color='action'/>
          <SettingsOutlined color='action' />
          <Apps color='action' />
          <AccountCircleOutlined color='action'/>
          </OptionWrapper>
          

        </Toolbar>
    </StyledAppBar>
  )
}

export default Header
