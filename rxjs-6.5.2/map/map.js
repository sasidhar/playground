(function() {
    rxjs.fromEvent(document.getElementById('container'), 'click')
        .pipe(
            rxjs.operators.tap(result => {
                console.log(result);
            }),
            rxjs.operators.map(result => {
                return {x: result.clientX, y: result.clientY}
            })
        )
        .subscribe( result => {
            console.log('Result');
            console.log(result);
        })
})();