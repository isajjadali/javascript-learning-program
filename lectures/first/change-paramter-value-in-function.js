let value = 20;

function changeGlobalValue(value) {
    value = 30; // changed parameter value
    console.log(value, 'Parameter value');
}

changeGlobalValue(value);

console.log(value, 'global value remain same');