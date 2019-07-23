(function() {
    rxjs.fromEvent(document.getElementById('container'), 'click')
        .pipe(
            rxjs.operators.take(5),
            // rxjs.operators.scan((acc) => {
            //     console.log("Scanning: " + (++acc));
            // }, 0),
            rxjs.operators.tap(result => {
                console.log("Tap")
                console.log(result.clientX, result.clientY);
            }),
            rxjs.operators.tap(
                result => {
                    console.log("Tap - Next")
                    console.log(`${result.clientX} - ${result.clientY}`)
                },
                error => {
                    console.log("Tap - Error")
                    // console.log(`${result.clientX} - ${result.clientY}`)
                },
                complete => {
                    console.log("Tap - Compelted")
                    // console.log(`${result.clientX} - ${result.clientY}`)
                },
            )
        )
        .subscribe( result => {
            console.log('Result');
            console.log(result);
        })
})();