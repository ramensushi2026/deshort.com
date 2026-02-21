export async function onRequest(context) {
  const url = new URL(context.request.url);

  const shouldRedirectHost = url.hostname === 'www.deshort.com';
  const shouldRedirectHttp = url.protocol === 'http:';

  if (shouldRedirectHost || shouldRedirectHttp) {
    url.hostname = 'deshort.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
