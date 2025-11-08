interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Video" }: YouTubeEmbedProps) {
  return (
    <div className="w-full max-w-4xl mx-auto" data-testid="container-youtube">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-card">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          data-testid="iframe-youtube"
        />
      </div>
    </div>
  );
}
