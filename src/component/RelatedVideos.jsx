import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return "Loading...";
  if (error) return `somethings wrong🫤`;

  return (
    <>
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
