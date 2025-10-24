import { Card, CardContent } from "@/components/ui/card";

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description?: string;
}

export function VideoSection({ videoUrl, title, description }: VideoSectionProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-3xl font-bold text-foreground" data-testid="text-video-section-title">
          Video
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              data-testid="iframe-video"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-video-title">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground" data-testid="text-video-description">
                {description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
