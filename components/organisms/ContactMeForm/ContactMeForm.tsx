"use client";
import { useAlertBanner } from "contexts/AlertBannerContext";
import { axiosInstance } from "helpers/axios";
import {
  Stack,
  Typography,
  TextField,
  Grid,
  Fab,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export default function ContactMeForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const { showBanner } = useAlertBanner();

  const clearForm = () => {
    setMessage("");
    setName("");
  };

  const sendMessage = async () => {
    try {
      setIsSendingMessage(true);
      const response = await axiosInstance.post("/api/mail", {
        userEmail: "anoopjadhav@gmail.com",
        userMessage: message,
        userName: name,
      });
      if (response.data.msg === "success") {
        showBanner("Message sent successfully!", "success");
      } else {
        showBanner(
          "Failed to send the message. Please try again later.",
          "error",
        );
      }
    } catch (e) {
      showBanner("Failed to send the message.", "error");
      console.log(e);
    } finally {
      setIsSendingMessage(false);
      clearForm();
    }
  };

  return (
    <Stack spacing={0.5}>
      <Typography variant="subtitle2">Contact me</Typography>

      <TextField
        value={name}
        label="Your name"
        id="feedback-name"
        size="small"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={message}
        id="feedback-body"
        multiline
        rows={3}
        label="Your message"
        placeholder=""
        onChange={(e) => setMessage(e.target.value)}
        helperText="Feel free to share a constructive feedback."
      />
      <Grid container justifyContent="flex-end">
        <Fab
          disabled={!(name && message) || isSendingMessage}
          size="small"
          aria-label="send"
          onClick={sendMessage}
          color="primary"
        >
          {isSendingMessage ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <SendIcon color="inherit" fontSize="inherit" />
          )}
        </Fab>
      </Grid>
    </Stack>
  );
}
