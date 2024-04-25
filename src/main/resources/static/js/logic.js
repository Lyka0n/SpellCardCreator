let cardsImage = '../images/cards/';
let concImage = '../images/conc/';
let iconsImage = '../images/icons/';

const cards = [
    {
        spellName: "PRESTIDIGITATION",
        spellClass: "Base",
        spellLevel: "Cantrip",
        spellSchool: "Transmutation",
        spellCastingTime: "1 action",
        spellConcentration: "",
        spellRange: "10 feet",
        spellComponents: "V, S",
        spellDuration: "Up to 1 hour",
        spellDescription: "This spell is a minor magical trick that novice spellcasters use for practice. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
        spellHigherLevels: ""
    },
    {
        spellName: "ARMOR OF AGATHYS",
        spellClass: "Warlock",
        spellLevel: "1st-level",
        spellSchool: "Abjuration",
        spellCastingTime: "1 action",
        spellConcentration: "",
        spellRange: "Self",
        spellComponents: "V, S, M",
        spellDuration: "1 hour",
        spellDescription: "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.",
        spellHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot."
    },
    {
        spellName: "SHIELD",
        spellClass: "Base",
        spellLevel: "1st-level",
        spellSchool: "Abjuration",
        spellCastingTime: "1 reaction",
        spellConcentration: "",
        spellRange: "Self",
        spellComponents: "V, S",
        spellDuration: "1 round",
        spellDescription: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC.",
        spellHigherLevels: ""
    },
    {
        spellName: "CURE WOUNDS",
        spellClass: "Cleric",
        spellLevel: "1st-level",
        spellSchool: "Evocation",
        spellCastingTime: "1 action",
        spellConcentration: "",
        spellRange: "Touch",
        spellComponents: "V, S",
        spellDuration: "Instantaneous",
        spellDescription: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier.",
        spellHigherLevels: "At Higher Levels: The healing increases by 1d8 for each slot level above 1st."
    },
    {
        spellName: "INVISIBILITY",
        spellClass: "Base",
        spellLevel: "2nd-level",
        spellSchool: "Illusion",
        spellCastingTime: "1 action",
        spellConcentration: "◆",
        spellRange: "Touch",
        spellComponents: "V, S, M",
        spellDuration: "1 hour",
        spellDescription: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.",
        spellHigherLevels: "At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },
    {
        spellName: "FIREBALL",
        spellClass: "Base",
        spellLevel: "3rd-level",
        spellSchool: "Evocation",
        spellCastingTime: "1 action",
        spellConcentration: "",
        spellRange: "150 feet",
        spellComponents: "V, S, M",
        spellDuration: "Instantaneous",
        spellDescription: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
        spellHigherLevels: "At Higher Levels: The damage increases by 1d6 for each slot level above 3rd."
    },
    
];

function graphic() {
    let reply = "";

    for (let i = 0; i < cards.length; i++) {
        reply += `
            <div class="card-container" data-id="card${i}">
                <div class="card">
                    <img class="card-background" src="${cards[i].spellClass == undefined ? cardsImage + "Card_Base.png" : cardsImage + "Card_"+cards[i].spellClass+".png"}">
                    <span class="card-content">
                        <div class="font-colors-${cards[i].spellClass}">
                            <div class="spell-name">
                                <h3 style="color: #111111 !important">${cards[i].spellName}</h3>
                            </div>
                            <div class="spell-levelAndSchool">
                                <h6>${cards[i].spellLevel} ${cards[i].spellSchool}</h6>
                            </div>
                            <div class="spell-castingtime">
                                <h3>CASTING TIME</h3>
                                <h6>${cards[i].spellCastingTime}</h6>
                            </div>
                            <div class="spell-range">
                                <h3>RANGE</h3>
                                <h6>${cards[i].spellRange}</h6>
                            </div>
                            <div class="spell-components">
                                <h3>COMPONENTS</h3>
                                <h6>${cards[i].spellComponents}</h6>
                            </div>
                            <div class="spell-duration">
                                <h3>DURATION</h3>
                                <h6>${cards[i].spellDuration}</h6>
                                ${cards[i].spellConcentration ? `<img class="spellConcentration" src="${concImage}Conc_${cards[i].spellClass}.png">` : ''}
                            </div>
                            <div class="spell-description">
                                <p>${cards[i].spellDescription}</p>
                            </div>
                            <div class="spell-higherlevelsDivider">
                                ${cards[i].spellHigherLevels.length > 0 ? `<div class="spell-higherlevels-${cards[i].spellClass}"></div>` : ""}
                            </div>
                            <div class="spell-higherlevels">   
                                ${cards[i].spellHigherLevels.length > 0 ? `<h6>At Higher Levels</h6>` : ""}            
                            </div>
                            <div class="spell-higherlevelsDescription">   
                                <p>${cards[i].spellHigherLevels}</p>                    
                            </div>
                            <div class="card-buttons" id="card-buttons">
                                <img class="delete-image" src="${iconsImage}Delete_Icon.png" alt="Delete">
                                <img class="save-image" src="${iconsImage}Print_Icon.png" alt="Print">
                                <button class="delete-button" onclick="deleteCard(${i})">D</button>
                                <button class="save-button" id="save_${i}">P</button>
                            </div>
                        </div>
                    </span>
                </div>     
            </div>
            <style>
            ...
            .card {
                display: inline-block;
                overflow: hidden;
                position: relative;
                width: 28.25rem;
                height: 18.75rem;
            }

            .card img {
                pointer-events: none;
                position: absolute;
                width: 11.4375rem;
                height: 16rem;
                border-radius: 0.375rem;
                z-index: -1;
            }
            </style>
        `;

        if ((i + 1) % 6 === 0) {
            reply += `<div style="flex-basis: 100%; height: 0;"></div>`;
        }

        selectCard(createPNG);
    }

    document.getElementById("cards").innerHTML = reply;
    document.getElementById('spellLevel').value="3rd-level";
    document.getElementById('spellSchool').value="Evocation";
}

function empty() {
    const input = document.getElementsByTagName("input");
    const textarea = document.getElementsByTagName("textarea");

    for (let i = 0; i < input.length; i++) {
        if (input[i].type !== "button") {
            if (input[i].type === "checkbox") {
                input[i].checked = false;
            } else {
                input[i].value = "";
            }
        }
    }

    for (let j = 0; j < textarea.length; j++) {
        textarea[j].value = "";
    }
}


function deleteCard(index) {
    if(cards.length > 1){
        cards.splice(index, 1);
        graphic();
    }
    else
    alert("You need at least one card on your table.");
}

function add() {
    const spellName = document.getElementById("spellName").value;
    const spellLevel = document.getElementById("spellLevel").value;
    const spellClass = document.getElementById("spellClass").value;
    const spellSchool = document.getElementById("spellSchool").value;
    const spellCastingTime = document.getElementById("spellCastingTime").value;
    const spellRange = document.getElementById("spellRange").value;
    const spellDuration = document.getElementById("spellDuration").value;
    const spellConcentration = document.getElementById("spellConcentration").checked;
    const spellDescription = document.getElementById("spellDescription").value;
    const spellHigherLevels = document.getElementById("spellHigherLevels").value;
    
    const spellComponentsVerbal = document.getElementById("spellComponentsVerbal").checked ? "V" : null;
    const spellComponentsSomatic = document.getElementById("spellComponentsSomatic").checked ? "S" : null;
    const spellComponentsMaterial = document.getElementById("spellComponentsMaterial").checked ? "M" : null;

    const hasFilledEverything = (
                                spellName.length > 0 
                                && spellLevel.length > 0 
                                && spellClass.length > 0
                                && spellSchool.length > 0 
                                && spellCastingTime.length > 0 
                                && spellRange.length > 0
                                && spellDuration.length > 0 
                                && spellDescription.length > 0 
                                );
    const hasNoComponents = (
                            spellComponentsVerbal == null 
                            && spellComponentsSomatic == null 
                            && spellComponentsMaterial == null
                            );

    if (!hasFilledEverything) {
        alert("Some required fields are still empty!");
        return;
    }

    if (hasNoComponents) {
        alert("You must check at least one component to create a new card.");
        return;
    }

    for (let i = 0; i < cards.length; i++){
        if (spellName.trim().toLowerCase() === cards[i].spellName.trim().toLowerCase()){
        alert("Card already existing.");
        return;
        }
    }

    const spellComponentsArray = [spellComponentsVerbal, spellComponentsSomatic, spellComponentsMaterial].filter(Boolean);
    const spellComponents = spellComponentsArray.join(", ");

    const newCard = {
        spellName: spellName,
        spellLevel: spellLevel,
        spellClass: spellClass,
        spellSchool: spellSchool,
        spellCastingTime: spellCastingTime,
        spellRange: spellRange,
        spellComponents: spellComponents,
        spellDuration: spellDuration,
        spellConcentration: spellConcentration ? true : false,
        spellDescription: spellDescription,
        spellHigherLevels: spellHigherLevels
    };

    cards.push(newCard);
    cards.sort((a, b) => {
        if (a.spellLevel === "Cantrip" && b.spellLevel !== "Cantrip") {
            return -1;
        } else if (a.spellLevel !== "Cantrip" && b.spellLevel === "Cantrip") {
            return 1;
        } else if (a.spellLevel !== b.spellLevel) {
            return a.spellLevel.localeCompare(b.spellLevel);
        } else {
            return a.spellName.localeCompare(b.spellName);
        }
    });

    graphic();
    empty();
}

function selectCard(callback){
    callback();
}

function createPNG(scale = 4) {
    document.addEventListener('click', function(event) {
        if (event.target.className === 'save-button' && !event.target.disabled) {
            event.target.disabled = true;
            const id = parseInt(event.target.id.split('_')[1]);
            const cardName = cards[id].spellName;

            const element = document.querySelectorAll(".card-container")[id];
            console.log("Save " + id);

            const buttonsColor = element.querySelectorAll(".card-buttons button");
            // Store original text color
            const originalTextColors = Array.from(buttonsColor).map(button => button.style.color);

            buttonsColor.forEach(button => {
                button.style.color = 'transparent'; // Set text color to transparent for visibility
            });

            // Store original colors of root variables
            const originalColor1 = document.documentElement.style.getPropertyValue('--color1');
            const originalColor2 = document.documentElement.style.getPropertyValue('--color2');

            // Set root colors to transparent
            document.documentElement.style.setProperty('--color1', 'rgba(0, 0, 0, 0)');
            document.documentElement.style.setProperty('--color2', 'rgba(0, 0, 0, 0)');

            const { width, height } = element.getBoundingClientRect();

            // Raise the position of text elements by n pixels
            const textElements = element.querySelectorAll(".spell-name, .spell-levelAndSchool, .spell-castingtime, .spell-range, .spell-components, .spell-duration, .spell-higherlevels, .spell-higherlevelsDescription");
            textElements.forEach(textElement => {
                textElement.style.transform = 'translateY(-1px)';
            });

            const spellConc = element.querySelectorAll(".spellConcentration");
            spellConc.forEach(spellConc => {
                spellConc.style.transform = 'translateY(1px)';
            });

            const higherlevelsDivider = element.querySelectorAll(".spell-higherlevels-Base, .spell-higherlevels-Bard, .spell-higherlevels-Cleric, .spell-higherlevels-Druid, .spell-higherlevels-Paladin, .spell-higherlevels-Ranger, .spell-higherlevels-Sorcerer, .spell-higherlevels-Warlock, .spell-higherlevels-Wizard");
            higherlevelsDivider.forEach(higherlevelsDivider => {
                higherlevelsDivider.style.transform = 'translateY(1.23rem)';
            });

            const buttonsImages = element.querySelectorAll(".delete-image, .save-image");
            buttonsImages.forEach(buttonsImages => {
                buttonsImages.style.transform = 'scale(0)';
            });

            const buttonsColorContainer = element.querySelector(".card-buttons");
                buttonsColorContainer.style.backgroundColor = 'transparent'; // Change to transparent

            html2canvas(element, {
                width: width * scale/2,
                height: height * scale/2,
                scale: scale
            }).then(canvas => {
                const imgRelativePath = canvas.toDataURL('image/png');

                // Reset the position transformation after rendering to canvas
                textElements.forEach(textElement => {
                    textElement.style.transform = '';
                });

                spellConc.forEach(spellConc => {
                    spellConc.style.transform = '';
                });

                higherlevelsDivider.forEach(higherlevelsDivider => {
                    higherlevelsDivider.style.transform = '';
                });

                buttonsImages.forEach(buttonsImages => {
                    buttonsImages.style.transform = '';
                });

                // Reset the background color after rendering to canvas
                buttonsColorContainer.style.backgroundColor = ''; // Reset background color

                // Restore original button text color
                buttonsColor.forEach((button, i) => {
                    button.style.color = originalTextColors[i];
                });

                // Restore original root colors
                document.documentElement.style.setProperty('--color1', originalColor1);
                document.documentElement.style.setProperty('--color2', originalColor2);

                // Create an anchor element to download the PNG image
                const link = document.createElement('a');
                link.download = cardName.toLowerCase() + '.png';
                link.href = imgRelativePath;
                link.click();

                event.target.disabled = false;
            }).catch(error=>console.log(error));
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const newcardDropdown = document.querySelector(".newcard-dropdown");

    // Funzione per mostrare o nascondere il dropdown content
    function toggleDropdown() {
        newcardDropdown.style.display = newcardDropdown.style.display === "block" ? "none" : "block";
    }

    // Mostra o nasconde il dropdown content al click sulla scritta del dropdown
    dropdown.addEventListener("click", function(event) {
        toggleDropdown();
    });

    // Chiudi il dropdown content solo se si fa clic sulla stessa scritta
    newcardDropdown.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita che il click si propaghi al documento
    });

    // Chiudi il dropdown content se si fa clic altrove nella pagina
    document.addEventListener("click", function(event) {
        if (newcardDropdown.style.display === "block" && !dropdown.contains(event.target)) {
            newcardDropdown.style.display = "none";
        }
    });
});

//TODO: Fix y description and higher level description when taking a screenshot
//TODO: Sorting