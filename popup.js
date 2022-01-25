const button = document.getElementById('button')
button.addEventListener('click',() => {
    let urlBox = document.getElementById('urlBox')
    window.open(urlBox.value, "window", "scrollbars=yes,status=no,toolbar=no,location=no,menubar=no,directories=no,resizable=yes");
})
