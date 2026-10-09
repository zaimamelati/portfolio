export default function VideoBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden md:block"
    >
      <video
        className="h-full w-full object-cover"
        src="/VideoBackground.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-white/700 dark:bg-black/60" />
    </div>
  );
}