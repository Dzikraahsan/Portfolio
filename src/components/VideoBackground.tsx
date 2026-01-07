// import { useRef, useEffect } from "react";

// const VideoBackground = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const rafRef = useRef<number | null>(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     let direction: 1 | -1 = 1; // 1 = forward, -1 = reverse
//     const FPS = 30; // target fps visual
//     const STEP = 1 / FPS; // detik per frame

//     const animate = () => {
//       if (!video.duration) {
//         rafRef.current = requestAnimationFrame(animate);
//         return;
//       }

//       if (direction === 1) {
//         video.currentTime += STEP;
//         if (video.currentTime >= video.duration - STEP) {
//           direction = -1;
//         }
//       } else {
//         video.currentTime -= STEP;
//         if (video.currentTime <= STEP) {
//           direction = 1;
//         }
//       }

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     const onReady = () => {
//       video.pause(); // ⬅️ PENTING: matikan playback native
//       video.currentTime = 0;
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     video.addEventListener("loadedmetadata", onReady);

//     return () => {
//       video.removeEventListener("loadedmetadata", onReady);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       className="fixed inset-0 w-full h-full object-cover -z-10"
//       src="/videos/video-background2.mp4"
//       muted
//       playsInline
//       preload="auto"
//     />
//   );
// };

// export default VideoBackground;
