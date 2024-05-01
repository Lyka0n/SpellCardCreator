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