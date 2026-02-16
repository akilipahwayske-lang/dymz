export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;
    
    // Remove trailing slash except for root
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
      url.pathname = pathname;
      return Response.redirect(url.toString(), 301);
    }
    
    // List of pages that should have .html added
    const validPages = ['/about', '/services', '/contact', '/legal'];
    
    // If requesting a clean URL, fetch the .html version
    if (validPages.includes(pathname)) {
      url.pathname = pathname + '.html';
      return env.ASSETS.fetch(url);
    }
    
    // If requesting .html directly, redirect to clean URL
    if (pathname.endsWith('.html') && pathname !== '/index.html') {
      const cleanPath = pathname.replace('.html', '');
      if (validPages.includes(cleanPath)) {
        url.pathname = cleanPath;
        return Response.redirect(url.toString(), 301);
      }
    }
    
    // Handle index.html
    if (pathname === '/index.html') {
      url.pathname = '/';
      return Response.redirect(url.toString(), 301);
    }
    
    // Fetch the asset normally
    return env.ASSETS.fetch(request);
  }
}
