import { FC } from 'react';
import { fetchAPI } from '../../modules/API/api';
import Footer from '../Footer/Footer';
import Header from '../header/Header';

interface IFProps {
  children: React.ReactNode;
}

const Layout: FC<IFProps> = ({ children }) => {

  const response = fetchAPI()
  console.log('response : ', response)

  return (
    <div className="flex flex-col">
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
