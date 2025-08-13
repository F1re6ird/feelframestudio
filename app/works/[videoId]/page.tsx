import React from 'react';
import Video from './Video';

interface VideoPageProps {
  params: {
    videoId: string;
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { videoId } = await params; // ✅ Await before destructuring
  return <Video videoId={videoId} />;
}
