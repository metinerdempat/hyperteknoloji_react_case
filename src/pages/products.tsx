import { Product } from '@/types';
import { moneyFormatter } from '@/utils';
import { ShoppingCartIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores';
import { addBasket } from '@/stores/basket-slice';
import { FC } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib';

type Props = {};

const ProductsPage: FC<Props> = ({}) => {
  const { data: products, isLoading: isProductsLoading } = useSWR<Product[]>('/products', fetcher);
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basketStore.basket);

  console.log('basket', basket);

  const addToBasket = (product: Product) => {
    dispatch(addBasket(product));
    toast.success(`${product.title} added to basket!`, {});
  };

  return (
    <section className="app-container mt-12">
      <h1 className="font-bold text-xl text-blue-500">Featured Products</h1>
      <div className="mt-4 grid grid-cols-4 xl:grid-cols-5 gap-4">
        {isProductsLoading && <p className="mt-3 text-blue-500">Loading...</p>}
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="col-span-4 md:col-span-2 xl:col-span-1 bg-white p-4 shadow-md shadow-blue-50 rounded-md
           hover:shadow-blue-100 transition-all duration-150
          "
            >
              <img
                src={product.image}
                alt={product.title}
                width={400}
                height={200}
                className="rounded-md w-full h-48 object-fill"
              />
              <h3 className="mt-6 text-sm truncate font-bold">{product.title}</h3>
              <p className="mt-3 text-sm truncate">{product.description}</p>
              <p className="mt-2 text-sm font-bold">{moneyFormatter(product.price)}</p>

              <button
                type="button"
                onClick={() => addToBasket(product)}
                className="mt-4 bg-blue-400 text-white px-3 py-1 rounded-sm hover:bg-blue-500 transition-all duration-150 text-sm flex items-center gap-2"
              >
                <ShoppingCartIcon size={16} />
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProductsPage;
