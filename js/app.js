/* ============================================================
   MyLifePlanner — app.js
   App bootstrap — runs after every other module is loaded. Builds initial UI and restores saved settings.
   ============================================================ */

// INIT
buildYearCalendar();


// Close sidebar on nav item click (mobile)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 767) closeSidebar();
    });
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    closeSidebar();
    document.body.style.overflow = '';
  }
});

// Init on load
applyPremiumGates();

// Restore saved mode on load
(function() {
  try {
    var saved = localStorage.getItem('mlp_colour_mode');
    if (saved && MODES.indexOf(saved) !== -1) {
      setMode(saved);
    } else {
      setMode('mode-light');
    }
  } catch(e) { setMode('mode-light'); }
})();
