(function() {

    // Example 1: Printing Variables
    let animal1 = "brown fox";
    let animal2 = "lazy dog";
    console.log(`
        The quick ${animal1}
        jumps over the ${animal2}
    `);

    // Example 2: Escaping $ and {}
    console.log(`
        $\{animal1} is ${animal1}
        \${animal2} is ${animal2}
    `);

    // Example 2: Mathematical Operators
    let a = 10;
    let b = 5;
    console.log(`
        Additon: ${a} + ${b} = ${10 + 5}
        Subtraction: ${a} - ${b} = ${10 - 5}
        Multiplication: ${a} * ${b} = ${10 * 5}
        Division: ${a} / ${b} = ${10 / 5}
        Modulous: ${a} % ${b} = ${10 % 5}
    `);

})();