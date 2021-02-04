export function storeProducts(products:string) {
  return {
    type: '@products/STORE_PRODUCTS',
    products,
  };
}

export function setProductStatus(id:number, status:string) {
  return {
    type: '@products/SET_PRODUCT_STATUS',
    id,
    status,
  };
}