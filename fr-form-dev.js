document.addEventListener('DOMContentLoaded', function() {
    // Hämta tab-knapparna och innehållssektionerna
    const tabForetagButton = document.getElementById('tab-foretag');
    const tabPrivatButton = document.getElementById('tab-privat');
    const tabContentForetag = document.getElementById('tab-content-foretag');
    const tabContentPrivat = document.getElementById('tab-content-privat');

    // Funktion för att visa Företag-tabben och dölja Privat-tabben
    function showForetagTab() {
        tabContentForetag.style.display = 'block';
        tabContentPrivat.style.display = 'none';
    }

    // Funktion för att visa Privat-tabben och dölja Företag-tabben
    function showPrivatTab() {
        tabContentForetag.style.display = 'none';
        tabContentPrivat.style.display = 'block';
    }

    // Lägg till click-lyssnare för varje knapp
    tabForetagButton.addEventListener('click', showForetagTab);
    tabPrivatButton.addEventListener('click', showPrivatTab);

    // Initiera med att visa en tab som standard (t.ex. Privat-tabben)
    showPrivatTab();
});