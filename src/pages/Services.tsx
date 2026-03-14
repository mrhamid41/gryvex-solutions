import { motion } from "framer-motion";
import {
  Brain,
  Megaphone,
  Globe,
  Smartphone,
  Palette,
  Film,
  Search,
  ShoppingCart,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Brain, title: "AI Development & Software Solutions", desc: "Custom AI models, automation tools, and intelligent software tailored to your business needs." },
  { icon: Megaphone, title: "Branding & Digital Marketing", desc: "Strategic branding, social media management, and targeted marketing campaigns." },
  { icon: Globe, title: "Web Development", desc: "Responsive, fast, and modern websites built with cutting-edge technologies." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile applications with seamless user experiences." },
  { icon: Palette, title: "Graphic Designing", desc: "Eye-catching visuals, logos, and design assets that elevate your brand identity." },
  { icon: Film, title: "Image, Video & Audio Editing", desc: "Professional media editing for marketing content, ads, and social media." },
  { icon: Search, title: "SEO Optimization", desc: "Data-driven SEO strategies to boost your search rankings and organic traffic." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "End-to-end e-commerce platforms with payment integration and inventory management." },
];

const Services = () => (
  <main className="pt-24 pb-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Our Services" subtitle="Comprehensive digital solutions to accelerate your business growth" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="gradient-border rounded-2xl p-6 flex flex-col items-start"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
              <s.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Services;
