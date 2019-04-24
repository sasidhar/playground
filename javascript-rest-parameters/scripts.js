(function() {
    const a = function(first, ...remaining) {
        console.log('First: ', first);
        console.log('Remaining: ', remaining);
        console.log('');
    }

    console.log(`a()`);
    a();

    console.log(`a(1)`);
    a(1);

    console.log(`a(1,2)`);
    a(1,2);

    console.log(`a(1,2,3)`);
    a(1,2,3);

    console.log(`a("Sasidhar")`);
    a("Sasidhar");

    console.log(`a("Sasidhar", "Vanga")`);
    a("Sasidhar", "Vanga");

    console.log(`a(undefined, null)`);
    a(undefined, null);

    [first, second, ...remaining] = [1,2,3,4,5,6,7,8,9,10];
    console.log(`
        [first, second, ...remaining] = 
            [1,2,3,4,5,6,7,8,9,10];
    `);
    console.log("First: ", first);
    console.log("Second: ", second);
    console.log("Remaining: ", remaining);
})();