document.addEventListener('DOMContentLoaded', function() {
    // -----------------------------------------
    // Företagsformulär - Hantering av fält
    // -----------------------------------------
    const arendeRadiosFöretag = document.querySelectorAll('[name="f-arende"]');

    function updateFieldsForArendeFöretag(selectedGroup) {
        const fieldGroupsFöretag = document.querySelectorAll('[data-field-group]');

        fieldGroupsFöretag.forEach(group => {
            const fieldArendeGroupsFöretag = group.getAttribute('data-field-group').split(',');

            const inputs = group.querySelectorAll('input, select, textarea');

            if (fieldArendeGroupsFöretag.includes(selectedGroup)) {
                group.style.display = 'block'; // Visa fältgruppen
            } else {
                group.style.display = 'none'; // Dölj fältgruppen
                inputs.forEach(input => {
                    if (input.hasAttribute('required')) {
                        input.removeAttribute('required');
                    }
                });
            }
        });
    }

    function updateRadioVisualsFöretag() {
        const radioContainers = document.querySelectorAll('.w-radio-input'); // Target alla radio-knappdivar
        radioContainers.forEach(container => container.classList.remove('w--redirected-checked')); // Ta bort checked-klassen från alla

        const checkedRadio = document.querySelector('[name="f-arende"]:checked'); // Hitta markerad radio-knapp
        if (checkedRadio) {
            const parentDiv = checkedRadio.closest('.w-radio'); // Hitta närliggande w-radio div
            const visualInput = parentDiv.querySelector('.w-radio-input'); // Hitta den visuella div
            visualInput.classList.add('w--redirected-checked'); // Lägg till checked-klassen
        }
    }

    // Döljer alla fält initialt
    function hideAllFieldsFöretag() {
        const fieldGroupsFöretag = document.querySelectorAll('[data-field-group]');
        fieldGroupsFöretag.forEach(group => {
            group.style.display = 'none';
        });
    }

    // Välj förvalt alternativ vid sidladdning (Företag)
    const defaultFöretagRadio = document.querySelector('[name="f-arende"][value="bestallning"]');
    if (defaultFöretagRadio) {
        defaultFöretagRadio.checked = true;  // Välj "Beställning" som standard
        updateFieldsForArendeFöretag(defaultFöretagRadio.getAttribute('data-show')); // Visa fälten för "Beställning"
        updateRadioVisualsFöretag(); // Uppdatera det visuella för den valda radio-knappen
    }

    // Event listeners för radio-knapparna (Företag)
    arendeRadiosFöretag.forEach(radio => {
        radio.addEventListener('change', function() {
            hideAllFieldsFöretag(); // Dölj alla fält först
            const selectedGroup = this.getAttribute('data-show');
            updateFieldsForArendeFöretag(selectedGroup); // Visa de fält som hör till det valda ärendet
            updateRadioVisualsFöretag(); // Uppdatera det visuella när radio-knapp ändras
        });
    });

    // -----------------------------------------
    // Företag Tabbar - Företag vs Privat
    // -----------------------------------------
    const tabForetagButton = document.getElementById('tab-foretag');
    const tabPrivatButton = document.getElementById('tab-privat');
    const tabContentForetag = document.getElementById('tab-content-foretag');
    const tabContentPrivat = document.getElementById('tab-content-privat');

    function showForetagTab() {
        tabContentForetag.style.display = 'block';
        tabContentPrivat.style.display = 'none';
        hideAllFieldsFöretag(); // Dölj alla fält när företagsformuläret laddas
        if (defaultFöretagRadio) {
            updateFieldsForArendeFöretag(defaultFöretagRadio.getAttribute('data-show')); // Visa förvalt fält
            updateRadioVisualsFöretag(); // Uppdatera det visuella för radio-knapparna
        }
    }

    function showPrivatTab() {
        tabContentForetag.style.display = 'none';
        tabContentPrivat.style.display = 'block';
        hideAllFieldsPrivat(); // Dölj alla fält för privat när formuläret laddas
        if (defaultPrivatRadio) {
            updateFieldsForArendePrivat(defaultPrivatRadio.getAttribute('data-show')); // Visa förvalt fält
            updateRadioVisualsPrivat(); // Uppdatera det visuella för radio-knapparna
        }
    }

    function addClickAndTouchEventListener(element, handler) {
        if (element) {
            element.addEventListener('click', handler);
            element.addEventListener('touchstart', handler);
        }
    }

    addClickAndTouchEventListener(tabForetagButton, showForetagTab);
    addClickAndTouchEventListener(tabPrivatButton, showPrivatTab);

    showForetagTab(); // Visa företagstabb som standard och döljer alla företagfält

    // -----------------------------------------
    // Privat Formulär - Hantering av fält
    // -----------------------------------------
    const arendeRadiosPrivat = document.querySelectorAll('[name="p-arende"]');

    function updateFieldsForArendePrivat(selectedGroup) {
        const fieldGroupsPrivat = document.querySelectorAll('[data-field-group-privat]');

        fieldGroupsPrivat.forEach(group => {
            const fieldArendeGroupsPrivat = group.getAttribute('data-field-group-privat').split(',');

            const inputs = group.querySelectorAll('input, select, textarea');

            if (fieldArendeGroupsPrivat.includes(selectedGroup)) {
                group.style.display = 'block'; // Visa fältgruppen
            } else {
                group.style.display = 'none'; // Dölj fältgruppen
                inputs.forEach(input => {
                    if (input.hasAttribute('required')) {
                        input.removeAttribute('required');
                    }
                });
            }
        });
    }

    function updateRadioVisualsPrivat() {
        const radioContainers = document.querySelectorAll('.w-radio-input'); // Target alla radio-knappdivar
        radioContainers.forEach(container => container.classList.remove('w--redirected-checked')); // Ta bort checked-klassen från alla

        const checkedRadio = document.querySelector('[name="p-arende"]:checked'); // Hitta markerad radio-knapp
        if (checkedRadio) {
            const parentDiv = checkedRadio.closest('.w-radio'); // Hitta närliggande w-radio div
            const visualInput = parentDiv.querySelector('.w-radio-input'); // Hitta den visuella div
            visualInput.classList.add('w--redirected-checked'); // Lägg till checked-klassen
        }
    }

    // Döljer alla fält initialt
    function hideAllFieldsPrivat() {
        const fieldGroupsPrivat = document.querySelectorAll('[data-field-group-privat]');
        fieldGroupsPrivat.forEach(group => {
            group.style.display = 'none';
        });
    }

    // Välj förvalt alternativ vid sidladdning (Privat)
    const defaultPrivatRadio = document.querySelector('[name="p-arende"][value="p-bestallning"]');
    if (defaultPrivatRadio) {
        defaultPrivatRadio.checked = true;  // Välj "Beställning" som standard
        updateFieldsForArendePrivat(defaultPrivatRadio.getAttribute('data-show')); // Visa fälten för "Beställning"
        updateRadioVisualsPrivat(); // Uppdatera det visuella för den valda radio-knappen
    }

    // Event listeners för radio-knapparna (Privat)
    arendeRadiosPrivat.forEach(radio => {
        radio.addEventListener('change', function() {
            hideAllFieldsPrivat(); // Dölj alla fält först
            const selectedGroup = this.getAttribute('data-show');
            updateFieldsForArendePrivat(selectedGroup); // Visa de fält som hör till det valda ärendet
            updateRadioVisualsPrivat(); // Uppdatera det visuella när radio-knapp ändras
        });
    });

    hideAllFieldsPrivat(); // Dölj alla privatfält vid sidladdning

    // -----------------------------------------
    // Hantering av required för meddelandefält (Företag)
    // -----------------------------------------
    console.log("Börjar initialisera required-hantering för företagsformulär...");
    
    // Testa flera olika selektorer för att hitta kryssrutan
    let fCheckbox = document.querySelector('[data-requires-field="f-meddelande"]');
    console.log("Söker efter kryssruta med data-requires-field=f-meddelande:", fCheckbox);
    
    if (!fCheckbox) {
        fCheckbox = document.querySelector('input[type="checkbox"][data-requires-field="f-meddelande"]');
        console.log("Söker mer specifikt efter checkbox med data-requires-field=f-meddelande:", fCheckbox);
    }
    
    if (!fCheckbox) {
        const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        console.log("Alla kryssrutor på sidan:", allCheckboxes.length);
        allCheckboxes.forEach((cb, index) => {
            console.log(`Kryssruta ${index}:`, cb.id, cb.name, cb.getAttribute('data-requires-field'));
        });
        
        // Försök hitta kryssrutan baserat på id eller namn som kanske innehåller texten "meddelande"
        fCheckbox = document.querySelector('input[type="checkbox"][id*="meddelande"], input[type="checkbox"][name*="meddelande"]');
        console.log("Söker efter checkbox med 'meddelande' i id eller name:", fCheckbox);
    }
    
    const fMessageField = document.getElementById('f-meddelande');
    console.log("Meddelandefält f-meddelande:", fMessageField);
    
    if (fMessageField) {
        console.log("Meddelandefält attribut:", {
            id: fMessageField.id,
            required: fMessageField.hasAttribute('required'),
            type: fMessageField.type,
            display: window.getComputedStyle(fMessageField).display
        });
    }
    
    if (fCheckbox && fMessageField) {
        console.log("Båda elementen hittades. Sätter upp event listener.");
        
        // Funktion för att uppdatera required-attribut för företagsformulär
        function updateFMessageRequired() {
            console.log("Kryssruta ändrad. Checked:", fCheckbox.checked);
            
            if (fCheckbox.checked) {
                fMessageField.setAttribute('required', '');
                console.log("Sätter required-attribut på f-meddelande");
                
                // Verifiera att attributet sattes
                console.log("f-meddelande har nu required:", fMessageField.hasAttribute('required'));
            } else {
                fMessageField.removeAttribute('required');
                console.log("Tar bort required-attribut från f-meddelande");
                
                // Verifiera att attributet togs bort
                console.log("f-meddelande har nu required:", fMessageField.hasAttribute('required'));
            }
        }
        
        // Kör funktionen vid sidladdning
        updateFMessageRequired();
        
        // Lägg till event listener
