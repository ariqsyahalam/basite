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
    this.image = this.getAttribute("image");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card mb-3 container-sm p-3" >
        <div class="row g-0">
          <div class="col-md-1 p-1 d-flex align-items-center">
            <img src="${this.image}" class="img-fluid rounded-start" style="max-width:64px" >
          </div>
          <div class="col-md-1 p-1">
          </div>
          <div class="col-md-10">
            <div class="card-body">
                <div class="m-auto">
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
      </div>
      `;
  }
}

customElements.define("account-card", AccountCard);