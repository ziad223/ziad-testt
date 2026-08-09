    // Swiper Dual Infinite Opposite Sliders Initialization
    const topSwiper = new Swiper('.topSwiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      speed: 6000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    });

    const bottomSwiper = new Swiper('.bottomSwiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      speed: 6000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      },
    });

    // Mobile Navigation Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Accordion Interactive Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // Bilingual (Arabic / English) Switcher Logic
    let currentLang = 'ar';
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langLabel = document.getElementById('langLabel');
    const translatableElements = document.querySelectorAll('[data-ar][data-en]');

    langToggleBtn.addEventListener('click', () => {
      const isEnglish = currentLang === 'ar';
      currentLang = isEnglish ? 'en' : 'ar';

      document.documentElement.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');
      document.documentElement.setAttribute('lang', currentLang);
      langLabel.textContent = isEnglish ? 'العربية' : 'English';

      // Dynamically toggle arrow icons & hover directions for LTR / RTL
      document.querySelectorAll('.fa-arrow-left, .fa-arrow-right').forEach(icon => {
        if (isEnglish) {
          icon.classList.replace('fa-arrow-left', 'fa-arrow-right');
          if (icon.classList.contains('group-hover:-translate-x-1')) {
            icon.classList.replace('group-hover:-translate-x-1', 'group-hover:translate-x-1');
          }
          if (icon.classList.contains('group-hover:-translate-x-2')) {
            icon.classList.replace('group-hover:-translate-x-2', 'group-hover:translate-x-2');
          }
        } else {
          icon.classList.replace('fa-arrow-right', 'fa-arrow-left');
          if (icon.classList.contains('group-hover:translate-x-1')) {
            icon.classList.replace('group-hover:translate-x-1', 'group-hover:-translate-x-1');
          }
          if (icon.classList.contains('group-hover:translate-x-2')) {
            icon.classList.replace('group-hover:translate-x-2', 'group-hover:-translate-x-2');
          }
        }
      });

      translatableElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
      });
    });

    // Interactive Service Modal Logic
    const serviceData = {
      domains: {
        badge: 'النطاقات والاستضافة',
        title: 'النطاقات واستضافة SEO السريعة',
        image: './images/project-9.png',
        desc: 'نوفر لك حجز أسماء النطاقات (Domain Names) العالمية (.com, .net, .org, .sy) مع استضافة سحابية عالية السرعة محمية بشهادات أمان SSL وتوافق تام مع محركات البحث.',
        features: [
          'حجز دومين خاص باسم مشروعك لمدة سنة مجاناً',
          'سيرفرات سحابية فائقة السرعة مع حماية ضد الهجمات الإلكترونية',
          'شهادة أمان مجانية SSL Certificate',
          'تهيئة متكاملة لمحركات البحث (SEO) لظهور موقعك في النتائج الأولى'
        ],
        waMessage: 'مرحباً، أرغب بالاستفسار عن حجز النطاقات والاستضافة SEO'
      },
      store: {
        badge: 'المتاجر الإلكترونية',
        title: 'تطوير المتاجر الإلكترونية المتكاملة',
        image: './images/project-10.png',
        desc: 'نظام متجر إلكتروني شامل يتيح لك عرض وتصنيف منتجاتك، إدارة المخزون، استقبال الطلبات، وتفعيل خيارات دفع شحن آمنة ومتنوعة.',
        features: [
          'تصميم متجر إلكتروني جذاب ومتوافق مع الموبايل',
          'ربط بوابات الدفع الإلكتروني والدفع عند الاستلام',
          'لوحة تحكم سهلة باللغة العربية لإدارة المنتجات والطلبات',
          'نظام كوبونات الخصم وإحصائيات المبيعات التفصيلية'
        ],
        waMessage: 'مرحباً، أرغب بتصميم متجر إلكتروني متكامل لمشروعي'
      },
      company: {
        badge: 'مواقع الشركات',
        title: 'تصميم مواقع الشركات والخدمات الاحترافية',
        image: './images/project-11.png',
        desc: 'ابنِ حضوراً رقمياً قوياً لشركتك من خلال موقع إلكتروني احترافي يعرض رؤيتك، خدماتك، ومعرض أعمالك بأعلى جودة وتصميم عصري.',
        features: [
          'تصميم مخصص يعبر عن هوية الشركة التجارية',
          'صفحات تعريفية متكاملة (عن الشركة، الخدمات، الأعمال، التواصل)',
          'سرعة فائقة في التحميل واستجابة على مختلف الشاشات',
          'نماذج تواصل تفاعلية وربط مباشر مع منصات التواصل الاجتماعي'
        ],
        waMessage: 'مرحباً، أرغب بتصميم موقع إلكتروني احترافي لشركتي'
      },
      apps: {
        badge: 'تطبيقات الجوال',
        title: 'برمجة تطبيقات الجوال وأنظمة الحجز',
        image: './images/project-12.png',
        desc: 'تطوير تطبيقات جوال ذكية لنظامي iOS و Android مع دعم أنظمة حجز المواعيد والاستشارات وإرسال الإشعارات للعملاء.',
        features: [
          'تطبيقات نيتف وسريعة لنظامي Android و iOS',
          'نظام حجز مواعيد واستشارات أونلاين متطور',
          'إشعارات لحظية (Push Notifications) لإشراك المستخدمين',
          'لوحة تحكم سحابية لإدارة البيانات والمستخدمين'
        ],
        waMessage: 'مرحباً، أرغب ببرمجة تطبيق جوال / نظام حجوزات'
      }
    };

    function openServiceModal(key) {
      const data = serviceData[key];
      if (!data) return;

      document.getElementById('modalBadge').innerText = data.badge;
      document.getElementById('modalTitle').innerText = data.title;
      document.getElementById('modalImg').src = data.image;
      document.getElementById('modalDesc').innerText = data.desc;

      const featuresUl = document.getElementById('modalFeatures');
      featuresUl.innerHTML = data.features.map(f => `
        <li class="flex items-center gap-3">
          <i class="fas fa-check text-emerald-400 text-xs"></i>
          <span>${f}</span>
        </li>
      `).join('');

      document.getElementById('modalWaBtn').href = `https://wa.me/963932222841?text=${encodeURIComponent(data.waMessage)}`;

      const modal = document.getElementById('serviceModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeServiceModal() {
      const modal = document.getElementById('serviceModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    document.getElementById('serviceModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'serviceModal') closeServiceModal();
    });

    // Legal Modals Content Data (Terms of Service & Privacy Policy)
    const legalData = {
      terms: {
        icon: 'fa-file-contract',
        title: { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
        subtitle: { ar: 'آخر تحديث: أغسطس 2026', en: 'Last Updated: August 2026' },
        content: {
          ar: `
            <div class="space-y-4">
              <p class="text-gray-300">مرحباً بكم في <strong>963AD</strong>. باستخدامك لموقعنا الإلكتروني أو الاستفادة من خدماتنا البرمجية والاستشارية، فإنك توافق على الالتزام بالشروط والأحكام التالية:</p>
              
              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-check-circle text-purple-400 text-sm"></i> 1. نطاق الخدمات والتعاقد</h4>
                <p class="text-xs text-gray-400">نقدم خدمات تصميم وتطوير المواقع الإلكترونية، برمجة تطبيقات الجوال، الاستضافة السحابية، وخدمات تحسين محركات البحث (SEO). يتم الاتفاق على نطاق العمل والمخرجات والمواعيد المحددة في عرض السعر أو العقد المبرم.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-copyright text-purple-400 text-sm"></i> 2. الملكية الفكرية</h4>
                <p class="text-xs text-gray-400">تنتقل ملكية الشفرة المصدريّة والأنظمة البرمجية وحقوق الملكية الفكرية للمشروع إلى العميل فور سداد كافة المستحقات المالية المتفق عليها بالكامل، وتتحفظ الشركة بحق عرض المشروع في معرض أعمالها ما لم يتم الاتفاق على خلاف ذلك.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-credit-card text-purple-400 text-sm"></i> 3. السياسات المالية والمدفوعات</h4>
                <p class="text-xs text-gray-400">تُسدد الدفعات وفق الجدول الزمني المتفق عليه (عادة 50% دفعة مقدمة و50% عند التسليم النهائي). الدفعات المسبقة غير قابلة للرد بعد بدء مرحلة التكوين الفعلي والتصميم.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-shield-alt text-purple-400 text-sm"></i> 4. الدعم الفني والصيانة</h4>
                <p class="text-xs text-gray-400">تضمن الشركة سلامة المشاريع المسلمة وخلوها من الأخطاء البرمجية لمدة 3 أشهر مجاناً بعد التسليم، وتتوفر خطط صيانة سنوية مخصصة لاستمرار التحديثات والدعم الفني.</p>
              </div>
            </div>
          `,
          en: `
            <div class="space-y-4">
              <p class="text-gray-300">Welcome to <strong>963AD</strong>. By using our website or utilizing our software and consulting services, you agree to comply with the following Terms and Conditions:</p>
              
              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-check-circle text-purple-400 text-sm"></i> 1. Scope of Services</h4>
                <p class="text-xs text-gray-400">We provide web design & development, mobile application programming, cloud hosting, and search engine optimization (SEO) services. The detailed scope, deliverables, and timelines are specified in the agreed project proposal.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-copyright text-purple-400 text-sm"></i> 2. Intellectual Property</h4>
                <p class="text-xs text-gray-400">Full ownership of the custom source code and intellectual property transfers to the client upon complete settlement of all agreed project payments. 963AD reserves the right to showcase the completed work in its portfolio unless agreed otherwise.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-credit-card text-purple-400 text-sm"></i> 3. Payment Terms</h4>
                <p class="text-xs text-gray-400">Payments are structured per milestone terms (typically 50% upfront deposit and 50% upon final launch). Deposits are non-refundable once design and development work has commenced.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-shield-alt text-purple-400 text-sm"></i> 4. Technical Support & Warranty</h4>
                <p class="text-xs text-gray-400">We guarantee code stability and bug-free operation for 3 months post-launch free of charge. Extended maintenance plans are available for ongoing updates and support.</p>
              </div>
            </div>
          `
        }
      },
      privacy: {
        icon: 'fa-user-shield',
        title: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
        subtitle: { ar: 'حماية بياناتك أولويتنا القصوى', en: 'Protecting your data is our priority' },
        content: {
          ar: `
            <div class="space-y-4">
              <p class="text-gray-300">تلتزم <strong>963AD</strong> بحماية خصوصية زوار ومستخدمي موقعنا الإلكتروني وعملائنا الكرام. تضمن هذه السياسة كيفية جمع البيانات واستخدامها بحماية وأمان تام:</p>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-database text-purple-400 text-sm"></i> 1. البيانات التي نجمعها</h4>
                <p class="text-xs text-gray-400">نجمع المعلومات التي تزودنا بها طوعاً عبر نموذج التواصل أو الواتساب، مثل: الاسم، رقم الهاتف، البريد الإلكتروني، وتفاصيل المشروع المطلوب.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-cog text-purple-400 text-sm"></i> 2. كيف نستخدم معلوماتك</h4>
                <p class="text-xs text-gray-400">تُستخدم البيانات حصراً للتواصل معك بشأن الاستفسارات، تقديم عروض الأسعار، وتوفير خدمات الدعم البرمجي والتطوير. لا نقوم برهن أو بيع أو مشاركة بياناتك مع أي طرف ثالث لأغراض تسويقية.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-lock text-purple-400 text-sm"></i> 3. الأمان وحماية البيانات</h4>
                <p class="text-xs text-gray-400">نطبق أفضل الممارسات الأمنية والتشفير SSL لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-cookie-bite text-purple-400 text-sm"></i> 4. ملفات تعريف الارتباط (Cookies)</h4>
                <p class="text-xs text-gray-400">نستخدم ملفات الكوكيز الفنية الأساسية لتحسين تجربة تصفح الموقع، تسريع الأداء، وتذكر تفضيلات اللغة دون تعقب الخصوصية الشخصية.</p>
              </div>
            </div>
          `,
          en: `
            <div class="space-y-4">
              <p class="text-gray-300">At <strong>963AD</strong>, we are committed to safeguarding the privacy of our website visitors and clients. This policy details how your data is collected and protected:</p>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-database text-purple-400 text-sm"></i> 1. Information We Collect</h4>
                <p class="text-xs text-gray-400">We collect information provided voluntarily via contact forms or WhatsApp communications, such as name, phone number, email address, and project requirements.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-cog text-purple-400 text-sm"></i> 2. How We Use Your Data</h4>
                <p class="text-xs text-gray-400">Your data is strictly used to answer inquiries, issue proposals, and deliver software support. We never sell, rent, or trade your personal information to third parties.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-lock text-purple-400 text-sm"></i> 3. Security Measures</h4>
                <p class="text-xs text-gray-400">We employ standard industry security controls including SSL encryption to safeguard stored data against unauthorized access, loss, or misuse.</p>
              </div>

              <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
                <h4 class="text-white font-bold flex items-center gap-2"><i class="fas fa-cookie-bite text-purple-400 text-sm"></i> 4. Cookies Usage</h4>
                <p class="text-xs text-gray-400">We utilize functional cookies solely to enhance browsing speed, user experience, and preserve language preferences without invasive personal tracking.</p>
              </div>
            </div>
          `
        }
      }
    };

    let activeLegalKey = null;

    function openLegalModal(key) {
      const data = legalData[key];
      if (!data) return;
      activeLegalKey = key;

      const iconEl = document.getElementById('legalModalIcon');
      iconEl.className = `fas ${data.icon} text-lg`;
      
      document.getElementById('legalModalTitle').innerText = data.title[currentLang] || data.title.ar;
      document.getElementById('legalModalSubtitle').innerText = data.subtitle[currentLang] || data.subtitle.ar;
      document.getElementById('legalModalContent').innerHTML = data.content[currentLang] || data.content.ar;

      const modal = document.getElementById('legalModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeLegalModal() {
      const modal = document.getElementById('legalModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      activeLegalKey = null;
    }

    document.getElementById('legalModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'legalModal') closeLegalModal();
    });

    // Support Escape key to close any active modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeServiceModal();
        closeLegalModal();
      }
    });

    // Update Legal Modal content dynamically when switching language
    const originalLangToggle = langToggleBtn.onclick;
    langToggleBtn.addEventListener('click', () => {
      if (activeLegalKey && legalData[activeLegalKey]) {
        const data = legalData[activeLegalKey];
        document.getElementById('legalModalTitle').innerText = data.title[currentLang] || data.title.ar;
        document.getElementById('legalModalSubtitle').innerText = data.subtitle[currentLang] || data.subtitle.ar;
        document.getElementById('legalModalContent').innerHTML = data.content[currentLang] || data.content.ar;
      }
    });