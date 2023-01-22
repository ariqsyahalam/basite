class AccountCard extends HTMLElement {
  constructor() {
    super();

    this.accountName = "";
    this.accountNumbers = "";
    this.alias = "";
  }

  connectedCallback() {

    this.accountName = this.getAttribute("accountName");
    this.accountNumber = this.getAttribute("accountNumber");
    this.alias = this.getAttribute("alias");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container-sm p-3">
          <div class="card">
              <div class="card-body">
                  <div>
                      <h5 class="card-title">${this.accountName}</h5>
                      <p> <b>${this.accountNumber}</b> a.n. ${this.alias}</p>
                  </div>
                  <div class="d-grid gap-2">
                      <button onclick="myFunction('${this.accountNumber}')" onmouseout="outFunc()" class="btn btn-outline-dark">
                          Copy Number
                      </button>
                  </div>
              </div>
          </div>
      </div>
      `;
  }
}

customElements.define("account-card", AccountCard);