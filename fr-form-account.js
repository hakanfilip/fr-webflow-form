document.addEventListener('DOMContentLoaded', function() {
    // Funktion för att visa och dölja fält
    function toggleFields(checkboxId, dataShowValue) {
        const checkbox = document.getElementById(checkboxId);
        const targetFields = document.querySelectorAll(`[data-show="${dataShowValue}"]`);

        checkbox.addEventListener('change', function() {
            targetFields.forEach(field => {
                if (checkbox.checked) {
                    field.style.display = 'block';
                } else {
                    field.style.display = 'none';
                }
            });
        });

        if (!checkbox.checked) {
            targetFields.forEach(field => field.style.display = 'none');
        }
    }

    toggleFields('s-avvikande', 's-avvikande-fields');
    toggleFields('s-a-epost', 'sarskild-epost-fields');

    // Eventuell annan logik för formuläret...
});