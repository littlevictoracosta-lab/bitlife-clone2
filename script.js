// script.js
let player = {
    name: "Alex",
    age: 0,
    happiness: 100,
    health: 100,
    bankBalance: 0,
    log: ["You were born."]
};

function ageUp() {
    player.age++;
    
    // Randomize some stat changes
    player.happiness -= Math.floor(Math.random() * 5);
    player.health -= Math.floor(Math.random() * 2);
    
    // Trigger a random event
    const events = [
        "You started preschool.",
        "You made a new friend named Sam.",
        "You found $5 on the sidewalk.",
        "You caught a cold."
    ];
    let randomEvent = events[Math.floor(Math.random() * events.length)];
    player.log.push(`Age ${player.age}: ${randomEvent}`);

    updateUI();
}

function updateUI() {
    document.getElementById('age').innerText = player.age;
    document.getElementById('happiness').innerText = player.happiness + "%";
    document.getElementById('log').innerHTML = player.log.map(line => `<p>${line}</p>`).join('');
}