(function() {
    const a = () => {
        b();
    };
    const b = () => {
        c();
    }
    const c = () => {
        console.log(new Error().stack)
    }

    a();
})();