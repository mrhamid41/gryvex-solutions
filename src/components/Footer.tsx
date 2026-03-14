import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container mx-auto px-6">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold gradient-text mb-3">
            Gryvex Solutions
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI Development & Digital Solutions for Modern Businesses. We
            transform ideas into powerful digital experiences.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/recent-work", label: "Recent Work" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: gryvexsolutions@gmail.com</li>
            <li>WhatsApp: +92 324 1765607</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gryvex Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
