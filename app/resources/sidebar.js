(function() {
  // Detect current page
  var path = location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  // Nav link definitions
  var navLinks = [
    { href: 'index.html', icon: '&#9813;', label: 'Hero Stats' },
    { href: 'compare.html', icon: '&#9878;', label: 'Hero Comparison' },
    { href: 'lane-matchup.html', icon: '&#9876;', label: 'Lane Matchup' },
    { href: 'hero-trivia.html', icon: '&#9678;', label: 'Hero Trivia' },
    { href: 'simulator.html', icon: '&#9654;', label: 'Simulator' },
    { href: 'creep-quiz.html', icon: '&#9820;', label: 'Creep Wave Timer' },
    { href: 'items.html', icon: '&#9775;', label: 'Items' }
  ];

  var navHtml = navLinks.map(function(l) {
    var active = l.href === page ? ' class="active"' : '';
    return '<a href="' + l.href + '"' + active + '>' +
      '<span class="nav-icon">' + l.icon + '</span> ' +
      l.label +
      '</a>';
  }).join('\n      ');

  // Build and insert sidebar HTML at start of body
  var html =
    '<button class="sidebar-toggle" id="sidebar-toggle">&#9776;</button>' +
    '<div class="sidebar-overlay" id="sidebar-overlay"></div>' +
    '<aside class="sidebar" id="sidebar">' +
      '<div class="sidebar-brand">' +
        '<h2>DOTA 2</h2>' +
        '<span>Analysis</span>' +
      '</div>' +
      '<nav>' + navHtml + '</nav>' +
    '</aside>';

  document.body.insertAdjacentHTML('afterbegin', html);

  // Toggle listeners
  document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('open');
  });
  document.getElementById('sidebar-overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
  });
})();
