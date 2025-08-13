import React from 'react'
import Video from './Video';

export default async function VideoPage({
    params,
}: {
    params: { videoId: string }
}) {
    const { videoId } = params;

    return (
        <Video videoId={videoId} />
    )
}
