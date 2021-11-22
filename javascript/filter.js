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

// Wat de filter() methode uit de callback verwacht, is de return value true of false
// Wanneer er true teruggegeven wordt zal de huidige entry worden toegevoegd aan de nieuwe array,
// wanneer er false wordt teruggegeven, wordt de huidige entry niet toegevoegd in de nieuwe array.

const bootcampStudents = students.filter((student) => {
    return student.course === 'FSD Bootcamp';
    // je kunt dit ook uitschrijven als:
    // if (student.course === 'FSD Bootcamp') {
    //    return true
    // }
})

// all elements
console.log(students);
// all elements who follow the course FSD Bootcamp
console.log(bootcampStudents);