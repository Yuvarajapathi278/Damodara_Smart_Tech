import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Sparkles, Trophy, Wallet, Clock3, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const roleMatrix = [
  {
    domain: "AI, Data Science & IT",
    roles: ["AI/ML Trainee", "Data Analyst Intern"],
    projects: ["Build predictive models", "Create dashboards", "Work on computer vision applications"],
  },
  {
    domain: "Software & Web Development",
    roles: ["Software Developer Intern", "Web Dev Intern"],
    projects: ["Develop responsive websites", "Build SaaS dashboards", "Create scalable web applications"],
  },
  {
    domain: "Mobile App Development",
    roles: ["Mobile App Developer Intern"],
    projects: ["Design and build Android and iOS apps", "Focus on user experience"],
  },
  {
    domain: "Electronics, IoT & Embedded",
    roles: ["Electronics/IoT Intern", "Embedded Systems Intern"],
    projects: ["Create smart devices", "Develop firmware", "Design connected IoT ecosystems"],
  },
  {
    domain: "Electric Vehicles & Energy",
    roles: ["EV Engineering Intern", "Renewable Energy Intern"],
    projects: ["Work on battery systems", "Design charging infrastructure", "Optimize solar energy solutions"],
  },
  {
    domain: "Mechanical, Mechatronics & Auto",
    roles: ["Mechanical Design Intern", "Product Development Intern"],
    projects: ["Use CAD for product design", "Run simulations", "Prototype through 3D printing"],
  },
  {
    domain: "Civil Engineering",
    roles: ["Civil Infrastructure Intern"],
    projects: ["Design smart infrastructure", "Perform GIS mapping", "Model sustainable buildings"],
  },
  {
    domain: "Chemical & Biotech",
    roles: ["Process Engineering Intern", "Biotech Research Intern"],
    projects: ["Optimize chemical processes", "Research environmental sustainability", "Support bioinformatics"],
  },
  {
    domain: "Agriculture",
    roles: ["Smart Farming Intern"],
    projects: ["Build IoT irrigation systems", "Monitor crops using analytics", "Support precision agriculture"],
  },
  {
    domain: "Management (MBA/BBA)",
    roles: ["Management Trainee (HR, Finance, Ops, Sales)"],
    projects: ["Support recruitment systems", "Build financial models", "Optimize business operations"],
  },
  {
    domain: "Commerce & Economics",
    roles: ["Finance Intern", "Business Analyst Intern"],
    projects: ["Create budgeting models", "Analyze market trends", "Prepare investment analysis reports"],
  },
  {
    domain: "Law",
    roles: ["Legal & Compliance Intern"],
    projects: ["Review contracts", "Manage intellectual property docs", "Support regulatory compliance"],
  },
  {
    domain: "Design, Media & Content",
    roles: ["Graphic Design/UI-UX Intern", "Content Writer", "Media Intern"],
    projects: ["Create branding kits", "Write technical documentation", "Plan social media campaigns"],
  },
  {
    domain: "Sciences (Math, Physics, Chem.)",
    roles: ["Research & Innovation Intern"],
    projects: ["Conduct applied research", "Support R&D with data analysis", "Co-author technical papers"],
  },
  {
    domain: "Entrepreneurship",
    roles: ["Startup Development Intern"],
    projects: ["Validate business models", "Analyze product-market fit", "Prepare pitch decks"],
  },
];

const whoCanApply = [
  "Engineering & Technology: Computer Science, IT, AI & Data Science, Electronics & Electrical, Mechanical, Civil, Chemical, Biotechnology, Agricultural, Automobile, Mechatronics, Aerospace",
  "Sciences: Mathematics, Physics, Chemistry, Statistics",
  "Commerce & Management: Commerce, Economics, BBA, MBA (Marketing, Finance, HR, Operations)",
  "Humanities & Design: Law, English & Content Writing, Psychology, Sociology, Visual Communication, Graphic Design, Animation, Journalism & Digital Media",
  "Any other relevant discipline: We believe innovation comes from everywhere",
];

