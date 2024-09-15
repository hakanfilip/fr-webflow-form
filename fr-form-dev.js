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



});

document.addEventListener('DOMContentLoaded', function() {
    // Fält för Företagsformuläret som vi vill spara
    const företagFields = ['f-offert-epost', 'f-namn', 'f-fornamn', 'f-efternamn', 'f-epost', 'f-tele'];

    // Fält för Privatformuläret som vi vill spara
    const privatFields = ['p-personnummer', 'p-fornamn', 'p-efternamn', 'p-epost', 'p-tele', 'p-adress', 'p-postnummer', 'p-ort'];

    // Spara data i localStorage
    function saveFormData(fields) {
        fields.forEach(function(fieldId) {
            const field = document.getElementById(fieldId);
            if (field) {
                console.log(`Saving data for: ${fieldId}`); // Loggar fält som sparas
                field.addEventListener('input', function() {
                    localStorage.setItem(fieldId, field.value);
                    console.log(`${fieldId} saved:`, field.value); // Loggar sparat värde
                });
            } else {
                console.error(`Field not found: ${fieldId}`); // Loggar om ett fält inte hittas
            }
        });
    }

    // Fyll i sparad data vid laddning
    function fillFormData(fields) {
        fields.forEach(function(fieldId) {
            const field = document.getElementById(fieldId);
            if (field && localStorage.getItem(fieldId)) {
                field.value = localStorage.getItem(fieldId);
                console.log(`Filling data for: ${fieldId} with value:`, field.value); // Loggar att fält fylls i
            } else {
                console.error(`Field not found or no saved data for: ${fieldId}`); // Loggar om inget värde hittas
            }
        });
    }

    // Fyll i sparade data vid sidladdning
    fillFormData(företagFields);  // För Företag
    fillFormData(privatFields);   // För Privat

    // Spara data när fält ändras
    saveFormData(företagFields);  // För Företag
    saveFormData(privatFields);   // För Privat
});