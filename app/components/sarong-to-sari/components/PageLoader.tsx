/**
 * Shown in place of a microsite page while it is on its way: a ring whose running
 * arc is the Sarong to Sari maroon on a light grey track. It waits 300ms before
 * fading in, so quick page changes never flash it. Visitors who ask for reduced
 * motion get a slower turn.
 */
const PageLoader = () => (
  <div role="status" aria-live="polite" className="flex min-h-[60vh] items-center justify-center">
    <div className="animate-in fade-in fill-mode-both delay-300 duration-300">
      <svg
        viewBox="0 0 44 44"
        aria-hidden="true"
        className="h-11 w-11 animate-spin motion-reduce:[animation-duration:2.5s]"
      >
        {/* The track, then the running arc: a quarter of the ring, with rounded ends. */}
        <circle cx="22" cy="22" r="19" fill="none" stroke="#e2e2e2" strokeWidth="3" />
        <circle
          cx="22"
          cy="22"
          r="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="30 120"
          className="text-s2s-maroon"
        />
      </svg>
    </div>
    <span className="sr-only">Loading…</span>
  </div>
);

export default PageLoader;
