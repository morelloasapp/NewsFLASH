import WhatsAppButton from '../WhatsAppButton';
import { siteConfig } from '@shared/config';

export default function WhatsAppButtonExample() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-background to-muted flex items-center justify-center">
      <p className="text-muted-foreground text-center">
        Floating WhatsApp button in bottom-right corner →
      </p>
      <WhatsAppButton link={siteConfig.whatsappLink} />
    </div>
  );
}
