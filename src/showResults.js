const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
    // values.preventDefault(); if this is linked to non-reactForm event - needed
    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});