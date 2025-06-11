'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, CreditCard, Smartphone, Zap, Shield, Users, Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function HomePage() {

  return (
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 sm:py-32" style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-black leading-tight">
                The Future of
                <span className="text-[#ed7b0e]"> Digital Payments</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Tapyze revolutionizes payments with our digital wallet and tap-to-pay technology. Affordable NFC
                solutions for businesses of all sizes.
              </p>
              <br />
              <p className="text-lg text-gray-600">
                  Soon available on iOS and Android
                </p>
              <div className="flex flex-col sm:flex-row gap-8 mt-8">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Download on Google Play"
                    width={160}
                    height={50}
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={160}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/mobile.png"
                  alt="Tapyze Mobile App"
                  width={500}
                  height={500}
                  className="mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ed7b0e]/20 to-transparent rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Choose Tapyze?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive payment solutions for both customers and merchants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#ed7b0e] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">Digital Wallet</CardTitle>
                <CardDescription>
                  Secure digital wallet with tap-to-pay functionality for seamless transactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#ed7b0e] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">Payment Cards</CardTitle>
                <CardDescription>Premium payment cards with NFC technology for all your customers</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#ed7b0e] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-black">NFC Scanners</CardTitle>
                <CardDescription>
                  Affordable NFC scanners for businesses from small shops to large enterprises
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Built for Everyone</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#ed7b0e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Bank-Level Security</h3>
                    <p className="text-gray-600">Advanced encryption and fraud protection for all transactions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#ed7b0e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">For All Businesses</h3>
                    <p className="text-gray-600">Affordable solutions that grow with your business</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#ed7b0e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Enterprise Ready</h3>
                    <p className="text-gray-600">Scalable infrastructure for large organizations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/mob3.png"
                alt="Business Solutions"
                width={400}
                height={300}
                className="rounded-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Payments?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#ed7b0e] hover:bg-[#d16a0c] text-white" onClick={() => window.location.href = '/'}>
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black" onClick={() => window.location.href = '/contact'}>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
