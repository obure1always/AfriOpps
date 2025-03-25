import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Jobs', href: '/categories/jobs' },
    { name: 'Internships', href: '/categories/internships' },
    { name: 'Scholarships', href: '/categories/scholarships' },
    { name: 'Help Center', href: '/help' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ],
  categories: [
    { name: 'Technology', href: '#' },
    { name: 'Business', href: '#' },
    { name: 'Healthcare', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'Engineering', href: '#' },
    { name: 'Arts & Design', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              AfriOpps
            </Link>
            <p className="text-gray-500 text-base">
              Connecting African talent with opportunities across the continent. Find jobs, internships, and scholarships tailored for you.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Navigation
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Categories
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.categories.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  Get weekly updates about the latest opportunities.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-primary flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} AfriOpps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 