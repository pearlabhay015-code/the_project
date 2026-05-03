class CUSBHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- Skip link -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- FIXED TICKER -->
  <div id="ticker" role="marquee" aria-label="Important university announcements — press Space to pause">
    <div class="ticker-label">📢 Updates</div>
    <button class="ticker-pause-btn" id="ticker-pause-btn" aria-label="Pause announcements" aria-pressed="false" title="Pause / Resume ticker">⏸</button>
    <div class="ticker-fade lft"></div>
    <div class="ticker-viewport">
      <div class="ticker-track" id="ticker-track">
        <a href="#notices-sec" class="t-item">CUSB Admission Bulletin 2026 (CUET-PG) <span class="t-badge">NEW</span></a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">NCET-2026 — 4-Year Integrated Teacher Education Programme <span class="t-badge">NEW</span></a><span class="t-sep"></span>
        <a href="#cta-sec" class="t-item">Admissions Open 2026–27 — Apply Now →</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">45th INCA International Congress — CUSB, March 2026</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Competition on Smart Design for Website Development — Register from 14 Feb 2026</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Ph.D. Admission Notice — All Departments</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Recruitment Notification — Non-Teaching Posts</a><span class="t-sep"></span>
        <a href="About_cusb.html" class="t-item">CUSB · Established 2009 · Panchanpur, Gaya, Bihar</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Semester Exam Schedule — Even Semester 2025–26</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">NAAC Peer Team Visit Preparation — Circular Available</a><span class="t-sep"></span>
        <!-- SET B -->
        <a href="#notices-sec" class="t-item">CUSB Admission Bulletin 2026 (CUET-PG) <span class="t-badge">NEW</span></a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">NCET-2026 — 4-Year Integrated Teacher Education Programme <span class="t-badge">NEW</span></a><span class="t-sep"></span>
        <a href="#cta-sec" class="t-item">Admissions Open 2026–27 — Apply Now →</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">45th INCA International Congress — CUSB, March 2026</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Competition on Smart Design for Website Development — Register from 14 Feb 2026</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Ph.D. Admission Notice — All Departments</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Recruitment Notification — Non-Teaching Posts</a><span class="t-sep"></span>
        <a href="About_cusb.html" class="t-item">CUSB · Established 2009 · Panchanpur, Gaya, Bihar</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">Semester Exam Schedule — Even Semester 2025–26</a><span class="t-sep"></span>
        <a href="#notices-sec" class="t-item">NAAC Peer Team Visit Preparation — Circular Available</a><span class="t-sep"></span>
      </div>
    </div>
    <div class="ticker-fade rgt"></div>
  </div>

  <div id="mob-overlay"></div>

  <!-- MOBILE DRAWER -->
  <div id="mob-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="mob-header">
      <span class="mob-title">CUSB</span>
      <button class="mob-close" id="mob-close-btn" type="button" aria-label="Close menu">✕</button>
    </div>
    <div class="mob-section-lbl">Navigation</div>
    <a class="mob-a" href="index.html">Home</a>
    <a class="mob-a" href="About_cusb.html">About the University</a>
    <div class="mob-divider"></div>
    <div class="mob-section-lbl">Administration</div>
    <a class="mob-a" href="administration.html">Administration</a>
    <div class="mob-divider"></div>
    <div class="mob-section-lbl">Academics</div>
    <a class="mob-a" href="courses.html">Programs &amp; Courses</a>
    <div class="mob-divider"></div>
    <div class="mob-section-lbl">Campus Life</div>
    <a class="mob-a" href="campus.html">Campus</a>
    <div class="mob-divider"></div>
    <div class="mob-section-lbl">Notices &amp; Events</div>
    <a class="mob-a" href="IQAC.html">IQAC</a>
    <div class="mob-divider"></div>
    <div class="mob-section-lbl">Students</div>
    <a class="mob-a" href="students.html">Students</a>
  </div>

  <!-- TOP BAR -->
  <div id="topbar" role="banner">
    <div class="tb-l">
      <span>0631-2229 530</span>
      <span class="tb-sep">|</span>
      <a href="mailto:admission@cusb.ac.in">admission@cusb.ac.in</a>
      <span class="tb-sep">|</span>
      <a href="https://rtionline.gov.in/" target="_blank" rel="noopener">RTI</a>
      <span class="tb-sep">|</span>
      <a href="#" aria-disabled="true" tabindex="-1">Public Self Disclosure</a>
      <span class="tb-sep">|</span>
      <a href="#" aria-disabled="true" tabindex="-1">Webmail</a>
      <span class="tb-sep">|</span>
      <a href="#" aria-disabled="true" tabindex="-1">Feedback</a>
      <span class="tb-sep">|</span>
      <a href="http://naac.gov.in/" target="_blank" rel="noopener">NAAC</a>
    </div>
    <div class="tb-r">
      <div class="credits"><img src="assets/images/NAAC.png" loading="lazy" alt="NAAC Accreditation Badge" onerror="this.style.display='none'"></div>
      <div class="credits"><img src="assets/images/viksit.png" loading="lazy" alt="Viksit Bharat Initiative Logo" onerror="this.style.display='none'"></div>
    </div>
  </div>

  <!-- NAVBAR -->
  <div id="nav-wrap">
    <nav aria-label="Main navigation">
      <a href="index.html" class="nav-brand" aria-label="CUSB Homepage">
        <div class="nav-logo"><img src="assets/images/culog.png" alt="CUSB Logo" onerror="this.style.display='none'"></div>
        <div class="brand-txt"><div class="abbr">CUSB</div></div>
      </a>
      <ul class="nav-links" role="list">
        <li><a href="index.html">Home</a></li>
        <li><a href="About_cusb.html">About</a></li>
        <li><a href="administration.html">Administration</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="campus.html">Campus</a></li>
        <li><a href="IQAC.html">IQAC</a></li>
        <li><a href="students.html">Students</a></li>
        <li><a href="#gov_sites">Gov</a></li>
        <li><a href="aisehi.html">2D</a></li>
      </ul>
      <div class="nav-right">
        <a href="#cta-sec" class="btn-apply">Apply</a>
        <button class="ham" id="ham-btn" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mob-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </div>
  <div class="nav-search-bar" id="nav-search-bar">
    <form id="nav-search-form" class="nav-search-form" role="search">
      <label for="nav-search-input" class="sr-only">Search site</label>
      <div class="nav-search-field">
        <input id="nav-search-input" class="nav-search-input" type="search" placeholder="Search ..." aria-label="Search site" autocomplete="off">
        <button type="submit" class="nav-search-submit" aria-label="Submit search">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
    `;

    // Re-initialize event listeners after injecting HTML
    this.initEvents();
  }

  initEvents() {
    // Basic initialization that was previously in inline scripts
    const hamBtn = this.querySelector('#ham-btn');
    const mobMenu = this.querySelector('#mob-menu');
    const mobOverlay = this.querySelector('#mob-overlay');
    const mobClose = this.querySelector('#mob-close-btn');
    const themeBtn = this.querySelector('#theme-toggle-btn');
    
    if (hamBtn && mobMenu && mobOverlay) {
      hamBtn.addEventListener('click', () => {
        mobMenu.classList.add('open');
        mobOverlay.classList.add('show');
      });
      const closeMenu = () => {
        mobMenu.classList.remove('open');
        mobOverlay.classList.remove('show');
      };
      if (mobClose) mobClose.addEventListener('click', closeMenu);
      mobOverlay.addEventListener('click', closeMenu);
    }
  }
}

class CUSBFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <!-- FOOTER -->
  <footer id="footer" role="contentinfo">
    <div class="footer-grid">
      <div>
        <div class="fb-name">Central University of South Bihar</div>
        <p class="fb-desc">An institution of higher learning under the Ministry of Education, Government of India — committed to excellence, equity, and national development.</p>
        <div class="fb-contact">
          <a href="tel:06312229530">☎ 0631-2229 530</a>
          <a href="mailto:admission@cusb.ac.in">✉ admission@cusb.ac.in</a>
          <a href="mailto:webmaster@cusb.ac.in">✉ webmaster@cusb.ac.in</a>
          <span>📍 Panchanpur, Gaya, Bihar – 824236</span>
        </div>
      </div>
      <div>
        <div class="fc-h5">About</div>
        <ul class="fc-ul">
          <li><a href="About_cusb.html">The University</a></li>
          <li><a href="About_cusb.html#about">Vision &amp; Mission</a></li>
          <li><a href="administration.html">Administration</a></li>
          <li><a href="#">Research &amp; Innovation</a></li>
        </ul>
      </div>
      <div>
        <div class="fc-h5">Academics</div>
        <ul class="fc-ul">
          <li><a href="courses.html">All Departments</a></li>
          <li><a href="courses.html">Programs</a></li>
          <li><a href="#">Exam Notices</a></li>
          <li><a href="#">Results</a></li>
          <li><a href="#">Convocation</a></li>
        </ul>
      </div>
      <div>
        <div class="fc-h5">Students</div>
        <ul class="fc-ul">
          <li><a href="#">Admissions 2026–27</a></li>
          <li><a href="#">Scholarship</a></li>
          <li><a href="hostels.html">Hostel</a></li>
          <li><a href="#" aria-disabled="true" tabindex="-1">Placement Cell</a></li>
          <li><a href="#" aria-disabled="true" tabindex="-1">NSS / NCC</a></li>
          <li><a href="#" aria-disabled="true" tabindex="-1">Alumni</a></li>
        </ul>
      </div>
      <div>
        <div class="fc-h5">Quick Links</div>
        <ul class="fc-ul">
          <li><a href="IQAC.html">NAAC / IQAC</a></li>
          <li><a href="https://rtionline.gov.in/" target="_blank" rel="noopener">RTI</a></li>
          <li><a href="#" aria-disabled="true" tabindex="-1">Tenders</a></li>
          <li><a href="#">Recruitment</a></li>
          <li><a href="#">Photo Gallery</a></li>
          <li><a href="#" aria-disabled="true" tabindex="-1">Webmail</a></li>
        </ul>
      </div>
      <div class="social_media">
        <ul class="social_media-links" role="list" aria-label="CUSB Social Media">
          <li><a href="https://www.facebook.com/cusbofficial/" target="_blank" rel="noopener" aria-label="Follow CUSB on Facebook"><img src="assets/images/fb.png" alt="" aria-hidden="true"></a></li>
          <li><a href="https://x.com/CUSBofficial" target="_blank" rel="noopener" aria-label="Follow CUSB on X (Twitter)"><img src="assets/images/X.png" alt="" aria-hidden="true"></a></li>
          <li><a href="https://www.instagram.com/cusbofficialpage/?hl=en" target="_blank" rel="noopener" aria-label="Follow CUSB on Instagram"><img src="assets/images/insta.png" alt="" aria-hidden="true"></a></li>
          <li><a href="https://www.youtube.com/user/CUBofficialchannel" target="_blank" rel="noopener" aria-label="CUSB YouTube Channel"><img src="assets/images/YouTube.webp" alt="" aria-hidden="true"></a></li>
          <li><a href="https://in.linkedin.com/school/cusbofficial/" target="_blank" rel="noopener" aria-label="CUSB on LinkedIn"><img src="assets/images/linke.png" alt="" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
    <div class="map">
      <a href="https://maps.google.com/?q=Central+University+of+South+Bihar+Gaya" target="_blank" rel="noopener" aria-label="View CUSB location on Google Maps">
        <img src="assets/images/map.jpeg" alt="Map showing CUSB campus location at Panchanpur, Gaya, Bihar">
      </a>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Central University of South Bihar, Gaya, India. All rights reserved.</span>
      <div class="acc-row" role="list" aria-label="Accreditations">
        <span class="acc-badge" role="listitem">NAAC</span>
        <span class="acc-badge" role="listitem">NEP 2020</span>
        <span class="acc-badge" role="listitem">Viksit Bharat</span>
      </div>
      <span>
        <a href="#" aria-disabled="true" tabindex="-1">Privacy</a> ·
        <a href="#" aria-disabled="true" tabindex="-1">Terms</a> ·
        <a href="#" aria-disabled="true" tabindex="-1">Sitemap</a>
      </span>
    </div>
  </footer>

  <!-- CHATBOT WIDGET -->
  <div class="chatbot-container" id="chatbot-container">
    <div class="chatbot-window" id="chatbot-window" role="dialog" aria-modal="true" aria-label="CUSB Assistant chat">
      <div class="chatbot-header">
        <span>CUSB Assistant 🤖</span>
        <button class="chatbot-close" id="chatbot-close" aria-label="Close chat">×</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages" role="log" aria-live="polite" aria-label="Chat messages">
        <div class="chatbot-message bot">
          <div class="chatbot-message-bubble">Hi! 👋 I'm the CUSB Assistant. Ask me about admissions, programs, campus, or anything about the university!</div>
        </div>
      </div>
      <div class="chatbot-input-group">
        <label for="chatbot-input" class="sr-only">Type your message</label>
        <input type="text" id="chatbot-input" placeholder="Ask me anything..." aria-label="Chat message input" autocomplete="off">
        <button id="chatbot-send" aria-label="Send message">→</button>
      </div>
    </div>
    <button class="chatbot-toggle" id="chatbot-toggle" aria-label="Open CUSB Assistant chat" aria-expanded="false" aria-controls="chatbot-window">🤖</button>
  </div>

  <!-- Floating message -->
  <div class="floating-message" id="floating-message" aria-hidden="true">
    <div class="floating-message-bubble">Need any Help?</div>
  </div>

  <!-- SCROLL TO TOP BUTTON -->
  <button id="scroll-btn" class="to-top" aria-label="Scroll to top" title="Scroll to top">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </button>

  <!-- ACCESSIBILITY PANEL -->
  <div class="accessibility-panel" id="accessibility-panel">
    <button class="access-toggle" aria-label="Accessibility options">♿</button>
    <div class="access-menu">
      <div class="access-section">
        <span class="access-lbl">Theme</span>
        <button class="theme-toggle" id="theme-toggle-btn" aria-label="Toggle dark mode">
          <span class="ico-sun" aria-hidden="true">☀️</span>
          <span class="ico-moon" aria-hidden="true">🌙</span>
        </button>
      </div>
      <div class="access-section">
        <span class="access-lbl">Text Size</span>
        <div class="font-size-controls" role="group" aria-label="Text size controls">
          <button class="font-size-btn" id="font-decrease-btn" title="Decrease font size">−</button>
          <span style="font-size:.75rem;color:var(--tx-secondary);" aria-hidden="true">A</span>
          <button class="font-size-btn" id="font-increase-btn" title="Increase font size">+</button>
          <span class="font-size-display" id="font-size-display" aria-live="polite"></span>
        </div>
      </div>
    </div>
  </div>
    `;

    this.initEvents();
  }

  initEvents() {
    const scrollBtn = this.querySelector('#scroll-btn');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          scrollBtn.classList.add('show', 'to-top');
        } else {
          scrollBtn.classList.remove('show');
        }
      }, { passive: true });
      scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    
    const tog = this.querySelector('#theme-toggle-btn');
    if (tog) {
      tog.addEventListener('click', () => {
        const html = document.documentElement;
        html.classList.add('theme-switching');
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('cusb-theme', next);
        void html.offsetWidth;
        requestAnimationFrame(() => html.classList.remove('theme-switching'));
      });
    }

    const decreaseBtn = this.querySelector('#font-decrease-btn');
    const increaseBtn = this.querySelector('#font-increase-btn');
    const displayEl = this.querySelector('#font-size-display');
    if (decreaseBtn && increaseBtn && displayEl) {
      const rootEl = document.documentElement;
      let currentFontSize = parseInt(localStorage.getItem('fontSizePercent') || '100');
      
      const updateDisplay = () => displayEl.textContent = currentFontSize + '%';
      const applyFont = () => {
        rootEl.style.fontSize = currentFontSize + '%';
        decreaseBtn.disabled = currentFontSize <= 80;
        increaseBtn.disabled = currentFontSize >= 150;
        localStorage.setItem('fontSizePercent', currentFontSize);
      };
      
      decreaseBtn.addEventListener('click', () => {
        if (currentFontSize > 80) { currentFontSize -= 10; applyFont(); updateDisplay(); }
      });
      increaseBtn.addEventListener('click', () => {
        if (currentFontSize < 150) { currentFontSize += 10; applyFont(); updateDisplay(); }
      });
      
      applyFont();
      updateDisplay();
    }

    const chatbotToggle = this.querySelector('#chatbot-toggle');
    const chatbotWindow = this.querySelector('#chatbot-window');
    const chatbotClose = this.querySelector('#chatbot-close');
    
    if (chatbotToggle && chatbotWindow) {
      chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        chatbotToggle.setAttribute('aria-expanded', chatbotWindow.classList.contains('active'));
      });
      if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
          chatbotWindow.classList.remove('active');
          chatbotToggle.setAttribute('aria-expanded', 'false');
        });
      }
    }
  }
}

customElements.define('cusb-header', CUSBHeader);
customElements.define('cusb-footer', CUSBFooter);
