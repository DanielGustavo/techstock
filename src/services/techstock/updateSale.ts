import { format } from 'date-fns';
import { api } from './api';
import { TSale } from './loadSales';
import { TProductSale } from './loadSale';

export async function updateSale(
  sale: any,
  products: TProductSale[],
  productsToDelete: TProductSale[]
) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();

  sale.date_time = format(sale.date_time, 'dd/MM/yyyy hh:mm');
  const response = await api.put<TSale>('/sales', sale);

  console.log({ products });
  const productsInSaleBody = products.map((product) => ({
    quantity: product.quantity,
    price: product.price,
    idProduct: product.id,
    id_sales: sale.id,
    id: product.saleproduct_id,
  }));

  const productsToUpdate = productsInSaleBody.filter((product) => !!product.id);

  productsToUpdate.forEach(async (product) => {
    await api.put('/saleproducts', product);
  });

  productsToDelete.forEach(async (product) => {
    await api.delete(`/saleproducts/${product.saleproduct_id}`);
  });

  const productsToCreate = productsInSaleBody.filter((product) => !product.id);
  if (productsToCreate.length) {
    await api.post('/saleproducts', { products: productsToCreate });
  }

  return response.data;
}
