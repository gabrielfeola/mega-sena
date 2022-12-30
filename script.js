function megaOfTurn(games) {
    let result = []

    for (let i=0; i < games; i++) {
        result = []
        for (let i=0; i < 6; i++) {
            let randomNum = Math.floor (Math.random() * (1, 60) + 1)
            !result.includes(randomNum) ? result.push(randomNum) : i--
        }
        result.sort((a,b) => a-b)

        let list = document.getElementById("result-list")
        let li = document.createElement("li")
        li.innerText = result
        list.appendChild(li)
    }
}

function submit() {
    let clearList = document.getElementById('result-list')
    clearList.innerHTML = ''
    let input = document.getElementById('quantity').value
    megaOfTurn(input)
    document.getElementById('quantity').value=''
}