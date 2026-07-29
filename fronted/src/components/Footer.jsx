
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 
                1.324v21.352C0 23.407.593 24 1.324 
                24h11.495v-9.294H9.691V11.01h3.128V8.413
                c0-3.1 1.893-4.788 4.659-4.788
                1.325 0 2.463.099 2.794.143v3.24
                l-1.918.001c-1.504 0-1.795.715-1.795
                1.763v2.312h3.59l-.467 3.696h-3.123
                V24h6.116C23.407 24 24 23.407
                24 22.676V1.324C24 .593 23.407
                0 22.676 0z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 
                01-2.828.775 4.932 4.932 0 
                002.165-2.724 9.864 9.864 0 
                01-3.127 1.195 4.916 4.916 0 
                00-8.379 4.482A13.944 13.944 
                0 011.671 3.149a4.916 4.916 
                0 001.523 6.556 4.903 4.903 
                0 01-2.229-.616v.061a4.917 
                4.917 0 003.946 4.817 4.902 
                4.902 0 01-2.224.085 4.918 
                4.918 0 004.588 3.417A9.867 
                9.867 0 010 21.543a13.94 
                13.94 0 007.548 2.212c9.058 
                0 14.01-7.513 14.01-14.01 
                0-.213-.005-.425-.014-.636A10.025 
                10.025 0 0024 4.557z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.9v-5.569
                c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939
                v5.667H9.364V9h3.4v1.561h.048
                c.474-.9 1.637-1.852 3.369-1.852
                3.6 0 4.267 2.368 4.267 5.455
                v6.288zM5.337 7.433c-1.087 
                0-1.968-.882-1.968-1.969
                0-1.087.881-1.968 1.968-1.968
                1.086 0 1.968.881 1.968 1.968
                0 1.087-.882 1.969-1.968 
                1.969zM6.882 20.452H3.79V9h3.092
                v11.452zM22.225 0H1.771C.792 
                0 0 .774 0 1.729v20.542C0 
                23.227.792 24 1.771 24h20.451
                C23.2 24 24 23.227 24 
                22.271V1.729C24 .774 23.2 
                0 22.222 0h.003z"/>
              </svg>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

