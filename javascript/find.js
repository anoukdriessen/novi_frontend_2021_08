// de find methode geeft de eerste waarde terug die voldoet aan de conditie is gesteld is
const students = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
        averageGrade: 7,
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
        averageGrade: 6,
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
        averageGrade: 7.5,
    },
];

const specificStudent = students.find((student) => {
    return student.name === 'Marieke Smit';
});

// alle elementen
console.log(students);
// het element dat als EERSTE gevonden wordt die voldoet aan een specifieke conditie
console.log(specificStudent);