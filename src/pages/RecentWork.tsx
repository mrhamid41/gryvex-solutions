import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    name: "AI Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Built a real-time AI-powered analytics dashboard for a fintech startup, featuring predictive insights and automated reporting.",
    client: "FinCore Technologies",
    rating: 5,
  },
  {
    name: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Developed a full-stack e-commerce platform with AI product recommendations, payment integration, and inventory management.",
    client: "ShopVibe",
    rating: 5,
  },
  {
    name: "Healthcare Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    description: "Cross-platform mobile app for patient management, appointment booking, and telemedicine consultations.",
    client: "MediCare Plus",
    rating: 4,
  },
  {
    name: "Brand Identity Redesign",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Complete brand overhaul including logo, color system, typography, and marketing collateral for a growing tech startup.",
    client: "NexaWave",
    rating: 5,
  },
  {
    name: "SEO & Marketing Campaign",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Comprehensive SEO strategy and digital marketing campaign that increased organic traffic by 180% in 4 months.",
    client: "GreenLeaf Organics",
    rating: 5,
  },
  {
    name: "AI Chatbot Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    description: "Custom AI chatbot with natural language processing for customer support, reducing response time by 60%.",
    client: "TechServe Inc.",
    rating: 4,
  },
];

const RecentWork = () => (
  <main className="pt-24 pb-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Recent Work" subtitle="A showcase of our latest projects and client success stories" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="gradient-border rounded-2xl overflow-hidden group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-primary">
                <ExternalLink size={14} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-xs font-medium text-primary">{p.client}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={si < p.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
                  />
                ))}
                <span className="ml-2 text-xs text-muted-foreground">{p.rating}.0</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default RecentWork;
