const Tone = require('tone');

// Define the samples from JSON
const samples = require('./samples.json');

const audioContext = new Tone.Context();

const buffers = {};
Object.keys(samples).forEach(sampleName => {
    buffers[sampleName] = new Tone.Buffer(samples[sampleName].file, () => {
         console.log(`Sample ${sampleName} loaded`);
    });
});

// Event listeners -> buttons
const buttons = document.querySelectorAll('.trackGroup button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sampleName = button.dataset.sound;
        const sampleBuffer = buffers[sampleName];

        const player = new Tone.Player({ buffer: sampleBuffer }).toDestination();

        // Play the sample
        player.start();


        //const tempo = Tone.Transport.bpm.value;

    });
});

