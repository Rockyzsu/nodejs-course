const string = "This page \u00A9 Shelley Powers";
console.log(string);

const hamburgeryStore = "Hamburgery\u2122";
console.log(hamburgeryStore);

const hamburgeryStore2 = "Hamburgery " + String.fromCodePoint(0x1f354);
console.log(hamburgeryStore2);
