const jexcel = require('./index');
const path = require('path');
const filename = Date.now() + '.xlsx';
var data = {
  sheets: [
    {
      header: [{ author: 'mapName' }, { title: 'maptitle' }],
      items: [
        {
          author: 'icezeros',
          title: 'how to use this',
        },
        {
          author: 'ice',
          title: 'so Easy',
        },
      ],
      sheetName: 'sheet1',
    },
  ],
  filepath: path.join(__dirname, filename),
};
//
jexcel.writeXlsx(data);
