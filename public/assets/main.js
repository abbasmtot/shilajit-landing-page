window.onscroll = function () {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 ||
    window.innerHeight + window.scrollY <= 2400
  ) {
    document.getElementById("fixed-footer").classList.add("hidden");
  } else {
    document.getElementById("fixed-footer").classList.remove("hidden");
  }
};

document
  .getElementById("thumbnail-container")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("thumb")) {
      document.getElementById("main-image").src = e.target.src;
    }
  });

const radios = document.querySelectorAll('input[name="packages"]');
const addToCartBtn = document.getElementById("add-to-cart-btn");

// 1. Define a reusable function to update the UI states
function updatePackageStyles(selectedRadio) {
  radios.forEach((radio) => {
    const box = radio.closest(".package-box");
    if (!box) return;

    if (radio === selectedRadio) {
      // Style the active/checked box
      box.classList.remove("border-gray-300");
      box.classList.remove("border");
      box.classList.add("border-sky-600");
      box.classList.add("border-2");

      // Update the button URL
      if (radio.dataset.itemUrl) {
        addToCartBtn.href = radio.dataset.itemUrl;
      }
    } else {
      // Reset the inactive/unchecked boxes
      box.classList.remove("border-sky-600");
      box.classList.remove("border-2");
      box.classList.add("border-gray-300");
      box.classList.add("border");
    }
  });
}

// 2. Initialize: Find the default checked radio (or fallback to the first one)
const defaultChecked =
  document.querySelector('input[name="packages"]:checked') || radios[0];

if (defaultChecked) {
  updatePackageStyles(defaultChecked);
} else {
  // Absolute fallback if no radios exist or none are selected yet
  addToCartBtn.href = "http://approvedscience.com/quiz?sku=ASSHI030000";
}

// 3. Listen for future changes
radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      updatePackageStyles(this);
    }
  });
});
