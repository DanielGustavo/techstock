import { api } from './api';
import { TProduct } from './loadProducts';
import { TSale } from './loadSales';

export type TProductSale = TProduct & {
  saleproduct_id?: string;
};

type TLoadSaleResponse = {
  sale: {
    id: number;
    name?: string;
    description?: string;
    discount?: number;
    date_time: string;
    totalValue: number;
  };
  productSale: TProductSale[];
};

export async function loadSale(id: number) {
  await (() => new Promise((resolve) => setTimeout(resolve, 1000)))();
  const response = await api.get<TLoadSaleResponse>(`/sales/${id}`);

  const sale: TSale = {
    ...response.data.sale,
    date_time: new Date(response.data.sale.date_time),
  };

  response.data.productSale.forEach((product) => {
    if (!(product as any).thumbnail_pathname) return

    product.thumbnailPathname = `http://localhost:8000/uploads/${(product as any).thumbnail_pathname}`;
  });

  return { sale, products: response.data.productSale };
}
