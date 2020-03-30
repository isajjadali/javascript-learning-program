const getData = require('./main-object');
const filteringData = require('./filtering-data');

getData()
    .then(res => {

        const filteredData = filteringData(res);

        console.log(filteredData('student'));

    })
