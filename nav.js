/**
 * Shared nav renderer for all hub pages
 * Call renderNav('pagename') in each page's <script>
 */
function renderNav(activePage) {
  const tier = SP_ACCESS.getTier();
  const name = SP_ACCESS.getName();

  const navRight = tier === 'pro'
    ? `<div class="nav-right">
        <span class="nav-tier-badge">✦ Self-Publish Pro</span>
        <span class="nav-user">👤 ${name}</span>
        <a href="dashboard.html" class="nav-link ${activePage==='dashboard'?'nav-active':''}">Dashboard</a>
        <button class="nav-logout" onclick="SP_ACCESS.logout()">Sign Out</button>
       </div>`
    : tier === 'free'
    ? `<div class="nav-right">
        <span class="nav-user">👤 ${name} <span class="nav-free-tag">Free</span></span>
        <a href="upgrade.html" class="nav-cta">Upgrade to Pro →</a>
       </div>`
    : `<div class="nav-right">
        <a href="join.html" class="nav-link">Sign In</a>
        <a href="upgrade.html" class="nav-cta">Get Full Access →</a>
       </div>`;

  document.getElementById('nav-mount').innerHTML = `
    <nav>
      <a href="index.html" class="nav-brand">Self&#8209;Publish</a>
      <div class="nav-links-center">
        <a href="about.html" class="nav-link ${activePage==='about'?'nav-active':''}">About</a>
        <a href="index.html#activities" class="nav-link">Activities</a>
        ${tier === 'pro' ? `<a href="dashboard.html" class="nav-link ${activePage==='dashboard'?'nav-active':''}">My Dashboard</a>` : ''}
      </div>
      ${navRight}
    </nav>
  `;
}
