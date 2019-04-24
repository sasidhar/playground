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

})();