document.querySelectorAll("button.copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var el = document.getElementById(btn.dataset.target);
    if (!el) return;
    var done = function (ok) {
      btn.textContent = ok ? "copied" : "select karke copy karo";
      setTimeout(function () { btn.textContent = "copy"; }, 1800);
    };
    var selectAll = function () {
      try { var r = document.createRange(); r.selectNodeContents(el); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); } catch (e) {}
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(el.innerText).then(function () { done(true); }, function () { selectAll(); done(false); });
    } else { selectAll(); done(false); }
  });
});
