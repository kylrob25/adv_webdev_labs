const display = document.getElementById("display");
const fruitArray = [
    "apple", "orange", "banana", "kiwi"
]
const ingredientsArray = [
    "feta", 'tomatoes', 'lettuce', 'olives', 'olive oil', 'vinegar', 'herbs', 'seasoning'
]

function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }
}

function german() {
    const array = [
        "eins",
        "zwei",
        "drei",
        "vier"
    ]

    const input = prompt("Enter a number between 1-4")

    if (input < 0 || input > 4) {
        alert("Invalid input!")
        return;
    }

    alert(array[input - 1])
}

function fruit() {
    clearDisplay()
    for (let i = 0; i < fruitArray.length; i++) {
        const node = document.createElement('p');
        node.appendChild(document.createTextNode(`Index ${i} contains ${fruitArray[i]}`))
        display.appendChild(node)
    }
}

function sortedFruit() {
    clearDisplay()
    fruitArray.sort();

    for (let i = 0; i < fruitArray.length; i++) {
        const node = document.createElement('p');
        node.appendChild(document.createTextNode(`Index ${i} contains ${fruitArray[i]}`))
        display.appendChild(node)
    }
}

function reversedFruit() {
    clearDisplay()
    fruitArray.reverse();

    for (let i = 0; i < fruitArray.length; i++) {
        const node = document.createElement('p');
        node.appendChild(document.createTextNode(`Index ${i} contains ${fruitArray[i]}`))
        display.appendChild(node)
    }
}

function ingredients() {
    clearDisplay()
    const node = document.createElement('ol')
    for (let ingredient of ingredientsArray) {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(ingredient))
        node.appendChild(li)
    }
    display.appendChild(node)
}

function ingredientsForm() {
    clearDisplay()

    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', 'http://tv-pi.duckdns.org/cgi-bin/reflect.cgi')

    for (let ingredient of ingredientsArray) {
        const input = document.createElement('input')
        input.setAttribute('name', 'shoppingList')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('value', ingredient)

        const label = document.createElement('label')
        label.setAttribute('for', ingredient)
        label.appendChild(document.createTextNode(ingredient))
        form.appendChild(label)

        form.appendChild(input)
    }

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    form.appendChild(submit)

    display.appendChild(form)
}