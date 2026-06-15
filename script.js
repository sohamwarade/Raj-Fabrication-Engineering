// Initialize Lucide Icons
lucide.createIcons();

// 1. Mobile Menu Drawer Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Close mobile menu on clicking links
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Helper: Smooth Scroll to element
function smoothScroll(targetId) {
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Close Mobile Drawer on Link Clicks with smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
    smoothScroll(href);
  });
});

// 2. Sticky Navbar scroll effect
const nav = document.getElementById("main-nav");
const topBar = document.getElementById("top-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    if (nav) {
      nav.classList.add("bg-white/95", "backdrop-blur-md", "shadow-md", "py-3");
      nav.classList.remove("bg-white/90", "py-4");
    }
    if (topBar) {
      topBar.classList.add("h-0", "py-0", "overflow-hidden", "opacity-0");
      topBar.classList.remove("opacity-100");
    }
  } else {
    if (nav) {
      nav.classList.add("bg-white/90", "py-4");
      nav.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-md", "py-3");
    }
    if (topBar) {
      topBar.classList.add("opacity-100");
      topBar.classList.remove("h-0", "py-0", "overflow-hidden", "opacity-0");
    }
  }
});

// 3. Scrollspy: Highlight active nav link on scroll
const sections = ["home", "about", "machines", "services", "quote", "contact"];
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "home";
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section;
      }
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-primary", "font-bold");
    link.classList.add("text-gray-600");
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("text-primary", "font-bold");
      link.classList.remove("text-gray-600");
    }
  });
});

// 4. Tab Switching Logic for Machines Section
const machinesData = [
  {
    name: "12 kW Fiber Laser Cutting Machine",
    tag: "Heavy Duty Precision",
    image: "./laser-12kw.png",
    description: "Our high-capacity flagship laser cutter is designed for high-speed precision cutting of thick metal sheets. Engineered to handle large-scale, heavy industrial parts with exceptional accuracy.",
    specs: [
      { label: "Laser Power", value: "12,000 Watts (12 kW)" },
      { label: "Cutting Materials", value: "MS (up to 40mm), SS (up to 35mm), Aluminum" },
      { label: "Precision/Tolerance", value: "±0.03 mm" },
      { label: "Table Workspace", value: "3000mm x 1500mm / Dual Pallet Changer" },
      { label: "Key Benefit", value: "Ultra-fast cutting of heavy plates, cleaner edges" }
    ]
  },
  {
    name: "3 kW Fiber Laser Cutting Machine",
    tag: "Fine Sheet Specialist",
    image: "./laser-3kw.png",
    description: "Optimized for speed and high precision on thin-to-medium gauge sheet metals. This machine offers extremely fast turnaround times for custom fabrications, brackets, and delicate designs.",
    specs: [
      { label: "Laser Power", value: "3,000 Watts (3 kW)" },
      { label: "Cutting Materials", value: "MS (up to 16mm), SS (up to 10mm), Brass, Copper" },
      { label: "Precision/Tolerance", value: "±0.02 mm" },
      { label: "Table Workspace", value: "3000mm x 1500mm" },
      { label: "Key Benefit", value: "Optimal accuracy for thin panels & complex shapes" }
    ]
  },
  {
    name: "CNC Bending / Press Brake",
    tag: "Perfect Angles",
    image: "./cnc-bending-1.png",
    description: "Delivers highly accurate and consistent bending for custom metallic profiles. Programmed using advanced CNC inputs to guarantee exact angles across mass production runs.",
    specs: [
      { label: "Tonnage Capacity", value: "110 Tons" },
      { label: "Bending Length", value: "Up to 3100 mm" },
      { label: "Backgauge System", value: "Multi-axis CNC auto-positioning" },
      { label: "Angle Precision", value: "±0.1 Degrees" },
      { label: "Key Benefit", value: "Zero-error repeat bends for housing/structures" }
    ]
  },
  {
    name: "Hydraulic Shearing Machine",
    tag: "Rapid Cutting",
    image: "./cnc-bending-2.png",
    description: "Utilized for clean, rapid straight shears on sheet metal plates prior to secondary processes. Provides straight edge preparation and shearing cuts with minimal deformation.",
    specs: [
      { label: "Cutting Capacity", value: "Up to 6mm Thickness" },
      { label: "Shearing Length", value: "Up to 3000 mm" },
      { label: "Blade Gap Adjustment", value: "Manual dial index with thickness gauge" },
      { label: "Speed", value: "Up to 20 cuts per minute" },
      { label: "Key Benefit", value: "Cost-effective sizing sheets with straight edges" }
    ]
  }
];

