import { useState, useEffect, useRef, useMemo } from "react";

// ═══════════════════════════════════════════════════════════════════
// DEFAULT GAME DATA  (no rarity anywhere)
// ═══════════════════════════════════════════════════════════════════

const DEFAULT_GAMES = {
  steal_a_brainrot: {
    id: "steal_a_brainrot",
    name: "Steal a Brainrot",
    icon: "🧠",
    description: "The original brainrot tycoon",
    color: "#e74c3c",
    mutations: ["None", "Gold", "Diamond", "Rainbow", "Galaxy", "Bloodrot", "Candy", "Cursed", "Divine", "Lava", "Radioactive", "Yin Yang"],
    pets: [
      { name: "Noobini Pizzanini", baseMs: 1, highMs: 0 },
      { name: "Lirilì Larilà", baseMs: 3, highMs: 0 },
      { name: "Tim Cheese", baseMs: 5, highMs: 0 },
      { name: "Fluriflura", baseMs: 7, highMs: 0 },
      { name: "Talpa Di Fero", baseMs: 9, highMs: 0 },
      { name: "Noobini Santanini", baseMs: 11, highMs: 0 },
      { name: "Svinina Bombardino", baseMs: 10, highMs: 0 },
      { name: "Raccooni Jandelini", baseMs: 12, highMs: 0 },
      { name: "Pipi Kiwi", baseMs: 13, highMs: 0 },
      { name: "Tartaragno", baseMs: 13, highMs: 0 },
      { name: "Pipi Corni", baseMs: 14, highMs: 0 },
      { name: "Trippi Troppi", baseMs: 15, highMs: 0 },
      { name: "Gangster Footera", baseMs: 30, highMs: 0 },
      { name: "Bandito Bobritto", baseMs: 35, highMs: 0 },
      { name: "Boneca Ambalabu", baseMs: 40, highMs: 0 },
      { name: "Cacto Hipopotamo", baseMs: 50, highMs: 0 },
      { name: "Ta Ta Ta Ta Sahur", baseMs: 55, highMs: 0 },
      { name: "Tric Trac Baraboom", baseMs: 65, highMs: 0 },
      { name: "Frogo Elfo", baseMs: 67, highMs: 0 },
      { name: "Pipi Avocado", baseMs: 70, highMs: 0 },
      { name: "Pinealotto Fruttarino", baseMs: 75, highMs: 0 },
      { name: "Cappuccino Assassino", baseMs: 75, highMs: 0 },
      { name: "Bandito Axolito", baseMs: 90, highMs: 0 },
      { name: "Brr Brr Patapim", baseMs: 100, highMs: 0 },
      { name: "Avocadini Antilopini", baseMs: 115, highMs: 0 },
      { name: "Trulimero Trulicina", baseMs: 125, highMs: 0 },
      { name: "Bambini Crostini", baseMs: 135, highMs: 0 },
      { name: "Malame Amarele", baseMs: 140, highMs: 0 },
      { name: "Bananita Dolphinita", baseMs: 150, highMs: 0 },
      { name: "Perochello Lemonchello", baseMs: 160, highMs: 0 },
      { name: "Brri Brri Bicus Dicus Bombicus", baseMs: 175, highMs: 0 },
      { name: "Avocadini Guffo", baseMs: 225, highMs: 0 },
      { name: "Ti Ti Ti Sahur", baseMs: 225, highMs: 0 },
      { name: "Mangolini Parrocini", baseMs: 235, highMs: 0 },
      { name: "Frogato Pirato", baseMs: 240, highMs: 0 },
      { name: "Salamino Penguino", baseMs: 250, highMs: 0 },
      { name: "Doi Doi Do", baseMs: 260, highMs: 0 },
      { name: "Penguin Tree", baseMs: 270, highMs: 0 },
      { name: "Wombo Rollo", baseMs: 275, highMs: 0 },
      { name: "Penguino Cocosino", baseMs: 300, highMs: 0 },
      { name: "Mummio Rappitto", baseMs: 325, highMs: 0 },
      { name: "Chimpanzini Bananini", baseMs: 300, highMs: 0 },
      { name: "Tirilikalika Tirilikalako", baseMs: 450, highMs: 0 },
      { name: "Ballerina Cappuccina", baseMs: 500, highMs: 0 },
      { name: "Burbaloni Loliloli", baseMs: 600, highMs: 0 },
      { name: "Chef Crabracadabra", baseMs: 600, highMs: 0 },
      { name: "Lionel Cactuseli", baseMs: 650, highMs: 0 },
      { name: "Glorbo Fruttodrillo", baseMs: 750, highMs: 0 },
      { name: "Quivoli Ameleoni", baseMs: 900, highMs: 0 },
      { name: "Blueberrinni Octopusini", baseMs: 1000, highMs: 0 },
      { name: "Caramello Filtrello", baseMs: 1000, highMs: 0 },
      { name: "Pipi Potato", baseMs: 1100, highMs: 0 },
      { name: "Strawberrelli Flamingelli", baseMs: 1100, highMs: 0 },
      { name: "Cocosini Mama", baseMs: 1200, highMs: 0 },
      { name: "Pandaccini Bananini", baseMs: 1250, highMs: 0 },
      { name: "Quackula", baseMs: 1200, highMs: 0 },
      { name: "Pi Pi Watermelon", baseMs: 1300, highMs: 0 },
      { name: "Signore Carapace", baseMs: 1300, highMs: 0 },
      { name: "Sigma Boy", baseMs: 1350, highMs: 0 },
      { name: "Chocco Bunny", baseMs: 1400, highMs: 0 },
      { name: "Puffaball", baseMs: 1500, highMs: 0 },
      { name: "Sigma Girl", baseMs: 1800, highMs: 0 },
      { name: "Sealo Regalo", baseMs: 1800, highMs: 0 },
      { name: "Buho de Fuego", baseMs: 1800, highMs: 0 },
      { name: "Frigo Camelo", baseMs: 1900, highMs: 0 },
      { name: "Orangutini Ananassini", baseMs: 2000, highMs: 0 },
      { name: "Rhino Toasterino", baseMs: 2100, highMs: 0 },
      { name: "Bombardiro Crocodilo", baseMs: 2500, highMs: 0 },
      { name: "Spioniro Golubiro", baseMs: 3500, highMs: 0 },
      { name: "Bombombini Gusini", baseMs: 5000, highMs: 0 },
      { name: "Zibra Zubra Zibralini", baseMs: 6000, highMs: 0 },
      { name: "Tigrilini Watermelini", baseMs: 6500, highMs: 0 },
      { name: "Avocadorilla", baseMs: 7000, highMs: 0 },
      { name: "Cavallo Virtuoso", baseMs: 7500, highMs: 0 },
      { name: "Gorillo Subwoofero", baseMs: 7700, highMs: 0 },
      { name: "Gorillo Watermelondrillo", baseMs: 8000, highMs: 0 },
      { name: "Stoppo Luminino", baseMs: 8000, highMs: 0 },
      { name: "Ganganzelli Trulala", baseMs: 9000, highMs: 0 },
      { name: "Lerulerulerule", baseMs: 8700, highMs: 0 },
      { name: "Tob Tobi Tobi", baseMs: 8500, highMs: 0 },
      { name: "Te Te Te Sahur", baseMs: 9500, highMs: 0 },
      { name: "Rhino Helicopterino", baseMs: 11000, highMs: 0 },
      { name: "Magi Ribbitini", baseMs: 11500, highMs: 0 },
      { name: "Tracoducotulu Delapeladustuz", baseMs: 12000, highMs: 0 },
      { name: "Jingle Jingle Sahur", baseMs: 12200, highMs: 0 },
      { name: "Los Noobinis", baseMs: 12500, highMs: 0 },
      { name: "Spongini Quackini", baseMs: 13000, highMs: 0 },
      { name: "Cachorrito Melonito", baseMs: 13000, highMs: 0 },
      { name: "Carloo", baseMs: 13500, highMs: 0 },
      { name: "Elefanto Frigo", baseMs: 14000, highMs: 0 },
      { name: "Carrotini Brainini", baseMs: 15000, highMs: 0 },
      { name: "Centrucci Nuclucci", baseMs: 15500, highMs: 0 },
      { name: "Toiletto Focaccino", baseMs: 16000, highMs: 0 },
      { name: "Jacko Spaventosa", baseMs: 16200, highMs: 0 },
      { name: "Bananito Bandito", baseMs: 16500, highMs: 0 },
      { name: "Tree Tree Tree Sahur", baseMs: 17000, highMs: 0 },
      { name: "Fizzy Soda", baseMs: 17200, highMs: 0 },
      { name: "Cocofanto Elefanto", baseMs: 17500, highMs: 0 },
      { name: "Antonio", baseMs: 18500, highMs: 0 },
      { name: "Girafa Celestre", baseMs: 20000, highMs: 0 },
      { name: "Gattatino Neonino", baseMs: 35000, highMs: 0 },
      { name: "Gattatino Nyanino", baseMs: 35000, highMs: 0 },
      { name: "Chihuanini Taconini", baseMs: 45000, highMs: 0 },
      { name: "Matteo", baseMs: 50000, highMs: 0 },
      { name: "Tralalero Tralala", baseMs: 50000, highMs: 0 },
      { name: "Los Crocodillitos", baseMs: 55000, highMs: 0 },
      { name: "Tigroligre Frutonni", baseMs: 60000, highMs: 0 },
      { name: "Odin Din Din Dun", baseMs: 75000, highMs: 0 },
      { name: "Money Money Man", baseMs: 65000, highMs: 0 },
      { name: "Alessio", baseMs: 85000, highMs: 0 },
      { name: "Tralalita Tralala", baseMs: 100000, highMs: 0 },
      { name: "Statutino Libertino", baseMs: 75000, highMs: 0 },
      { name: "Tipi Topi Taco", baseMs: 75000, highMs: 0 },
      { name: "Unclito Samito", baseMs: 75000, highMs: 0 },
      { name: "Tukanno Bananno", baseMs: 100000, highMs: 0 },
      { name: "Extinct Ballerina", baseMs: 125000, highMs: 0 },
      { name: "Vampira Cappucina", baseMs: 125000, highMs: 0 },
      { name: "Espresso Signora", baseMs: 70000, highMs: 0 },
      { name: "Orcalero Orcala", baseMs: 100000, highMs: 0 },
      { name: "Jacko Jack Jack", baseMs: 150000, highMs: 0 },
      { name: "Urubini Flamenguini", baseMs: 150000, highMs: 0 },
      { name: "Trippi Troppi Troppa Trippa", baseMs: 175000, highMs: 0 },
      { name: "Capi Taco", baseMs: 155000, highMs: 0 },
      { name: "Los Chihuaninis", baseMs: 160000, highMs: 0 },
      { name: "Gattito Tacoto", baseMs: 165000, highMs: 0 },
      { name: "Las Capuchinas", baseMs: 185000, highMs: 0 },
      { name: "Bulbito Bandito Traktorito", baseMs: 205000, highMs: 0 },
      { name: "Ballerino Lololo", baseMs: 200000, highMs: 0 },
      { name: "Los Tungtungtungcitos", baseMs: 210000, highMs: 0 },
      { name: "Ballerina Peppermintina", baseMs: 215000, highMs: 0 },
      { name: "Pakrahmatmamat", baseMs: 215000, highMs: 0 },
      { name: "Brr es Teh Patipum", baseMs: 225000, highMs: 0 },
      { name: "Piccione Macchina", baseMs: 225000, highMs: 0 },
      { name: "Pakrahmatmatina", baseMs: 225000, highMs: 0 },
      { name: "Los Bombinitos", baseMs: 220000, highMs: 0 },
      { name: "Tractoro Dinosauro", baseMs: 230000, highMs: 0 },
      { name: "Los Orcalitos", baseMs: 235000, highMs: 0 },
      { name: "Cacasito Satalito", baseMs: 240000, highMs: 0 },
      { name: "Orcalita Orcala", baseMs: 240000, highMs: 0 },
      { name: "Corn Corn Corn Sahur", baseMs: 250000, highMs: 0 },
      { name: "Mummy Ambalabu", baseMs: 250000, highMs: 0 },
      { name: "Snailenzo", baseMs: 250000, highMs: 0 },
      { name: "Squalanana", baseMs: 250000, highMs: 0 },
      { name: "Tartaruga Cisterna", baseMs: 250000, highMs: 0 },
      { name: "Dug dug dug", baseMs: 255000, highMs: 0 },
      { name: "Ginger Globo", baseMs: 257500, highMs: 0 },
      { name: "Yeti Claus", baseMs: 257500, highMs: 0 },
      { name: "Crabbo Limonetta", baseMs: 235000, highMs: 0 },
      { name: "Granchiello Spiritell", baseMs: 260000, highMs: 0 },
      { name: "Los Tipi Tacos", baseMs: 260000, highMs: 0 },
      { name: "Frio Ninja", baseMs: 265000, highMs: 0 },
      { name: "Buho De Noelo", baseMs: 267500, highMs: 0 },
      { name: "Boba Panda", baseMs: 270000, highMs: 0 },
      { name: "Piccionetta Macchina", baseMs: 270000, highMs: 0 },
      { name: "Bambu Bambu Sahur", baseMs: 275000, highMs: 0 },
      { name: "Los Gattitos", baseMs: 275000, highMs: 0 },
      { name: "Mastodontico Telepiedone", baseMs: 275000, highMs: 0 },
      { name: "Chrismasmamat", baseMs: 277500, highMs: 0 },
      { name: "Anpali Babel", baseMs: 280000, highMs: 0 },
      { name: "Cappuccino Clownino", baseMs: 285000, highMs: 0 },
      { name: "Bombardini Tortinii", baseMs: 225000, highMs: 0 },
      { name: "Brasilini Berimbini", baseMs: 285000, highMs: 0 },
      { name: "Belula Beluga", baseMs: 290000, highMs: 0 },
      { name: "Krupuk Pagi Pagi", baseMs: 290000, highMs: 0 },
      { name: "Skull Skull Skull", baseMs: 290000, highMs: 0 },
      { name: "Cocoa Assassino", baseMs: 291000, highMs: 0 },
      { name: "Tentacolo Tecnico", baseMs: 292500, highMs: 0 },
      { name: "Ginger Cisterna", baseMs: 293500, highMs: 0 },
      { name: "Pandanini Frostini", baseMs: 294000, highMs: 0 },
      { name: "Dolphini Jetskini", baseMs: 294500, highMs: 0 },
      { name: "Pop Pop Sahur", baseMs: 295000, highMs: 0 },
      { name: "Noo La Polizia", baseMs: 280000, highMs: 0 },
      { name: "La Vacca Saturno Saturnita", baseMs: 300000, highMs: 0 },
      { name: "Bisonte Giuppitere", baseMs: 300000, highMs: 0 },
      { name: "Blackhole Goat", baseMs: 400000, highMs: 0 },
      { name: "Sammyni Spyderini", baseMs: 325000, highMs: 0 },
      { name: "Agarrini La Palini", baseMs: 425000, highMs: 0 },
      { name: "Jackorilla", baseMs: 315000, highMs: 0 },
      { name: "Chachechi", baseMs: 400000, highMs: 0 },
      { name: "Chimpanzini Spiderini", baseMs: 325000, highMs: 0 },
      { name: "Los Matteos", baseMs: 300000, highMs: 0 },
      { name: "Los Tortus", baseMs: 500000, highMs: 0 },
      { name: "Los Tralaleritos", baseMs: 500000, highMs: 0 },
      { name: "La Cucaracha", baseMs: 475000, highMs: 0 },
      { name: "Vulturino Skeletono", baseMs: 500000, highMs: 0 },
      { name: "Boatito Auratito", baseMs: 525000, highMs: 0 },
      { name: "Extinct Tralalero", baseMs: 450000, highMs: 0 },
      { name: "Fragola La La La", baseMs: 450000, highMs: 0 },
      { name: "Los Spyderinis", baseMs: 425000, highMs: 0 },
      { name: "Torrtuginni Dragonfrutini", baseMs: 350000, highMs: 0 },
      { name: "Zombie Tralala", baseMs: 500000, highMs: 0 },
      { name: "Yess my examine", baseMs: 575000, highMs: 0 },
      { name: "Extinct Matteo", baseMs: 625000, highMs: 0 },
      { name: "Dul Dul Dul", baseMs: 375000, highMs: 0 },
      { name: "Guerriro Digitale", baseMs: 550000, highMs: 0 },
      { name: "Las Tralaleritas", baseMs: 650000, highMs: 0 },
      { name: "La Karkerkar Combinasion", baseMs: 600000, highMs: 0 },
      { name: "La Vacca Presente", baseMs: 600000, highMs: 0 },
      { name: "Reindeer Tralala", baseMs: 600000, highMs: 0 },
      { name: "Pumpkini Spyderini", baseMs: 650000, highMs: 0 },
      { name: "Los Trios", baseMs: 700000, highMs: 0 },
      { name: "Frankentteo", baseMs: 700000, highMs: 0 },
      { name: "Job Job Job Sahur", baseMs: 700000, highMs: 0 },
      { name: "Karker Sahur", baseMs: 725000, highMs: 0 },
      { name: "Las Vaquitas Saturnitas", baseMs: 750000, highMs: 0 },
      { name: "Los Karkeritos", baseMs: 750000, highMs: 0 },
      { name: "Santteo", baseMs: 800000, highMs: 0 },
      { name: "La Vacca Jacko Linterino", baseMs: 850000, highMs: 0 },
      { name: "Triplito Tralaleritos", baseMs: 875000, highMs: 0 },
      { name: "Trickolino", baseMs: 900000, highMs: 0 },
      { name: "GOAT", baseMs: 950000, highMs: 0 },
      { name: "Giftini Spyderini", baseMs: 999900, highMs: 0 },
      { name: "Graipuss Medussi", baseMs: 1000000, highMs: 0 },
      { name: "Perrito Burrito", baseMs: 1000000, highMs: 0 },
      { name: "1x1x1x1", baseMs: 1100000, highMs: 0 },
      { name: "Please my Present", baseMs: 1300000, highMs: 0 },
      { name: "Cuadramat and Pakrahmatmamat", baseMs: 1400000, highMs: 0 },
      { name: "Bunnyman", baseMs: 1500000, highMs: 0 },
      { name: "Tung Tung Tung Sahur", baseMs: 1500000, highMs: 0 },
      { name: "Los Jobcitos", baseMs: 1500000, highMs: 0 },
      { name: "Nooo My Hotspot", baseMs: 1500000, highMs: 0 },
      { name: "Noo my examine", baseMs: 1700000, highMs: 0 },
      { name: "La Sahur Combinasion", baseMs: 2000000, highMs: 0 },
      { name: "List List List Sahur", baseMs: 2000000, highMs: 0 },
      { name: "Telemorte", baseMs: 2000000, highMs: 0 },
      { name: "To to to sahur", baseMs: 2250000, highMs: 0 },
      { name: "Pirulitoita Bicicleteira", baseMs: 2500000, highMs: 0 },
      { name: "25", baseMs: 2500000, highMs: 0 },
      { name: "Pot Hotspot", baseMs: 2500000, highMs: 0 },
      { name: "Santa Hotspot", baseMs: 2600000, highMs: 0 },
      { name: "Horegini Boom", baseMs: 2750000, highMs: 0 },
      { name: "Pot Pumpkin", baseMs: 3000000, highMs: 0 },
      { name: "Naughty Naughty", baseMs: 3000000, highMs: 0 },
      { name: "Quesadilla Crocodila", baseMs: 3000000, highMs: 0 },
      { name: "Ho Ho Ho Sahur", baseMs: 3200000, highMs: 0 },
      { name: "Chicleteira Bicicleteira", baseMs: 3500000, highMs: 0 },
      { name: "Brunito Marsito", baseMs: 3500000, highMs: 0 },
      { name: "Quesadillo Vampiro", baseMs: 3500000, highMs: 0 },
      { name: "Burrito Bandito", baseMs: 4000000, highMs: 0 },
      { name: "Chill Puppy", baseMs: 4000000, highMs: 0 },
      { name: "Los Quesadillas", baseMs: 4500000, highMs: 0 },
      { name: "Noo my candy", baseMs: 5000000, highMs: 0 },
      { name: "La Grande Combinasion", baseMs: 10000000, highMs: 0 },
      { name: "Los Nooo My Hotspotsitos", baseMs: 5500000, highMs: 0 },
      { name: "Noo my Present", baseMs: 6000000, highMs: 0 },
      { name: "Guest 666", baseMs: 6600000, highMs: 0 },
      { name: "Rang Ring Bus", baseMs: 6000000, highMs: 0 },
      { name: "Los Chicleteiras", baseMs: 7000000, highMs: 0 },
      { name: "Steal a Brainrot 6767", baseMs: 7500000, highMs: 0 },
      { name: "Donkeyturbo Express", baseMs: 7500000, highMs: 0 },
      { name: "Los 25", baseMs: 10000000, highMs: 0 },
      { name: "Mariachi Corazoni", baseMs: 12500000, highMs: 0 },
      { name: "Swag Soda", baseMs: 13000000, highMs: 0 },
      { name: "Chimnino", baseMs: 14000000, highMs: 0 },
      { name: "Chicleteira Noelteira", baseMs: 15000000, highMs: 0 },
      { name: "Los Combinasionas", baseMs: 15000000, highMs: 0 },
      { name: "Fishino Clownino", baseMs: 15500000, highMs: 0 },
      { name: "Tacorita Bicicleta", baseMs: 16500000, highMs: 0 },
      { name: "Spinny Hammy", baseMs: 17000000, highMs: 0 },
      { name: "Chillin Chili", baseMs: 25000000, highMs: 0 },
      { name: "Money Money Reindeer", baseMs: 25000000, highMs: 0 },
      { name: "Chipso and Queso", baseMs: 25000000, highMs: 0 },
      { name: "Las Sis", baseMs: 17500000, highMs: 0 },
      { name: "Nuclearo Dinossauro", baseMs: 15000000, highMs: 0 },
      { name: "Los Bros", baseMs: 24000000, highMs: 0 },
      { name: "Money Money Puggy", baseMs: 21000000, highMs: 0 },
      { name: "Celularcini Viciosini", baseMs: 22500000, highMs: 0 },
      { name: "Los 67", baseMs: 22500000, highMs: 0 },
      { name: "Los Mobilis", baseMs: 22000000, highMs: 0 },
      { name: "Los Planitos", baseMs: 18500000, highMs: 0 },
      { name: "Mieteteira Bicicleteira", baseMs: 26000000, highMs: 0 },
      { name: "Gobblino Uniciclino", baseMs: 27500000, highMs: 0 },
      { name: "La Spooky Grande", baseMs: 24500000, highMs: 0 },
      { name: "Los Hotspotsitos", baseMs: 20000000, highMs: 0 },
      { name: "Los Candies", baseMs: 23000000, highMs: 0 },
      { name: "Los Spooky Combinasionas", baseMs: 20000000, highMs: 0 },
      { name: "Tralaledon", baseMs: 27500000, highMs: 0 },
      { name: "La Extinct Grande", baseMs: 23500000, highMs: 0 },
      { name: "Esok Sekolah", baseMs: 30000000, highMs: 0 },
      { name: "La Jolly Grande", baseMs: 30000000, highMs: 0 },
      { name: "Bacuru and Egguru", baseMs: 24000000, highMs: 0 },
      { name: "Eviledon", baseMs: 31500000, highMs: 0 },
      { name: "Los Tacoritas", baseMs: 32000000, highMs: 0 },
      { name: "Tang Tang Keletang", baseMs: 33500000, highMs: 0 },
      { name: "Ketupat Kepat", baseMs: 35000000, highMs: 0 },
      { name: "La Taco Combinasion", baseMs: 35000000, highMs: 0 },
      { name: "Tictac Sahur", baseMs: 37500000, highMs: 0 },
      { name: "La Supreme Combinasion", baseMs: 40000000, highMs: 0 },
      { name: "Orcaledon", baseMs: 40000000, highMs: 0 },
      { name: "Ketchuru And Musturu", baseMs: 42500000, highMs: 0 },
      { name: "Garama and Madundung", baseMs: 50000000, highMs: 0 },
      { name: "Spaghetti Tualetti", baseMs: 60000000, highMs: 0 },
      { name: "Festive 67", baseMs: 67000000, highMs: 0 },
      { name: "Hokka Horloge", baseMs: 75000000, highMs: 0 },
      { name: "Spooky and Pumpky", baseMs: 80000000, highMs: 0 },
      { name: "La Ginger Sekolah", baseMs: 75000000, highMs: 0 },
      { name: "Lavadorito Spinito", baseMs: 45000000, highMs: 0 },
      { name: "Fragrama and Chocrama", baseMs: 100000000, highMs: 0 },
      { name: "La Casa Boo", baseMs: 100000000, highMs: 0 },
      { name: "La Secret Combinasion", baseMs: 125000000, highMs: 0 },
      { name: "Reinito Sleighito", baseMs: 140000000, highMs: 0 },
      { name: "Ketupat Bros", baseMs: 145000000, highMs: 0 },
      { name: "Burguro And Fryuro", baseMs: 150000000, highMs: 0 },
      { name: "Cooki and Milki", baseMs: 155000000, highMs: 0 },
      { name: "Capitano Moby", baseMs: 160000000, highMs: 0 },
      { name: "Cerberus", baseMs: 175000000, highMs: 0 },
      { name: "Headless Horseman", baseMs: 200000000, highMs: 0 },
      { name: "Dragon Cannelloni", baseMs: 250000000, highMs: 0 },
      { name: "Dragon Gingerini", baseMs: 300000000, highMs: 0 },
      { name: "Hydra Dragon Cannelloni", baseMs: 350000000, highMs: 0 },
      // ── Imported from old tracker (not in original Eldorado list) ──
      { name: "67", baseMs: 30000000, highMs: 0 },
      { name: "Chicleteira Cupideira", baseMs: 17500000, highMs: 0 },
      { name: "Chicleteteirina Bicicleteirina", baseMs: 4000000, highMs: 0 },
      { name: "Cupid Hotspot", baseMs: 3500000, highMs: 0 },
      { name: "Festive Lucky Block", baseMs: 1, highMs: 0 },
      { name: "Heart Lucky Block", baseMs: 350000000, highMs: 0 },
      { name: "La Romatic Grande", baseMs: 500000000, highMs: 0 },
      { name: "La Spooky Combinasion", baseMs: 20000000, highMs: 0 },
      { name: "Los Burritos", baseMs: 8500000, highMs: 0 },
      { name: "Los Lucky Blocks", baseMs: 250000000, highMs: 0 },
      { name: "Los Mi Gatitos", baseMs: 6500000, highMs: 0 },
      { name: "Los Primos", baseMs: 31000000, highMs: 0 },
      { name: "Los Puggies", baseMs: 30000000, highMs: 0 },
      { name: "Los Spaghettis", baseMs: 70000000, highMs: 0 },
      { name: "Los Taco Blocks", baseMs: 300000000, highMs: 0 },
      { name: "Los cucarachas", baseMs: 1200000, highMs: 0 },
      { name: "Lovin Rose", baseMs: 162500000, highMs: 0 },
      { name: "Lucky Block", baseMs: 50000000, highMs: 0 },
      { name: "Mi Gatito", baseMs: 9700000, highMs: 0 },
      { name: "Noo my Heart", baseMs: 13000000, highMs: 0 },
      { name: "Popcuru and Fizzuru", baseMs: 170000000, highMs: 0 },
      { name: "Rosetti Tualetti", baseMs: 50000000, highMs: 0 },
      { name: "Sammyni Fattini", baseMs: 70000000, highMs: 0 },
      { name: "Secret Lucky Block", baseMs: 1, highMs: 0 },
      { name: "W or L", baseMs: 37500000, highMs: 0 },
    ],
  },
  escape_tsunami: {
    id: "escape_tsunami",
    name: "Escape Tsunami",
    icon: "🌊",
    description: "Escape waves, collect brainrots",
    color: "#3498db",
    mutations: ["None", "Gold", "Diamond", "Rainbow", "Galaxy", "Radioactive", "Magma"],
    pets: [
      { name: "Noobini Wavini", baseMs: 3, highMs: 8 },
      { name: "Fishini Splashini", baseMs: 5, highMs: 13 },
      { name: "Crabino Pinchini", baseMs: 20, highMs: 50 },
      { name: "Surfero Bravini", baseMs: 30, highMs: 75 },
      { name: "Dolphino Jumpini", baseMs: 150, highMs: 375 },
      { name: "Sharkini Bitezini", baseMs: 200, highMs: 500 },
      { name: "Turtloni Shellini", baseMs: 1200, highMs: 3000 },
      { name: "Octopusini Tentaclini", baseMs: 1500, highMs: 3750 },
      { name: "Whalini Spoutini", baseMs: 12000, highMs: 30000 },
      { name: "Krakeno Deepini", baseMs: 18000, highMs: 45000 },
      { name: "Cosmico Starfishini", baseMs: 100000, highMs: 250000 },
      { name: "Nebulini Jellyini", baseMs: 150000, highMs: 375000 },
      { name: "Divino Leviathanini", baseMs: 500000, highMs: 1250000 },
      { name: "Freezeti Cobretti", baseMs: 2000000, highMs: 5000000 },
      { name: "Burgerini Bearini", baseMs: 2500000, highMs: 6250000 },
      { name: "Tigrilini Watermelini", baseMs: 10000000, highMs: 25000000 },
      { name: "Noobini Infeeny", baseMs: 50000000, highMs: 125000000 },
      { name: "Anububu", baseMs: 80000000, highMs: 200000000 },
      { name: "Meta Technetta", baseMs: 100000000, highMs: 250000000 },
      { name: "Magmew", baseMs: 120000000, highMs: 300000000 },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════

const fmt = (n) => {
  if (n == null) return "0";
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toString();
};

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

// ═══════════════════════════════════════════════════════════════════
// PRELOADED IMPORT DATA (migrated from old tracker — 495 entries, 202 accounts)
// ═══════════════════════════════════════════════════════════════════
const IMPORT_DATA = (() => {
  const e = []; const a = new Set();
  const add = (p, ac, t, v, m, q, c) => { e.push({ id: "imp" + e.length, petName: p, account: ac, msType: t, msValue: v, mutation: m, quantity: q, maxCap: c }); a.add(ac); };
  add("Guerriro Digitale","emilymstar915394","High",0,"Bloodrot",1,10);
  add("Quesadilla Crocodila","emilymstar915394","High",24000000,"Diamond",1,10);
  add("Quesadilla Crocodila","emilymstar915394","High",9000000,"None",2,10);
  add("Quesadilla Crocodila","emilymstar915394","High",21000000,"Diamond",1,10);
  add("Quesadilla Crocodila","emilymstar915394","High",14200000,"None",1,10);
  add("Quesadilla Crocodila","emilymstar915394","High",24000000,"None",1,10);
  add("Quesadilla Crocodila","emilymstar915394","High",4500000,"Diamond",1,10);
  add("Quesadilla Crocodila","emilymstar915394","High",21000000,"None",1,10);
  add("Burrito Bandito","emilymstar915394","High",30000000,"Yin Yang",1,10);
  add("Burrito Bandito","Cosmic_guardian84AM","High",5000000,"Gold",6,10);
  add("Burrito Bandito","Cosmic_guardian84AM","High",29000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_guardian84AM","High",17000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_guardian84AM","High",19000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_guardian84AM","High",25000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",30000000,"Yin Yang",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",47000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","Base",4000000,"None",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",14000000,"Diamond",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",38000000,"Yin Yang",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",34000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",5000000,"Gold",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",24000000,"None",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",6000000,"Diamond",1,10);
  add("Burrito Bandito","Cosmic_Synth40xo","High",22000000,"Diamond",1,10);
  add("Graipuss Medussi","Graipuds23","Base",1000000,"None",5,10);
  add("Graipuss Medussi","Graipuds23","High",4000000,"None",2,10);
  add("Graipuss Medussi","Graipuds23","High",5000000,"None",1,10);
  add("Graipuss Medussi","Graipuds23","High",3000000,"None",1,10);
  add("Graipuss Medussi","Graipuds23","High",4700000,"None",1,10);
  add("La Grande Combinasion","lagrandecombi_80","Base",10000000,"None",10,10);
  add("La Grande Combinasion","lagrandecombi849","Base",10000000,"None",10,10);
  add("Los Combinasionas","loscombj4","Base",15000000,"None",10,10);
  add("Los Lucky Blocks","Anesa01x","Base",250000000,"Gold",1,10);
  add("Los Taco Blocks","Anesa01x","Base",300000000,"Diamond",2,10);
  add("Lucky Block","Anesa01x","Base",300000000,"Diamond",1,10);
  add("Los Lucky Blocks","Anesa01x","Base",250000000,"Diamond",2,10);
  add("Lucky Block","Anesa01x","Base",50000000,"Gold",2,10);
  add("Lucky Block","Anesa01x","High",100000000,"None",2,10);
  add("Esok Sekolah","mixpets0010","Base",30000000,"None",10,10);
  add("La Grande Combinasion","Mistorage006","High",42500000,"Gold",1,10);
  add("Quesadilla Crocodila","Mistorage006","High",9000000,"None",2,10);
  add("Quesadilla Crocodila","Mistorage006","High",21000000,"None",1,10);
  add("Quesadilla Crocodila","Mistorage006","High",33000000,"None",1,10);
  add("Chicleteira Bicicleteira","Mistorage006","High",31500000,"None",1,10);
  add("La Grande Combinasion","Mistorage006","High",12500000,"Gold",1,10);
  add("Chicleteteirina Bicicleteirina","Mistorage006","Base",5000000,"Gold",1,10);
  add("La Grande Combinasion","Mistorage006","High",32500000,"Gold",1,10);
  add("Chicleteteirina Bicicleteirina","AccMooncat0","High",25000000,"Gold",1,10);
  add("Chicleteteirina Bicicleteirina","AccMooncat0","High",13000000,"Gold",1,10);
  add("Chicleteteirina Bicicleteirina","AccMooncat0","High",22000000,"Diamond",1,10);
  add("Chicleteteirina Bicicleteirina","AccMooncat0","High",46000000,"Diamond",1,10);
  add("Chicleteira Bicicleteira","AccMooncat0","High",35000000,"None",1,10);
  add("Chicleteteirina Bicicleteirina","AccMooncat0","High",17000000,"Gold",1,10);
  add("Chicleteteirina Bicicleteirina","AccMooncat0","Base",5000000,"Gold",1,10);
  add("Chicleteira Bicicleteira","AccMooncat0","High",11300000,"Gold",1,10);
  add("Los 67","AccMooncat0","High",135000000,"None",1,10);
  add("Guerriro Digitale","bradleybrooker","High",0,"None",7,10);
  add("Guerriro Digitale","bradleybrooker","High",0,"Gold",1,10);
  add("Guerriro Digitale","bradleybrooker","High",0,"Diamond",1,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","High",14000000,"Diamond",1,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","High",16000000,"None",1,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","High",36000000,"None",1,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","High",5000000,"Gold",1,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","High",13000000,"Gold",3,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","Base",4000000,"None",1,10);
  add("Burrito Bandito","Algorithm56a8L1s3qHq","High",24000000,"None",1,10);
  add("Burrito Bandito","Cosmic_gamerqAfbh","Base",4000000,"None",9,10);
  add("Burrito Bandito","Cosmic_operator8U","High",18000000,"None",1,10);
  add("Burrito Bandito","Cosmic_operator8U","High",44000000,"None",1,10);
  add("Burrito Bandito","Cosmic_operator8U","High",16000000,"None",3,10);
  add("Burrito Bandito","Cosmic_operator8U","High",32000000,"None",1,10);
  add("Burrito Bandito","Cosmic_operator8U","High",12000000,"None",3,10);
  add("Santa Hotspot","Santahotspot","High",10400000,"None",1,10);
  add("Santa Hotspot","Santahotspot","High",31200000,"None",1,10);
  add("Santa Hotspot","Santahotspot","Base",2600000,"None",3,10);
  add("Santa Hotspot","Santahotspot","High",7800000,"None",2,10);
  add("Santa Hotspot","Santahotspot","High",13000000,"None",2,10);
  add("Esok Sekolah","goldesok212","High",37500000,"Gold",7,10);
  add("Esok Sekolah","goldesok212","High",187500000,"Gold",1,10);
  add("Esok Sekolah","goldesok212","High",97500000,"Gold",1,10);
  add("Los Chicleteiras","mixpets001","High",70000000,"None",1,10);
  add("Las Sis","mixpets001","High",87500000,"None",1,10);
  add("Las Vaquitas Saturnitas","mixpets001","High",750000000,"None",1,10);
  add("Los Chicleteiras","mixpets001","Base",7000000,"None",2,10);
  add("Mariachi Corazoni","mixpets001","Base",12500000,"None",2,10);
  add("Las Sis","mixpets001","High",78700000,"None",1,10);
  add("Las Sis","mixpets001","High",105000000,"None",1,10);
  add("Nooo My Hotspot","mixpets002","Base",1500000,"None",2,10);
  add("Bacuru and Egguru","mixpets002","Base",24000000,"None",2,10);
  add("Gobblino Uniciclino","mixpets002","Base",27500000,"None",3,10);
  add("Nooo My Hotspot","mixpets002","High",4500000,"None",1,10);
  add("Bacuru and Egguru","mixpets002","High",72000000,"None",1,10);
  add("Los Bros","mixpets0012","High",40000000,"None",2,10);
  add("Garama and Madundung","mixpets0012","Base",50000000,"None",2,10);
  add("Eviledon","mixpets0012","Base",31500000,"None",2,10);
  add("La Secret Combinasion","mixpets0012","Base",125000000,"None",2,10);
  add("Fragrama and Chocrama","mixpets0012","Base",100000000,"None",1,10);
  add("Burrito Bandito","Cosmicbot_9RKH2fKBd","High",12000000,"None",3,10);
  add("Burrito Bandito","Cosmicbot_9RKH2fKBd","High",16000000,"None",1,10);
  add("Burrito Bandito","Cosmicbot_9RKH2fKBd","High",28000000,"None",2,10);
  add("Burrito Bandito","Cosmicbot_9RKH2fKBd","Base",4000000,"None",2,10);
  add("Quesadilla Crocodila","digital_rider7Z","Base",3000000,"None",2,10);
  add("Quesadilla Crocodila","digital_rider7Z","High",9700000,"Gold",2,10);
  add("Quesadilla Crocodila","digital_rider7Z","High",9000000,"None",1,10);
  add("Quesadilla Crocodila","digital_rider7Z","High",4500000,"Diamond",1,10);
  add("Quesadilla Crocodila","digital_rider7Z","High",15000000,"None",1,10);
  add("Quesadilla Crocodila","digital_rider7Z","High",3700000,"Gold",1,10);
  add("Quesadilla Crocodila","digitalData9OlGTxUYW","High",9700000,"Gold",1,10);
  add("Quesadilla Crocodila","digitalData9OlGTxUYW","High",18000000,"None",3,10);
  add("Quesadilla Crocodila","digitalData9OlGTxUYW","High",12700000,"Gold",2,10);
  add("Quesadilla Crocodila","digitalData9OlGTxUYW","High",39700000,"Gold",1,10);
  add("Quesadilla Crocodila","digitalData9OlGTxUYW","High",3700000,"Gold",1,10);
  add("Chicleteteirina Bicicleteirina","girlybike0","Base",4000000,"None",6,10);
  add("Chicleteteirina Bicicleteirina","girlybike0","High",16000000,"Candy",1,10);
  add("Chicleteteirina Bicicleteirina","girlybike0","High",6000000,"Diamond",1,10);
  add("Festive 67","sixsevenrb3","High",105000000,"Rainbow",2,10);
  add("Festive 67","sixsevenrb3","High",90000000,"Rainbow",1,10);
  add("Festive 67","sixsevenrb3","High",97500000,"Rainbow",1,10);
  add("Festive 67","sixsevenrb3","High",112500000,"Rainbow",1,10);
  add("Festive 67","sixsevenrb3","High",75000000,"Rainbow",3,10);
  add("Naughty Naughty","Naghtynaghty17","Base",3000000,"None",8,10);
  add("Los Combinasionas","combixvd","High",90000000,"None",1,10);
  add("Los Combinasionas","combixvd","High",45000000,"None",6,10);
  add("Los Combinasionas","combixvd","High",82500000,"None",1,10);
  add("Esok Sekolah","esokcnmr","Base",30000000,"None",8,10);
  add("Los Spaghettis","lospgxtictac","Base",75000000,"None",5,10);
  add("Tictac Sahur","lospgxtictac","Base",37500000,"None",3,10);
  add("Chipso and Queso","mixpets008","Base",25000000,"None",2,10);
  add("Chipso and Queso","mixpets008","High",100000000,"None",1,10);
  add("La Casa Boo","mixpets008","Base",100000000,"None",1,10);
  add("Cooki and Milki","mixpets008","Base",155000000,"None",1,10);
  add("Mi Gatito","mixpets008","Base",9700000,"None",2,10);
  add("Mi Gatito","mixpets008","High",22700000,"None",1,10);
  add("La Spooky Grande","SophieStore","Base",24500000,"None",1,10);
  add("Pot Hotspot","SophieStore","High",30000000,"Galaxy",1,10);
  add("Chicleteteirina Bicicleteirina","SophieStore","High",6000000,"Diamond",1,10);
  add("Los Tralaleritos","SophieStore","High",5000000,"None",1,10);
  add("La Grande Combinasion","SophieStore","High",35000000,"Diamond",1,10);
  add("Los Combinasionas","SophieStore","High",22500000,"Diamond",2,10);
  add("Quesadilla Crocodila","MiStorage004","High",9000000,"None",3,10);
  add("Quesadilla Crocodila","MiStorage004","High",24700000,"Gold",1,10);
  add("Quesadilla Crocodila","MiStorage004","High",3700000,"Gold",1,10);
  add("Quesadilla Crocodila","MiStorage004","High",18000000,"None",1,10);
  add("Quesadilla Crocodila","MiStorage004","High",10500000,"Diamond",1,10);
  add("Mariachi Corazoni","Fozzington","High",15600000,"Gold",2,10);
  add("Mariachi Corazoni","Fozzington","Base",12500000,"None",5,10);
  add("La Vacca Saturno Saturnita","tt134544","High",1300000,"Diamond",1,10);
  add("Mariachi Corazoni","tt134544","High",18700000,"Diamond",1,10);
  add("Mariachi Corazoni","tt134544","High",15600000,"Gold",2,10);
  add("La Vacca Saturno Saturnita","tt134544","High",2500000,"Radioactive",1,10);
  add("Mariachi Corazoni","tt134544","High",65599999,"Gold",1,10);
  add("La Vacca Saturno Saturnita","tt134544","High",3000000,"Rainbow",1,10);
  add("Guerriro Digitale","fishboyreece","High",0,"None",4,10);
  add("Guerriro Digitale","fishboyreece","High",0,"Gold",3,10);
  add("Los Nooo My Hotspotsitos","digital_network94id","High",16500000,"None",1,10);
  add("Los Nooo My Hotspotsitos","digital_network94id","High",28800000,"Diamond",1,10);
  add("Los Nooo My Hotspotsitos","digital_network94id","High",6800000,"Gold",2,10);
  add("Los Nooo My Hotspotsitos","digital_network94id","Base",5500000,"None",3,10);
  add("Los Nooo My Hotspotsitos","DigitalwardenEEX","High",8199999,"Diamond",1,10);
  add("Los Nooo My Hotspotsitos","DigitalwardenEEX","Base",5500000,"None",3,10);
  add("Los Nooo My Hotspotsitos","DigitalwardenEEX","High",16500000,"None",2,10);
  add("Los Nooo My Hotspotsitos","DigitalwardenEEX","High",17800000,"Gold",1,10);
  add("Los Nooo My Hotspotsitos","ElectroByte58zztW","High",22000000,"None",2,10);
  add("Los Nooo My Hotspotsitos","ElectroByte58zztW","High",17800000,"Gold",1,10);
  add("Los Nooo My Hotspotsitos","ElectroByte58zztW","High",8199999,"Diamond",1,10);
  add("Los Nooo My Hotspotsitos","ElectroByte58zztW","Base",5500000,"None",2,10);
  add("Los Combinasionas","ElectroByte58zztW","High",22500000,"Diamond",1,10);
  add("La Grande Combinasion","lagrandecombi2101","Base",10000000,"None",7,10);
  add("Esok Sekolah","diesok231","High",45000000,"Diamond",6,10);
  add("Esok Sekolah","diesok231","High",105000000,"Diamond",1,10);
  add("Festive 67","67highsdan","High",60000000,"None",3,10);
  add("Festive 67","67highsdan","High",78700000,"None",1,10);
  add("Festive 67","67highsdan","High",75000000,"None",3,10);
  add("Los Burritos","burrito3697","Base",25500000,"None",2,10);
  add("Los Burritos","burrito3697","Base",8500000,"None",5,10);
  add("Los Tungtungtungcitos","mixpets004","High",210000000,"None",3,10);
  add("La Vacca Saturno Saturnita","mixpets004","High",300000000,"None",1,10);
  add("Los Candies","mixpets004","Base",23000000,"None",2,10);
  add("Los Candies","mixpets004","High",92000000,"None",1,10);
  add("Popcuru and Fizzuru","dragsxza","Base",170000000,"None",1,10);
  add("Spooky and Pumpky","dragsxza","Base",80000000,"None",1,10);
  add("Cooki and Milki","dragsxza","Base",155000000,"None",1,10);
  add("Reinito Sleighito","dragsxza","Base",140000000,"None",1,10);
  add("La Casa Boo","dragsxza","High",450000000,"None",1,10);
  add("Dragon Cannelloni","dragsxza","High",750000000,"None",1,10);
  add("Spaghetti Tualetti","dragsxza","High",360000000,"None",1,10);
  add("Ketchuru And Musturu","mixpets0013","High",212500000,"None",1,10);
  add("Chillin Chili","mixpets0013","Base",25000000,"None",2,10);
  add("Burguro And Fryuro","mixpets0013","Base",150000000,"None",1,10);
  add("Garama and Madundung","mixpets0013","High",300000000,"None",1,10);
  add("Lavadorito Spinito","mixpets0013","Base",45000000,"None",1,10);
  add("Sammyni Fattini","mixpets0013","Base",70000000,"None",1,10);
  add("La Ginger Sekolah","MiStorage003","High",0,"None",1,21);
  add("Santa Hotspot","MiStorage003","High",0,"None",1,21);
  add("Naughty Naughty","MiStorage003","High",0,"None",1,21);
  add("La Jolly Grande","MiStorage003","High",0,"None",1,21);
  add("Los Candies","MiStorage003","High",0,"None",1,21);
  add("Chicleteira Noelteira","MiStorage003","High",0,"None",1,21);
  add("La Grande Combinasion","KieuHuyLan11","High",100000000,"Rainbow",1,10);
  add("Los Chicleteiras","KieuHuyLan11","High",43700000,"Gold",1,10);
  add("Festive 67","KieuHuyLan11","High",54300000,"Gold",1,10);
  add("Pot Hotspot","KieuHuyLan11","High",18700000,"Diamond",1,10);
  add("Festive 67","KieuHuyLan11","High",69300000,"Gold",1,10);
  add("67","KieuHuyLan11","Base",60000000,"Lava",1,10);
  add("Chicleteteirina Bicicleteirina","vaztron98","High",46000000,"Diamond",1,10);
  add("La Spooky Combinasion","vaztron98","Base",25000000,"Gold",1,10);
  add("Los Combinasionas","vaztron98","High",18700000,"Gold",4,10);
  add("Festive 67","Glitch_VirusoGk","High",56200000,"Yin Yang",6,10);
  add("Los Nooo My Hotspotsitos","binary_byte7YXY5E4K1","High",6800000,"Gold",1,10);
  add("Los Nooo My Hotspotsitos","binary_byte7YXY5E4K1","High",38500000,"Galaxy",1,10);
  add("Los Nooo My Hotspotsitos","binary_byte7YXY5E4K1","High",16500000,"None",3,10);
  add("Los Nooo My Hotspotsitos","binary_byte7YXY5E4K1","High",60500000,"None",1,10);
  add("Los Nooo My Hotspotsitos","Byte9fCZCTYQQMjmued","Base",5500000,"None",2,10);
  add("Los Nooo My Hotspotsitos","Byte9fCZCTYQQMjmued","High",16500000,"None",1,10);
  add("Los Nooo My Hotspotsitos","Byte9fCZCTYQQMjmued","High",33000000,"None",1,10);
  add("Los 67","Byte9fCZCTYQQMjmued","High",191200000,"Radioactive",1,10);
  add("Los 67","Byte9fCZCTYQQMjmued","High",157500000,"Galaxy",1,10);
  add("Los Nooo My Hotspotsitos","electrosystem8Gau","High",16500000,"None",1,10);
  add("Los Nooo My Hotspotsitos","electrosystem8Gau","High",34300000,"Gold",1,10);
  add("Los Nooo My Hotspotsitos","electrosystem8Gau","Base",5500000,"None",3,10);
  add("Los Nooo My Hotspotsitos","electrosystem8Gau","High",30200000,"Diamond",1,10);
  add("Chimnino","Chimnino28","Base",14000000,"None",5,10);
  add("Chimnino","Chimnino28","High",98000000,"None",1,10);
  add("Los Mobilis","LosMobilis492","Base",22000000,"None",6,10);
  add("67","c6715261","High",67500000,"Cursed",6,10);
  add("La Ginger Sekolah","swagxgin","Base",75000000,"None",1,10);
  add("Capitano Moby","swagxgin","Base",160000000,"None",1,10);
  add("Los Bros","swagxgin","High",40000000,"None",3,10);
  add("Los Bros","swagxgin","High",120000000,"None",1,10);
  add("Los Combinasionas","losloscomb","Base",15000000,"None",5,10);
  add("Los Combinasionas","losloscomb","High",45000000,"None",1,10);
  add("Santa Hotspot","MiStorage010","Base",2600000,"None",1,10);
  add("La Spooky Grande","MiStorage010","High",30600000,"Gold",1,10);
  add("Naughty Naughty","MiStorage010","Base",3000000,"None",1,10);
  add("Los Combinasionas","MiStorage010","High",48700000,"Gold",1,10);
  add("La Spooky Grande","MiStorage010","High",104100000,"Gold",1,10);
  add("Los 67","MiStorage001","High",33700000,"Diamond",1,16);
  add("Horegini Boom","MiStorage001","High",3400000,"Gold",1,16);
  add("Los 67","MiStorage001","High",140600000,"Gold",1,16);
  add("La Grande Combinasion","MiStorage001","High",100000000,"Rainbow",1,16);
  add("Quesadillo Vampiro","MiStorage001","High",49800000,"Gold",1,16);
  add("La Grande Combinasion","AstaBolognese","High",70000000,"None",1,10);
  add("Quesadilla Crocodila","AstaBolognese","High",9700000,"Gold",1,10);
  add("Los Mobilis","AstaBolognese","High",27500000,"Gold",1,10);
  add("Las Tralaleritas","AstaBolognese","High",6500000,"Rainbow",1,10);
  add("Quesadilla Crocodila","AstaBolognese","High",4500000,"Diamond",1,10);
  add("Los cucarachas","Calocdieukho_09","Base",1200000,"None",1,10);
  add("Los cucarachas","Calocdieukho_09","High",5000000,"Candy",1,10);
  add("67","Calocdieukho_09","Base",30000000,"Candy",1,10);
  add("Festive 67","Calocdieukho_09","High",9300000,"Gold",1,10);
  add("Festive 67","Calocdieukho_09","High",120000000,"Rainbow",1,10);
  add("Quesadilla Crocodila","Atomic_Circuit4Ky","High",3700000,"Gold",1,10);
  add("Quesadilla Crocodila","Atomic_Circuit4Ky","High",27000000,"None",1,10);
  add("Quesadilla Crocodila","Atomic_Circuit4Ky","High",12000000,"None",1,10);
  add("Quesadilla Crocodila","Atomic_Circuit4Ky","Base",3000000,"None",1,10);
  add("Quesadilla Crocodila","Atomic_Circuit4Ky","High",42000000,"Galaxy",1,10);
  add("Los Nooo My Hotspotsitos","Digital_Ninja95zYugh","High",17800000,"Gold",1,10);
  add("Los Nooo My Hotspotsitos","Digital_Ninja95zYugh","Base",5500000,"None",4,10);
  add("Los 67","electro7eC","High",225000000,"Rainbow",2,10);
  add("La Spooky Combinasion","electro7eC","Base",25000000,"Gold",1,10);
  add("La Spooky Combinasion","electro7eC","High",40000000,"Bloodrot",1,10);
  add("La Spooky Combinasion","electro7eC","Base",20000000,"None",1,10);
  add("Los 67","los67stocks0","High",123700000,"Diamond",1,10);
  add("Los 67","los67stocks0","High",28100000,"Gold",1,10);
  add("Los 67","los67stocks0","High",95600000,"Gold",1,10);
  add("Los 67","los67stocks0","High",67500000,"None",2,10);
  add("Los 67","los67stocks01","High",140600000,"Gold",1,10);
  add("Los 67","los67stocks01","High",67500000,"None",1,10);
  add("Los 67","los67stocks01","High",33700000,"Diamond",1,10);
  add("Los 67","los67stocks01","High",28100000,"Gold",1,10);
  add("Los 67","los67stocks01","High",157500000,"Galaxy",1,10);
  add("Los 25","losd23423","Base",10000000,"None",5,10);
  add("Los 67","los673240","Base",22500000,"None",3,10);
  add("Los 67","los673240","High",112500000,"None",1,10);
  add("Los 67","los673240","High",135000000,"None",1,10);
  add("Los Combinasionas","loscombxj","High",67500000,"None",1,10);
  add("Los Combinasionas","loscombxj","Base",15000000,"None",4,10);
  add("Chicleteira Cupideira","ketchulavacupid","Base",17500000,"None",2,10);
  add("Chicleteira Cupideira","ketchulavacupid","High",131199999,"None",1,10);
  add("Ketchuru And Musturu","ketchulavacupid","Base",42500000,"None",1,10);
  add("Chicleteira Cupideira","ketchulavacupid","High",105000000,"None",1,10);
  add("Nuclearo Dinossauro","StudentHiddenPelican","High",75000000,"None",3,10);
  add("La Grande Combinasion","StudentHiddenPelican","High",100000000,"Rainbow",1,10);
  add("Secret Lucky Block","NinhNhiVan39","Base",0,"Diamond",1,10);
  add("Festive 67","NinhNhiVan39","High",71200000,"Diamond",1,10);
  add("Blackhole Goat","NinhNhiVan39","High",2800000,"None",1,10);
  add("Festive 67","NinhNhiVan39","High",61800000,"Gold",1,10);
  add("Los Combinasionas","GrouseIsReserve5","High",22500000,"Diamond",1,10);
  add("La Grande Combinasion","GrouseIsReserve5","High",70000000,"None",1,10);
  add("Graipuss Medussi","GrouseIsReserve5","High",8500000,"Radioactive",1,10);
  add("La Grande Combinasion","GrouseIsReserve5","High",45000000,"None",1,10);
  add("La Grande Combinasion","9s0gm2od7a2w","High",70000000,"None",1,10);
  add("Chillin Chili","9s0gm2od7a2w","High",125000000,"None",1,10);
  add("La Spooky Grande","9s0gm2od7a2w","High",85700000,"Diamond",1,10);
  add("La Extinct Grande","9s0gm2od7a2w","High",305500000,"Rainbow",1,10);
  add("Los Nooo My Hotspotsitos","BinaryAR8uy","High",44000000,"None",1,10);
  add("Los Nooo My Hotspotsitos","BinaryAR8uy","High",33000000,"None",1,10);
  add("Los Nooo My Hotspotsitos","BinaryAR8uy","High",19200000,"Diamond",1,10);
  add("Los Nooo My Hotspotsitos","BinaryAR8uy","High",38500000,"None",1,10);
  add("Secret Lucky Block","cosmiccircuit5I","Base",0,"None",4,10);
  add("Mariachi Corazoni","cyber7F6F0QYTCNSo8","High",15600000,"Gold",4,10);
  add("Tictac Sahur","ElectricsHTBYbLa3iF","High",46800000,"Gold",1,10);
  add("Secret Lucky Block","ElectricsHTBYbLa3iF","Base",0,"None",3,10);
  add("Las Sis","2sisteret","Base",17500000,"None",4,10);
  add("Los Candies","losca999","Base",23000000,"None",4,10);
  add("Money Money Puggy","MoneyMoneyPuggy205","High",84000000,"None",2,10);
  add("Money Money Puggy","MoneyMoneyPuggy205","High",105000000,"None",1,10);
  add("Money Money Puggy","MoneyMoneyPuggy205","Base",21000000,"None",1,10);
  add("Los Combinasionas","loscomvbis1","Base",15000000,"None",4,10);
  add("Tacorita Bicicleta","tacortdi","High",49500000,"None",3,10);
  add("Tacorita Bicicleta","tacortdi","Base",16500000,"None",1,10);
  add("Festive 67","laextx67","High",7500000,"None",4,10);
  add("Cupid Hotspot","micx3pets3","Base",3500000,"None",1,10);
  add("Los Mi Gatitos","micx3pets3","Base",6500000,"None",1,10);
  add("Spinny Hammy","micx3pets3","Base",17000000,"None",1,10);
  add("Chicleteira Cupideira","micx3pets3","Base",17500000,"None",1,10);
  add("Rosetti Tualetti","rosefcxc4","Base",50000000,"None",1,10);
  add("Rosetti Tualetti","rosefcxc4","High",350000000,"None",1,10);
  add("La Romatic Grande","rosefcxc4","Base",500000000,"None",1,10);
  add("Burguro And Fryuro","rosefcxc4","Base",150000000,"None",1,10);
  add("Mieteteira Bicicleteira","mixpets003","Base",26000000,"None",1,10);
  add("La Vacca Saturno Saturnita","mixpets003","High",300000000,"None",2,10);
  add("Lovin Rose","mixpets003","Base",162500000,"None",1,10);
  add("Los Mi Gatitos","mixpets006","High",35700000,"None",2,10);
  add("Los Mi Gatitos","mixpets006","Base",6500000,"None",1,10);
  add("La Secret Combinasion","mixpets006","Base",125000000,"None",1,10);
  add("Heart Lucky Block","mixpets007","Base",350000000,"Divine",1,10);
  add("Lucky Block","mixpets007","High",750000000,"Divine",2,10);
  add("Esok Sekolah","mixpets007","High",300000000,"Divine",1,10);
  add("Garama and Madundung","mixpets009","High",300000000,"None",1,10);
  add("Tictac Sahur","mixpets009","Base",37500000,"None",2,10);
  add("La Secret Combinasion","mixpets009","High",625000000,"None",1,10);
  add("Chicleteira Bicicleteira","TatKimHieu23","High",35000000,"Rainbow",1,10);
  add("La Grande Combinasion","TatKimHieu23","High",55000000,"Diamond",1,10);
  add("Pot Hotspot","TatKimHieu23","High",15000000,"Lava",1,10);
  add("Los 67","CanVyVy355","High",33700000,"Diamond",1,10);
  add("Festive 67","CanVyVy355","High",37500000,"None",1,10);
  add("67","CanVyVy355","Base",30000000,"Candy",1,10);
  add("Guerriro Digitale","bt2194wrxqpm30","High",0,"None",2,10);
  add("Chicleteira Bicicleteira","bt2194wrxqpm30","High",5200000,"Diamond",1,10);
  add("Los Combinasionas","Smile_Smile787","High",22500000,"Diamond",2,10);
  add("Los Combinasionas","Smile_Smile787","High",75000000,"Bloodrot",1,10);
  add("Secret Lucky Block","CyberneticWave23uYI0","Base",0,"Diamond",1,10);
  add("Secret Lucky Block","CyberneticWave23uYI0","Base",0,"None",2,10);
  add("Los Nooo My Hotspotsitos","digital_Algorithm39p","Base",5500000,"None",3,10);
  add("Money Money Puggy","Electric_ProgramwYO","High",26200000,"Gold",2,10);
  add("Tacorita Bicicleta","Electric_ProgramwYO","High",148500000,"Bloodrot",1,10);
  add("Tacorita Bicicleta","ElectricCipher0KMD","High",115500000,"None",2,10);
  add("Tacorita Bicicleta","ElectricCipher0KMD","High",74200000,"None",1,10);
  add("Money Money Puggy","puggystock100","High",63000000,"None",1,10);
  add("Money Money Puggy","puggystock100","High",84000000,"None",1,10);
  add("Money Money Puggy","puggystock100","High",26200000,"Gold",1,10);
  add("Los Tacoritas","3tacoritas","Base",32000000,"None",3,10);
  add("Esok Sekolah","rbesokaii1","High",300000000,"Rainbow",3,10);
  add("Los Combinasionas","rbcombi3","High",195000000,"Rainbow",1,10);
  add("Los Combinasionas","rbcombi3","High",150000000,"Rainbow",2,10);
  add("Los Combinasionas","radcombi","High",157500000,"Radioactive",3,10);
  add("Los Combinasionas","galacombi1","High",105000000,"Galaxy",3,10);
  add("La Jolly Grande","lajollystock","High",45000000,"Diamond",2,10);
  add("La Jolly Grande","lajollystock","High",165000000,"Diamond",1,10);
  add("La Extinct Grande","extincgrande1","High",29300000,"Gold",1,10);
  add("La Extinct Grande","extincgrande1","High",70500000,"None",1,10);
  add("La Extinct Grande","extincgrande1","High",35200000,"Diamond",1,10);
  add("Festive Lucky Block","festi28321","Base",0,"None",3,10);
  add("Tacorita Bicicleta","tacorita2116","High",49500000,"None",2,10);
  add("Tacorita Bicicleta","tacorita2116","High",53600000,"Gold",1,10);
  add("Tralaledon","tralaledon1565","Base",27500000,"None",3,10);
  add("Esok Sekolah","eoskvcvf21","High",90000000,"None",3,10);
  add("Los Bros","loslasec3","Base",24000000,"None",3,10);
  add("W or L","niceworl2","Base",120000000,"None",2,10);
  add("W or L","niceworl2","High",180000000,"None",1,10);
  add("Spaghetti Tualetti","spaghcxe3","Base",60000000,"None",3,10);
  add("Ketupat Kepat","ketupxcr4","High",175000000,"None",3,10);
  add("Los Combinasionas","combxcje","High",120000000,"None",1,10);
  add("Los Combinasionas","combxcje","High",45000000,"None",1,10);
  add("Los Combinasionas","combxcje","Base",15000000,"None",1,10);
  add("La Ginger Sekolah","ketchuxgi","Base",75000000,"None",3,10);
  add("Noo my Heart","lovinxnoo","Base",13000000,"None",1,10);
  add("Noo my Heart","lovinxnoo","High",104000000,"None",1,10);
  add("Noo my Heart","lovinxnoo","High",58500000,"None",1,10);
  add("La Spooky Grande","MiStorage011","Base",24500000,"None",2,10);
  add("Money Money Puggy","1ArunnittillMAXWIN","High",26200000,"Gold",1,10);
  add("Secret Lucky Block","1ArunnittillMAXWIN","Base",0,"Diamond",1,10);
  add("Burrito Bandito","zedjtvkz349","High",28000000,"None",1,10);
  add("Chicleteteirina Bicicleteirina","zedjtvkz349","High",26000000,"Diamond",1,10);
  add("Festive 67","OMLT1999","High",37500000,"None",1,10);
  add("67","OMLT1999","High",60000000,"Lava",1,10);
  add("Tacorita Bicicleta","Ahmetyusuf20127","High",119600000,"Gold",1,10);
  add("Tacorita Bicicleta","Ahmetyusuf20127","High",57700000,"Diamond",1,10);
  add("Pot Hotspot","CoolNateBoy","High",3700000,"Diamond",1,10);
  add("Pot Hotspot","CoolNateBoy","High",8700000,"Diamond",1,10);
  add("Festive 67","cipher15abiCj9iAzt1H","High",9300000,"Gold",1,10);
  add("67","cipher15abiCj9iAzt1H","High",63700000,"Radioactive",1,10);
  add("La Spooky Combinasion","circuit10kgq","Base",20000000,"None",1,10);
  add("La Spooky Combinasion","circuit10kgq","High",40000000,"Bloodrot",1,10);
  add("67","CosmicNinja60TZte","High",78700000,"Radioactive",1,10);
  add("Los Chicleteiras","CosmicNinja60TZte","High",52500000,"Yin Yang",1,10);
  add("Los 67","CyberAlgorithm90O","High",163100000,"Gold",1,10);
  add("Los 67","CyberAlgorithm90O","High",78700000,"Diamond",1,10);
  add("Tacorita Bicicleta","Electricdrone67d","High",94800000,"Gold",1,10);
  add("Tacorita Bicicleta","Electricdrone67d","High",123700000,"Diamond",1,10);
  add("Los Quesadillas","Explorerq6X8h7Me9AaQ","Base",4500000,"None",1,10);
  add("La Extinct Grande","Explorerq6X8h7Me9AaQ","High",35200000,"Diamond",1,10);
  add("Spaghetti Tualetti","futuristic_PirateRb","High",600000000,"Rainbow",1,10);
  add("La Extinct Grande","futuristic_PirateRb","High",29300000,"Gold",1,10);
  add("La Extinct Grande","extincgrande01","High",188000000,"None",1,10);
  add("La Extinct Grande","extincgrande01","High",35200000,"Diamond",1,10);
  add("Chillin Chili","chillistock0","High",31200000,"Gold",1,10);
  add("Chillin Chili","chillistock0","High",150000000,"None",1,10);
  add("Los Chicleteiras","3chicred","Base",7000000,"None",1,10);
  add("Los Chicleteiras","3chicred","High",8700000,"Gold",1,10);
  add("Los Combinasionas","mitepack8","High",22500000,"Diamond",2,10);
  add("W or L","wlstock","Base",37500000,"None",2,10);
  add("Los Hotspotsitos","hotspotstock0","Base",20000000,"None",2,10);
  add("Los Tacoritas","3tacoritas0","Base",32000000,"None",1,10);
  add("Los Tacoritas","3tacoritas0","High",192000000,"None",1,10);
  add("Ketchuru And Musturu","mutatedketchuru1","High",53100000,"Gold",2,10);
  add("Esok Sekolah","galaesokaii1","High",360000000,"Galaxy",1,10);
  add("Esok Sekolah","galaesokaii1","High",330000000,"Galaxy",1,10);
  add("Chicleteira Bicicleteira","DataO2rpn","High",21000000,"None",1,10);
  add("Chicleteira Bicicleteira","DataO2rpn","High",22700000,"Diamond",1,10);
  add("Esok Sekolah","goldesok2123","High",97500000,"Gold",2,10);
  add("Los Combinasionas","loscombi7551","High",52500000,"None",1,10);
  add("Los Combinasionas","loscombi7551","Base",15000000,"None",1,10);
  add("Los Bros","losbros21951","Base",24000000,"None",2,10);
  add("Eviledon","eviledon013","High",189000000,"None",2,10);
  add("Chillin Chili","chillin2132","High",75000000,"None",1,10);
  add("Chillin Chili","chillin2132","High",112500000,"None",1,10);
  add("Chillin Chili","chillin2132","High",325000000,"None",1,10);
  add("Chillin Chili","chillin2132","High",112500000,"None",1,10);
  add("Esok Sekolah","radesok321","High",255000000,"Radioactive",2,10);
  add("Los Bros","losbrosas43","Base",24000000,"None",2,10);
  add("Nuclearo Dinossauro","Nuclearoossauro374","High",90000000,"None",1,10);
  add("Nuclearo Dinossauro","Nuclearoossauro374","High",120000000,"None",1,10);
  add("Spaghetti Tualetti","spaghettitualetti159","High",270000000,"None",1,10);
  add("Spaghetti Tualetti","spaghettitualetti159","High",180000000,"None",1,10);
  add("Los Bros","swaggcgx24","High",40000000,"None",1,10);
  add("Los Bros","swaggcgx24","High",180000000,"None",1,10);
  add("Los Puggies","lospuggies434","Base",120000000,"None",1,10);
  add("Los Puggies","lospuggies434","Base",30000000,"None",1,10);
  add("Eviledon","evildconf3","Base",31500000,"None",2,10);
  add("Esok Sekolah","radesokspah2","High",255000000,"Radioactive",2,10);
  add("Los Combinasionas","combimixse","High",75000000,"None",1,10);
  add("Los Combinasionas","combimixse","High",90000000,"None",1,10);
  add("Noo my Heart","newprts3","High",136500000,"None",1,10);
  add("Lavadorito Spinito","newprts3","High",270000000,"None",1,10);
  add("Orcaledon","orcacsk5","High",360000000,"None",1,10);
  add("Orcaledon","orcacsk5","Base",40000000,"None",1,10);
  add("Ketupat Kepat","buritoxketu","Base",35000000,"None",2,10);
  add("Spaghetti Tualetti","spagxspoo","Base",60000000,"None",2,10);
  add("La Secret Combinasion","mixpets0011","High",750000000,"None",1,10);
  add("Tictac Sahur","mixpets0011","High",225000000,"None",1,10);
  add("La Grande Combinasion","MiStorage005","High",45000000,"Diamond",1,10);
  add("Chicleteira Bicicleteira","AccFoxMoonBloodOwl","Base",3500000,"None",1,10);
  add("La Grande Combinasion","jeffy127","High",100000000,"Rainbow",1,10);
  add("Tacorita Bicicleta","devyn56481","High",57700000,"Diamond",1,10);
  add("Mariachi Corazoni","mmmagic_furrealll","High",112500000,"None",1,10);
  add("Secret Lucky Block","Blood_V4mpire","Base",0,"None",1,10);
  add("Celularcini Viciosini","Cyber_Vortex98u40","High",28100000,"Gold",1,10);
  add("Festive 67","electricshadowQGOr","High",9300000,"Gold",1,10);
  add("La Spooky Combinasion","Electro_Data291qWQy","High",25000000,"Gold",1,10);
  add("Esok Sekolah","galaxyesok1","High",270000000,"Galaxy",1,10);
  add("La Extinct Grande","extincgrande0","High",35200000,"Diamond",1,10);
  add("Spaghetti Tualetti","toiletti101","High",270000000,"Diamond",1,10);
  add("Tacorita Bicicleta","tacobikee0","High",49500000,"None",1,10);
  add("Tacorita Bicicleta","tacobikee1","High",49500000,"None",1,10);
  add("Tang Tang Keletang","tangtangstocks1","High",100500000,"None",1,10);
  add("Celularcini Viciosini","phonestock1","High",95600000,"Gold",1,10);
  add("Los Primos","primotralaledon","Base",193700000,"Gold",1,10);
  add("Chicleteira Noelteira","burbchic","Base",15000000,"None",1,10);
  add("La Casa Boo","casaboopack","High",325000000,"Gold",1,10);
  add("La Ginger Sekolah","ginger175m","High",225000000,"None",1,10);
  add("Los Primos","losprimos3280","Base",31000000,"None",1,10);
  add("Los Puggies","lospuggie80","Base",30000000,"None",1,10);
  add("La Jolly Grande","lajolly60","Base",30000000,"None",1,10);
  add("Festive 67","67pack31","High",90000000,"None",1,10);
  add("Los Combinasionas","loscombihigh2","High",135000000,"None",1,10);
  add("Los Combinasionas","loscombi303","High",60000000,"None",1,10);
  add("Spaghetti Tualetti","radspag456","High",510000000,"Radioactive",1,10);
  add("Money Money Reindeer","moneyreindeer","Base",25000000,"None",1,10);
  add("Eviledon","eviledo59","High",189000000,"None",1,10);
  add("Los Bros","losbros4126","Base",24000000,"None",1,10);
  add("La Ginger Sekolah","laginge853","Base",75000000,"None",1,10);
  add("Los Bros","swaggybros411","High",200000000,"None",1,10);
  add("Chillin Chili","chillinw3132","High",150000000,"None",1,10);
  add("La Ginger Sekolah","LaGingerSekolah701","Base",75000000,"None",1,10);
  add("Los Combinasionas","loscombinasionas305","High",142500000,"None",1,10);
  add("Los Combinasionas","loscomvbo","High",45000000,"None",1,10);
  add("La Taco Combinasion","highxms2","High",280000000,"None",1,10);
  add("Ketchuru And Musturu","ketchu_38","High",255000000,"None",1,10);
  add("Ketupat Kepat","ktpatxl3","High",210000000,"None",1,10);
  add("Los Spaghettis","tangntanv","Base",70000000,"None",1,10);
  add("La Secret Combinasion","secretwew5","High",500000000,"None",1,10);
  add("Ketchuru And Musturu","ketchuru3230","Base",42500000,"None",1,10);
  add("Ketchuru And Musturu","mixpets005","High",170000000,"None",1,10);
  return { entries: e, accounts: [...a].sort() };
})();


// ═══════════════════════════════════════════════════════════════════
// SHARED STYLES
// ═══════════════════════════════════════════════════════════════════

const inp = (hl) => ({
  width: "100%", padding: "11px 14px", borderRadius: 10,
  border: `2px solid ${hl || "#2a2a3e"}`, background: "#1a1a2e",
  color: "#e0e0e0", fontSize: 14, outline: "none",
  transition: "border-color 0.2s", boxSizing: "border-box",
});

const lbl = {
  color: "#888", fontSize: 11, fontWeight: 700, marginBottom: 5,
  display: "block", textTransform: "uppercase", letterSpacing: 0.5,
};

const card = {
  background: "#12121f", borderRadius: 16, padding: 20,
  border: "1px solid #2a2a3e",
};

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

/* ── Searchable Dropdown ── */
const SearchDrop = ({ items, value, onSelect, placeholder, color, renderItem, getLabel }) => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const list = useMemo(() => {
    if (!q) return []; // Don't show all items by default — type to search
    const lo = q.toLowerCase();
    return items.filter((it) => (getLabel ? getLabel(it) : it).toLowerCase().includes(lo));
  }, [q, items, getLabel]);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <input type="text"
        value={value ? (getLabel ? getLabel(value) : value) : q}
        onChange={(e) => { setQ(e.target.value); onSelect(null); setOpen(true); }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        style={inp(open ? color : null)}
      />
      {open && list.length > 0 && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          maxHeight: 220, overflowY: "auto", background: "#1e1e36",
          border: `1px solid ${color}40`, borderRadius: 10,
          marginTop: 3, zIndex: 200, boxShadow: `0 8px 28px ${color}18`,
        }}>
          {list.map((item, i) => (
            <div key={getLabel ? getLabel(item) : item}
              onClick={() => { onSelect(item); setQ(""); setOpen(false); }}
              style={{
                padding: "9px 14px", cursor: "pointer",
                borderBottom: i < list.length - 1 ? "1px solid #2a2a3e" : "none",
                transition: "background 0.12s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = `${color}12`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {renderItem ? renderItem(item) : (
                <span style={{ color: "#e0e0e0", fontSize: 14 }}>{getLabel ? getLabel(item) : item}</span>
              )}
            </div>
          ))}
        </div>
      )}
      {open && list.length === 0 && q && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          padding: 14, background: "#1e1e36", borderRadius: 10,
          marginTop: 3, color: "#666", textAlign: "center", fontSize: 13,
        }}>No results for "{q}"</div>
      )}
      {open && !q && !value && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          padding: 14, background: "#1e1e36", borderRadius: 10,
          marginTop: 3, color: "#555", textAlign: "center", fontSize: 12,
        }}>Start typing to search…</div>
      )}
    </div>
  );
};

