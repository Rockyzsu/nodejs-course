for (var i = 0; i < 10; i++) {
    setTimeout(
        function delay() {
            console.log(i)
        },
        i * 10
    )
}
