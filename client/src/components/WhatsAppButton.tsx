import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  link: string;
}

export default function WhatsAppButton({ link }: WhatsAppButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      data-testid="link-whatsapp"
    >
      <Button
        size="icon"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-2xl hover:scale-110 transition-transform"
        data-testid="button-whatsapp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
}
