"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
              Get in <span className="text-[#ed7b0e]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your payment experience? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a small business looking to accept digital payments or an enterprise seeking scalable
                solutions, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email Us</h3>
                    <p className="text-gray-600">support@tapyze.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Call Us</h3>
                    <p className="text-gray-600">+977 9800000000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ed7b0e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Visit Us</h3>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Type of Inquiry</Label>
                    <Select onValueChange={(value) => handleChange("inquiry", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#ed7b0e] hover:bg-[#d16a0c] text-white" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Quick answers to common questions about Tapyze</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-black">How much does it cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our pricing is transparent and affordable. NFC scanners start at Rs. 1500, with no fees for basic usage.
                </p>
                <br />
                <p className="text-gray-600">
                  RFID start at Rs. 100 per year, with no monthly fees for upto Rs. 25,000 monthly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-black">Is it secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we use bank-level encryption and comply with all major security standards. Your transactions are protected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-black">How quickly can I get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customers can start using Tapyze within minutes after signing up. Our app is designed for quick setup and easy integration.
                </p>
                <br />
                <p className="text-gray-600">
                  Most businesses can be up and running within 24 hours. We provide full setup support and training to ensure a smooth transition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-black">Do you support international payments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Currently, Tapyze focuses on the Nepalese market. However, we plan to expand internationally in the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
