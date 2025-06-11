import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center text-[#ed7b0e] hover:text-[#d16a0c] mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-6xl font-bold text-black mb-6">
              Legal <span className="text-[#ed7b0e]">Information</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to transparency, security, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-[#ed7b0e] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">Terms of Service</CardTitle>
                <CardDescription>Our terms and conditions for using Tapyze services</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#ed7b0e] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">Privacy Policy</CardTitle>
                <CardDescription>How we collect, use, and protect your personal information</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Terms of Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
              <FileText className="h-8 w-8 text-[#ed7b0e] mr-3" />
              Terms of Service
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> June 2025
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-600 mb-6">
                By accessing and using Tapyze services, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">2. Service Description</h3>
              <p className="text-gray-600 mb-6">
                Tapyze provides digital wallet services, payment processing, and NFC payment solutions for businesses
                and consumers. Our services include mobile applications, payment cards, and merchant hardware.
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">3. User Responsibilities</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Provide accurate and complete information during registration</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Use the service in compliance with applicable laws and regulations</li>
                <li>• Report any unauthorized use of your account immediately</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-4">4. Payment Terms</h3>
              <p className="text-gray-600 mb-6">
                Payment processing fees and hardware costs are clearly outlined in your service agreement. All fees are
                non-refundable unless otherwise specified. We reserve the right to modify pricing with 30 days notice.
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">5. Limitation of Liability</h3>
              <p className="text-gray-600 mb-6">
                Tapyze shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Privacy Policy */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
              <Shield className="h-8 w-8 text-[#ed7b0e] mr-3" />
              Privacy Policy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> June 2025
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">1. Information We Collect</h3>
              <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Account registration information (name, email, phone number)</li>
                <li>• Payment information (card details, transaction history)</li>
                <li>• Business information (company name, tax ID, business type)</li>
                <li>• Communication preferences and support interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-4">2. How We Use Your Information</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Process payments and transactions</li>
                <li>• Provide customer support and respond to inquiries</li>
                <li>• Improve our services and develop new features</li>
                <li>• Comply with legal obligations and prevent fraud</li>
                <li>• Send important service updates and notifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-4">3. Information Sharing</h3>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share information with trusted partners who assist
                us in operating our services, conducting business, or serving users.
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">4. Data Security</h3>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular
                security audits.
              </p>

              <h3 className="text-xl font-semibold text-black mb-4">5. Your Rights</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Access and review your personal information</li>
                <li>• Request corrections to inaccurate data</li>
                <li>• Delete your account and associated data</li>
                <li>• Request data portability where applicable</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-4">6. Contact Us</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at
                privacy@tapyze.com or through our contact form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Compliance & Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ed7b0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-black">Encryption</CardTitle>
                <CardDescription>Encryption of sensitive data</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ed7b0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-black">Bank-Level Security</CardTitle>
                <CardDescription>Secured payment processing</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ed7b0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-black">Transparent</CardTitle>
                <CardDescription>Transparency in all our operations.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
