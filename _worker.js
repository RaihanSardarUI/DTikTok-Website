export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return new Response('Not Found', { status: 404 });
    }
    
    try {
      let response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        response = await env.ASSETS.fetch(`${url.origin}/404`);
      }
      return response;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
