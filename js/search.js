// ==========================
// LIVE SEARCH
// ==========================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

                  }
