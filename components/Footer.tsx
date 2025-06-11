// components/Footer.tsx

import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#ed7b0e] rounded-lg flex items-center justify-center">
                  <Image src="/logo.png" alt="Tapyze Logo" width={32} height={32} />
                </div>
                <span className="text-2xl font-bold">TAPYZE</span>
              </div>
              <p className="text-gray-400">Tap. Pay. Simplify.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-[#ed7b0e] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#ed7b0e] transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#ed7b0e] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/legal" className="hover:text-[#ed7b0e] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="hover:text-[#ed7b0e] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-[#ed7b0e] transition-colors">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tapyze. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
