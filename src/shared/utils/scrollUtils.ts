export function scrollToSection(section: React.RefObject<HTMLElement>) {
  const yOffset = -72;
  const element = section.current;
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
