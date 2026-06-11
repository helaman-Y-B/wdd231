export default function controlModal() {
    // Inputs
    const freeInput = document.getElementById("free");
    const bronzeInput = document.getElementById("bronze");
    const silverInput = document.getElementById("silver");
    const goldInput = document.getElementById("gold");

    // Modals
    const freeModal = document.getElementById("free-modal");
    const bronzeModal = document.getElementById("bronze-modal");
    const silverModal = document.getElementById("silver-modal");
    const goldModal = document.getElementById("gold-modal");

    // Close buttons modals
    const closeBtns = document.querySelectorAll(".close-modal");

    // Events Listeners to open modals
    freeInput.addEventListener("click", () => {
        freeModal.showModal();
    })

    bronzeInput.addEventListener("click", () => {
        bronzeModal.showModal();
    })

    silverInput.addEventListener("click", () => {
        silverModal.showModal();
    })

    goldInput.addEventListener("click", () => {
        goldModal.showModal();
    })

    // Events Listeners to close modals
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            freeModal.close();
            bronzeModal.close();
            silverModal.close();
            goldModal.close();
        })
    });

}