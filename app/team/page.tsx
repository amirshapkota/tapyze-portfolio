import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const teamMembers = [
  {
    name: "Amir Shapkota",
    role: "Co-Founder & CEO",
    bio: "Serial entrepreneur with a passion for fintech and digital innovation. Focused on transforming payments with Tapyze.",
    image: "/amir.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "amir@tapyze.com",
  },
  {
    name: "Sachee Ghimire",
    role: "Co-Founder & CTO",
    bio: "Tech visionary with a background in software engineering and product development. Dedicated to building seamless backend experiences.",
    image: "/sachee.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "sachee@tapyze.com",
  },
  {
    name: "Anjan Sharma",
    role: "Head of Product",
    bio: "Product strategist with extensive experience in user experience design and product management. Committed to delivering exceptional user experiences at Tapyze.",
    image: "/anjan.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "anjan@tapyze.com",
  },
  {
    name: "Sailesh Sapkota",
    role: "Head of Business Development",
    bio: "Business development expert with a track record of building strategic partnerships and driving growth. Passionate about expanding Tapyze's reach in the fintech space.",
    image: "/sailesh.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "sailesh@tapyze.com",
  },
]

export default function TeamPage() {
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
              Meet Our <span className="text-[#ed7b0e]">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Tapyze's mission to revolutionize digital payments.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 hover:border-[#ed7b0e] transition-colors overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-black">{member.name}</CardTitle>
                  <CardDescription className="text-[#ed7b0e] font-semibold text-lg">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#ed7b0e] rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#ed7b0e] rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Twitter className="h-5 w-5 text-gray-600 group-hover:text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#ed7b0e] rounded-full flex items-center justify-center transition-colors group"
                    >
                      <Mail className="h-5 w-5 text-gray-600 group-hover:text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <Button size="lg" className="bg-[#ed7b0e] hover:bg-[#d16a0c] text-white">
            <Link href="/contact">View Open Positions</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
