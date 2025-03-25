'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FaExclamationTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Something went wrong!</h1>
          <p className="mt-2 text-lg text-gray-500">
            We encountered an error while loading this page.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={reset}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 