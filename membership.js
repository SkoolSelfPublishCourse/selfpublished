/**
 * Self-Publish 101 — Membership Access System
 * Controls free vs. paid (Self-Publish Pro) access
 * Uses sessionStorage to simulate membership state
 * Replace with real auth backend when ready
 */

const SP_ACCESS = {
  // Keys
  KEY_TIER:  'sp_tier',   // 'free' | 'pro'
  KEY_NAME:  'sp_name',
  KEY_EMAIL: 'sp_email',
  KEY_ONBOARD: 'sp_onboarded',

  // Get current tier
  getTier() {
    return sessionStorage.getItem(this.KEY_TIER) || null;
  },

  // Check if paid
  isPro() {
    return this.getTier() === 'pro';
  },

  // Check if any account exists
  isLoggedIn() {
    return this.getTier() !== null;
  },

  // Set free account
  setFree(name, email) {
    sessionStorage.setItem(this.KEY_TIER, 'free');
    sessionStorage.setItem(this.KEY_NAME, name);
    sessionStorage.setItem(this.KEY_EMAIL, email);
  },

  // Set pro account
  setPro(name, email) {
    sessionStorage.setItem(this.KEY_TIER, 'pro');
    sessionStorage.setItem(this.KEY_NAME, name);
    sessionStorage.setItem(this.KEY_EMAIL, email);
  },

  getName() { return sessionStorage.getItem(this.KEY_NAME) || 'Writer'; },
  getEmail() { return sessionStorage.getItem(this.KEY_EMAIL) || ''; },

  // Logout
  logout() {
    sessionStorage.removeItem(this.KEY_TIER);
    sessionStorage.removeItem(this.KEY_NAME);
    sessionStorage.removeItem(this.KEY_EMAIL);
    sessionStorage.removeItem(this.KEY_ONBOARD);
    window.location.href = 'index.html';
  },

  // Guard: redirect free users to upgrade page
  requirePro(redirectUrl) {
    if (!this.isPro()) {
      window.location.href = redirectUrl || 'upgrade.html';
    }
  },

  // Guard: redirect non-logged-in users
  requireLogin(redirectUrl) {
    if (!this.isLoggedIn()) {
      window.location.href = redirectUrl || 'join.html';
    }
  }
};
