"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Badge } from "../ui/Badge";
import { TextReveal } from "../ui/TextReveal";

export function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-28 md:py-40 bg-[var(--bg-main)] border-b border-white/10 dark:border-white/10 light:border-black/10 relative overflow-hidden transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <TextReveal delay={0.1}>
              <Badge label="Cinematic Showcase" variant="emerald" />
            </TextReveal>
            <TextReveal delay={0.2}>
              <h2 className="text-display-section font-light text-current tracking-tight">
                2026 Agency Showreel
              </h2>
            </TextReveal>
          </div>
          <TextReveal delay={0.3}>
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
              [ 4K RESOLUTION • STEREO SOUND ]
            </p>
          </TextReveal>
        </div>

        {/* Video Player Box */}
        <div
          onClick={togglePlay}
          className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-black border border-white/15 cursor-pointer group shadow-2xl premium-card"
          data-cursor="view"
          data-cursor-text={isPlaying ? "PAUSE" : "PLAY"}
        >
          <video
            ref={videoRef}
            src="/videos/showreel.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Overlay Controls Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 flex items-center justify-between gap-4 font-mono text-xs text-white z-20"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#00685B] transition-colors text-white cursor-pointer"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#00685B] transition-colors text-white cursor-pointer"
                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="hidden sm:inline-block font-bold tracking-widest text-[#00685B]">
                ACTIV8 // REEL 2026
              </span>
            </div>

            {/* Video Timeline Progress */}
            <div className="flex-1 max-w-md h-1.5 rounded-full bg-white/20 overflow-hidden mx-4">
              <div
                className="h-full bg-[#00685B] transition-all duration-200 emerald-glow"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#00685B] transition-colors text-white cursor-pointer"
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
