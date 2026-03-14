import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/923094945097"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform hover:scale-110"
    aria-label="Contact via WhatsApp"
  >
    <img src="/whatsapp.png" className="h-42" />
  </a>
);

export default WhatsAppButton;
