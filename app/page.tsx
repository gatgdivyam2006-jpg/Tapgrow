"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  Handshake,
  LineChart,
  MapPin,
  Scale,
  Share2,
  Sparkles,
  SquarePen,
  Stethoscope,
  UserRoundCheck
} from "lucide-react";

const assets = {
  logo: "https://www.image2url.com/r2/default/images/1780584977212-940f58ce-ff8f-4a97-9439-dc119b20cc56.png",
  collection:
    "https://www.image2url.com/r2/default/images/1780585095316-cf37b68c-1588-474b-bc3e-07923ced0a34.jpg",
  review:
    "https://www.image2url.com/r2/default/images/1780585196668-d9efcd94-108e-44ed-b0e2-c3ebe6d9f35d.png",
  student:
    "https://www.image2url.com/r2/default/images/1780585453844-667dd21c-34d8-4f5d-9927-85f21d71d147.png",
  doctor:
    "https://www.image2url.com/r2/default/images/1780585644629-b8a328f6-f310-4173-bdb8-790f317a6b39.png",
  lawyer:
    "https://www.image2url.com/r2/default/images/1780586013035-2d96eeda-345b-4b67-96c7-03267a842a28.png",
  engineer:
    "https://www.image2url.com/r2/default/images/1780586201745-4c16c214-49ca-4f13-8a40-7128fd9c4eaf.png",
  marketing:
    "https://www.image2url.com/r2/default/images/1780586451726-f4d9ad8c-fe0b-4f67-9935-9fb19e4f893d.png",
  finance:
    "https://www.image2url.com/r2/default/images/1780586564207-02b636f0-9375-4a8b-bd32-0f03c0f6f4b1.png"
};

const stats = [
  { value: "6+", label: "Professional Templates", icon: BriefcaseBusiness },
  { value: "100%", label: "Customizable", icon: SquarePen },
  { value: "1 Tap", label: "Profile Sharing", icon: Share2 },
  { value: "24/7", label: "Digital Presence", icon: Clock3 }
];

