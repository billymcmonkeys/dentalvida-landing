🦷 DentalVida
Modern Dental Clinic Landing Page
Transform smiles. Book appointments. Grow practices.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss) ![License](https://img.shields.io/badge/license-MIT-green)

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

---

## 📖 About This Project

**DentalVida Landing** is a modern, conversion-optimized landing page designed for dental clinics and orthodontic practices. Built with Next.js and Tailwind CSS, it provides a professional online presence with integrated appointment booking, service showcases, and lead capture forms.

Perfect for dental professionals looking to attract new patients, showcase Invisalign and orthodontic services, and streamline appointment scheduling with a beautiful, responsive design.

---

## 🎨 Created by MC Monkeys

This project was built by **MC Monkeys** — where humans and AI agents collaborate to build real-world digital solutions. MC Monkeys is the team behind Mission Control for Claude Code, a system that makes AI agent work visible in real time.

DentalVida was developed using this human-AI collaborative approach, combining modern web development practices, design principles, and operational visibility to deliver a production-ready marketing website.

**Learn more:** https://www.mc-monkeys.com/

---

## ✨ Features

🦷 **Hero Section with Promotion** — Eye-catching hero banner featuring special Invisalign offer (20% OFF)  
🏥 **Service Showcase** — Highlight dental services with custom icons and descriptions  
   - Salud Dental Integral (Comprehensive Dental Health)  
   - Odontología Infantil (Pediatric Dentistry)  
   - Aparatos y Ortodoncia (Braces & Orthodontics)  
📚 **Dental Health Tips** — Educational content to build trust and authority  
📅 **Interactive Appointment Calendar** — Visual month-view booking system  
   - Select day and time slot  
   - Automatic availability detection (Mon-Fri business hours)  
   - Real-time booking feedback  
📝 **Contact Form** — Lead capture with name, email, phone, and message  
📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop  
🎨 **Modern UI/UX** — Clean design with blue/white color palette and smooth transitions  
⚡ **Blazing Fast Performance** — Built on Next.js 16 with App Router  
♿ **Accessible Markup** — Semantic HTML and ARIA labels  
🌐 **Spanish Language** — Interface optimized for Spanish-speaking markets  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router for server-side rendering and optimal performance |
| **TypeScript** | Type-safe development with enhanced developer experience |
| **React 19** | Latest React with improved hooks and concurrent features |
| **Tailwind CSS v4** | Utility-first styling with modern CSS features and design tokens |
| **PostCSS** | CSS processing and transformation pipeline |
| **ESLint** | Code quality and consistency enforcement |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17 or higher)
- **npm** (v9 or higher) or **yarn** / **pnpm**
- **Git** for version control

---

## 🚀 Installation

Follow these steps to get DentalVida running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dentalvida-landing.git
cd dentalvida-landing
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

If port 3000 is busy, use a custom port:

```bash
npm run dev -- -p 3010
```

### 4. Open in Browser

Navigate to **http://localhost:3000** to see the application running.

The page will automatically reload when you make changes to the code.

---

## 📱 How to Use

### For Patients (End Users)

**Browse Services**
- Scroll to the services section to learn about available treatments
- View detailed descriptions of dental services, pediatric dentistry, and orthodontics

**Book an Appointment**
- Navigate to the appointment calendar section
- Use arrow buttons to browse available months
- Click on any available date (Mon-Fri only)
- Select your preferred time slot
- Fill out your personal information
- Submit to request an appointment

**Contact the Clinic**
- Scroll to the contact form at the bottom
- Fill in your name, email, phone, and message
- Submit to send an inquiry directly to the clinic

### For Clinic Owners (Customization)

**Update Services**
- Edit [components/Services.tsx](components/Services.tsx) to modify service titles, descriptions, and icons

**Modify Promotional Banner**
- Edit [components/Hero.tsx](components/Hero.tsx) to change the Invisalign offer or promotional messaging

**Customize Availability**
- Edit [components/AppointmentCalendar.tsx](components/AppointmentCalendar.tsx) to adjust business hours and blocked time slots

**Update Contact Information**
- Edit [components/Footer.tsx](components/Footer.tsx) to add clinic address, phone, email, and social media links

**Add Pages**
- Create new pages in the `app/` directory using Next.js App Router conventions

---

## 📂 Project Structure

