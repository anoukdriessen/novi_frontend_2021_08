
// de methode map() geeft een nieuwe array terug waarin de waardes van de oude array + gemaakte aanvullingen staan
// de orginele array wordt niet aangepast
const studentsOfClass = ['Henk Jansen', 'Piet Pieters', 'Marieke Smit'];

// voor ieder element wordt er iets mee gedaan
studentsOfClass.map(() => {
    // drie elementen in array = 3 x print student!
    console.log('Student!');
});

// we willen iets doen met de waarde van iedere entry
const prefixedStudents = studentsOfClass.map((student) => {
    return 'Leerling: ' + student;
});

console.log(studentsOfClass);
console.log(prefixedStudents);

// in de praktijk zien we vaak objecten in de array
const studentObjects = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
    },
];
console.log(studentObjects);

const prefixedStudentNames = studentObjects.map((student) => {
    return 'Leerling: ' + student.name;
});
const prefixedStudentCourses = studentObjects.map((student) => {
    return 'Leerling ' + student.name + ' volgt cursus: ' + student.course
});

console.log(prefixedStudentNames);
console.log(prefixedStudentCourses);