function switchTab(index) {
  // Toggle Tab button styles
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn, i) => {
    const iconDiv = btn.querySelector("div");
    const badgeText = btn.querySelector("span.text-xs");
    const nameText = btn.querySelector("span.text-sm");
    
    if (i === index) {
      btn.className = "tab-btn text-left px-5 py-4 rounded-lg font-bold transition-all duration-200 border flex items-center justify-between w-full bg-industrial-black text-white border-industrial-black shadow-md";
      if (iconDiv) {
        iconDiv.className = "p-1.5 rounded bg-primary text-white";
      }
      if (badgeText) {
        badgeText.className = "text-xs uppercase tracking-wider font-extrabold text-primary-light";
      }
    } else {
      btn.className = "tab-btn text-left px-5 py-4 rounded-lg font-bold transition-all duration-200 border flex items-center justify-between w-full bg-industrial-light text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300";
      if (iconDiv) {
        iconDiv.className = "p-1.5 rounded bg-gray-200 text-gray-700";
      }
      if (badgeText) {
        badgeText.className = "text-xs uppercase tracking-wider font-extrabold text-primary";
      }
    }
  });

  // Update specs and content details
  const data = machinesData[index];
  const activeImg = document.getElementById("active-tab-img");
  const activeTitle = document.getElementById("active-tab-title");
  const activeDesc = document.getElementById("active-tab-desc");
  const activeBadge = document.getElementById("active-tab-badge");
  const specsContainer = document.getElementById("active-tab-specs");

  if (activeImg) activeImg.src = data.image;
  if (activeTitle) activeTitle.textContent = data.name;
  if (activeDesc) activeDesc.textContent = data.description;
  if (activeBadge) activeBadge.textContent = data.tag;

  if (specsContainer) {
    let specsHtml = "";
    data.specs.forEach((spec) => {
      specsHtml += `
        <div class="py-2 flex justify-between text-xs gap-4 border-b border-gray-200/50 last:border-b-0">
          <span class="text-gray-500 font-medium">${spec.label}</span>
          <span class="text-industrial-black font-semibold text-right">${spec.value}</span>
        </div>`;
    });
    specsContainer.innerHTML = specsHtml;
  }
}

// 5. Infrastructure Lightbox Modal logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  }
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
  }
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest("button")) {
      closeLightbox();
    }
  });
}

// 6. Drawing File Upload Handler
let selectedFile = null;
const dropZone = document.getElementById("drop-zone");
const quoteFile = document.getElementById("quote-file");
const uploadPrompt = document.getElementById("upload-prompt");
const fileInfo = document.getElementById("file-info");
const filenameDisplay = document.getElementById("filename-display");
const filesizeDisplay = document.getElementById("filesize-display");

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    const extension = file.name.split(".").pop().toLowerCase();
    if (["pdf", "dxf", "dwg"].includes(extension)) {
      selectedFile = file;
      if (filenameDisplay) filenameDisplay.textContent = file.name;
      if (filesizeDisplay) filesizeDisplay.textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";
      
      if (uploadPrompt) uploadPrompt.classList.add("hidden");
      if (fileInfo) fileInfo.classList.remove("hidden");
      if (dropZone) {
        dropZone.classList.add("border-emerald-500", "bg-emerald-50/20");
        dropZone.classList.remove("border-gray-300");
      }
    } else {
      alert("Please upload only drawing files (.pdf, .dxf, .dwg)");
      if (quoteFile) quoteFile.value = "";
    }
  }
}

