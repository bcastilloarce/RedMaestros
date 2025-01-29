export function getIP(req) {
  let ip = req.headers['x-forwarded-for'] ||
           req.headers['x-real-ip'] ||
           req.connection.remoteAddress

  // If multiple IPs, take the first one
  if (typeof ip === 'string') {
    ip = ip.split(',')[0].trim()
  }

  return ip
}

export function sanitizeInput(input) {
  if (typeof input !== 'string') return input

  // Basic XSS prevention
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}