import crypto from 'crypto';
export function sha(s) { return crypto.createHash('sha256').update(String(s)).digest('hex'); }
