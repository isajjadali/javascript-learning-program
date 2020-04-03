const Student = require('./student');
const Teacher = require('./teacher');

let array = [
    new Teacher(1, 'Sajjad', 'Ali', {
        day: 20,
        month: 6,
        year: 1995
    }, {
        street: 'Garhi Shahu',
        houseNo: 2,
        city: 'lahore'
    }),
    new Student(5, 'Ammar', 'Hameed', {
        day: 18,
        month: 6,
        year: 1994
    }, {
        street: 'Iqbal Town',
        houseNo: 8,
        city: 'lahore'
    }, [
        {
            subjectName: 'english',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 90,
                classParticipation: 60,
            },
            teacherId: 1,
        },
        {
            subjectName: 'urdu',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 80,
                classParticipation: 70,
            },
            teacherId: 2,
        },
        {
            subjectName: 'math',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 90,
                classParticipation: 70,
            },
            teacherId: 1,
        },
        {
            subjectName: 'islamiyat',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 100,
                classParticipation: 87,
            },
            teacherId: 3,
        },
        {
            subjectName: 'computer',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 89,
                classParticipation: 69,
            },
            teacherId: 4,
        }
    ]),
    new Teacher(2, 'Taimoor', 'Ali', {
        day: 21,
        month: 7,
        year: 1996
    }, {
        street: 'Pia Society',
        houseNo: 3,
        city: 'lahore'
    }),
    new Teacher(3, 'Naqi', 'Ali', {
        day: 22,
        month: 8,
        year: 1994
    }, {
        street: 'Modal Town',
        houseNo: 9,
        city: 'lahore'
    }),
    new Student(7, 'Hamza', 'Malik', {
        day: 12,
        month: 9,
        year: 2000
    }, {
        street: 'Iqbal Town',
        houseNo: 8,
        city: 'lahore'
    }, [
        {
            subjectName: 'english',
            report: {
                attendence: {
                    monday: 80,
                    tuesday: 91,
                    wednesday: 70,
                    thursday: 20,
                    friday: 35,
                },
                marks: 85,
                classParticipation: 80,
            },
            teacherId: 3,
        },
        {
            subjectName: 'urdu',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 52,
                classParticipation: 70,
            },
            teacherId: 2,
        },
        {
            subjectName: 'math',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 90,
                classParticipation: 70,
            },
            teacherId: 1,
        },
        {
            subjectName: 'islamiyat',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 100,
                classParticipation: 87,
            },
            teacherId: 2,
        },
        {
            subjectName: 'computer',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 89,
                classParticipation: 69,
            },
            teacherId: 4,
        }
    ]),
    new Teacher(4, 'Hassan', 'Ali', {
        day: 28,
        month: 4,
        year: 1992
    }, {
        street: 'Faisal Town',
        houseNo: 4,
        city: 'lahore'
    }),
    new Student(6, 'Ali', 'Raza', {
        day: 19,
        month: 8,
        year: 1993
    }, {
        street: 'Modal Town',
        houseNo: 8,
        city: 'lahore'
    }, [
        {
            subjectName: 'english',
            report: {
                attendence: {
                    monday: 80,
                    tuesday: 91,
                    wednesday: 70,
                    thursday: 20,
                    friday: 35,
                },
                marks: 20,
                classParticipation: 20,
            },
            teacherId: 2,
        },
        {
            subjectName: 'urdu',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 49,
                classParticipation: 70,
            },
            teacherId: 1,
        },
        {
            subjectName: 'math',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 90,
                classParticipation: 70,
            },
            teacherId: 4,
        },
        {
            subjectName: 'islamiyat',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 10,
                classParticipation: 27,
            },
            teacherId: 2,
        },
        {
            subjectName: 'computer',
            report: {
                attendence: {
                    monday: 90,
                    tuesday: 91,
                    wednesday: 80,
                    thursday: 92,
                    friday: 78,
                },
                marks: 89,
                classParticipation: 69,
            },
            teacherId: 1,
        }
    ]),
];

module.exports = function () {
    return new Promise((res, rej) => {
        res(array);
    })
};

