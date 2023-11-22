

// importing samples from samples.json

/*
let promiseSamples = loadSamplesData("samples.json");

function makeSamples(obj) {
    
}

*/


const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");


/*
// initalizing tone.js transport
Tone.Transport.bpm.value = 120;

Tone.Transport.start();

*/