function removeSelectedFile(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  selectedFile = null;
  if (quoteFile) quoteFile.value = "";
  if (uploadPrompt) uploadPrompt.classList.remove("hidden");
  if (fileInfo) fileInfo.classList.add("hidden");
  if (dropZone) {
    dropZone.classList.remove("border-emerald-500", "bg-emerald-50/20");
    dropZone.classList.add("border-gray-300");
  }
}

if (dropZone) {
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("border-primary", "bg-primary/5");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("border-primary", "bg-primary/5");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("border-primary", "bg-primary/5");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const extension = droppedFile.name.split(".").pop().toLowerCase();
      if (["pdf", "dxf", "dwg"].includes(extension)) {
        selectedFile = droppedFile;
        if (filenameDisplay) filenameDisplay.textContent = droppedFile.name;
        if (filesizeDisplay) filesizeDisplay.textContent = (droppedFile.size / (1024 * 1024)).toFixed(2) + " MB";
        
        if (uploadPrompt) uploadPrompt.classList.add("hidden");
        if (fileInfo) fileInfo.classList.remove("hidden");
        dropZone.classList.add("border-emerald-500", "bg-emerald-50/20");
        dropZone.classList.remove("border-gray-300");
      } else {
        alert("Please upload only drawing files (.pdf, .dxf, .dwg)");
      }
    }
  });
}

// 7. Form Submissions via Web3Forms
const quoteFormContainer = document.getElementById("quote-form-container");
const quoteForm = document.getElementById("quote-form");
const quoteSubmitBtn = document.getElementById("quote-submit-btn");

if (quoteForm) {
  quoteForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = quoteForm.name.value;
    const phone = quoteForm.phone.value;
    const email = quoteForm.email.value;
    const material = quoteForm.material.value;
    const thickness = quoteForm.thickness.value;
    const quantity = quoteForm.quantity.value;
    const message = quoteForm.message.value;

    if (!name || !phone || !email) {
      alert("Please fill in all contact details.");
      return;
    }

    if (quoteSubmitBtn) {
      quoteSubmitBtn.disabled = true;
      quoteSubmitBtn.textContent = "Submitting Request...";
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", quoteForm.access_key.value);
      formDataToSend.append("subject", `New Estimate/Quote Request from ${name}`);
      formDataToSend.append("from_name", "Raj Fabrication Quote System");
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("phone", phone);
      formDataToSend.append("material", material);
      formDataToSend.append("thickness", `${thickness} mm`);
      formDataToSend.append("quantity", quantity);

      let finalMessage = message;
      if (selectedFile) {
        finalMessage += `\n\n[Drawing File Details:\n- Name: ${selectedFile.name}\n- Size: ${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB]\n(Note: Web3Forms Free Tier does not support file attachments. Please request this file when contacting the client.)`;
      }
      formDataToSend.append("message", finalMessage);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      if (data.success) {
        let successHtml = `
          <div class="p-8 text-center flex flex-col items-center justify-center h-full min-h-[450px] space-y-4">
            <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
              <i data-lucide="check-circle" class="w-10 h-10"></i>
            </div>
            <h3 class="text-2xl font-black text-gray-900">Estimation Request Sent!</h3>
            <p class="text-xs text-gray-500 max-w-sm leading-relaxed">
              Thank you for submitting, <strong>${name}</strong>. `;
        
        if (selectedFile) {
          successHtml += `Your specification details have been sent. Since we are on a free email plan, please email your drawing file (<strong>${selectedFile.name}</strong>) directly to <strong>waradesoham22@gmail.com</strong> or send it via WhatsApp to complete your request.`;
        } else {
          successHtml += `G. D. Dahake will contact you at <strong>${email}</strong> shortly.`;
        }

        successHtml += `
            </p>
            <div class="pt-4 flex gap-4">
              <a href="https://wa.me/919022185091" target="_blank" rel="noopener noreferrer" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-6 rounded-lg transition-colors shadow-sm uppercase tracking-wider">
                Follow up on WhatsApp
              </a>
              <button onclick="location.reload()" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs py-3 px-6 rounded-lg transition-colors uppercase tracking-wider">
                New Estimate
              </button>
            </div>
          </div>`;
        
        if (quoteFormContainer) {
          quoteFormContainer.innerHTML = successHtml;
          lucide.createIcons();
        }
      } else {
        alert("Submission failed: " + (data.message || "Please check your access key."));
        if (quoteSubmitBtn) {
          quoteSubmitBtn.disabled = false;
          quoteSubmitBtn.textContent = "SUBMIT QUOTE REQUEST";
        }
      }
    } catch (err) {
      console.error("Submission error", err);
      alert("An error occurred during submission. Please try again.");
      if (quoteSubmitBtn) {
        quoteSubmitBtn.disabled = false;
        quoteSubmitBtn.textContent = "SUBMIT QUOTE REQUEST";
      }
    }
  });
}

