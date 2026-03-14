import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.43-.01 6.85-.01 10.28 0 4.05-4.3 7.23-8.36 6.17-2.99-.78-5.14-3.95-4.61-7.03.36-2.43 2.31-4.51 4.79-4.84.2-.03.41-.05.61-.05v4.08c-.73.08-1.5.38-1.92 1.01-.64.83-.55 2.13.23 2.85.87.88 2.51.72 3.1-.38.25-.45.31-1.02.31-1.55-.02-5.46-.01-10.92-.02-16.37-.01-.16-.01-.33-.02-.48z" />
  </svg>
);

const socials = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gryvexsolutions?igsh=dDdpNWowcmRqYnFi",
    icon: Instagram,
  },
  { label: "X", href: "#", icon: XIcon },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@gryvex.solutions?_r=1&_t=ZS-94a8brmcAEP",
    icon: TikTokIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585057153144&rdid=zKNyAqiabXbfSETW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HwSPmqu4H%2F#",
    icon: Facebook,
  },
  { label: "YouTube", href: "#", icon: Youtube },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/gryvex@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      toast.success("Message sent successfully!");
      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="We'd love to hear about your project"
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border rounded-2xl p-8 space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Name
              </label>
              <Input
                name="name"
                placeholder="Your name"
                required
                className="bg-secondary border-border"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-secondary border-border"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Message
              </label>
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                required
                rows={5}
                className="bg-secondary border-border"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full gradient-bg border-0 text-primary-foreground"
            >
              {sending ? "Sending..." : "Send Message"} <Send size={16} />
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="gradient-border rounded-2xl p-8 space-y-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Contact Information
              </h3>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />{" "}
                gryvexsolutions@gmail.com
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" /> 03094945097
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:gradient-bg hover:text-primary-foreground"
                      aria-label={s.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
