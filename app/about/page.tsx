'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Target, Eye, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
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
              About <span className="text-[#ed7b0e]">TAPYZE</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make digital payments accessible, secure, and affordable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  In 2023, Tapyze was born from a simple idea: to make digital payments accessible even in offline environments.
                  We saw that customers needed a simpler, more affordable way to make payments without relying on constant internet connectivity.
                </p>
                <p>
                  We aimed for a payment technology by creating affordable NFC solutions that work for
                  everyone - from corner stores to multinational corporations.
                </p>
                <p>
                  Tapyze aims to bridge the gap between traditional payment methods and the future of offline, contactless transactions.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="mob2.png"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-2xl"
                style={{marginLeft: "auto"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#ed7b0e] transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ed7b0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-black">Accessibility</CardTitle>
                <CardDescription className="text-lg">
                  Making advanced payment technology affordable and accessible to businesses of all sizes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#ed7b0e] transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ed7b0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-black">Transparency</CardTitle>
                <CardDescription className="text-lg">
                  Clear pricing, honest communication, and no hidden fees in everything we do
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#ed7b0e] transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ed7b0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-black">Excellence</CardTitle>
                <CardDescription className="text-lg">
                  Delivering the highest quality products and support to exceed customer expectations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To empower businesses of all sizes with affordable, secure, and innovative payment solutions that drive
                growth and enhance customer experiences by offline payment solution.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A world where every business, regardless of size, has access to cutting-edge payment technology that
                helps them thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ed7b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Discover how Tapyze can transform your business payments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#ed7b0e] hover:bg-gray-100" onClick={() => window.location.href = "/"}>
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-[#ed7b0e]" onClick={() => window.location.href = "/contact"}>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