const contactFormContainer = document.getElementById("contact-form-container");
const contactForm = document.getElementById("contact-form");
const contactSubmitBtn = document.getElementById("contact-submit-btn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = contactForm.name.value;
    const phone = contactForm.phone.value;
    const email = contactForm.email.value;
    const service = contactForm.service.value;
    const message = contactForm.message.value;

    if (!name || !phone || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.textContent = "TRANSMITTING INQUIRY...";
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", contactForm.access_key.value);
      formDataToSend.append("subject", `New B2B Inquiry from ${name}`);
      formDataToSend.append("from_name", "Raj Fabrication Web Inquiry");
      formDataToSend.append("name", name);
      formDataToSend.append("email", email);
      formDataToSend.append("phone", phone);
      formDataToSend.append("service", service);
      formDataToSend.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      if (data.success) {
        if (contactFormContainer) {
          contactFormContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center text-center h-full min-h-[350px] space-y-4">
              <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                <i data-lucide="check-circle" class="w-8 h-8"></i>
              </div>
              <h3 class="text-xl font-extrabold text-gray-900">
                Inquiry Transmitted Successfully
              </h3>
              <p class="text-xs text-gray-500 max-w-sm leading-relaxed">
                Thank you for contacting Raj Fabrication & Engineering. Your B2B request has been sent. G. D. Dahake will contact you shortly.
              </p>
              <button onclick="location.reload()" class="bg-primary hover:bg-primary-dark text-white font-bold text-xs py-2.5 px-6 rounded-lg transition-colors uppercase tracking-wider">
                Send Another Message
              </button>
            </div>`;
          lucide.createIcons();
        }
      } else {
        alert("Transmitting failed: " + (data.message || "Please check your access key."));
        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.textContent = "SEND ENQUIRY MESSAGE";
        }
      }
    } catch (err) {
      console.error("Submission error", err);
      alert("An error occurred during transmission. Please try again.");
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = false;
        contactSubmitBtn.textContent = "SEND ENQUIRY MESSAGE";
      }
    }
  });
}

// 8. Sparks Particles Simulation
const sparksContainer = document.getElementById("sparks-container");
if (sparksContainer) {
  const particleCount = 25;
  for (let i = 0; i < particleCount; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    const width = Math.random() * 4 + 2;
    const height = Math.random() * 12 + 4;
    const left = Math.random() * 80 + 10;
    const yMax = -(Math.random() * 600 + 200);
    const xDelta = (Math.random() - 0.5) * 200;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 4;
    const rotateMax = Math.random() * 360;

    spark.style.width = width + "px";
    spark.style.height = height + "px";
    spark.style.left = left;
    spark.style.setProperty("--y-max", yMax + "px");
    spark.style.setProperty("--x-delta", xDelta + "px");
    spark.style.setProperty("--rotate-max", rotateMax + "deg");

    spark.style.animation = `fly-up ${duration}s ease-out infinite`;
    spark.style.animationDelay = delay + "s";

    sparksContainer.appendChild(spark);
  }
}

// 9. Floating WhatsApp Tooltip Delay
const tooltip = document.getElementById("whatsapp-tooltip");
if (tooltip) {
  setTimeout(() => {
    tooltip.classList.remove("hidden");
  }, 3000);
  
  // Auto-close tooltip after 11 seconds
  setTimeout(() => {
    tooltip.classList.add("hidden");
  }, 11000);
}

function closeWhatsappTooltip(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  if (tooltip) {
    tooltip.classList.add("hidden");
  }
}
