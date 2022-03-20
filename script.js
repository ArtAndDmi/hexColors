function colorChange() {
    let hexCode = ''
    const hexNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexNums.length)
        hexCode += hexNums[index]
    }
    document.getElementById('hex-code').innerHTML = hexCode
    document.getElementsByTagName('body')[0].style.background = '#' + hexCode
}