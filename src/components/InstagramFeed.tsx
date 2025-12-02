import React from "react";

type Props = {};

const InstagramFeed: React.FC<Props> = () => {
  const widgetUrl =
	(import.meta.env.VITE_IG_WIDGET_URL as string | undefined) ||
	"https://snapwidget.com/embed/1113816";
  const instaUrl = "https://www.instagram.com/stevenslodge/";

  // Single compact section showing latest posts (via SnapWidget iframe) or fallback thumbnails.
  if (widgetUrl) {
	return (
	  <div className="w-full flex justify-center">
		<div className="w-full max-w-3xl overflow-hidden rounded-md shadow-sm h-40 sm:h-44 md:h-48 lg:h-56">
		  <iframe
			src={widgetUrl}
			title="Instagram feed"
			className="w-full h-full border-0"
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			allowTransparency={true}
			frameBorder={0}
			scrolling="no"
		  />
		</div>
	  </div>
	);
  }

  return (
	<div className="w-full flex justify-center">
	  <div className="w-full max-w-3xl grid grid-cols-3 gap-2">
		{[1, 2, 3].map((i) => (
		  <a
			key={i}
			href={instaUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="block bg-muted rounded-md h-40 flex items-center justify-center"
		  >
			<span className="text-muted-foreground">Post {i}</span>
		  </a>
		))}
	  </div>
	</div>
  );
};

export default InstagramFeed;


