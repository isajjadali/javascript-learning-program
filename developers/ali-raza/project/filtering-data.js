const getorderdata = require('./order-object');

function filteringData(array) {

    let obj = [];

    array.forEach(element => {
        obj.push(getorderdata(element.id));
    });

    return Promise.all(obj)
        .then(res => {
            res.forEach((ele, index) => {
                array[index].orders = ele[index];
            });
            return (userId) => array.filter(filVal => filVal.id === userId);  // use find instead of filter
        });

}

module.exports = filteringData;

// Excellent
