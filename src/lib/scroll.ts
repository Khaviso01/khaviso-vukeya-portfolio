import type { MouseEvent } from "react";

/**
 * Handles clicks on in-page "#section" links manually instead of letting
 * the browser perform native anchor navigation. Some embedded preview
 * environments (sandboxed iframes used by tools like StackBlitz/CodeSandbox)
 * intercept native hash navigation and force it into a new tab — calling
 * preventDefault and scrolling manually avoids that entirely.
 */
export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (!href.startsWith("#")) return;

  event.preventDefault();

  const id = href.slice(1);
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (window.history?.pushState) {
    window.history.pushState(null, "", href);
  } else {
    window.location.hash = href;
  }
}
