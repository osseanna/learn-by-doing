const containerDiv = document.querySelector('.container');
document.addEventListener('keydown', (e) => {
    containerDiv.innerHTML = `<div class="box"><p>event.key</p> <div>${e.key}</div></div>
                            <div class="box"><p>event.keyCode</p> <div>${e.keyCode}</div></div>
                            <div class="box"><p>event.code</p> <div>${e.code}</div></div>`
})