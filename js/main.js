// ===== PORTFOLIO DATA (hardcoded from database) =====

const DATA = {
  profile: {
    full_name: "Hermawan",
    tagline: "Full Stack Developer",
    summary: "Sixth-semester Informatics Engineering student at Raja Ali Haji Maritime University (UMRAH) with a passion for Web Development. Experienced in developing frontend and backend web applications using Laravel and CodeIgniter, including building a Static Archive Service System during an internship at the Tanjungpinang City Library and Archives Office. Passionate about creating modern, responsive, and user-friendly web applications while continuously improving technical and problem-solving skills.",
    photo: "Images/Profil.png",
    email: "hermawan@student.umrah.ac.id",
    github: "https://github.com/Hermawan-TI",
    linkedin: "https://www.linkedin.com/in/hermawan-0a3a03357/"
  },

  skills: [
    { name: "HTML5",       icon: "devicon-html5-plain colored",          color: "" },
    { name: "CSS3",        icon: "devicon-css3-plain colored",           color: "" },
    { name: "JavaScript",  icon: "devicon-javascript-plain colored",     color: "" },
    { name: "PHP",         icon: "devicon-php-plain colored",            color: "" },
    { name: "MySQL",       icon: "devicon-mysql-plain colored",          color: "" },
    { name: "Git",         icon: "devicon-git-plain colored",            color: "" },
    { name: "Figma",       icon: "devicon-figma-plain colored",          color: "" },
    { name: "REST API",    icon: "fas fa-plug",                          color: "#10B981" },
    { name: "Python",      icon: "devicon-python-plain colored",         color: "" },
    { name: "C/C++",       icon: "devicon-cplusplus-plain colored",      color: "" },
    { name: "Dart",        icon: "devicon-dart-plain colored",           color: "" },
    { name: "Laravel",     icon: "devicon-laravel-plain colored",        color: "" },
    { name: "CodeIgniter", icon: "devicon-codeigniter-plain colored",    color: "" },
    { name: "Flutter",     icon: "devicon-flutter-plain colored",        color: "" }
  ],

  resume: {
    education: [
      {
        title: "Universitas Maritim Raja Ali Haji",
        period: "2023 – Sekarang",
        description: "Bachelor's Degree in Informatics Engineering, Faculty of Engineering. Studying software development, information systems, and web technologies to build a professional career in IT."
      },
      {
        title: "SMA Negeri 3 Senayang",
        period: "2020 – 2023",
        description: "Majored in Science (MIPA), focusing on Mathematics and Natural Sciences as a foundation for pursuing further studies in technology and informatics."
      },
      {
        title: "SMP Negeri 2 Senayang",
        period: "2017 – 2020",
        description: "Undertook junior high school education with a strong focus on character development and foundational academic skills."
      },
      {
        title: "SD Negeri 003 Senayang",
        period: "2011 – 2017",
        description: "Completed elementary education with early exposure to reading, writing, arithmetic, and character-based learning activities."
      }
    ],
    experience: [
      {
        title: "Archive Division Intern",
        period: "Tanjungpinang City Library and Archives Office – 2026",
        description: "Assisted the Archive Division in developing digital archive services by building a web-based archive information system. Collaborated with archive staff, analyzed system requirements, and supported the management of static archive records."
      },
      {
        title: "Participant – OSN Mathematics (District Level)",
        period: "SMA Negeri 3 Senayang – 2022",
        description: "Represented the school in the Mathematics branch of the National Science Olympiad (OSN) at the district level. Focused on solving high-difficulty problems in logic, algebra, and geometry."
      },
      {
        title: "Participant – OSN Biology (District Level)",
        period: "SMA Negeri 3 Senayang – 2021",
        description: "Participated in the Biology branch of the National Science Olympiad at the district level. Enhanced scientific reasoning and foundational biology skills."
      },
      {
        title: "Participant – IPS Olympiad (Sub-District Level)",
        period: "SMP Negeri 2 Senayang – 2019",
        description: "Represented the school in the Social Science Olympiad at the sub-district level. Trained analytical thinking and understanding of geography, history, and basic economics."
      }
    ],
    organization: [
      {
        title: "Boy Scouts – SMA Negeri 3 Senayang",
        period: "2021 – 2023",
        description: "Served as a member of the Ambalan Council. Engaged in planning and executing scouting activities, mentoring new members, and organizing regular training and induction events."
      },
      {
        title: "Student Council – SMA Negeri 3 Senayang",
        period: "2021 – 2022",
        description: "Served as a Member of the Religious Affairs Division. Organized Islamic religious events, spiritual gatherings, and activities aimed at strengthening students' religious values and character."
      },
      {
        title: "Student Council – SMP Negeri 2 Senayang",
        period: "2018 – 2019",
        description: "Served as Head of the Noble Character Division. Coordinated character education programs including social initiatives, school clean-ups, and student ethics campaigns."
      },
      {
        title: "Boy Scouts – SMP Negeri 2 Senayang",
        period: "2018 – 2019",
        description: "Actively participated in scouting activities and joined the Kwartir Cabang (District Level) Grand Camp. Developed leadership, teamwork, and resilience through outdoor programs."
      }
    ]
  },

  projects: [
    {
      name: "SILADAS – Static Archive Service Information System",
      year: 2026,
      description: "Developed SILADAS, a web-based information system for static archive services, during my internship at the Tanjungpinang City Library and Archives Agency. This system enables users to efficiently search and browse static archive listings through a simple, user-friendly interface.",
      image: "Images/Projek kerja praktik di dinas perpustakaan dan kearsipan kota tanjungpinang.png"
    },
    {
      name: "OceanLens – News Aggregator Mobile Application",
      year: 2026,
      description: "Developed OceanLens, a mobile news aggregator application that integrates news from four online media sources. The application uses topic clustering to organize articles and sentiment analysis to classify news as positive or negative, providing users with a smarter and more personalized news-reading experience.",
      image: "Images/Project pemrograman perangkat mobile.jpeg"
    },
    {
      name: "OILSARAI – Oil Spill Segmentation Using Deep Learning",
      year: 2026,
      description: "Developed OILSARAI, a web-based application for oil spill segmentation from Synthetic Aperture Radar (SAR) images using deep learning. The application allows users to upload SAR images, perform segmentation with U-Net, U-Net++, and DeepLabV3+ models, and visualize the segmentation results through an intuitive web interface.",
      image: "Images/Project pengolahan citra.png"
    },
    {
      name: "Pulau Mubut Darat Tourism Website",
      year: 2025,
      description: "Developed a web-based tourism information website as part of the Web Design course project.",
      image: "Images/Projects_PW.jpeg"
    },
    {
      name: "Maritime Tourism Destination Website",
      year: 2025,
      description: "This website was developed for the Human-Computer Interaction course, focusing on maritime tourism destinations in the Riau Islands Province.",
      image: "Images/project_imk.png"
    },
    {
      name: "Smart Courier System",
      year: 2025,
      description: "This project was developed as part of the Algorithm Design and Analysis course.",
      image: "Images/Project_PAA.png"
    },
    {
      name: "Smart Parking System Based on IoT",
      year: 2025,
      description: "This project was developed as part of the Digital Systems course, aiming to create a smart parking system based on the Internet of Things (IoT).",
      image: "Images/Project_sisdig.png"
    },
    {
      name: "Face Recognition with Deep Learning",
      year: 2024,
      description: "This project was developed for the Artificial Intelligence course, implementing Deep Learning methods to perform face recognition.",
      image: "Images/Project_AI.png"
    },
    {
      name: "Turing Machine Visualization Website",
      year: 2024,
      description: "Developed a web-based project for the Theory of Formal Languages and Automata (TBFO) course to simulate and visualize Turing Machines.",
      image: "Images/Project_TBFO.png"
    }
  ],

};

