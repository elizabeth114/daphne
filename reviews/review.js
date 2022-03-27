class Review extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    var website = this.attributes.website.value;
    var product_name = this.attributes.product_name.value;
    var review_text = this.attributes.review_text.value;
    var discount_code = "";
    var sponsored = this.attributes.sponsored.value;
    var price = "";
    var website_display = `<a href="${website}">${website}</a>`;
    var rating = this.attributes.rating.value;
    if (this.attributes.alternative_link !== undefined){
      website_display = `<a href="${website}">${this.attributes.alternative_link.value}</a>`;
    }
    if (this.attributes.price !== undefined){
      price = `<br> <strong class="review-title-text">Price: </strong>` + this.attributes.price.value;
    }
    if (this.attributes.discount_code !== undefined){
      discount_code = `<br> <strong class="review-title-text">Discount Code: </strong>` + this.attributes.discount_code.value;
    }
    this.innerHTML = `
        <!-- Title section-->
        <div class="title" id="title">
          <img class="front-half" src="../images/front-half-stretched.png" alt="Italian Trulli">
            <title-text><a href="${website}">${product_name}</a></title-text>
          <img class="back-half" src="../images/back-half-stretched.png" alt="Italian Trulli">
        </div>
          <div class="review-section">
            <div>
              <p> <b class="review-title-text">Website: </b> ${website_display}
              ${discount_code}<br>
              <b class="review-title-text">Sponsored?: </b>${sponsored}
              ${price}
              <br> <b class="review-title-text">Rating: </b>${rating} out of 4 paws&#128062</p>
            </div>
              <p class="review-text">${review_text}</p>
          </div>
        </div>
    `;
  }
}

  customElements.define('review-template', Review);
