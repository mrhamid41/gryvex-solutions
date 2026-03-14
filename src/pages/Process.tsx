import { motion } from "framer-motion";
import {
  ClipboardList,
  Compass,
  Code2,
  TestTubeDiagonal,
  Rocket,
  Headset,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "We deeply understand your goals, challenges, and target audience." },
  { icon: Compass, title: "Strategy & Planning", desc: "We craft a tailored roadmap with clear milestones and deliverables." },
  { icon: Code2, title: "Design & Development", desc: "Our team builds your solution with modern tools and best practices." },
  { icon: TestTubeDiagonal, title: "Testing & Optimization", desc: "Rigorous QA ensures performance, security, and reliability." },
  { icon: Rocket, title: "Deployment", desc: "We launch your product with zero downtime and full monitoring." },
  { icon: Headset, title: "Continuous Support", desc: "Ongoing maintenance, updates, and dedicated support post-launch." },
];

const Process = () => (
  <main className="pt-24 pb-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Our Work Process" subtitle="A proven methodology that delivers results every time" />
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-12 flex items-start gap-6 md:w-1/2 ${
              i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 top-3 h-3 w-3 rounded-full gradient-bg md:left-auto md:right-auto md:top-3 md:translate-x-0"
              style={i % 2 === 0 ? { right: "-6px", left: "auto" } : { left: "-6px" }}
            />

            <div className="ml-14 md:ml-0 gradient-border rounded-2xl p-6 w-full">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg gradient-bg">
                <step.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Process;
