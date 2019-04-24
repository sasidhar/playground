(function() {
    const name = "Sasidhar Vanga";
    const skills = [
        "HTML",
        "CSS",
        "JavaScript"
    ];
    const details = {
        firstName: "Sasidhar",
        lastName: "Vanga",
        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }

    console.log(`console.log("Name: " + name);`);
    console.log("Name: " + name);
    console.log('');

    console.log(`console.table(skills);`);
    console.table(skills);
    console.log('');

    console.log(`console.table(details);`);
    console.table(details);
    console.log('');

    console.group('Skills');
    for(let skill of skills) {
        console.log(skill);
    }
    console.groupEnd();
})();