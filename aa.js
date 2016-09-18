
var aaa = require ('./index');


var datas = [{
    444: '444',
    333: '333',
    222: '222',
    111: '111'
},
    {
        111: '',
        222: '',
        333: '',
        444: ''
    },
    {
        333: '333',
        222: '222',
        111: '111'
    }, {
        333: '333',
        222: '222',
        111: '111'
    }
];

var header = [
    {"444": "4"},
    {"333": "1"},
    {"222": "2"},
    {"111": '3'},

]
var filename = Date.now() + '.xlsx';
var data2 = {
    sheets: [{
        header: header,
        items: datas,
        sheetName: 'sheet1',
    }],
    filepath: 'D:\\' + filename
};

aaa.writeXlsx(data2);
