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
      this.mountPoint = document.createElement("div");
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