/* ── Game Selector ── */
const GameSelector = ({ games, sel, onSelect }) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
    {Object.values(games).map((g) => {
      const on = sel === g.id;
      return (
        <button key={g.id} onClick={() => onSelect(g.id)} style={{
          flex: "1 1 140px", padding: "14px 16px", borderRadius: 14, border: "none",
          cursor: "pointer", transition: "all 0.25s ease",
          background: on ? `linear-gradient(135deg, ${g.color}, ${g.color}cc)` : "#1a1a2e",
          color: on ? "#fff" : "#777",
          boxShadow: on ? `0 4px 18px ${g.color}35` : "none",
          transform: on ? "scale(1.02)" : "scale(1)",
        }}>
          <div style={{ fontSize: 28, marginBottom: 4 }}>{g.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{g.name}</div>
          <div style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}>{g.description}</div>
        </button>
      );
    })}
  </div>
);

/* ── Tab Bar ── */
const TabBar = ({ tabs, active, onChange, color }) => (
  <div style={{
    display: "flex", gap: 4, marginBottom: 20, background: "#0e0e1a",
    borderRadius: 12, padding: 4, border: "1px solid #1a1a2e",
  }}>
    {tabs.map((t) => {
      const on = active === t.key;
      return (
        <button key={t.key} onClick={() => onChange(t.key)} style={{
          flex: 1, padding: "10px 8px", borderRadius: 10, border: "none",
          cursor: "pointer", fontWeight: 700, fontSize: 12,
          background: on ? `${color}18` : "transparent",
          color: on ? color : "#555", transition: "all 0.2s",
        }}>
          {t.icon} {t.label}
        </button>
      );
    })}
  </div>
);