export default function InternshipDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-gradient-to-br from-purple-50/80 via-white to-blue-50/80 p-8 shadow-xl dark:from-purple-950/40 dark:via-background dark:to-blue-950/40 md:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-purple-600/10 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-300">
              2026 Internship Program
            </span>
            <span className="rounded-full bg-emerald-600/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              Hybrid • On-site
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Internship Program 2026 at Damodara Smart Tech Pvt. Ltd.
              </h1>
              <p className="mt-4 text-xl font-semibold text-purple-700 dark:text-purple-300">
                Innovate • Learn • Build • Grow
              </p>
              <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
                Are you a passionate student or recent graduate eager to translate your academic knowledge into real-world industry experience? Damodara Smart Tech Pvt. Ltd. invites applications for its multidisciplinary internship program. Work on live projects, guided by industry mentors, and build solutions that matter.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() => navigate("/apply?program=internship")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:from-purple-700 hover:to-blue-700"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-white/80 p-6 shadow-lg dark:bg-slate-950/70">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-7 w-7 text-purple-600" />
                <h2 className="text-xl font-semibold">Why join us?</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-amber-500" /> Work on live projects with mentorship from industry professionals.</li>
                <li className="flex gap-2"><GraduationCap className="mt-0.5 h-4 w-4 text-emerald-500" /> Build practical skills and integrate with real delivery teams.</li>
                <li className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 text-blue-500" /> Earn recognition through strong performance and PPO opportunities.</li>
                <li className="flex gap-2"><Wallet className="mt-0.5 h-4 w-4 text-purple-600" /> Performance-based stipends from ₹5,000 to ₹15,000 per month for active contributors.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border/60 bg-card p-8 shadow-sm md:p-10">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold">Who Can Apply?</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            We welcome applications from students and recent graduates across all disciplines.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {whoCanApply.map((item) => (
              <li key={item} className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold">Internship Roles & Project Alignment</h2>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {roleMatrix.map((item) => (
              <div key={item.domain} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{item.domain}</h3>
                <p className="mt-3 text-sm font-medium text-purple-700 dark:text-purple-300">
                  {item.roles.join(" • ")}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {item.projects.map((project) => (
                    <li key={project} className="flex gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Wallet className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-semibold">Stipend Structure & Evaluation</h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Month 1:</strong> Training & evaluation phase focused on learning, tools, and team integration.</li>
              <li><strong className="text-foreground">Live Project Phase:</strong> Upon successful evaluation, you will be deployed on a live project.</li>
              <li><strong className="text-foreground">Stipend:</strong> A performance-based stipend ranging from ₹5,000 to ₹15,000 per month.</li>
              <li><strong className="text-foreground">Recognition:</strong> Outstanding performers may receive higher stipends, bonuses, and a Pre-Placement Offer.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold">Internship Details</h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Duration:</strong> Flexible, ranging from 1 to 6 months.</li>
              <li><strong className="text-foreground">Mode of Work:</strong> Hybrid or on-site based on project requirements and location.</li>
              <li><strong className="text-foreground">Mentorship:</strong> One-on-one guidance from experienced professionals.</li>
              <li><strong className="text-foreground">Certification:</strong> Verifiable internship certificate upon successful completion.</li>
              <li><strong className="text-foreground">Recommendation:</strong> Formal letter of recommendation for top performers.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border/60 bg-card p-8 shadow-sm md:p-10">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold">We Are Looking For</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            Students who don’t just seek a certificate, but a challenge. You should have a passion to learn, an impulse to innovate, and the drive to solve real-world problems.
          </p>

          <div className="mt-8 rounded-3xl border border-purple-200 bg-purple-50/70 p-6 dark:border-purple-900/40 dark:bg-purple-950/20">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold">How to Apply</h3>
            </div>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>1. Prepare your updated resume and academic details.</li>
              <li>2. Share your area of interest, preferred internship duration, and start date.</li>
              <li>3. Include portfolio or project links if applicable.</li>
              <li>4. Submit your application through the form below or contact our Talent Acquisition team.</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => navigate("/apply?program=internship")} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
