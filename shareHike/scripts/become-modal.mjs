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
        freeModal.classList.add("show");
    })

    bronzeInput.addEventListener("click", () => {
        bronzeModal.showModal();
        bronzeModal.classList.add("show");
    })

    silverInput.addEventListener("click", () => {
        silverModal.showModal();
        silverModal.classList.add("show");
    })

    goldInput.addEventListener("click", () => {
        goldModal.showModal();
        goldModal.classList.add("show");
    })

    // Events Listeners to close modals
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            freeModal.classList.remove("show");
            setTimeout(() => freeModal.close(), 600);

            bronzeModal.classList.remove("show");
            setTimeout(() => bronzeModal.close(), 600);

            silverModal.classList.remove("show");
            setTimeout(() => silverModal.close(), 600);

            goldModal.classList.remove("show");
            setTimeout(() => goldModal.close(), 600);


        })
    });

}