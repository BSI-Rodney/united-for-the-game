// Subdomain shortcuts to the registration forms.
// boys.united-for-the-game.com  -> boys' Google Form
// girls.united-for-the-game.com -> girls' Google Form
// Everything else falls through to the static site.

const FORMS = {
  boys: "https://docs.google.com/forms/d/e/1FAIpQLSePlVXckshqFRbbJIevNSRCanG1snQ5WMkbiM26uis3wpOo-A/viewform",
  girls: "https://docs.google.com/forms/d/e/1FAIpQLSfdWi_WTfTcO3S3W0piuUCB4fBnPrTFHa3G9qvYtv4aIpq_Ag/viewform",
};

export async function onRequest({ request, next }) {
  const host = new URL(request.url).hostname;
  const sub = host.split(".")[0];
  if (host.endsWith("united-for-the-game.com") && FORMS[sub]) {
    return Response.redirect(FORMS[sub], 302);
  }
  return next();
}
