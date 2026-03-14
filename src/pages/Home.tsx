import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  ClipboardList,
  Compass,
  Code2,
  TestTubeDiagonal,
  Rocket,
  Headset,
  Star,
  Cpu,
  TrendingUp,
  Layers,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import SectionHeading from "@/components/SectionHeading";

const founders = [
  {
    name: "Hamid Ali",
    role: "Founder & Head of Operations",
    desc: "Responsible for operations, project execution, and team management.",
    image: "/images/hamid-ali.png",
  },
  // {
  //   name: "Awais Qarni",
  //   role: "Co-Founder & Head of Business Development",
  //   desc: "Responsible for partnerships, client communication, and business growth.",
  //   image: "/images/awais-qarni.png",
  // },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    desc: "We deeply understand your goals, challenges, and target audience.",
  },
  {
    icon: Compass,
    title: "Strategy & Planning",
    desc: "We craft a tailored roadmap with clear milestones and deliverables.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    desc: "Our team builds your solution with modern tools and best practices.",
  },
  {
    icon: TestTubeDiagonal,
    title: "Testing & Optimization",
    desc: "Rigorous QA ensures performance, security, and reliability.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "We launch your product with zero downtime and full monitoring.",
  },
  {
    icon: Headset,
    title: "Continuous Support",
    desc: "Ongoing maintenance, updates, and dedicated support post-launch.",
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Gryvex Solutions transformed our business with their AI-powered analytics platform. Exceptional work!",
  },
  {
    name: "Ahmed Khan",
    rating: 5,
    review:
      "Their web development team delivered a stunning e-commerce site ahead of schedule. Highly recommended!",
  },
  {
    name: "Emily Chen",
    rating: 4,
    review:
      "Professional team with great communication. Our mobile app exceeded expectations.",
  },
  {
    name: "Michael Ross",
    rating: 5,
    review:
      "The SEO optimization service doubled our organic traffic in just 3 months. Incredible results!",
  },
  {
    name: "Fatima Zahra",
    rating: 5,
    review:
      "Outstanding branding work. They captured our vision perfectly and elevated our brand identity.",
  },
  {
    name: "David Park",
    rating: 4,
    review:
      "Reliable, creative, and technically skilled. Gryvex is our go-to digital partner.",
  },
  {
    name: "Lisa Wang",
    rating: 5,
    review:
      "Their AI chatbot solution reduced our support costs by 40%. Game-changing technology!",
  },
  {
    name: "Omar Siddiqui",
    rating: 5,
    review:
      "From concept to deployment, the team was phenomenal. Our startup wouldn't be here without them.",
  },
];

const floatingIcons = [
  { icon: Cpu, x: "10%", y: "20%", delay: 0 },
  { icon: TrendingUp, x: "85%", y: "15%", delay: 0.5 },
  { icon: Layers, x: "75%", y: "70%", delay: 1 },
  { icon: Sparkles, x: "15%", y: "75%", delay: 1.5 },
  { icon: Zap, x: "50%", y: "10%", delay: 0.8 },
  { icon: Globe, x: "90%", y: "50%", delay: 1.2 },
];

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ParticlesBackground />

      {/* Floating background icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-[1] text-primary/10"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon size={48} />
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
        >
          <Sparkles size={14} /> Innovating the Future with AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl font-bold md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">Gryvex</span>
          <br />
          <span className="text-foreground">Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Empowering businesses with cutting-edge{" "}
          <span className="text-primary font-medium">AI Development</span>,{" "}
          <span className="text-accent font-medium">Digital Solutions</span>,
          and <span className="text-primary font-medium">Innovation</span> for
          the modern era.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg gradient-bg px-8 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-lg shadow-primary/25"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* About */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-accent/5 blur-[100px]" />
      <div className="container mx-auto px-6 relative">
        <SectionHeading title="About Us" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-muted-foreground leading-relaxed text-lg"
        >
          Gryvex Solutions is a modern digital services company providing
          cutting-edge AI development, software solutions, and digital marketing
          services. We help businesses of all sizes harness the power of
          technology to grow, innovate, and succeed in today's digital
          landscape.
        </motion.p>
      </div>
    </section>

    {/* Co-Founders */}
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Meet Our CEO & Founder"
          subtitle="The visionarie behind Gryvex Solutions"
        />
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ y: -8 }}
            className="gradient-border rounded-2xl p-8 text-center"
          >
            <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-2 border-primary/30">
              <img
                src={f.image}
                alt={f.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {f.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">{f.role}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Process */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <SectionHeading
          title="Our Work Process"
          subtitle="A proven methodology that delivers results every time"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="gradient-border rounded-2xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-primary-foreground font-display font-bold text-lg">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Client Reviews - Marquee */}
    <section className="py-24 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <SectionHeading
          title="Client Reviews"
          subtitle="What our clients say about us"
        />
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div
          className="flex animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="mx-3 w-80 shrink-0 gradient-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={
                      si < r.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{r.review}"
              </p>
              <p className="font-display text-sm font-semibold text-foreground">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Home;
