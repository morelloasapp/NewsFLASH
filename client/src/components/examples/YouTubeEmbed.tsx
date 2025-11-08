import YouTubeEmbed from '../YouTubeEmbed';
import { siteConfig } from '@shared/config';

export default function YouTubeEmbedExample() {
  return (
    <div className="p-6 bg-background">
      <YouTubeEmbed videoId={siteConfig.youtubeVideoId} title="Știri Live" />
    </div>
  );
}
