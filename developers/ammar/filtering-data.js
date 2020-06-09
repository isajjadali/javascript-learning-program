const getorderdata = require('./order-object');

function filteringData(filterary) {

    let obj = [];

    filterary.forEach(element => {
        obj.push(getorderdata(element.id));
    });

    return Promise.all(obj)
        .then(res => {

            res.forEach((ele, index) => {

                filterary[index].orders = ele[index];
            });
            return (userId) => filterary.filter(filVal => filVal.id === userId); // use find instead of filter
        });

}

module.exports = filteringData;

// Excellent
