class ItemFeatureLayerPopup {
  constructor(
    headerLabel,
    headerValue,
    secondaryLabel,
    secondaryValue,
    descriptionLabel,
    descriptionValue,
    popUp,
    resolveNavClick
  ) {
    if (headerValue == null) throw "header value required";
    if (headerLabel == null) throw "header label required";
    if (secondaryValue == null) throw "secondary value required";
    if (secondaryLabel == null) throw "secondary label required";
    if (descriptionLabel == null) throw "description label required";
    if (!descriptionValue == null) throw "description value required";
    if (popUp == null) throw "description label required";

    this.headerLabel = headerLabel;
    this.headerValue = headerValue;
    this.secondaryLabel = secondaryLabel;
    this.secondaryValue = secondaryValue;
    this.descriptionLabel = descriptionLabel;
    this.descriptionValue = descriptionValue;
    this.popUp = popUp;
    this.resolveNavClick = resolveNavClick;
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick() {
    this.resolveNavClick();
  }

  render() {
    this.popUp.setContent(
      `<div class="ui card">
        <div class="content">
          <div class="header">${this.headerLabel} : ${this.headerValue}</div>
          <div class="meta">${this.secondaryLabel} : ${
        this.secondaryValue
      } </div>
          <div class="description">${this.descriptionLabel} : ${
        this.descriptionValue
      }</div>
        </div>
        <div class="extra content">
           <div class="ui basic teal  button" id = "navp">View Properties</div>
        </div>
      </div>
      `
    );
    setTimeout(() => {
      let button = document
        .getElementById("navp")
        .addEventListener("click", e => this.handleNavClick(e));
    }, 10);
  }
}

export default ItemFeatureLayerPopup;

/*

 <div class="ui card">
        <div class="content">
          <div class="header">${this.headerLabel} : ${this.headerValue}</div>
          <div class="meta">${this.secondaryValue} : ${this.secondaryValue} </div>
          <div class="description">${this.descriptionLabel} : ${this.descriptionValue}</div>
        </div>
        <div class="extra content">
           <div class="ui basic teal  button" id = "navp">View Properties</div>
        </div>
  </div>

*/
