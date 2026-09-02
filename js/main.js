/* Datt Associates — engraved instrument runtime
   Generates the security engraving (guilloche) as real curves,
   fills microprint rules, and runs the disclaimer gate. */

(function () {
  "use strict";

  /* ── guilloche: hypotrochoid rosettes ─────────────────────── */
  function hypotrochoid(R, r, d, rot, steps, scale) {
    var pts = [];
    var loops = r / gcd(R, r);
    var max = Math.PI * 2 * loops;
    for (var i = 0; i <= steps; i++) {
      var t = (max * i) / steps;
      var x = ((R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t)) * scale;
      var y = ((R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t)) * scale;
      var c = Math.cos(rot), s = Math.sin(rot);
      pts.push((x * c - y * s).toFixed(2) + "," + (x * s + y * c).toFixed(2));
    }
    return "M" + pts.join("L");
  }
  function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }

  function path(d, w, o) {
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", d);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", "currentColor");
    p.setAttribute("stroke-width", w);
    if (o) p.setAttribute("opacity", o);
    return p;
  }

  function rosette(svg, scale) {
    var layers = scale < 1 ? [
      [100, 48, 40, 0, 0.9, 0.9],
      [100, 48, 40, Math.PI / 12, 0.7, 0.6],
      [100, 48, 26, 0, 0.7, 0.7]
    ] : [
      [100, 62, 46, 0, 0.7, 0.9],
      [100, 62, 46, Math.PI / 9, 0.55, 0.55],
      [96, 36, 30, 0, 0.55, 0.7],
      [72, 27, 22, 0, 0.5, 0.8],
      [46, 17, 15, 0, 0.5, 0.9]
    ];
    layers.forEach(function (L) {
      svg.appendChild(path(hypotrochoid(L[0], L[1], L[2], L[3], scale < 1 ? 480 : 900, scale), L[4], L[5]));
    });
    var ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ring.setAttribute("r", 104 * scale);
    ring.setAttribute("fill", "none");
    ring.setAttribute("stroke", "currentColor");
    ring.setAttribute("stroke-width", 0.8);
    svg.appendChild(ring);
  }

  document.querySelectorAll("[data-rosette]").forEach(function (svg) {
    rosette(svg, svg.getAttribute("data-rosette") === "small" ? 0.52 : 1);
  });

  /* ── guilloche: lattice bands ─────────────────────────────── */
  function band(svg) {
    var W = 1200, H = 46, mid = H / 2;
    for (var k = 0; k < 3; k++) {
      var amp = 14 - k * 3, freq = 0.02 + k * 0.008, phase = k * 1.1;
      var up = [], down = [];
      for (var x = 0; x <= W; x += 6) {
        var y = Math.sin(x * freq + phase) * amp;
        up.push(x + "," + (mid + y).toFixed(2));
        down.push(x + "," + (mid - y).toFixed(2));
      }
      svg.appendChild(path("M" + up.join("L"), 0.7, 0.85));
      svg.appendChild(path("M" + down.join("L"), 0.7, 0.85));
    }
    for (var x2 = 30; x2 < W; x2 += 60) {
      var e = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      e.setAttribute("cx", x2); e.setAttribute("cy", mid);
      e.setAttribute("rx", 16); e.setAttribute("ry", 9);
      e.setAttribute("fill", "none");
      e.setAttribute("stroke", "currentColor");
      e.setAttribute("stroke-width", 0.6);
      e.setAttribute("opacity", 0.6);
      svg.appendChild(e);
    }
  }
  document.querySelectorAll("[data-band]").forEach(band);

  /* ── microprint rules ─────────────────────────────────────── */
  var MICRO = "DATT & ASSOCIATES · ADVOCATES SOLICITORS CONSULTANTS · NEW DELHI · ";
  document.querySelectorAll(".microprint").forEach(function (el) {
    el.textContent = MICRO.repeat(24);
  });

  /* ── disclaimer gate ──────────────────────────────────────── */
  var gate = document.getElementById("gate");
  var agree = document.getElementById("gate-agree");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!gate || !agree) return;

  function openGate() {
    gate.hidden = false;
    gate.classList.remove("lifting", "stamped");
    document.body.style.overflow = "hidden";
    agree.focus({ preventScroll: true });
  }
  function closeGate() {
    gate.classList.add("stamped");
    var delay = reduced ? 0 : 900;
    setTimeout(function () {
      gate.classList.add("lifting");
      document.body.style.overflow = "";
      try { sessionStorage.setItem("da-gate", "agreed"); } catch (e) {}
      setTimeout(function () { gate.hidden = true; }, reduced ? 0 : 500);
    }, delay);
  }

  var seen = /[?&]nogate/.test(location.search);
  try { seen = seen || sessionStorage.getItem("da-gate") === "agreed"; } catch (e) {}
  if (seen) { gate.hidden = true; } else { openGate(); }

  agree.addEventListener("click", closeGate);

  /* keep focus inside the gate while it is open */
  document.addEventListener("focusin", function (e) {
    if (!gate.hidden && !gate.classList.contains("lifting") && !gate.contains(e.target)) {
      agree.focus({ preventScroll: true });
    }
  });

  var reshow = document.getElementById("reshow-gate");
  if (reshow) {
    reshow.addEventListener("click", function (e) {
      e.preventDefault();
      try { sessionStorage.removeItem("da-gate"); } catch (err) {}
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      openGate();
    });
  }
})();
