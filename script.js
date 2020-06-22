// Tabs
const tabs = document.querySelectorAll('.tab');
const selectTabsBtns = document.querySelectorAll(".select-tab-btn");


const showTab = (tabId) => {
    // remove active from all tabs
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // Get wanted tab
    const tab = document.querySelector(`#${tabId}`);

    // add active class to wanted tab
    tab.classList.add("active");

    // Remove selected class from all select-btns
    selectTabsBtns.forEach(btn => {
        btn.classList.remove("selected");
    });

    // Add selected class to btn
    const btn = document.querySelector(`.select-tab-btn[data-target="${tabId}"]`);

    // Add selected class to btn
    btn.classList.add("selected")
}

// Modal
const modal = document.querySelector("#modal");

const toggleModal = () => {
    modal.classList.toggle("show-modal")
}