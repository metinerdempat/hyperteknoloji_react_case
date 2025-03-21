import { Link } from 'react-router';
import { FC, useMemo, useState } from 'react';
import { ROUTES } from '@/constants';
import { MenuIcon, ShoppingCartIcon } from 'lucide-react';
import Logo from './logo';
import { useMedia } from 'react-use';
import MobileMenu from './mobile-menu';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores';
import { getBasketQuantity } from '@/utils';

type Props = {};

const Header: FC<Props> = ({}) => {
  const isLargerThan1024 = useMedia('(min-width: 1024px)');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const basket = useSelector((state: RootState) => state.basketStore.basket);

  const toggleMenu = () => setIsMenuOpen((state) => !state);

  const basketQuantity = useMemo(() => {
    return getBasketQuantity(basket);
  }, [basket]);

  return (
    <>
      <header className="w-full shadow-md bg-white shadow-blue-50">
        <div className="app-container flex items-center justify-between xl:max-w-5xl !py-5 mx-auto">
          <Logo />
          {isLargerThan1024 && (
            <nav>
              <ul className="flex items-center gap-4">
                {ROUTES.map((route) => (
                  <li key={route.id} className="hover:text-blue-500 text-sm">
                    <Link to={route.path}>{route.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {isLargerThan1024 ? (
            <Link to="/basket">
              <button type="button" className="relative">
                <ShoppingCartIcon size={24} color="#000" />
                {basketQuantity > 0 && (
                  <span className="block absolute -top-2.5 -right-2.5 bg-blue-300 w-5 h-5 rounded-full text-sm text-white">
                    {basketQuantity}
                  </span>
                )}
              </button>
            </Link>
          ) : (
            <button type="button" onClick={toggleMenu}>
              <MenuIcon size={24} color="#000" />
            </button>
          )}
        </div>
      </header>
      {!isLargerThan1024 && <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </>
  );
};

export default Header;
