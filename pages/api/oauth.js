import { getURLWithQueryParams } from "../../auth/Linkedin";

const Oauth = async (req, res) => {
  // Query to exchange our authorization code for an access token 
  const LinkedinUrl = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      grant_type: "authorization_code",
      code: req.query.code,
      redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT,
      client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET
    }
  );
  let tok;
  let resp = await fetch(LinkedinUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  if (resp.ok) tok = await resp.json();

  let { access_token, expires_in } = tok;

  // Query to exchange our token for user infos
  let auth = "Bearer " + access_token;
  let user = {};
  let fetchUser = await fetch("https://api.linkedin.com/v2/me", {
    method: "GET",
    headers: { Connection: "Keep-Alive", Authorization: auth }
  });
  if (fetchUser.ok) user = await fetchUser.json();

  const userInfo = {
    name: user.localizedFirstName,
    lastName: user.localizedLastName,
  }

  if (userInfo.name) {
    res.redirect(`/auth/user?name=${userInfo.name}&lastName=${userInfo.lastName}`)
  }
};

export default Oauth