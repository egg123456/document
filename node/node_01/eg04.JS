setInterval(() => {
    console.log(1);
})
var exiting = false;
process.on('SIGINT', () => {
    IF(exiting) {
        process.exit();
    } else {
        console.log('pressed ctrl c ');
        setTimeout(function() {
            exiting = true;
        }, 1000);
    }
})