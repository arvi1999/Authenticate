var aesjs = require("aes-js");

export default text => {

  var key = [12, 22, 31, 4, 51, 62, 27, 82, 93, 140, 117, 122, 123, 14, 65, 129];

  var iv = [221, 122, 233, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  var textBytes = aesjs.utils.utf8.toBytes(text);

  var aesCbc = new aesjs.ModeOfOperation.ofb(key, iv);
  var encryptedBytes = aesCbc.encrypt(textBytes);

  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
};