const profiles = [
  {
    title: "Student Profile",
    description:
      "Perfect for students, interns and freshers looking to share resumes, portfolios, LinkedIn profiles and achievements through one smart profile.",
    image: assets.student,
    icon: GraduationCap,
    tint: "from-emerald-50 to-slate-50"
  },
  {
    title: "Doctor Profile",
    description:
      "Enable patients to access appointment details, clinic information, contact numbers and directions instantly.",
    image: assets.doctor,
    icon: Stethoscope,
    tint: "from-sky-50 to-emerald-50"
  },
  {
    title: "Lawyer Profile",
    description:
      "Showcase expertise, consultation information, office details and professional credentials in one place.",
    image: assets.lawyer,
    icon: Scale,
    tint: "from-slate-50 to-emerald-50"
  },
  {
    title: "Engineer Profile",
    description:
      "Share projects, portfolios, GitHub repositories, LinkedIn profiles and technical expertise effortlessly.",
    image: assets.engineer,
    icon: Sparkles,
    tint: "from-emerald-50 to-cyan-50"
  },
  {
    title: "Marketing Manager Profile",
    description:
      "Present campaigns, achievements, portfolio links, contact details and professional profiles beautifully.",
    image: assets.marketing,
    icon: LineChart,
    tint: "from-slate-50 to-green-50"
  },
  {
    title: "Financial Advisor Profile",
    description:
      "Build trust by sharing services, certifications, contact information and appointment options through a professional digital profile.",
    image: assets.finance,
    icon: UserRoundCheck,
    tint: "from-emerald-50 to-sky-50"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function scrollToShowcase() {
  document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-navy">
      <section className="relative min-h-screen px-5 pb-20 pt-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_10%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_12%_52%,rgba(226,232,240,0.7),transparent_34%)]" />
        <div className="premium-grid absolute inset-x-0 top-16 -z-10 h-[560px] opacity-70" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-2">
          <Image
            src={assets.logo}
            alt="TapGrow"
            width={184}
            height={58}
            priority
            className="h-12 w-auto object-contain"
          />
          <button
            onClick={scrollToShowcase}
            className="hidden items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:border-emerald hover:text-emerald sm:flex"
          >
            View demos
            <ArrowRight size={16} />
          </button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-12 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:pt-24">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="min-w-0 max-w-[21.5rem] sm:max-w-none"
          >
            <h1 className="max-w-[21.5rem] text-[2.85rem] font-semibold leading-[1.04] tracking-normal text-navy min-[420px]:text-5xl sm:max-w-2xl sm:text-6xl lg:text-7xl">
              See TapGrow <span className="block">In Action</span>
            </h1>
            <p className="mt-7 max-w-[20.5rem] text-lg leading-8 text-slate-600 sm:max-w-xl sm:text-xl">
              Explore how students, professionals, creators and businesses use
              TapGrow digital profiles to connect, share and grow.
            </p>
            <button
              onClick={scrollToShowcase}
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-emerald px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald/95 focus:outline-none focus:ring-4 focus:ring-emerald/20"
            >
              Explore Profiles
              <ArrowRight size={19} />
            </button>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto min-h-[500px] w-full max-w-[21.5rem] min-w-0 sm:max-w-none sm:min-h-[520px]"
          >
            <HeroDemoSlider />
            <div className="depth-card absolute bottom-12 left-12 rounded-[28px] border border-line bg-white/95 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.16)] backdrop-blur sm:left-auto sm:right-8 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                  <Handshake size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">One smart link</p>
                  <p className="text-xs text-slate-500">Profile, contact, reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="depth-card mx-auto grid max-w-7xl grid-cols-2 gap-0 overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_28px_80px_rgba(15,23,42,0.10)] lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 p-6 sm:p-8 ${
                  index !== stats.length - 1 ? "lg:border-r lg:border-line" : ""
                } ${index < 2 ? "border-b border-line lg:border-b-0" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-normal sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-5 text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>

      <section id="showcase" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-semibold tracking-normal text-navy sm:text-5xl">
              Professional Profile Showcase
            </h2>
          </motion.div>

          <div className="mt-14 space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="depth-card overflow-hidden rounded-[30px] border border-line bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-3xl font-semibold tracking-normal text-navy">
                    Full Demo
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-slate-600">
                    Swipe through every TapGrow profile demo in one premium
                    showcase.
                  </p>
                </div>
                <p className="text-sm font-semibold text-emerald">Slide to explore</p>
              </div>
              <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-2">
                {profiles.map((profile) => (
                  <div
                    key={`full-${profile.title}`}
                    className="depth-card glass-shine min-w-[300px] snap-start overflow-hidden rounded-[24px] border border-line bg-white sm:min-w-[440px]"
                  >
                    <div className="flex min-h-[360px] items-center justify-center bg-mist p-4">
                      <Image
                        src={profile.image}
                        alt={`${profile.title} full demo`}
                        width={900}
                        height={1100}
                        sizes="(min-width: 640px) 440px, 300px"
                        className="max-h-[560px] w-full rounded-[18px] object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-lg font-semibold text-navy">
                        {profile.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>

            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              const reverse = index % 2 === 1;
              return (
                <motion.article
                  key={profile.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="depth-card grid overflow-hidden rounded-[30px] border border-line bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] lg:grid-cols-2"
                >
                  <div
                    className={`flex min-h-[460px] items-center justify-center bg-gradient-to-br p-5 ${profile.tint} ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={profile.image}
                      alt={`${profile.title} demo`}
                      width={1100}
                      height={1300}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="max-h-[680px] w-full rounded-[24px] object-contain shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-h-[360px] flex-col justify-center p-8 sm:p-12 lg:p-16">
                    <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                      <Icon size={28} />
                    </span>
                    <h3 className="text-3xl font-semibold tracking-normal text-navy sm:text-4xl">
                      {profile.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                      {profile.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8">
          <FeatureBand
            title="TapGrow Collections"
            description="Specially curated bundles designed for students, professionals, businesses and couples."
            image={assets.collection}
            icon={<BriefcaseBusiness size={26} />}
          />
          <FeatureBand
            title="Grow Through Reviews"
            description="TapReview helps businesses collect reviews, build credibility and improve local visibility with a simple tap."
            image={assets.review}
            icon={<Sparkles size={26} />}
            reverse
          />
        </div>
      </section>

      <section className="px-5 pb-24 pt-16 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="depth-card relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-navy px-6 py-20 text-center text-white shadow-[0_34px_100px_rgba(15,23,42,0.24)] sm:px-12"
        >
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-emerald/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-emerald/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald">
              <MapPin size={24} />
            </div>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Ready To Build Your Digital Identity?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you&apos;re a student, professional or business owner, TapGrow
              helps you connect smarter.
            </p>
            <a
              href="https://tappgroww.netlify.app/"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-emerald px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald/95 focus:outline-none focus:ring-4 focus:ring-emerald/30"
            >
              Explore TapGrow
              <ArrowRight size={19} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function HeroDemoSlider() {
  return (
    <div className="depth-stage relative mx-auto max-w-[21.5rem] sm:max-w-[680px]">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="no-scrollbar flex snap-x gap-5 overflow-x-auto rounded-[42px] px-1 pb-6 pt-2"
      >
        {profiles.map((profile, index) => (
          <div
            key={`hero-${profile.title}`}
            className={`depth-card glass-shine min-w-[292px] snap-center overflow-hidden rounded-[38px] border border-slate-200 bg-white p-3 shadow-[0_34px_90px_rgba(15,23,42,0.18)] sm:min-w-[330px] ${
              index === 0 ? "ml-0" : ""
            }`}
          >
            <Image
              src={profile.image}
              alt={`${profile.title} slidable demo`}
              width={540}
              height={920}
              priority={index === 0}
              className="aspect-[9/16] rounded-[30px] object-cover object-top"
            />
            <div className="flex items-center justify-between px-3 py-4">
              <p className="text-sm font-semibold text-navy">{profile.title}</p>
              <span className="text-xs font-semibold text-emerald">
                {index + 1}/6
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

function FeatureBand({
  title,
  description,
  image,
  icon,
  reverse = false
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65 }}
      className="depth-card grid overflow-hidden rounded-[32px] border border-line bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] lg:grid-cols-[0.78fr_1.22fr]"
    >
      <div
        className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
          {icon}
        </span>
        <h2 className="text-3xl font-semibold tracking-normal text-navy sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
      <div className="flex min-h-[460px] items-center justify-center bg-mist p-5">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={900}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="max-h-[620px] w-full rounded-[24px] object-contain shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
          loading="lazy"
        />
      </div>
    </motion.article>
  );
}
