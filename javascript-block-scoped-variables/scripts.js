(function() {
    const name = "Sasidhar";
    console.log(`Before for loop: ${name}`);
    for (let a = 0; a < 10; a++) {
        const name = "Sasidhar Vanga";
        console.log(`${a + 1}. Inside for loop: ${name}`);
    }
    console.log(`After for loop: ${name}`);
})();