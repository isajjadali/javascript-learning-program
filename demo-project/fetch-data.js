const getData = require('./main-object');
const filteringData = require('./filtering-data');

getData()
    .then(res => {

        const filteredData = filteringData(res);

        let students = filteredData('student');

        students.forEach(student => {

            student.subjects.forEach(subject => {
            
                let values = Object.values(subject.report.attendence);

                subject.report.attendenceAverage = (values.reduce((acc, element) => {
                    return acc + element;
                }, 0) / (values.length * 100)) * 100;

            })
        })

        console.log('--------------------------------------->>>>>');
        console.log(JSON.stringify(students[0], null, 2));
        console.log('--------------------------------------->>>>>');
        let teacher = filteredData();

    })


    // Conditons for progress
    // fail if less than 50
    // low if in between 50 to 60
    // average if in between 61 to 80
    // great if greater than 80
