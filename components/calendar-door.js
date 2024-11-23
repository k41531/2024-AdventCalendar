class CalendarDoor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["day", "title", "link"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const day = this.getAttribute("day");
        const title = this.getAttribute("title");
        const link = this.getAttribute("link");
        const canOpen = (link !== "undefined");

        if (canOpen && link) {
          this.shadowRoot.addEventListener('click', () => {
              window.location.href = link;
          });
        } else {
          this.shadowRoot.removeEventListener('click', () => {
                window.location.href = link;
            });
        }

        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
  
          .door {
            aspect-ratio: 1;
            cursor: ${canOpen ?`pointer`:`cursor`};
            box-sizing: border-box;
            padding: 4px 8px;
            background: white;
            border: 1px solid black;
          }
  
          .door-face {
            width: 100%;
            height: 100%;
            font-size: small;
          }
          .day {
            font-size: smaller;
          }
        </style>
  
        <div class="door">
          <div class="door-face door-back">
              <div class="day">${day}</div>
              <div>${title}</div>
          </div>
        </div>
      `;
    }
}

customElements.define("calendar-door", CalendarDoor);
