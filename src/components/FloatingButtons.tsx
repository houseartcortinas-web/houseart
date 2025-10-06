import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-[#E4405F] hover:bg-[#E4405F]/90 shadow-lg"
        asChild
      >
        <a
          href="https://www.instagram.com/houseart_cortinas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
      </Button>

      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg"
        asChild
      >
        <a
          href="https://wa.me/5547999090328"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
