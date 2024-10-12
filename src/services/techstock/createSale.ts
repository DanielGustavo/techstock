import { format } from 'date-fns';
import { api } from './api';
import { TSale } from './loadSales';
import { TProduct } from './loadProducts';

export async function createSale(sale: any, products: TProduct[]) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();

  sale.date_time = format(sale.date_time, 'dd/MM/yyyy hh:mm');
  const response = await api.post<TSale>('/sales', sale);

  const productsInSaleBody = products.map((product) => ({
    quantity: product.quantity,
    price: product.price,
    idProduct: product.id,
    id_sales: response.data.id,
  }));

  await api.post('/saleproducts', { products: productsInSaleBody });

  return response.data;
}
