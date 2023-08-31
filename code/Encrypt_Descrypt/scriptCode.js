
const crypto = CryptoJS
let key = "5080808080802072";
let initVec = "6080808080807072";

const enc = (value) => crypto.AES.encrypt(crypto.enc.Utf8.parse(value), crypto.enc.Utf8.parse(key), {
  keySize: key.length,
  iv: crypto.enc.Utf8.parse(initVec),
  mode: crypto.mode.CBC,
  padding: crypto.pad.Pkcs7
}).toString();

const dec = (value) => crypto.AES.decrypt(value, crypto.enc.Utf8.parse(key), {
  keySize: key.length,
  iv: crypto.enc.Utf8.parse(initVec),
  mode: crypto.mode.CBC,
  padding: crypto.pad.Pkcs7
}).toString(crypto.enc.Utf8);

function update(value) {
	document.querySelector('#e pre').innerText = enc(value);
  document.querySelector('#d pre').innerText = dec(value);
}

document.querySelector('input').addEventListener('input', (e) => {
	update(e.target.value);
});

update(document.querySelector('input').value);
