setInterval(() => {
    console.log('interval')
}, 100)

process.nextTick(function tick() {
    //console.log('in next Tick')
    process.nextTick(tick)
})
