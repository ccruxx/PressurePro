import { useLayoutEffect, useRef } from "react";
import { useLocation } from "wouter";

/**
 * wouter does not reset scroll position on navigation, so following a link from
 * halfway down one page dropped you halfway down the next one.
 *
 * Three things are needed to make this stick:
 *  - scrollRestoration "manual", or the browser puts you back where you were
 *  - useLayoutEffect, so the reset happens before paint rather than after
 *  - a second pass on the next frame, because images and lazy content can grow
 *    the document after the first scroll and drag the viewport with them
 *
 * Skipped when the URL carries a hash so in-page anchors still work.
 */
export default function ScrollToTop() {
  const [location] = useLocation();
  const first = useRef(true);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    // Don't fight the browser on the very first paint of a deep link.
    if (first.current) {
      first.current = false;
      // Still resolve a hash on first paint; just don't force the top.
      if (!window.location.hash) return;
    }
    // A hash deep-link (/#gallery from another page) has to wait for the
    // target to exist - on first paint of an SPA route it does not yet.
    const hash = window.location.hash.slice(1);
    if (hash) {
      let tries = 0;
      const find = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        } else if (tries++ < 20) {
          requestAnimationFrame(find);
        }
      };
      find();
      return;
    }

    // Images and lazy content keep growing the document for a few hundred
    // milliseconds after the route swaps, and that can drag the viewport back
    // down. Hold the top until the user scrolls or the window closes.
    let active = true;
    const release = () => {
      active = false;
    };
    const toTop = () => {
      if (active) window.scrollTo(0, 0);
    };
    toTop();
    const timers = [0, 50, 150, 300, 500].map((d) => window.setTimeout(toTop, d));
    window.addEventListener("wheel", release, { passive: true, once: true });
    window.addEventListener("touchstart", release, { passive: true, once: true });
    window.addEventListener("keydown", release, { once: true });

    return () => {
      active = false;
      timers.forEach(window.clearTimeout);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      window.removeEventListener("keydown", release);
    };
  }, [location]);

  return null;
}
