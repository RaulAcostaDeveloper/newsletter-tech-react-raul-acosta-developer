import React from "react";
import ReactDOM from "react-dom/client";
import { NewsletterTechReactRaulAcostaDeveloper } from "../components/newsletter-tech-react-raul-acosta-developer/newsletter-tech-react-raul-acosta-developer";

class NewsletterWidgetElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement | null = null;
  private shadow: ShadowRoot | null = null;

  static get observedAttributes() {
    return ["api-key", "disabled"];
  }

  connectedCallback() {
    this.mount();
  }

  attributeChangedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
  }

  private mount() {
    const apiKey = this.getAttribute("api-key") ?? undefined;
    const disabled = this.hasAttribute("disabled");

    if (!this.shadow) {
      this.shadow = this.attachShadow({ mode: "open" });

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://pub-a635f9262d484fcb9e195c1ee4daa37c.r2.dev/1.0.0/newsletter-tech-react-raul-acosta-developer.css";

      this.mountPoint = document.createElement("div");

      this.shadow.appendChild(link);
      this.shadow.appendChild(this.mountPoint);

      this.root = ReactDOM.createRoot(this.mountPoint);
    }

    this.root!.render(
      <React.StrictMode>
        <NewsletterTechReactRaulAcostaDeveloper
          apiKey={apiKey}
          disabled={disabled}
        />
      </React.StrictMode>,
    );
  }
}

const tagName = "newsletter-tech-react-raul-acosta-developer";

if (!customElements.get(tagName)) {
  customElements.define(tagName, NewsletterWidgetElement);
}
