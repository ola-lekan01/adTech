(function() {
    const scriptEl = document.currentScript;
    if (!scriptEl) return;
    const insEl = scriptEl.parentNode;

    insEl.innerHTML = `
    <iframe src="./index.html"
            width="300"
            height="250"
            style="border:none;overflow:hidden;">
    </iframe>
  `;
})();