```
dentalvida-landing/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page composition
│   ├── globals.css               # Global styles + Tailwind base
│   └── design-system/            # Optional design system showcase
│       └── page.tsx
├── components/                   # Reusable React components
│   ├── Navbar.tsx                # Top navigation bar
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── Services.tsx              # Service cards with icons
│   ├── DentalHealth.tsx          # Educational content section
│   ├── AppointmentCalendar.tsx   # Interactive booking calendar
│   ├── ContactForm.tsx           # Lead capture form
│   └── Footer.tsx                # Site footer with links
├── public/                       # Static assets
├── AGENTS.md                     # Next.js agent customization rules
├── CLAUDE.md                     # Project-specific AI agent instructions
├── .gitignore                    # Git exclusions
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint to check code quality |

---

## 🗺️ Roadmap

### Phase 0 (Current) — Static Landing Page ✅
- ✅ Professional hero section with promotional banner
- ✅ Service showcase with custom icons
- ✅ Interactive appointment calendar
- ✅ Contact form UI
- ✅ Responsive mobile-first design
- ✅ Tailwind CSS v4 styling
- ✅ TypeScript implementation

### Phase 1 — Backend Integration
- ⏳ Connect appointment calendar to backend API
- ⏳ Form submission handling with email notifications
- ⏳ Real-time availability checking
- ⏳ Google Calendar integration
- ⏳ Database for storing appointments
- ⏳ Admin dashboard for managing bookings

### Phase 2 — Enhanced Features
- ⏳ Patient testimonials section
- ⏳ Before/after photo gallery
- ⏳ Blog/articles about dental health
- ⏳ Multi-language support (English/Spanish)
- ⏳ Live chat integration
- ⏳ WhatsApp booking integration

### Phase 3 — Marketing & Analytics
- ⏳ Google Analytics integration
- ⏳ Facebook Pixel for retargeting
- ⏳ SEO optimization with metadata
- ⏳ Open Graph tags for social sharing
- ⏳ Schema.org markup for local business
- ⏳ Performance monitoring

### Phase 4 — Advanced Functionality
- ⏳ Patient portal with login
- ⏳ Online payment for deposits
- ⏳ Appointment reminders (SMS/Email)
- ⏳ Virtual consultation booking
- ⏳ Insurance provider integration
- ⏳ Multi-location support

---

## 🌟 Key Features in Detail

### Interactive Appointment Calendar

The booking calendar provides a smooth, intuitive appointment scheduling experience:

- **Visual Month View** — Clear calendar grid showing the entire month
- **Smart Availability** — Automatically disables weekends and past dates
- **Time Slot Selection** — Choose from available time slots (9am-6pm business hours)
- **Busy Time Detection** — Pre-defined busy slots by day of week (configurable)
- **Form Integration** — Inline form appears when date/time selected
- **Responsive Design** — Works flawlessly on mobile and desktop

**Configuration:**
Edit the `BUSY_BY_WEEKDAY` object in [components/AppointmentCalendar.tsx](components/AppointmentCalendar.tsx) to adjust which time slots are unavailable for each weekday.

### Modern Hero Section

Eye-catching hero design optimized for conversions:

- **Promotional Badge** — Yellow badge highlighting special offers (20% off Invisalign)
- **Clear Value Proposition** — Large headline explaining the service benefit
- **Dual CTAs** — Primary CTA for booking + secondary CTA for learning more
- **Trust Indicators** — Pills showing "Sin dolor", "100% transparente", "Consulta inicial gratis"
- **Decorative Elements** — Subtle SVG illustrations for visual interest

### Service Showcase

Professional service presentation with:

- **Custom SVG Icons** — Hand-crafted icons for each service type
- **Hover Effects** — Smooth transitions and shadow elevation on hover
- **Responsive Grid** — 3-column layout on desktop, single column on mobile
- **Clear Descriptions** — Concise, benefit-focused service descriptions

---

## 🐛 Known Issues & Limitations

### Current Limitations (Phase 0)

⚠️ **IMPORTANT:** This is a Phase 0 static prototype without backend functionality.

**Functional Limitations:**
- **No Backend:** Appointment submissions don't persist or send emails
- **Static Calendar:** Availability is simulated, not connected to real booking system
- **Form Submission:** Contact form displays success message but doesn't send data
- **No Validation:** Limited input validation on forms
- **No Confirmation:** No booking confirmation emails or SMS

**Planned Improvements (Future Phases):**
- Phase 1: Backend API for appointment booking and form submissions
- Phase 2: Email/SMS notifications and confirmations
- Phase 3: Admin dashboard for managing appointments
- Phase 4: Full booking system with calendar synchronization

**Use Case:** DentalVida Phase 0 is perfect for:
- Showcasing design and UI capabilities
- Testing conversion-focused layouts
- Demonstrating appointment booking UX
- Collecting initial design feedback

**Not Suitable For:**
- Production use with real patients
- Actual appointment booking without backend
- Processing sensitive patient information
- Commercial use without proper backend infrastructure

---

## 🤝 Contributing

We welcome contributions! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code:

- Follows the existing TypeScript and code style
- Passes all linting checks (`npm run lint`)
- Includes appropriate comments and documentation
- Works across all major browsers
- Maintains responsive design on all screen sizes

---

## 📄 License

This project is licensed under the **MIT License** — see the LICENSE file for details.

---

## 📞 Contact & Support

**Project Creator:** MC Monkeys  
MC Monkeys is a human-AI collaborative system building real-world digital solutions. The team uses Claude Code agents with full operational visibility through Mission Control.

🌐 **Website:** https://www.mc-monkeys.com/  
🎯 **Mission Control:** [Live Demo](https://www.mc-monkeys.com/)  
📖 **Our Story:** [Read the Story](https://www.mc-monkeys.com/the-story.html)
📧 **Email:** billy.mcmonkeys@gmail.com

**Need Help?**
- 🐛 [Report a Bug](#)
- 💡 [Request a Feature](#)
- 💬 [Ask a Question](#)

---

## 🙏 Acknowledgments

- Built using human-AI collaborative workflows with Claude Code agents
- Developed with full operational visibility through MC Monkeys Mission Control
- Built on the amazing **Next.js** framework
- Styling with **Tailwind CSS v4**
- Icons created with custom SVG illustrations
- Inspired by modern dental clinic marketing needs
- Built with ❤️ for dental professionals transforming smiles

---

🦷 **Transform smiles. Simplify booking. Grow your practice.** 🦷

**Visit MC Monkeys** | **Star this repo ⭐**

> Built with human-AI collaboration by MC Monkeys 🐵  
> Making AI agent work visible. One project at a time.
