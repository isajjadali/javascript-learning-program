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

                let finalPercentage = ((subject.report.attendenceAverage + subject.report.marks + subject.report.classParticipation) / 300) * 100;
                subject.report.finalPercentage = finalPercentage;
                if (finalPercentage < 50) {
                    subject.report.progress = 'fail';
                }
                else if (finalPercentage < 60) {
                    subject.report.progress = 'low';
                }
                else if (finalPercentage < 80) {
                    subject.report.progress = 'average';
                }
                else {
                    subject.report.progress = 'great';
                }
            });
        });

        let teacher = filteredData();

        const resultAgainstTeacherId1 = getStudentsAgainstTeacherId(1, students, 'fail');
        const resultAgainstTeacherId2 = getStudentsAgainstTeacherId(2, students, 'fail');

        console.log('With respect to teacherId ', resultAgainstTeacherId2.filter(student => student.isFailed).length);

        console.log('With respect to subjects ', resultAgainstTeacherId2.reduce((acc, element) => {
            acc += element.failedStudentCount;
            return acc;
        }, 0));

    });


function getStudentsAgainstTeacherId(teacherId = '', students, progress = '') {
    const tempStudents = JSON.parse(JSON.stringify(students));

    tempStudents.forEach(student => {
        student.isFailed = student.subjects
            .filter(subject => subject.teacherId === teacherId)
            .some(subject => subject.report.progress === progress);
    });

    tempStudents.forEach(student => {
        student.failedStudentCount = (student.subjects
            .filter(subject => subject.teacherId === teacherId && subject.report.progress === progress)).length;
    });

    return tempStudents;
}

    // Conditons for progress
    // fail if less than 50
    // low if in between 50 to 60
    // average if in between 61 to 80
    // great if greater than 80