// ===== RENDER ALL =====
function renderAll() {
  renderHero();
  renderSkills();
  renderResume();
  renderProjects();
  renderContactInfo();
  initContactForm();
  renderFooter();

  initTypingAnimation([DATA.profile.tagline]);
  initScrollReveal();
  animateSkillBars();
}

// ===== HERO =====
function renderHero() {
  const p = DATA.profile;
  const nameEl = document.getElementById('hero-name');
  nameEl.innerHTML = `<span class="section-accent">${p.full_name}</span>`;
  document.getElementById('hero-tagline').textContent = p.summary;

  // Foto (sekarang ada di hero)
  const photo = document.getElementById('about-photo');
  if (photo) { photo.src = p.photo; photo.alt = p.full_name; }
}

// ===== SKILLS =====
function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = '';

  DATA.skills.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'reveal fade-up';
    card.dataset.delay = i * 80;
    card.innerHTML = `
      <div class="skill-card text-center p-6 flex flex-col items-center gap-3">
        <i class="${skill.icon} text-4xl" ${skill.color ? `style="color:${skill.color}"` : ''}></i>
        <p class="text-sm font-semibold text-gray-200">${skill.name}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== RESUME (Education, Experience, Organization) =====
function renderResume() {
  renderTimeline('education-container', DATA.resume.education, `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>`);
  renderTimeline('experience-container', DATA.resume.experience, `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`);
  renderTimeline('organization-container', DATA.resume.organization, `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`);
}

function renderTimeline(containerId, items, iconSvg) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'reveal fade-up flex gap-5';
    div.dataset.delay = i * 120;
    div.innerHTML = `
      <div class="flex flex-col items-center">
        <div class="timeline-icon-dot flex-shrink-0">${iconSvg}</div>
        ${i < items.length - 1 ? '<div class="w-px flex-1 mt-2" style="background:linear-gradient(180deg,#06B6D4,transparent)"></div>' : ''}
      </div>
      <div class="glass-card p-5 mb-6 flex-1">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <h4 class="text-base font-bold text-white">${item.title}</h4>
          <span class="text-xs text-accent-cyan bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full self-start">${item.period}</span>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">${item.description}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderTimelineList(containerId, items, iconSvg) {
  renderTimeline(containerId, items, iconSvg);
}

