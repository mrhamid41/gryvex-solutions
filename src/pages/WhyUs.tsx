import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Zap,
  Heart,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  { icon: Lightbulb, title: "Innovative AI Solutions", desc: "Leveraging the latest AI technologies to give you a competitive edge." },
  { icon: Users, title: "Professional Team", desc: "Experienced developers, designers, and strategists working together." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile workflows that deliver high-quality results on tight deadlines." },
  { icon: Heart, title: "Client-Focused Approach", desc: "Your satisfaction is our priority — we listen, adapt, and deliver." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Architectures designed to grow with your business needs." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality at competitive rates — maximum value guaranteed." },
];

const WhyUs = () => (
  <main className="pt-24 pb-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Why Choose Us" subtitle="What sets Gryvex Solutions apart from the rest" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="gradient-border rounded-2xl p-8 text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg">
              <s.icon size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default WhyUs;
