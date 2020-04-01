function filteringData(array) {

    let obj = array.reduce((accu, element) => {
        if (element.type === 'Teacher') {
            accu.teacher.push(element);
        } else {
            accu.student.push(element);
        }
        return accu;
    }, {
        teacher: [],
        student: [],
    });

    return (type = 'teacher') => obj[type] && obj[type] || [];
}

module.exports = filteringData;
