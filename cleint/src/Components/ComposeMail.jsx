import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../Services/api.urls";




const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 550,
  },
});
const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10,
  },
});
const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
});
const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "bhmail1729@yopmail.com",
    Password: "57534E4FF682EDAB257F74EEC3C37B32E64A",
    Port: 2525,
  };


  const closeComposeMail = (e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      from: 'javahar999@gmail.com',
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Code For Interview',
      starred: false,
      type: 'drafts'
    }
    saveDraftService.call(payload);

    if(!saveDraftService.error){
      setOpenDialog(false);
      setData({});
    } else{
      
    }
  };


  const sendMail = async (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "javahar999@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }
    const payload = {
      to: data.to,
      from: 'javahar999@gmail.com',
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Code For Interview',
      starred: false,
      type: 'sent'
    }
    sentEmailService.call(payload);

    if(!sentEmailService.error){
      setOpenDialog(false);
      setData({});
    } else{
      
    }

  };

  const onValueChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
    // console.log(data);
  }

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <RecipientWrapper>
        <InputBase placeholder="Recipients" name="to" onChange={(e)=> onValueChange(e)} />
        <InputBase placeholder="Subject" name="subject" onChange={(e)=> onValueChange(e)}/>
      </RecipientWrapper>

      <TextField
        multiline
        rows={20}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        onChange={(e)=> onValueChange(e)}
        name='body'
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
