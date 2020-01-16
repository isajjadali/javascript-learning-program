let value = 20;

function changeGlobalValue() {
    value = 30; // changed global value
}

changeGlobalValue();

console.log(value, 'value is now changed from 20 t0 30');