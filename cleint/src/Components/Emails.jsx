import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../Services/api.urls";
import useApi from "../hooks/useApi";
import { Box, Checkbox, List } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Email from "./Email";
import NoMails from "../common/NoMails";
import { EMPTY_TABS } from "../constants/constants";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { openDrawer } = useOutletContext();
  const { type } = useParams();
  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService = useApi(API_URLS.deleteEmail);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailService?.response?.map(email => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  }
  const deleteSelectedEmails = (e) => {
    if (type === 'bin') {
      deleteEmailService.call(selectedEmails);
    } else {
      moveEmailsToBinService.call(selectedEmails);
      
    }
    setRefreshScreen(prevState => !prevState);
  }
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 200, width: "calc(100% - 200px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutlineIcon onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailService?.response?.map((email) => (
          <Email key={email._id} email={email} selectedEmails={selectedEmails} setRefreshScreen={setRefreshScreen}
          setSelectedEmails={setSelectedEmails} />
        ))}
      </List>
      {
                getEmailService?.response?.length === 0 &&
                    <NoMails message={EMPTY_TABS[type]} />
            }
    </Box>
  );
};

export default Emails;
