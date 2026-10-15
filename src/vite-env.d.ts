/// <reference types="vite/client" />

interface Window {
  fbq?: (eventType: "track", eventName: "Lead") => void;
}
