let value = 30;

function changeGlobalValue() {
    value = 40; // changed global value
}

changeGlobalValue();

console.log(value, 'value is now changed from 30 t0 40');