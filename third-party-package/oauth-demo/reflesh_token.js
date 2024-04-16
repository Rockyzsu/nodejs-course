const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0OWE4YWQ3LWU5ZmMtNDc2MC1hZjZjLWIxYTMzMjNjOTYxZiIsInVzZXJUeXBlIjoiYXBwbGljYXRpb24iLCJhcHBsaWNhdGlvbiI6eyJhcHBLZXkiOiIyZTI5OTk3MDM5YmZjNjg5MTA2YzRhYTg3MDI4ODY3ZCJ9LCJzdGF0dXMiOiJhY3RpdmF0ZWQiLCJkb21haW4iOnsic3ViZG9tYWluIjoiZGVtby13YXJlaG91c2UifSwic2NvcGUiOlt7ImlkIjoiZjJjMTE5OTUtY2I3OS00OWE5LWEzNjgtZDI0YzEzOWMxZDE2IiwibmFtZSI6IkFkbWluIn1dLCJpYXQiOjE3MTMyMzU4NzYsImV4cCI6MTcxNTgyNzg3NiwiaXNzIjoiaGF0aW9sYWIuY29tIiwic3ViIjoiYWNjZXNzLXRva2VuIn0.NQ0OqFkP8h4fBkg0igK9nimHtB_iynt4TndoPc5y00E";
const refreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0OWE4YWQ3LWU5ZmMtNDc2MC1hZjZjLWIxYTMzMjNjOTYxZiIsInVzZXJUeXBlIjoiYXBwbGljYXRpb24iLCJhcHBsaWNhdGlvbiI6eyJhcHBLZXkiOiIyZTI5OTk3MDM5YmZjNjg5MTA2YzRhYTg3MDI4ODY3ZCJ9LCJzdGF0dXMiOiJhY3RpdmF0ZWQiLCJkb21haW4iOnsic3ViZG9tYWluIjoiZGVtby13YXJlaG91c2UifSwic2NvcGUiOlt7ImlkIjoiZjJjMTE5OTUtY2I3OS00OWE5LWEzNjgtZDI0YzEzOWMxZDE2IiwibmFtZSI6IkFkbWluIn1dLCJpYXQiOjE3MTMyMzU4NzYsImV4cCI6MTc0NDc5MzQ3NiwiaXNzIjoiaGF0aW9sYWIuY29tIiwic3ViIjoicmVmcmVzaC10b2tlbiJ9.5ecrkdiAQtxrwYMcKSqiJTfaq5HYUMKLFGkCWME6hNI";

const axios = require("axios");
let data = JSON.stringify({
  refreshToken: refreshToken,
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://operatohub.com/oauth/refresh-token",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
    Cookie: `access_token.hub=${access_token}; access_token.hub.sig=_9Lotl1Mg-WI7ORuO2ddiUZZw8k`,
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
