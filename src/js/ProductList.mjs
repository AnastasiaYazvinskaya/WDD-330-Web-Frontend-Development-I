function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.filterList(list);
        this.renderList(list);
  }
  
  renderList(list) {
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
  }

  filterList(list) {
    if (this.category === "Tents") {
        this.removeElement(list, 2);
        this.removeElement(list, 3);
    }
    
  }
  removeElement(list, index) {
    for (let i = 0; i < list.length; i++) {
      if (i === index) {
        list.splice(index, 1);
      }
    }
  }
}