// Nope. This is a concept design, so no menu or filter toggles work. But it looks good, doesn't it?

document.querySelectorAll('.relative').forEach((dropdown) => {
    const button = dropdown.querySelector('button');
    const menu = dropdown.querySelector('div');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
});


// Open or close the dropdown when clicked
document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const clickedInside = event.target.closest('.dropdown');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');

        // If the click was outside the dropdown, close all dropdowns
        if (!clickedInside) {
            menu.style.display = 'none';
        } else {
            // If clicked inside the dropdown, toggle the corresponding menu
            if (clickedInside.contains(event.target)) {
                const isMenuOpen = menu.style.display === 'block';
                // Close all menus before toggling the clicked one
                dropdowns.forEach(d => d.querySelector('.dropdown-menu').style.display = 'none');
                if (!isMenuOpen) {
                    menu.style.display = 'block';
                }
            }
        }
    });
});

// Select all modal buttons and modals
const modalButtons = document.querySelectorAll('.modal-button');
const modals = document.querySelectorAll('.modal');

// Function to show the modal based on the data-modal attribute
modalButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block'; // Show the selected modal
    });
});

modals.forEach(modal => {
    const closeButton = modal.querySelector('.close-modal');

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal if clicked outside
        }
    });
});

