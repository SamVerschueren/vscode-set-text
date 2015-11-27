# vscode-set-text

> An easy-to-use VS Code `#setText()` method


## Install

```
$ npm install --save vscode-set-text
```


## Usage

```js
import setText from 'vscode-set-text';

setText('new text');
```


## API

### setText(text, [editor])

Returns a promise.

#### text

Type: `string`

Text you want to set in the editor

#### editor

Type: `vscode.TextEditor`  
Default: `window.activeTextEditor`

Editor to set the text in.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
