"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Passions />
      <Contact />
      <Footer />
    </main>
  );
}

/* -------------------- NAV -------------------- */

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-[#e5e4e0]">
      <div className="max-w-site mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-medium text-ink tracking-tight">
          Michael Mitchell
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#about" className="link-underline">About</a>
          <a href="#services" className="link-underline">Services</a>
          <a href="#experience" className="link-underline">Experience</a>
          <a href="#contact" className="link-underline">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block text-sm bg-ink text-paper px-4 py-2 rounded-md hover:bg-ink-soft transition-colors"
        >
          Let's work together
        </a>
      </div>
    </nav>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section id="top" className="max-w-site mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="md:flex-1 max-w-narrow">
        <p className="section-label mb-6">Available for consulting</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink mb-6">
          Senior integrations engineer, ServiceNow developer, and Workday administrator.
        </h1>
        <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-10 max-w-[640px]">
          I help companies connect the systems that run their business.
          Twelve years across ServiceNow, Workday, and the messy middle in between.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 rounded-md hover:bg-ink-soft transition-colors font-medium"
          >
            Let's work together
          </a>
          <p className="text-sm text-ink-soft">
            Currently available for consulting and contract engagements.
          </p>
        </div>
      </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border border-[#e5e4e0]">
          <img
            src="/headshot.png"
            alt="Michael Mitchell"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border border-[#e5e4e0]">
          <img
            src="/headshot.png"
            alt="Michael Mitchell"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */

function About() {
  return (
    <section id="about" className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-[#e5e4e0]">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="section-label">About</p>
        </div>
        <div className="md:col-span-9 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-8">
            Twelve years of building, fixing, and connecting enterprise systems.
          </h2>
          <div className="space-y-5 text-ink-soft leading-relaxed text-[17px]">
            <p>
              I started my career in 2014 building integrations between asset management
              systems and Microsoft Dynamics. Within a year I was on the HRIS team, learning
              the platforms I've built my career on: Workday, ServiceNow, and the dozens of
              systems that have to talk to them.
            </p>
            <p>
              Since then I've stood up ServiceNow from scratch, led a Workday Payroll go-live,
              re-implemented Workday end-to-end, built integrations using everything from
              BizTalk and MuleSoft to scripted REST APIs, and developed the SQL Server stored
              procedures and Power BI reports that turn HR data into something leadership can
              actually use. I'm ITIL Foundation certified and currently working toward
              additional ServiceNow certifications.
            </p>
            <p>
              I'm based in Tulsa, work hybrid or remote, and I'm at my best when a project
              sits at the seam between systems. The kind of work where the answer isn't in
              any one platform's documentation, and someone has to hold the whole thing in
              their head until it works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */

const services = [
  {
    num: "01",
    title: "ServiceNow Development",
    body: "Full-stack ServiceNow work across ITSM and HRSD. Service Portal, Service Catalog, custom modules, CMDB, Asset, Change, Incident, Problem, Knowledge, Project. Workflows, Flow Designer, business rules, client scripts, scripted REST APIs, IntegrationHub.",
  },
  {
    num: "02",
    title: "Workday Administration",
    body: "HCM, Payroll, Benefits, Learning, Time and Absence, and Talent Management. EIBs, Core Connectors, Workday Studio, advanced reporting, calculated fields, business processes, security configuration. Implementations, re-implementations, and ongoing platform ownership.",
  },
  {
    num: "03",
    title: "Enterprise Integrations",
    body: "The hardest part of any HR or IT stack is the connections between systems. I build them in REST, SOAP, JSON, XML, MuleSoft, BizTalk, and ServiceNow IntegrationHub. New integrations, broken integrations, and the legacy ones nobody wants to touch.",
  },
  {
    num: "04",
    title: "AI-Assisted Automation",
    body: "Practical AI integration into existing workflows. ServiceNow Virtual Agent, AI Search, and Predictive Intelligence for service delivery. AI-assisted development tooling (Copilot, Claude, Codex) for accelerating custom work. The version of agentic AI that actually ships.",
  },
  {
    num: "05",
    title: "HRIS Strategy and Implementation",
    body: "End-to-end HRIS work covering payroll go-lives, benefits vendor onboarding, time clock integration, data migration, and reporting. I've done this side from both the implementation team and the long-term operations team, which changes how I design things.",
  },
  {
    num: "06",
    title: "Curriculum and Technical Training",
    body: "Course development for major e-learning platforms covering Workday, ServiceNow, and integration patterns. Technical content that holds up because it's written by someone who actually shipped the thing.",
  },
];

function Services() {
  return (
    <section id="services" className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-[#e5e4e0]">
      <div className="grid md:grid-cols-12 gap-10 mb-12">
        <div className="md:col-span-3">
          <p className="section-label">What I do</p>
        </div>
        <div className="md:col-span-9 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
            Six places I can plug into your stack.
          </h2>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Most of my engagements involve more than one of these. The interesting work usually does.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[#e5e4e0] border border-[#e5e4e0] rounded-lg overflow-hidden">
        {services.map((service) => (
          <div
            key={service.num}
            className="bg-paper p-8 md:p-10 hover:bg-white transition-colors"
          >
            <p className="font-mono text-xs text-accent mb-3">{service.num}</p>
            <h3 className="text-xl font-semibold mb-4 text-ink">{service.title}</h3>
            <p className="text-ink-soft leading-relaxed text-[15px]">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */

const experience = [
  {
    company: "Madecraft",
    role: "Curriculum Author and Integration Specialist",
    dates: "Mar 2026 — Present",
    body: "Authoring certification courses on Workday, ServiceNow, and AI integrations for global e-learning platforms. Translating complex platform work into curriculum that teaches working professionals how to actually do the job.",
  },
  {
    company: "T.D. Williamson",
    role: "Senior Applications Analyst",
    dates: "Apr 2021 — Apr 2026",
    body: "Owned the Workday HCM platform and served as primary ServiceNow developer for a global pipeline services manufacturer. Built and maintained integrations across Workday, ServiceNow, Active Directory, Microsoft Dynamics 365, Office 365, and benefits providers. Implemented ServiceNow agentic AI capabilities and introduced AI-assisted development tooling across the team.",
  },
  {
    company: "Helmerich and Payne",
    role: "Senior Applications Systems Analyst, HRIS",
    dates: "Jul 2019 — Apr 2021",
    body: "Led the technical workstream for a full Workday re-implementation across HCM, Payroll, and Learning at one of the largest U.S. land drilling contractors. Replaced a heavily customized legacy environment with a clean configuration aligned to current business processes.",
  },
  {
    company: "T.D. Williamson",
    role: "Application Analyst",
    dates: "Sep 2015 — Jul 2019",
    body: "Stood up the ServiceNow platform from initial rollout. Led the 2017 Workday Payroll go-live transitioning the company off ADP Payforce, including benefits vendor integrations, time clock deployments, and parallel payroll testing. Earned ITIL Foundation certification.",
  },
  {
    company: "Helmerich and Payne",
    role: "Applications Systems Analyst",
    dates: "Jan 2014 — Sep 2015",
    body: "First role out of college. Managed the TabWare asset management system integrated with Microsoft Dynamics ERP. Built BizTalk integrations supporting Workday, Kronos, payroll, and Active Directory.",
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-[#e5e4e0]">
      <div className="grid md:grid-cols-12 gap-10 mb-12">
        <div className="md:col-span-3">
          <p className="section-label">Experience</p>
        </div>
        <div className="md:col-span-9 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
            A condensed timeline.
          </h2>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Twelve years across two industries (oil and gas, manufacturing) and two
            specializations (HRIS and platform development) at companies headquartered in Tulsa.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3"></div>
        <div className="md:col-span-9 max-w-[760px]">
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li key={i} className="grid grid-cols-12 gap-4 md:gap-8">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-xs text-ink-soft">{job.dates}</p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <p className="font-semibold text-ink mb-0.5">{job.company}</p>
                  <p className="text-accent text-[15px] mb-3 italic">{job.role}</p>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{job.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 pt-8 border-t border-[#e5e4e0]">
            <p className="text-ink-soft text-[15px] mb-4">
              Education: Oklahoma State University, B.S. Management Science and Information Systems, December 2012.
            </p>
            <a
              href="https://www.linkedin.com/in/michaelmitchell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink font-medium link-underline"
            >
              For the full work history, connect on LinkedIn
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PASSIONS -------------------- */

const passions = [
  {
    title: "Aviation",
    body: "I'm not the one in the cockpit, but I love being in the air. I have friends and family who fly, and some of my favorite weekends start with a small plane and end somewhere new. There's something about general aviation that crosses over into how I think about engineering. Pre-flight checklists, system redundancy, real consequences for sloppy thinking.",
  },
  {
    title: "Travel",
    body: "The U.S. and abroad. New cities, new food, the feeling of figuring out a place from the ground up. Travel is the cheapest way I know to put myself in beginner mode and remember that the world is bigger than the project I'm working on.",
  },
  {
    title: "Roller Coasters and Engineering",
    body: "I'm a roller coaster guy. The mechanical elegance, the structural engineering, the precision. I'll plan a trip around a park. There's a real engineering thrill in something that's been designed to hurl you through space at the edge of safety, repeatedly, for thousands of people a day, without failing.",
  },
  {
    title: "Space",
    body: "SpaceX, the new space race, the engineering problems we're solving in real time. I follow it the way some people follow sports. The combination of long-horizon ambition and ruthless iteration is my favorite kind of problem-solving to watch.",
  },
];

function Passions() {
  return (
    <section className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-[#e5e4e0]">
      <div className="grid md:grid-cols-12 gap-10 mb-12">
        <div className="md:col-span-3">
          <p className="section-label">Outside the platform</p>
        </div>
        <div className="md:col-span-9 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
            What I'm into when I'm off the keyboard.
          </h2>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            A few things that keep me curious.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3"></div>
        <div className="md:col-span-9">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 max-w-[760px]">
            {passions.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-ink mb-3">{p.title}</h3>
                <p className="text-ink-soft leading-relaxed text-[15px]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Something went wrong");
      }

      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-[#e5e4e0]">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="section-label">Get in touch</p>
        </div>
        <div className="md:col-span-9 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
            Let's talk about your project.
          </h2>
          <p className="text-ink-soft text-[17px] leading-relaxed mb-10">
            I'm currently taking on consulting and contract engagements. The best way to start
            a conversation is the form below. If we're a fit, I'll get back to you within one
            business day.
          </p>

          {status === "sent" ? (
            <div className="border border-[#e5e4e0] bg-white rounded-lg p-8 text-center">
              <p className="text-ink font-semibold mb-2">Message sent.</p>
              <p className="text-ink-soft text-[15px]">
                Thanks for reaching out. I'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Company" name="company" type="text" />
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  What are you working on?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white border border-[#e5e4e0] rounded-md px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-700">
                  Couldn't send the message. {errorMsg} You can also email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-ink text-paper px-6 py-3 rounded-md hover:bg-ink-soft transition-colors font-medium disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-[#e5e4e0] space-y-2 text-[15px] text-ink-soft">
            <p>
              Prefer email? Reach me at{" "}
            <a href="mailto:michael.mitche@gmail.com" className="text-ink link-underline">
  michael.mitche@gmail.com
</a>
            </p>
            <p>
              On LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/michaelmitche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink link-underline"
              >
                linkedin.com/in/michaelmitchell
              </a>
            </p>
            <p>Based in Tulsa, Oklahoma. Available remote or hybrid.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-white border border-[#e5e4e0] rounded-md px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="max-w-site mx-auto px-6 md:px-10 py-10 border-t border-[#e5e4e0]">
      <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-ink-soft">
        <p>© 2026 Michael Mitchell. Built in Tulsa.</p>
      </div>
    </footer>
  );
}
