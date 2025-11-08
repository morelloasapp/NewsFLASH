import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LiveUpdate {
  id: string;
  content: string;
  timestamp: string;
}

interface LiveUpdatesTimelineProps {
  updates: LiveUpdate[];
  title?: string;
}

export default function LiveUpdatesTimeline({ 
  updates, 
  title = "Actualizări Live" 
}: LiveUpdatesTimelineProps) {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long' });
  };

  return (
    <Card className="border-card-border" data-testid="card-live-updates">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 relative">
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-border" />
          
          {updates.map((update, index) => (
            <div key={update.id} className="relative pl-8" data-testid={`update-${update.id}`}>
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md" />
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="font-semibold">{formatTime(update.timestamp)}</span>
                  <span>•</span>
                  <span>{formatDate(update.timestamp)}</span>
                  {index === 0 && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-semibold">
                      Nou
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed" data-testid={`text-update-content-${update.id}`}>
                  {update.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