// ===== PROJECTS =====
function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  DATA.projects.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'reveal fade-up';
    card.dataset.delay = (i % 3) * 100;
    card.innerHTML = `
      <div class="project-card h-full flex flex-col">
        <div class="overflow-hidden flex-shrink-0">
          <img src="${project.image}" alt="${project.name}" class="project-card-img" loading="lazy"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'200\\'%3E%3Crect fill=\\'%23111827\\' width=\\'400\\' height=\\'200\\'/%3E%3Ctext fill=\\'%236B7280\\' font-size=\\'14\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3ENo Image%3C/text%3E%3C/svg%3E'" />
        </div>
        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-start justify-between gap-2 mb-2">
            <h3 class="text-base font-bold text-white leading-snug">${project.name}</h3>
            <span class="text-xs text-gray-500 flex-shrink-0 mt-0.5">${project.year}</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed flex-1 text-justify">${project.description}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== CONTACT INFO =====
function renderContactInfo() {
  const container = document.getElementById('contact-info-container');
  if (!container) return;
  container.innerHTML = '';

  const p = DATA.profile;
  const emailLink = document.getElementById('contact-email-link');
  const emailText = document.getElementById('contact-email-text');

  if (emailLink) emailLink.href = `mailto:${p.email}`;
  if (emailText) emailText.textContent = p.email;

  const items = [
    { label: "Email",    href: `mailto:${p.email}`,  icon: `<i class="fas fa-envelope text-xl"></i>` },
    { label: "LinkedIn", href: p.linkedin,            icon: `<i class="fab fa-linkedin-in text-xl"></i>` },
    { label: "GitHub",   href: p.github,              icon: `<i class="fab fa-github text-xl"></i>` }
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'flex gap-5 flex-wrap justify-center';

  items.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.title = item.label;
    a.className = 'social-icon-btn';
    a.innerHTML = item.icon;
    wrapper.appendChild(a);
  });

  container.appendChild(wrapper);
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit');
  const statusEl = document.getElementById('contact-form-status');
  if (!form || !submitBtn || !statusEl) return;

  form.action = 'https://formspree.io/f/xdargvaw';

  function setStatus(message, type = '') {
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`.trim();
  }

  function setSubmitting(isSubmitting) {
    submitBtn.disabled = isSubmitting;
    submitBtn.classList.toggle('is-loading', isSubmitting);
    submitBtn.querySelector('span').innerHTML = isSubmitting
      ? '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...'
      : '<i class="fas fa-paper-plane mr-2"></i>Send Message';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _subject: `Portfolio message: ${formData.get('subject')}`,
      _gotcha: formData.get('_gotcha') || ''
    };
    setSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Message delivery failed');

      form.reset();
      setStatus('Message sent. Thank you, I will reply soon.', 'success');
    } catch (error) {
      setStatus('Message could not be sent. Please check your connection or Formspree form settings.', 'error');
    } finally {
      setSubmitting(false);
    }
  });
}

// ===== FOOTER =====
function renderFooter() {
  const p = DATA.profile;
  const el = document.getElementById('footer-name');
  if (el) el.textContent = p.full_name;
  const t = document.getElementById('footer-title');
  if (t) t.textContent = p.tagline;
  const c = document.getElementById('footer-copyright');
  if (c) c.textContent = `© ${new Date().getFullYear()} ${p.full_name}. All rights reserved.`;
}

// ===== BOOT =====
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
});
