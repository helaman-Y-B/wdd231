export default function controlModal() {
    // Inputs
    const bronzeInput = document.getElementById("bronze");
    const silverInput = document.getElementById("silver");
    const goldInput = document.getElementById("gold");
    const platinumInput = document.getElementById("platinum");

    // Modals
    const bronzeModal = document.getElementById("bronze-modal");
    const silverModal = document.getElementById("silver-modal");
    const goldModal = document.getElementById("gold-modal");
    const platinumModal = document.getElementById("platinum-modal");

    // Close buttons modals
    const closeBtns = document.querySelectorAll(".close-modal");

    // Events Listeners to open modals
    bronzeInput.addEventListener("click", () => {
        bronzeModal.showModal();
    })

    silverInput.addEventListener("click", () => {
        silverModal.showModal();
    })

    goldInput.addEventListener("click", () => {
        goldModal.showModal();
    })

    platinumInput.addEventListener("click", () => {
        platinumModal.showModal();
    })

    // Events Listeners to close modals
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            bronzeModal.close();
            silverModal.close();
            goldModal.close();
            platinumModal.close();
        })
    });

}