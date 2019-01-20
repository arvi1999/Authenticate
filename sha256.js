var crypto = require('crypto');

export default hash => {
  return crypto.createHash('sha256').update(hash).digest('base64');
};
