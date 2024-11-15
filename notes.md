# Deobfuscation notes

```javascript
var _0x358970 = function(_0x17c880) {
    var _0x5ad2d9 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
    var _0x2eee7e = ''
      , _0x51ff53 = '';
    for (var _0x2ae5af = 0x0, _0x9f357a, _0x250723, _0x31183b = 0x0; _0x250723 = _0x17c880['charAt'](_0x31183b++); ~_0x250723 && (_0x9f357a = _0x2ae5af % 0x4 ? _0x9f357a * 0x40 + _0x250723 : _0x250723,
    _0x2ae5af++ % 0x4) ? _0x2eee7e += String['fromCharCode'](0xff & _0x9f357a >> (-0x2 * _0x2ae5af & 0x6)) : 0x0) {
        _0x250723 = _0x5ad2d9['indexOf'](_0x250723);
    }
    for (var _0x451a1b = 0x0, _0x553d6f = _0x2eee7e['length']; _0x451a1b < _0x553d6f; _0x451a1b++) {
        _0x51ff53 += '%' + ('00' + _0x2eee7e['charCodeAt'](_0x451a1b)['toString'](0x10))['slice'](-0x2);
    }
    return decodeURIComponent(_0x51ff53);
};
```
> This is the shitty chinese base64 implementation

```javascript
function decodeBase64(encodedString) {
    const base64Chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
    let decodedString = '';
    let tempBuffer = '';
    let buffer = '';
    for (let i = 0; i < encodedString.length; i++) {
        let currentChar = encodedString.charAt(i);
        let index = base64Chars.indexOf(currentChar);
        if (index !== -1) {
            // If the index is valid, process the Base64 encoding
            tempBuffer = tempBuffer + index.toString(2).padStart(6, '0');
            if (tempBuffer.length >= 8) {
                buffer += String.fromCharCode(parseInt(tempBuffer.substring(0, 8), 2));
                tempBuffer = tempBuffer.substring(8);
            }
        }
    }
    // Convert decoded buffer to a string and handle special characters
    for (let i = 0; i < buffer.length; i++) {
        decodedString += '%' + ('00' + buffer.charCodeAt(i).toString(16)).slice(-2);
    }
    return decodeURIComponent(decodedString);
}

```
> Humanified with chatGPT

![image](https://github.com/user-attachments/assets/0b8fdb92-e88f-4f3e-a308-8915ef6b5ef1)
> Debugger screenshot

```javascript

```
> console log decodeURIComponent(_0x51ff53);
