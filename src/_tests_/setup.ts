import "@testing-library/jest-dom/vitest";
import "../i18n";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: () => ({
    matches: false,
    media: "",
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false
  })
});

class IntersectionObserverMock {
  observe = () => undefined;

  unobserve = () => undefined;

  disconnect = () => undefined;
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock
});
