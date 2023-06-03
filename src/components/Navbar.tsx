import Link from 'next/link';
import { siteConfig } from '../../site.config';

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between py-3  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div
          className="bg-grey-light rounded-md w-full"
          aria-label="breadcrumb"
        >
          <Link href="/" className="text-gray-500 hover:text-gray-600">
            {siteConfig.title}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
