# json2excel


## Quick start

Install
```bash
npm install xls-write
```

Example
```node
var jexcel = require('xls-write');

var data = {
    sheets: [{
        header: [
            { author: 'mapName' },
            { title: 'maptitle' }
        ],
        items: [
            {
                author: 'icezeros',
                title: 'how to use this'
            },
            {
                author: 'ice',
                title: 'so Easy'
            }
        ],
        sheetName: 'sheet1',
    }],
    filepath: 'j2x.xlsx'
}

jexcel.j2e(data, function (err) {
    console.log('finish')
});

```