/* ── Inline Quantity Control (used in search & tracker) ── */
const QtyControl = ({ qty, onMinus, onPlus, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <button onClick={onMinus} style={{
      width: 26, height: 26, borderRadius: 6, border: "none",
      background: qty <= 1 ? "#e74c3c18" : "#1a1a2e",
      color: qty <= 1 ? "#e74c3c" : "#e0e0e0",
      cursor: "pointer", fontSize: 13, fontWeight: 700, transition: "all 0.15s",
    }}>−</button>
    <span style={{
      minWidth: 28, textAlign: "center", fontWeight: 800, fontSize: 14,
      color: color || "#e0e0e0",
    }}>{qty}</span>
    <button onClick={onPlus} style={{
      width: 26, height: 26, borderRadius: 6, border: "none",
      background: "#1a1a2e", color: "#e0e0e0",
      cursor: "pointer", fontSize: 13, fontWeight: 700, transition: "all 0.15s",
    }}>+</button>
  </div>
);


// ═══════════════════════════════════════════════════════════════════
// MAIN APPLICATION
// ═══════════════════════════════════════════════════════════════════

export default function BrainrotTracker() {
  // ── Core ──
  const [games, setGames] = useState(DEFAULT_GAMES);
  const [selGameId, setSelGameId] = useState("steal_a_brainrot");
  const [tab, setTab] = useState("tracker");

  // ── Per-game entries: { gameId: [{id, petName, account, msType, msValue, mutation, quantity}] } ──
  const [allEntries, setAllEntries] = useState({ steal_a_brainrot: IMPORT_DATA.entries, escape_tsunami: [] });
  // ── Per-game accounts ──
  const [allAccounts, setAllAccounts] = useState({ steal_a_brainrot: IMPORT_DATA.accounts, escape_tsunami: [] });

  // ── Add form ──
  const [showForm, setShowForm] = useState(false);
  const [fPet, setFPet] = useState(null);
  const [fAccount, setFAccount] = useState("");
  const [fNewAcct, setFNewAcct] = useState("");
  const [fMsValue, setFMsValue] = useState("");
  const [fMsSuffix, setFMsSuffix] = useState(""); // "", "K", "M", "B"
  const [fMutation, setFMutation] = useState("None");
  const [fQty, setFQty] = useState(1);
  const [fMaxCap, setFMaxCap] = useState(10);
  const [editId, setEditId] = useState(null);
  const [batchItems, setBatchItems] = useState([]); // temporary batch before committing

  // ── Search ──
  const [sQuery, setSQuery] = useState("");
  const [sMutFilter, setSMutFilter] = useState("All");
  const [sAcctFilter, setSAcctFilter] = useState("All");
  const [sPetFilter, setSPetFilter] = useState("All");

  // ── Accounts panel ──
  const [showAcctPanel, setShowAcctPanel] = useState(false);
  const [editingAcctIdx, setEditingAcctIdx] = useState(null);
  const [editingAcctValue, setEditingAcctValue] = useState("");
  const [acctModalIdx, setAcctModalIdx] = useState(null); // modal for full account editing
  const [acctModalName, setAcctModalName] = useState("");
  const [acctSearch, setAcctSearch] = useState(""); // search within accounts panel

  // ── Manage ──
  const [npName, setNpName] = useState("");
  const [npBaseMs, setNpBaseMs] = useState("");
  const [npHighMs, setNpHighMs] = useState("");
  const [nmName, setNmName] = useState("");

  // ── Derived ──
  const game = games[selGameId];
  const entries = allEntries[selGameId] || [];
  const accounts = allAccounts[selGameId] || [];

  // ── Helpers ──
  const upd = (gid, fn) => setAllEntries((p) => ({ ...p, [gid]: fn(p[gid] || []) }));
  const addAcct = (gid, n) => {
    const t = n.trim();
    if (!t) return;
    setAllAccounts((p) => {
      const ex = p[gid] || [];
      return ex.includes(t) ? p : { ...p, [gid]: [...ex, t] };
    });
  };

  // ── Edit account name (renames in accounts list AND all entries) ──
  const commitAcctEdit = (idx) => {
    const newName = editingAcctValue.trim();
    if (!newName) return;
    const oldName = accounts[idx];
    if (newName === oldName) { setEditingAcctIdx(null); setEditingAcctValue(""); return; }
    // Rename in accounts list
    setAllAccounts((p) => {
      const list = [...(p[selGameId] || [])];
      list[idx] = newName;
      return { ...p, [selGameId]: list };
    });
    // Rename in all entries for this game
    upd(selGameId, (prev) => prev.map((e) => e.account === oldName ? { ...e, account: newName } : e));
    setEditingAcctIdx(null);
    setEditingAcctValue("");
  };

  // ── Delete account + all its entries ──
  const deleteAccount = (idx) => {
    const name = accounts[idx];
    setAllAccounts((p) => {
      const list = [...(p[selGameId] || [])];
      list.splice(idx, 1);
      return { ...p, [selGameId]: list };
    });
    upd(selGameId, (prev) => prev.filter((e) => e.account !== name));
  };

  // ── Determine msType from value vs pet's baseMs ──
  const deriveMsType = (pet, val) => {
    if (!pet) return "Base";
    const v = typeof val === "number" ? val : parseMsInput(val);
    if (isNaN(v) || v === 0) return "Base";
    return v === pet.baseMs ? "Base" : "High";
  };

  // ── Form: parse M/s input like "200M", "50K", "1.5B", or raw numbers ──
  const parseMsInput = (str) => {
    if (!str) return 0;
    const s = String(str).trim().toUpperCase();
    const m = s.match(/^([\d.]+)\s*([KMB]?)$/);
    if (!m) return parseFloat(s) || 0;
    const num = parseFloat(m[1]) || 0;
    const suffix = m[2];
    if (suffix === "K") return num * 1e3;
    if (suffix === "M") return num * 1e6;
    if (suffix === "B") return num * 1e9;
    return num;
  };

  // ── Form: format raw number to simplified display (e.g. 200000000 -> "200M") ──
  // ── Display helpers: split number into value + suffix for clean UI ──
  const fmtNum = (n) => {
    if (n == null || n === 0) return "0";
    if (n >= 1e9) { const v = n / 1e9; return (v % 1 === 0 ? String(v) : v.toFixed(1).replace(/\.0$/, "")); }
    if (n >= 1e6) { const v = n / 1e6; return (v % 1 === 0 ? String(v) : v.toFixed(1).replace(/\.0$/, "")); }
    if (n >= 1e3) { const v = n / 1e3; return (v % 1 === 0 ? String(v) : v.toFixed(1).replace(/\.0$/, "")); }
    return String(n);
  };
  const fmtSuffix = (n) => {
    if (n == null || n === 0) return "";
    if (n >= 1e9) return "B";
    if (n >= 1e6) return "M";
    if (n >= 1e3) return "K";
    return "";
  };
  const fmtFull = (n) => {
    const num = fmtNum(n);
    const suf = fmtSuffix(n);
    return suf ? num + suf : num;
  };

  // ── Form: when pet selected, populate baseMs as simplified display ──
  const handlePetSelect = (pet) => {
    setFPet(pet);
    if (pet) {
      setFMsValue(fmtNum(pet.baseMs));
      setFMsSuffix(fmtSuffix(pet.baseMs));
    } else {
      setFMsValue(""); setFMsSuffix("");
    }
  };

  const resetForm = () => {
    setFPet(null); setFAccount(""); setFNewAcct("");
    setFMsValue(""); setFMsSuffix(""); setFMutation("None");
    setFQty(1); setFMaxCap(10); setEditId(null);
    setBatchItems([]);
  };
  // Reset just the pet fields (keep account + maxCap for batch adding)
  const resetPetFields = () => {
    setFPet(null); setFMsValue(""); setFMsSuffix(""); setFMutation("None"); setFQty(1);
  };

  // ── Add single item to temporary batch list ──
  const handleAddToBatch = () => {
    if (!fPet || !fMsValue) return;
    const acct = fNewAcct.trim() || fAccount;
    if (!acct) return;

    const msVal = parseMsInput(fMsValue + fMsSuffix);
    const msType = deriveMsType(fPet, msVal);

    const item = {
      _batchId: uid(),
      petName: fPet.name,
      msType,
      msValue: msVal,
      msDisplay: fMsValue,
      msSuffix: fMsSuffix,
      mutation: fMutation,
      quantity: fQty,
    };

    setBatchItems((prev) => {
      // Merge if same pet+msType+mutation already in batch
      const dupIdx = prev.findIndex((b) => b.petName === item.petName && b.msType === item.msType && b.mutation === item.mutation);
      if (dupIdx >= 0) {
        const updated = [...prev];
        updated[dupIdx] = { ...updated[dupIdx], quantity: updated[dupIdx].quantity + item.quantity };
        return updated;
      }
      return [...prev, item];
    });
    resetPetFields();
  };

  // ── Commit entire batch to the tracker ──
  const handleCommitBatch = () => {
    const acct = fNewAcct.trim() || fAccount;
    if (!acct || batchItems.length === 0) return;
    addAcct(selGameId, acct);

    upd(selGameId, (prev) => {
      let result = [...prev];
      for (const item of batchItems) {
        const entry = {
          id: uid(),
          petName: item.petName,
          account: acct,
          msType: item.msType,
          msValue: item.msValue,
          mutation: item.mutation,
          quantity: item.quantity,
          maxCap: fMaxCap,
        };
        // Check for existing duplicate in tracker
        const dupIdx = result.findIndex((e) =>
          e.petName === entry.petName &&
          e.account === entry.account &&
          e.msType === entry.msType &&
          e.mutation === entry.mutation
        );
        if (dupIdx >= 0) {
          result[dupIdx] = { ...result[dupIdx], quantity: result[dupIdx].quantity + entry.quantity };
        } else {
          result = [...result, entry];
        }
      }
      return result;
    });
    resetForm();
    setShowForm(false);
  };

  // ── Direct submit for edit mode only ──
  const handleSubmit = () => {
    if (!fPet || !editId) return;
    const acct = fNewAcct.trim() || fAccount;
    if (!acct) return;
    addAcct(selGameId, acct);

    const msVal = parseMsInput(fMsValue + fMsSuffix);
    const msType = deriveMsType(fPet, msVal);

    const entry = {
      id: editId,
      petName: fPet.name,
      account: acct,
      msType,
      msValue: msVal,
      mutation: fMutation,
      quantity: fQty,
      maxCap: fMaxCap,
    };
    upd(selGameId, (prev) => prev.map((e) => e.id === editId ? entry : e));
    resetForm();
    setShowForm(false);
  };

  const handleEdit = (entry) => {
    const pet = game.pets.find((p) => p.name === entry.petName) || {
      name: entry.petName, baseMs: entry.msType === "Base" ? entry.msValue : 0, highMs: entry.msType === "High" ? entry.msValue : 0,
    };
    setFPet(pet); setFAccount(entry.account); setFNewAcct("");
    setFMsValue(fmtNum(entry.msValue)); setFMsSuffix(fmtSuffix(entry.msValue)); setFMutation(entry.mutation);
    setFQty(entry.quantity); setFMaxCap(entry.maxCap || 10); setEditId(entry.id);
    setShowForm(true); setTab("tracker");
  };

  const handleDelete = (id) => upd(selGameId, (p) => p.filter((e) => e.id !== id));

  const handleQtyChange = (id, delta) => {
    upd(selGameId, (p) => p.map((e) => {
      if (e.id !== id) return e;
      const nq = Math.max(0, e.quantity + delta);
      if (nq === 0) return null; // remove if 0
      return { ...e, quantity: nq };
    }).filter(Boolean));
  };

  // ── Add pet / mutation ──
  const handleAddPet = () => {
    const n = npName.trim();
    if (!n || !npBaseMs) return;
    setGames((p) => {
      const g = { ...p[selGameId] };
      if (g.pets.some((x) => x.name.toLowerCase() === n.toLowerCase())) return p;
      g.pets = [...g.pets, { name: n, baseMs: parseFloat(npBaseMs) || 0, highMs: parseFloat(npHighMs) || 0 }];
      return { ...p, [selGameId]: g };
    });
    setNpName(""); setNpBaseMs(""); setNpHighMs("");
  };

  const handleAddMut = () => {
    const n = nmName.trim();
    if (!n) return;
    setGames((p) => {
      const g = { ...p[selGameId] };
      if (g.mutations.some((x) => (typeof x === "string" ? x : x.name).toLowerCase() === n.toLowerCase())) return p;
      g.mutations = [...g.mutations, n];
      return { ...p, [selGameId]: g };
    });
    setNmName("");
  };

  // ── Search filtering: sorted by ascending m/s ──
  const searchResults = useMemo(() => {
    let r = entries;
    if (sQuery) {
      const lo = sQuery.toLowerCase();
      r = r.filter((e) => e.petName.toLowerCase().includes(lo) || e.account.toLowerCase().includes(lo));
    }
    if (sMutFilter !== "All") r = r.filter((e) => e.mutation === sMutFilter);
    if (sAcctFilter !== "All") r = r.filter((e) => e.account === sAcctFilter);
    if (sPetFilter !== "All") r = r.filter((e) => e.petName === sPetFilter);
    // Sort by ascending m/s (lower first)
    r = [...r].sort((a, b) => a.msValue - b.msValue);
    return r;
  }, [entries, sQuery, sMutFilter, sAcctFilter, sPetFilter]);

  // ── Cross-account total stock per petName (stock = sum of quantity across all accounts) ──
  // ── Total stock per pet+msType across all accounts (Base and High are SEPARATE) ──
  const totalStockByKey = useMemo(() => {
    const map = {};
    entries.forEach((e) => {
      const key = e.petName + "|" + e.msType + "|" + e.msValue;
      map[key] = (map[key] || 0) + e.quantity;
    });
    return map;
  }, [entries]);

  // ── Grand total stock of all pets across all accounts ──
  const grandTotalStock = useMemo(() => entries.reduce((s, e) => s + e.quantity, 0), [entries]);

  // ── Unique pet names for "Brainrots listed" filter ──
  const uniquePetNames = useMemo(() => [...new Set(entries.map((e) => e.petName))].sort(), [entries]);

  // ── Tab config ──
  const tabs = [
    { key: "tracker", label: "Tracker", icon: "📋" },
    { key: "search", label: "Search", icon: "🔍" },
    { key: "manage", label: "Manage", icon: "⚙️" },
  ];

  // ── Detect msType visually ──
  const msColor = (type) => type === "High" ? "#f39c12" : "#3498db";

  // ═══════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0a14 0%, #0f0f1e 50%, #0a0a14 100%)",
      color: "#e0e0e0",
      fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif",
    }}>
      {/* ═══ HEADER ═══ */}
      <div style={{
        borderBottom: "1px solid #1a1a2e", padding: "16px 20px",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h1 style={{
            margin: 0, fontSize: 20, fontWeight: 700,
            color: "#e0e0e0", letterSpacing: 0.3,
          }}>Roblox Brainrot Inventory Tracker</h1>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "20px 14px" }}>

        {/* ═══ GAME SELECTOR ═══ */}
        <GameSelector games={games} sel={selGameId} onSelect={(id) => {
          setSelGameId(id); setShowForm(false); resetForm();
          setSQuery(""); setSMutFilter("All"); setSAcctFilter("All"); setSPetFilter("All");
          setTab("tracker");
        }} />

        {/* ═══ ACCOUNTS PANEL ═══ */}
        {(() => {
          const acctCount = accounts.length;
          // Modal data
          const modalAcctName = acctModalIdx !== null ? accounts[acctModalIdx] : null;
          const modalEntries = modalAcctName ? entries.filter((e) => e.account === modalAcctName) : [];

          return (
            <>
            <div style={{
              ...card, padding: 0, marginBottom: 20, overflow: "hidden",
              border: `1px solid ${showAcctPanel ? game.color + "30" : "#2a2a3e"}`,
              transition: "border-color 0.2s",
            }}>
              {/* Clickable header */}
              <button onClick={() => { setShowAcctPanel((p) => !p); setAcctSearch(""); }}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "13px 18px", background: "transparent", border: "none",
                  cursor: "pointer", color: "#e0e0e0",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>👤</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Accounts</span>
                  <span style={{
                    fontSize: 11, padding: "2px 9px", borderRadius: 6,
                    background: `${game.color}15`, color: game.color, fontWeight: 700,
                  }}>{acctCount}</span>
                </div>
                <span style={{ color: "#555", fontSize: 14, transition: "transform 0.2s", transform: showAcctPanel ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
              </button>

              {/* Expandable content */}
              {showAcctPanel && (
                <div style={{ padding: "0 18px 16px", borderTop: "1px solid #2a2a3e" }}>
                  {accounts.length === 0 ? (
                    <p style={{ color: "#555", fontSize: 13, margin: "12px 0 0" }}>
                      No accounts yet — they're created when you add a brainrot.
                    </p>
                  ) : (
                    <>
                      {/* Search within accounts */}
                      <div style={{ marginTop: 10, marginBottom: 8 }}>
                        <input type="text" value={acctSearch}
                          onChange={(e) => setAcctSearch(e.target.value)}
                          placeholder="🔍 Search pets in accounts…"
                          style={{ ...inp(), padding: "8px 12px", fontSize: 12 }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {accounts.map((a, idx) => {
                          const acctEntries = entries.filter((e) => e.account === a);
                          const cnt = acctEntries.length;
                          // If searching, filter accounts to those with matching pets
                          if (acctSearch) {
                            const lo = acctSearch.toLowerCase();
                            const hasMatch = a.toLowerCase().includes(lo) || acctEntries.some((e) => e.petName.toLowerCase().includes(lo));
                            if (!hasMatch) return null;
                          }
                          // Show matched pets if searching
                          const matchedPets = acctSearch
                            ? acctEntries.filter((e) => e.petName.toLowerCase().includes(acctSearch.toLowerCase()))
                            : [];
                          return (
                            <div key={a + idx}>
                              <div style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                padding: "8px 12px", borderRadius: 10, background: "#0e0e1a",
                                border: "1px solid transparent",
                              }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                                  <span style={{ color: "#e0e0e0", fontWeight: 600, fontSize: 13 }}>{a}</span>
                                  <span style={{ fontSize: 11, color: "#555" }}>({cnt} entries)</span>
                                </div>
                                <div style={{ display: "flex", gap: 4 }}>
                                  <button onClick={() => { setAcctModalIdx(idx); setAcctModalName(a); }}
                                    style={{ padding: "4px 10px", borderRadius: 6, border: "none", background: "#1a1a2e", color: "#888", cursor: "pointer", fontSize: 11 }}>✏️ Edit</button>
                                  <button onClick={() => deleteAccount(idx)}
                                    style={{ padding: "4px 10px", borderRadius: 6, border: "none", background: "#1a1a2e", color: "#e74c3c", cursor: "pointer", fontSize: 11 }}>🗑️</button>
                                </div>
                              </div>
                              {/* Show matched pets when searching */}
                              {acctSearch && matchedPets.length > 0 && (
                                <div style={{ marginLeft: 16, marginTop: 4, marginBottom: 4, display: "flex", flexDirection: "column", gap: 3 }}>
                                  {matchedPets.map((ent) => (
                                    <div key={ent.id} style={{
                                      padding: "5px 10px", borderRadius: 7, background: "#0a0a1a",
                                      display: "flex", alignItems: "center", gap: 8, fontSize: 12,
                                    }}>
                                      <span style={{ color: "#e0e0e0", fontWeight: 600 }}>{ent.petName}</span>
                                      <span style={{ color: msColor(ent.msType), fontSize: 11, fontWeight: 700 }}>{fmtNum(ent.msValue)} {fmtSuffix(ent.msValue)}/s</span>
                                      <span style={{ color: "#555", fontSize: 10 }}>×{ent.quantity}</span>
                                      {ent.mutation !== "None" && <span style={{ color: "#8e44ad", fontSize: 10 }}>✨ {ent.mutation}</span>}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* ═══ ACCOUNT EDIT MODAL ═══ */}
            {acctModalIdx !== null && modalAcctName && (
              <div style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center",
                padding: 16,
              }}
                onClick={(e) => { if (e.target === e.currentTarget) setAcctModalIdx(null); }}
              >
                <div style={{
                  ...card, maxWidth: 520, width: "100%", maxHeight: "85vh", overflowY: "auto",
                  border: `1px solid ${game.color}40`, boxShadow: `0 12px 40px ${game.color}20`,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <h3 style={{ margin: 0, color: game.color, fontSize: 16 }}>✏️ Edit Account</h3>
                    <button onClick={() => setAcctModalIdx(null)}
                      style={{ padding: "4px 12px", borderRadius: 6, border: "none", background: "#e74c3c15", color: "#e74c3c", cursor: "pointer", fontSize: 13, fontWeight: 700 }}>✕</button>
                  </div>

                  {/* Username */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={lbl}>Account Username</label>
                    <div style={{ display: "flex", gap: 8 }}>
                      <input type="text" value={acctModalName}
                        onChange={(e) => setAcctModalName(e.target.value)}
                        style={{ ...inp(game.color), flex: 1 }} />
                      <button onClick={() => {
                        const nv = acctModalName.trim();
                        if (!nv || nv === accounts[acctModalIdx]) return;
                        const oldName = accounts[acctModalIdx];
                        setAllAccounts((p) => { const list = [...(p[selGameId] || [])]; list[acctModalIdx] = nv; return { ...p, [selGameId]: list }; });
                        upd(selGameId, (prev) => prev.map((e) => e.account === oldName ? { ...e, account: nv } : e));
                      }}
                        style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: "#27ae6020", color: "#27ae60", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                        Save Name
                      </button>
                    </div>
                  </div>

                  {/* Pets in this account */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, color: "#666", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                      Pets in this account ({modalEntries.length})
                    </div>
                    {modalEntries.length === 0 ? (
                      <p style={{ color: "#555", fontSize: 12 }}>No pets in this account yet.</p>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {modalEntries.map((ent) => {
                          const mc = msColor(ent.msType);
                          return (
                            <div key={ent.id} style={{
                              padding: "10px 12px", borderRadius: 10, background: "#0a0a1a",
                              border: "1px solid #1e1e30",
                            }}>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                                <span style={{ fontWeight: 600, fontSize: 13, color: "#e0e0e0" }}>{ent.petName}</span>
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                  {ent.mutation !== "None" && (
                                    <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#8e44ad15", color: "#8e44ad", fontWeight: 700 }}>{ent.mutation}</span>
                                  )}
                                  <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: `${mc}12`, color: mc, fontWeight: 700 }}>{ent.msType}</span>
                                  <button onClick={() => handleDelete(ent.id)}
                                    style={{ padding: "3px 8px", borderRadius: 5, border: "none", background: "#e74c3c12", color: "#e74c3c", cursor: "pointer", fontSize: 10, fontWeight: 700 }}>✕ Remove</button>
                                </div>
                              </div>
                              {/* Editable m/s — simplified display */}
                              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
                                <input type="number" min={0} step="any"
                                  defaultValue={fmtNum(ent.msValue)}
                                  key={ent.id + "-" + ent.msValue}
                                  onBlur={(ev) => {
                                    const raw = parseFloat(ev.target.value) || 0;
                                    const suf = fmtSuffix(ent.msValue);
                                    const mult = suf === "B" ? 1e9 : suf === "M" ? 1e6 : suf === "K" ? 1e3 : 1;
                                    const nv = raw * mult;
                                    const pet = game.pets.find((p) => p.name === ent.petName);
                                    const newType = pet && nv === pet.baseMs ? "Base" : "High";
                                    upd(selGameId, (prev) => prev.map((x) => x.id === ent.id ? { ...x, msValue: nv, msType: newType } : x));
                                  }}
                                  style={{ ...inp(), width: 90, padding: "6px 10px", fontSize: 13 }} />
                                <span style={{ fontSize: 12, color: "#888", fontWeight: 700 }}>{fmtSuffix(ent.msValue)}/s</span>
                                <span style={{ fontSize: 10, color: "#888", marginLeft: 4 }}>Qty: {ent.quantity}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Add pet to this account */}
                  <button onClick={() => {
                    const name = acctModalName.trim() || modalAcctName;
                    setFAccount(name); setFNewAcct("");
                    setShowForm(true); setTab("tracker");
                    setAcctModalIdx(null);
                  }}
                    style={{
                      width: "100%", padding: "10px", borderRadius: 8, border: `1px dashed ${game.color}50`,
                      background: `${game.color}08`, color: game.color, cursor: "pointer",
                      fontSize: 13, fontWeight: 700,
                    }}>
                    + Add pet to this account
                  </button>
                </div>
              </div>
            )}
            </>
          );
        })()}

        {/* ═══ TABS ═══ */}
        <TabBar tabs={tabs} active={tab} onChange={setTab} color={game.color} />

        {/* ═══════════════════════════════════
             TAB: TRACKER
           ═══════════════════════════════════ */}
        {tab === "tracker" && (<>
          {/* Add button */}
          <button onClick={() => { setShowForm(!showForm); if (showForm) resetForm(); }}
            style={{
              width: "100%", padding: "13px", borderRadius: 12, border: "none", marginBottom: 16,
              background: showForm ? "#e74c3c" : `linear-gradient(135deg, ${game.color}, ${game.color}cc)`,
              color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 14,
              boxShadow: `0 4px 16px ${showForm ? "#e74c3c" : game.color}30`, transition: "all 0.2s",
            }}>
            {showForm ? "✕ Cancel" : "+ Add Brainrot"}
          </button>

          {/* ── ADD/EDIT FORM ── */}
          {showForm && (
            <div style={{ ...card, marginBottom: 20, border: `1px solid ${game.color}25`, boxShadow: `0 4px 20px ${game.color}08` }}>
              <h3 style={{ margin: "0 0 16px", color: game.color, fontSize: 15 }}>
                {editId ? "✏️ Edit Brainrot" : "➕ Add New Brainrot"}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                {/* Account — defaults to creating new */}
                <div>
                  <label style={lbl}>Account Username *</label>
                  <input type="text" placeholder="Enter account username"
                    value={fNewAcct}
                    onChange={(e) => { setFNewAcct(e.target.value); setFAccount(""); }}
                    style={inp()} />
                  {accounts.length > 0 && (
                    <div style={{ marginTop: 6 }}>
                      <span style={{ fontSize: 11, color: "#555", marginRight: 6 }}>Or select existing:</span>
                      <select
                        value={fAccount}
                        onChange={(e) => { setFAccount(e.target.value); if (e.target.value) setFNewAcct(""); }}
                        style={{ ...inp(), padding: "6px 10px", fontSize: 12, width: "auto", display: "inline-block", minWidth: 160 }}
                      >
                        <option value="">— none —</option>
                        {accounts.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  )}
                </div>

                {/* Pet */}
                <div>
                  <label style={lbl}>Pet *</label>
                  <SearchDrop
                    items={game.pets} value={fPet} onSelect={handlePetSelect}
                    placeholder="🔍 Search pets by name…" color={game.color}
                    getLabel={(p) => p.name}
                    renderItem={(pet) => (
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ color: "#e0e0e0", fontWeight: 500 }}>{pet.name}</span>
                        <span style={{ color: "#666", fontSize: 11 }}>Base: {fmtNum(pet.baseMs)} {fmtSuffix(pet.baseMs)}/s</span>
                      </div>
                    )}
                  />
                </div>

                {/* Pet info + auto m/s type indicator */}
                {fPet && (
                  <div style={{
                    padding: "10px 14px", borderRadius: 10,
                    background: "#0d0d1e", border: "1px solid #2a2a3e",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <span style={{ fontWeight: 700, color: "#e0e0e0", fontSize: 14 }}>{fPet.name}</span>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      Base: <strong style={{ color: "#3498db" }}>{fmtNum(fPet.baseMs)} {fmtSuffix(fPet.baseMs)}/s</strong>
                      {fPet.highMs > 0 && (<>
                        {" · "}High: <strong style={{ color: "#f39c12" }}>{fmtNum(fPet.highMs)} {fmtSuffix(fPet.highMs)}/s</strong>
                      </>)}
                    </div>
                  </div>
                )}

                {/* m/s Value — number + suffix for clean display */}
                <div>
                  <label style={lbl}>
                    M/s Value (money per second) *
                  </label>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <input type="number" min={0} step="any" value={fMsValue}
                      onChange={(e) => setFMsValue(e.target.value)}
                      placeholder="e.g. 50, 200, 1.5"
                      style={{ ...inp(), flex: 1 }} />
                    <select value={fMsSuffix} onChange={(e) => setFMsSuffix(e.target.value)}
                      style={{ ...inp(), width: 80, padding: "11px 8px", textAlign: "center", fontWeight: 700 }}>
                      <option value="">/s</option>
                      <option value="K">K/s</option>
                      <option value="M">M/s</option>
                      <option value="B">B/s</option>
                    </select>
                    {fMsValue && (
                      <span style={{ fontSize: 11, color: "#888", whiteSpace: "nowrap" }}>
                        = {fmtNum(parseMsInput(fMsValue + fMsSuffix))} {fMsSuffix || ""}/s
                      </span>
                    )}
                  </div>
                  {/* Auto type indicator */}
                  {fPet && fMsValue && (
                    <div style={{
                      marginTop: 6, display: "flex", alignItems: "center", gap: 8,
                    }}>
                      {(() => {
                        const t = deriveMsType(fPet, parseMsInput(fMsValue + fMsSuffix));
                        const c = msColor(t);
                        return (
                          <>
                            <span style={{
                              fontSize: 12, padding: "3px 10px", borderRadius: 6,
                              background: `${c}18`, color: c, fontWeight: 700,
                              border: `1px solid ${c}30`,
                            }}>
                              {t === "Base" ? "💰" : "🚀"} {t} m/s
                            </span>
                            <span style={{ fontSize: 11, color: "#555" }}>
                              {t === "Base"
                                ? "Matches pet's default Base rate"
                                : "Value differs from Base — marked as High m/s"}
                            </span>
                          </>
                        );
                      })()}
                    </div>
                  )}
                </div>

                {/* Mutation + Qty + Max Capacity */}
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ flex: 1 }}>
                    <label style={lbl}>Mutation</label>
                    <select value={fMutation} onChange={(e) => setFMutation(e.target.value)} style={inp()}>
                      {game.mutations.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={lbl}>Quantity</label>
                    <input type="number" min={1} value={fQty}
                      onChange={(e) => setFQty(Math.max(1, parseInt(e.target.value) || 1))}
                      style={inp()} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={lbl}>Base Max Inventory</label>
                    <input type="number" min={1} value={fMaxCap}
                      onChange={(e) => setFMaxCap(Math.max(1, parseInt(e.target.value) || 10))}
                      style={inp()} />
                  </div>
                </div>

                {/* ── Batch UI: Add to Batch button + Batch Preview List + Commit ── */}
                {(() => {
                  const acct = fNewAcct.trim() || fAccount;
                  const acctOk = !!acct;
                  // Count existing entries for this account in tracker
                  const existingCount = acctOk ? entries.filter((e) => e.account === acct).length : 0;
                  // Count unique listings in batch (each batch item = 1 listing unless merges with existing)
                  const batchNewListings = batchItems.filter((b) =>
                    !entries.some((e) => e.petName === b.petName && e.account === acct && e.msType === b.msType && e.mutation === b.mutation)
                  ).length;
                  const totalAfterCommit = existingCount + batchNewListings;
                  const atCap = totalAfterCommit >= fMaxCap;
                  const canAddMore = !atCap;

                  // Current pet form is valid
                  const petOk = fPet && acctOk && fMsValue;

                  return editId ? (
                    // ── EDIT MODE: direct save, no batch ──
                    <div>
                      <button onClick={handleSubmit} disabled={!petOk} style={{
                        width: "100%", padding: "13px", borderRadius: 12, border: "none",
                        background: petOk ? `linear-gradient(135deg, ${game.color}, ${game.color}cc)` : "#2a2a3e",
                        color: petOk ? "#fff" : "#555", fontWeight: 700, fontSize: 14,
                        cursor: petOk ? "pointer" : "not-allowed",
                        boxShadow: petOk ? `0 4px 14px ${game.color}30` : "none", transition: "all 0.2s",
                      }}>
                        💾 Save Changes
                      </button>
                    </div>
                  ) : (
                    // ── ADD MODE: batch flow ──
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                      {/* "Add to Batch" button */}
                      {petOk && (
                        <button onClick={canAddMore ? handleAddToBatch : undefined} disabled={!canAddMore} style={{
                          width: "100%", padding: "11px", borderRadius: 10, border: `1px solid ${canAddMore ? game.color + "40" : "#2a2a3e"}`,
                          background: canAddMore ? `${game.color}10` : "#1a1a2e",
                          color: canAddMore ? game.color : "#555", fontWeight: 700, fontSize: 13,
                          cursor: canAddMore ? "pointer" : "not-allowed", transition: "all 0.2s",
                        }}>
                          ➕ Add to Batch ({existingCount + batchItems.length}/{fMaxCap})
                        </button>
                      )}

                      {/* Capacity warning */}
                      {atCap && (
                        <div style={{ padding: "8px 12px", borderRadius: 8, background: "#e74c3c12", color: "#e74c3c", fontSize: 12, fontWeight: 600 }}>
                          ⚠ Maximum inventory capacity reached for this account ({fMaxCap}).
                        </div>
                      )}

                      {/* Batch preview list */}
                      {batchItems.length > 0 && (
                        <div style={{
                          borderRadius: 10, background: "#0d0d1e", border: `1px solid ${game.color}20`,
                          overflow: "hidden",
                        }}>
                          <div style={{ padding: "10px 14px", borderBottom: "1px solid #1e1e30", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontWeight: 700, fontSize: 13, color: "#e0e0e0" }}>
                              📋 Account Preview — {acct}
                            </span>
                            <span style={{ fontSize: 11, color: "#888" }}>
                              {batchItems.length} item{batchItems.length !== 1 ? "s" : ""} · {batchItems.reduce((s, b) => s + b.quantity, 0)} total qty
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            {batchItems.map((b, idx) => {
                              const mc = msColor(b.msType);
                              return (
                                <div key={b._batchId} style={{
                                  display: "flex", justifyContent: "space-between", alignItems: "center",
                                  padding: "8px 14px", borderBottom: idx < batchItems.length - 1 ? "1px solid #1a1a2e" : "none",
                                }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", flex: 1 }}>
                                    <span style={{ fontWeight: 600, fontSize: 13, color: "#e0e0e0" }}>{b.petName}</span>
                                    <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 4, background: `${mc}15`, color: mc, fontWeight: 700 }}>{b.msType}</span>
                                    {b.mutation !== "None" && (
                                      <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 4, background: "#8e44ad15", color: "#8e44ad", fontWeight: 600 }}>✨ {b.mutation}</span>
                                    )}
                                    <span style={{ fontSize: 11, color: "#888" }}>{b.msDisplay} {b.msSuffix}/s</span>
                                    <span style={{ fontSize: 11, color: "#888" }}>×{b.quantity}</span>
                                  </div>
                                  <button onClick={() => setBatchItems((prev) => prev.filter((x) => x._batchId !== b._batchId))}
                                    style={{ padding: "3px 8px", borderRadius: 5, border: "none", background: "#e74c3c12", color: "#e74c3c", cursor: "pointer", fontSize: 10, fontWeight: 700 }}>
                                    ✕
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Final commit button */}
                      {batchItems.length > 0 && (
                        <button onClick={handleCommitBatch} style={{
                          width: "100%", padding: "13px", borderRadius: 12, border: "none",
                          background: `linear-gradient(135deg, ${game.color}, ${game.color}cc)`,
                          color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer",
                          boxShadow: `0 4px 14px ${game.color}30`, transition: "all 0.2s",
                        }}>
                          ✅ Add Brainrot to the Tracker ({batchItems.length} item{batchItems.length !== 1 ? "s" : ""})
                        </button>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* ── Main page: clean, no inventory data ── */}
          {entries.length === 0 && (
            <div style={{ ...card, textAlign: "center", padding: 44, color: "#555" }}>
              <div style={{ fontSize: 44, marginBottom: 10 }}>{game.icon}</div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>No brainrots tracked yet</p>
              <p style={{ margin: "6px 0 0", fontSize: 12 }}>Click "+ Add Brainrot" above to start!</p>
            </div>
          )}
          {entries.length > 0 && (
            <div style={{ textAlign: "center", padding: "48px 20px", color: "#3a3a50" }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 500, letterSpacing: 0.2 }}>Start Searching to Load Brainrots</p>
            </div>
          )}
        </>)}

        {/* ═══════════════════════════════════
             TAB: SEARCH
           ═══════════════════════════════════ */}
        {tab === "search" && (
          <div>
            {/* Search input */}
            <input type="text" value={sQuery} onChange={(e) => setSQuery(e.target.value)}
              placeholder="🔍 Search by pet name or account…" style={{ ...inp(), marginBottom: 10 }} />

            {/* Filters */}
            <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 120px" }}>
                <label style={{ ...lbl, marginBottom: 4 }}>Brainrots Listed</label>
                <select value={sPetFilter} onChange={(e) => setSPetFilter(e.target.value)} style={inp()}>
                  <option value="All">All</option>
                  {uniquePetNames.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div style={{ flex: "1 1 120px" }}>
                <label style={{ ...lbl, marginBottom: 4 }}>Mutation</label>
                <select value={sMutFilter} onChange={(e) => setSMutFilter(e.target.value)} style={inp()}>
                  <option value="All">All Mutations</option>
                  {game.mutations.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div style={{ flex: "1 1 120px" }}>
                <label style={{ ...lbl, marginBottom: 4 }}>Account</label>
                <select value={sAcctFilter} onChange={(e) => setSAcctFilter(e.target.value)} style={inp()}>
                  <option value="All">All Accounts</option>
                  {accounts.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
            </div>

            {/* Result count + clear */}
            {(() => {
              const hasFilter = sQuery || sMutFilter !== "All" || sAcctFilter !== "All" || sPetFilter !== "All";
              return (
                <>
                  {hasFilter && (
                    <div style={{ fontSize: 12, color: "#555", marginBottom: 12 }}>
                      {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                      <button onClick={() => { setSQuery(""); setSMutFilter("All"); setSAcctFilter("All"); setSPetFilter("All"); }}
                        style={{ marginLeft: 10, padding: "3px 10px", borderRadius: 6, border: "none", background: "#2a2a3e", color: "#888", cursor: "pointer", fontSize: 11, fontWeight: 600 }}>
                        Clear filters
                      </button>
                    </div>
                  )}

                  {/* Results — only show when search/filter is active */}
                  {!hasFilter ? (
                    <div style={{ ...card, textAlign: "center", padding: 36, color: "#555" }}>
                      <div style={{ fontSize: 36, marginBottom: 8 }}>🔍</div>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Search for a pet or account</p>
                      <p style={{ margin: "6px 0 0", fontSize: 12 }}>Type a name above or use the filters to find entries</p>
                    </div>
                  ) : searchResults.length === 0 ? (
              <div style={{ ...card, textAlign: "center", padding: 36, color: "#555" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>🔍</div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>No results found</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {/* Header */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.2fr 90px 70px 1fr 90px 80px",
                  padding: "8px 14px", borderRadius: 10, background: "#0e0e1a",
                  fontSize: 10, fontWeight: 700, color: "#555", textTransform: "uppercase",
                  letterSpacing: 0.5, gap: 6, alignItems: "center",
                }}>
                  <span>Pet</span><span>Account</span><span>Qty</span>
                  <span>Type</span><span>Mutation</span><span>M/s</span><span>Acct Stock</span>
                </div>

                {searchResults.map((e) => {
                  const mc = msColor(e.msType);
                  // Per-account stock: quantity of this pet+msType in this account only
                  const acctStock = entries.filter((x) => x.petName === e.petName && x.account === e.account && x.msType === e.msType && x.msValue === e.msValue)
                    .reduce((s, x) => s + x.quantity, 0);
                  return (
                    <div key={e.id} style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1.2fr 90px 70px 1fr 90px 80px",
                      padding: "10px 14px", borderRadius: 10,
                      background: "#12121f",
                      border: "1px solid #1e1e30",
                      fontSize: 13, alignItems: "center", gap: 6,
                    }}>
                      {/* Pet */}
                      <div>
                        <span style={{ fontWeight: 600, color: "#e0e0e0", cursor: "pointer" }}
                          onClick={() => handleEdit(e)}>
                          {e.petName}
                        </span>
                      </div>
                      {/* Account */}
                      <span style={{ color: "#888", fontSize: 12 }}>👤 {e.account}</span>
                      {/* Qty with +/- */}
                      <QtyControl qty={e.quantity} color={game.color}
                        onMinus={() => handleQtyChange(e.id, -1)}
                        onPlus={() => handleQtyChange(e.id, 1)} />
                      {/* Type */}
                      <span style={{
                        fontSize: 11, padding: "2px 6px", borderRadius: 5,
                        background: `${mc}15`, color: mc, fontWeight: 700,
                        textAlign: "center",
                      }}>{e.msType}</span>
                      {/* Mutation */}
                      <span style={{
                        color: e.mutation !== "None" ? "#8e44ad" : "#555",
                        fontWeight: e.mutation !== "None" ? 600 : 400, fontSize: 12,
                      }}>
                        {e.mutation !== "None" ? `✨ ${e.mutation}` : "—"}
                      </span>
                      {/* m/s — per this entry only (not combined) */}
                      <span style={{ color: "#e0e0e0", fontWeight: 700, fontSize: 12 }}>
                        {fmtNum(e.msValue)} {fmtSuffix(e.msValue)}/s
                      </span>
                      {/* Acct Stock — quantity of this pet in this account only */}
                      <span style={{
                        fontSize: 12, fontWeight: 700, textAlign: "center",
                        color: "#27ae60",
                        padding: "3px 8px", borderRadius: 6,
                        background: "#27ae6012",
                      }}>
                        {acctStock}
                      </span>
                    </div>
                  );
                })}

                {/* ── Total Stock Summary (per pet across all accounts + grand total) ── */}
                <div style={{
                  marginTop: 10, padding: "14px 18px", borderRadius: 12,
                  background: "linear-gradient(135deg, #12121f, #0e1a2e)",
                  border: `1px solid ${game.color}20`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 16 }}>📦</span>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#e0e0e0" }}>
                      Total Stock Across All Accounts
                    </span>
                  </div>
                  {/* Per-pet+msType breakdown (only from search results) */}
                  {(() => {
                    const seen = new Set();
                    const keys = [];
                    searchResults.forEach((e) => {
                      const k = e.petName + "|" + e.msType + "|" + e.msValue;
                      if (!seen.has(k)) { seen.add(k); keys.push({ petName: e.petName, msType: e.msType, msValue: e.msValue, key: k }); }
                    });
                    return (
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 10 }}>
                        {keys.map(({ petName, msType, msValue, key }) => {
                          const total = searchResults.filter((e) => e.petName === petName && e.msType === msType && e.msValue === msValue)
                            .reduce((s, e) => s + e.quantity, 0);
                          const mc = msColor(msType);
                          return (
                            <div key={key} style={{
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                              padding: "6px 10px", borderRadius: 8, background: "#0a0a1a",
                            }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ color: "#ccc", fontSize: 12, fontWeight: 600 }}>{petName}</span>
                                <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 4, background: `${mc}12`, color: mc, fontWeight: 700 }}>{msType}</span>
                                <span style={{ fontSize: 10, color: "#888" }}>{fmtNum(msValue)} {fmtSuffix(msValue)}/s</span>
                              </div>
                              <span style={{ color: "#27ae60", fontWeight: 700, fontSize: 13 }}>{total}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 10px", borderRadius: 8,
                    background: `${game.color}08`, borderTop: "1px solid #2a2a3e",
                  }}>
                    {(() => {
                      const searchTotal = searchResults.reduce((s, e) => s + e.quantity, 0);
                      const uniqueNames = [...new Set(searchResults.map((e) => e.petName))];
                      const label = uniqueNames.length === 1
                        ? `${uniqueNames[0]} – Total Stock`
                        : `Total Stock (${uniqueNames.length} pets)`;
                      return (<>
                        <span style={{ fontWeight: 700, fontSize: 13, color: "#e0e0e0" }}>{label}</span>
                        <span style={{
                          fontSize: 18, fontWeight: 800, color: game.color,
                          padding: "2px 12px", borderRadius: 6, background: `${game.color}12`,
                        }}>{searchTotal}</span>
                      </>);
                    })()}
                  </div>
                </div>
              </div>
            )}
            </>
            );
            })()}
          </div>
        )}

        {/* ═══════════════════════════════════
             TAB: MANAGE
           ═══════════════════════════════════ */}
        {tab === "manage" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* ── Add Pet ── */}
            <div style={{ ...card, border: `1px solid ${game.color}20` }}>
              <h3 style={{ margin: "0 0 14px", color: game.color, fontSize: 15 }}>🐾 Add New Pet to {game.name}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label style={lbl}>Pet Name *</label>
                  <input type="text" value={npName} onChange={(e) => setNpName(e.target.value)}
                    placeholder="e.g. Drago Frostini" style={inp()} />
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ flex: 1 }}>
                    <label style={lbl}>Base M/s * <span style={{ color: "#3498db" }}>(required)</span></label>
                    <input type="number" min={0} value={npBaseMs}
                      onChange={(e) => setNpBaseMs(e.target.value)}
                      placeholder="e.g. 1500" style={inp()} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={lbl}>High M/s <span style={{ color: "#666" }}>(optional)</span></label>
                    <input type="number" min={0} value={npHighMs}
                      onChange={(e) => setNpHighMs(e.target.value)}
                      placeholder="Optional" style={inp()} />
                  </div>
                </div>
                <button onClick={handleAddPet} disabled={!npName.trim() || !npBaseMs} style={{
                  padding: "12px", borderRadius: 10, border: "none",
                  background: (npName.trim() && npBaseMs) ? game.color : "#2a2a3e",
                  color: (npName.trim() && npBaseMs) ? "#fff" : "#555",
                  fontWeight: 700, fontSize: 13, cursor: (npName.trim() && npBaseMs) ? "pointer" : "not-allowed",
                  transition: "all 0.2s",
                }}>+ Add Pet</button>
              </div>
              <div style={{ marginTop: 10, fontSize: 11, color: "#555" }}>
                {game.pets.length} pets in database — use the pet search when adding brainrots to browse
              </div>
            </div>

            {/* ── Add Mutation ── */}
            <div style={{ ...card, border: "1px solid #8e44ad20" }}>
              <h3 style={{ margin: "0 0 14px", color: "#8e44ad", fontSize: 15 }}>✨ Add New Mutation to {game.name}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label style={lbl}>Mutation Name *</label>
                  <input type="text" value={nmName} onChange={(e) => setNmName(e.target.value)}
                    placeholder="e.g. Crystal" style={inp()} />
                </div>
                <button onClick={handleAddMut} disabled={!nmName.trim()} style={{
                  padding: "12px", borderRadius: 10, border: "none",
                  background: nmName.trim() ? "#8e44ad" : "#2a2a3e",
                  color: nmName.trim() ? "#fff" : "#555",
                  fontWeight: 700, fontSize: 13, cursor: nmName.trim() ? "pointer" : "not-allowed",
                  transition: "all 0.2s",
                }}>+ Add Mutation</button>
              </div>

              {/* Current mutations — plain text */}
              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 11, color: "#555", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
                  Current Mutations ({game.mutations.length})
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {game.mutations.map((m) => (
                    <span key={m} style={{
                      fontSize: 11, padding: "4px 9px", borderRadius: 6,
                      background: "#8e44ad12", color: "#8e44ad", fontWeight: 600,
                      border: "1px solid #8e44ad18",
                    }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ═══ FOOTER ═══ */}
        <div style={{ padding: "28px 0 14px" }} />
      </div>
    </div>
  );
}
