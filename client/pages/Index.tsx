import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Pulkit Singh",
    package: "Dhanguard 10 LPA",
    campus: "GDG",
    year: "22-24",
    course: "MBA",
    testimonial:
      "I am immensely grateful to Sunstone for the incredible international placement opportunity. The unwavering support, exceptional faculty, and comprehensive curriculum played a pivotal role in shaping my career.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/harpreet-kaur-mba-2021-0fb231?format=webp&width=800",
  },
  {
    id: 2,
    name: "Harpreet Kaur",
    package: "Zenoti 8.6 LPA",
    campus: "RBU",
    year: "21-23",
    course: "MBA",
    testimonial:
      "My MBA experience with Sunstone has been incredible. The experienced faculty and comprehensive curriculum helped me secure a high package and an internship at FundsRoom.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/harpreet-kaur-mba-2021-0fb231?format=webp&width=800",
  },
  {
    id: 3,
    name: "Samuel Jaya Abishek",
    package: "Pivotal Associates 12 LPA",
    campus: "MRU",
    year: "22-24",
    course: "MBA",
    testimonial:
      "My MBA in Finance and Analytics at Malla Reddy University powered by Sunstone has been an amazing experience. With excellent faculty support, industry expert lectures, and enriching campus life.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/samuel-abhishek-mba-2022-24-3c3296?format=webp&width=800",
  },
  {
    id: 4,
    name: "Akash Das",
    package: "Manforce Group 6.5 LPA",
    campus: "ADYPU",
    year: "2022-2024",
    course: "MBA",
    testimonial:
      "Sunstone equipped me with in-demand industry skills, and I'm grateful for the guidance from Dr. Omkar Dange and the dedicated faculty. The paid internships and live projects greatly boosted my resume.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/1684043070051-670752?format=webp&width=800",
  },
  {
    id: 5,
    name: "Bijan Biswas",
    package: "Piramal Capital 7 LPA",
    campus: "RGI",
    year: "21-23",
    course: "MBA",
    testimonial:
      "I would like to express my gratitude to Sunstone for the invaluable support and guidance that helped me secure a placement at Piramal Capital and Housing Finance Limited.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/1684043070051-670752?format=webp&width=800",
  },
  {
    id: 6,
    name: "Anushree Soni",
    package: "Hike Education 7 LPA",
    campus: "SAGE Bhopal",
    year: "23-25",
    course: "MBA",
    testimonial:
      "I am incredibly grateful to Sunstone for their constant support and guidance, which were pivotal in helping me secure a placement as a Business Development Manager at Hike Education.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/anushree-soni-sageb-1-0bcdb6?format=webp&width=800",
  },
];

const stats = [
  { value: "₹26 LPA", label: "Highest Package", color: "text-sunstone-gold" },
  { value: "4.6 LPA", label: "Average Package", color: "text-sunstone-gold" },
  { value: "1400+", label: "Total Offers", color: "text-sunstone-navy" },
  { value: "306", label: "Students with 2+ Offers", color: "text-sunstone-gold" },
  { value: "5000+", label: "Students Placed", color: "text-sunstone-navy" },
  { value: "1200+", label: "Total Recruiters", color: "text-sunstone-gold" },
];

const comparisonData = [
  {
    feature: "Specializations",
    sunstone: "5 Advanced New-Age Specializations",
    others: "Limited Or No Specialization Choices",
  },
  {
    feature: "Industry Exposure",
    sunstone: "8+ Months Of Industry Internships",
    others: "Minimal Or No Internship Opportunities",
  },
  {
    feature: "Hands-On Learning",
    sunstone: "3 Capstone Projects (1 Every Year)",
    others: "Projects With Minimal Industry Use",
  },
  {
    feature: "Expert Sessions",
    sunstone: "70+ Sessions By Industry Leaders & Top Faculty",
    others: "Few Or No Sessions With Industry Experts",
  },
  {
    feature: "Certifications",
    sunstone: "10 In-Demand Advanced Certifications",
    others: "Limited Or No Certification Options",
  },
  {
    feature: "Placement Readiness",
    sunstone: "180+ Hours Of Mock GD/PI Training",
    others: "Basic Or No Placement Preparation",
  },
  {
    feature: "Career Boost",
    sunstone: "Build A Job-Ready Portfolio",
    others: "No Structured Portfolio Development",
  },
];

export default function Index() {
  const handleApplyNow = () => {
    window.open('https://sunstone.in', '_blank');
  };

  return (
    <div className="min-h-screen bg-sunstone-white font-sans">
      {/* Header */}
      <header className="bg-sunstone-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2Ff83e93f9590748d9b1f3c540b752d182?format=webp&width=800"
                alt="Sunstone"
                className="h-6 w-auto transition-all duration-500 hover:scale-110"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#programs"
                className="text-sunstone-black hover:text-sunstone-navy transition-colors duration-300 relative group font-medium"
              >
                Programs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#placements"
                className="text-sunstone-black hover:text-sunstone-navy transition-colors duration-300 relative group font-medium"
              >
                Placements
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#success-stories"
                className="text-sunstone-black hover:text-sunstone-navy transition-colors duration-300 relative group font-medium"
              >
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-sunstone-black hover:text-sunstone-navy transition-colors duration-300 relative group font-medium"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <Button 
              onClick={handleApplyNow}
              className="bg-sunstone-navy hover:bg-sunstone-navy-dark text-sunstone-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark text-sunstone-white py-16 md:py-24 overflow-hidden relative">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 animate-fade-in-up leading-tight">
                  <span className="block text-sunstone-white animate-slide-up">
                    Big Dreams Need
                  </span>
                  <span className="block text-sunstone-gold animate-bounce-gentle">
                    the Right Start
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-sunstone-gold to-sunstone-gold-light rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-up delay-300 font-medium leading-relaxed">
                Get{" "}
                <span className="text-sunstone-gold font-bold">
                  200+ assured placement opportunities
                </span>{" "}
                with{" "}
                <span className="text-sunstone-white font-semibold">
                  Placement Opportunity Program
                </span>
              </p>

              <div className="flex justify-center lg:justify-start animate-fade-in-up delay-700">
                <Button
                  onClick={handleApplyNow}
                  size="lg"
                  className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-sunstone-black px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl rounded-xl shadow-xl"
                >
                  Apply Now - Limited Seats Available
                  <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div className="lg:flex lg:justify-end animate-slide-in-right">
              <div className="bg-sunstone-white rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-lg mx-auto lg:mx-0 transform transition-all duration-500 animate-float border border-sunstone-gold/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-sunstone-navy">
                    Apply Now
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sunstone-navy hover:text-sunstone-navy-dark hover:bg-sunstone-gold/10 transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Help
                  </Button>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest! Our team will contact you soon.'); }}>
                  <div className="animate-fade-in-up delay-100">
                    <label className="block text-sm font-medium text-sunstone-black mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none transition-all duration-500 text-sunstone-black font-medium placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up delay-200">
                    <label className="block text-sm font-medium text-sunstone-black mb-2">
                      I want to pursue*
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none bg-sunstone-white transition-all duration-500 text-sunstone-black font-medium"
                      required
                    >
                      <option value="" className="text-gray-500">
                        Select Program
                      </option>
                      <option value="mba" className="text-sunstone-black">
                        MBA/PGDM
                      </option>
                      <option value="bba" className="text-sunstone-black">
                        BBA
                      </option>
                      <option value="btech" className="text-sunstone-black">
                        B.Tech
                      </option>
                      <option value="bcom" className="text-sunstone-black">
                        B.Com
                      </option>
                      <option value="bca" className="text-sunstone-black">
                        BCA
                      </option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up delay-300">
                    <label className="block text-sm font-medium text-sunstone-black mb-2">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none transition-all duration-500 text-sunstone-black font-medium placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up delay-400">
                    <label className="block text-sm font-medium text-sunstone-black mb-2">
                      Select State*
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none bg-sunstone-white transition-all duration-500 text-sunstone-black font-medium"
                      required
                    >
                      <option value="" className="text-gray-500">
                        Select State
                      </option>
                      <option value="delhi" className="text-sunstone-black">
                        Delhi
                      </option>
                      <option value="mumbai" className="text-sunstone-black">
                        Mumbai
                      </option>
                      <option value="bangalore" className="text-sunstone-black">
                        Bangalore
                      </option>
                      <option value="pune" className="text-sunstone-black">
                        Pune
                      </option>
                      <option value="hyderabad" className="text-sunstone-black">
                        Hyderabad
                      </option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-sunstone-navy hover:bg-sunstone-navy-dark text-sunstone-white py-4 text-xl font-bold rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    Send OTP
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By clicking "Send OTP", you agree to our Terms & Conditions
                    and Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Banner */}
      <section className="bg-sunstone-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-4">
              Pursue MBA, BBA, MCA, BCA, & B.Tech at 25+ Colleges Across India
            </h2>
          </div>
          <div className="bg-sunstone-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up delay-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2Fc5f0c18cca2a45cfb84340661afc3dd1?format=webp&width=800"
              alt="Program Statistics - 5000+ Students Placed, 26 LPA Highest Package, 4.6 LPA Average Package, 1200+ Total Recruiters"
              className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sunstone-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-2 transition-all duration-300 hover:scale-110`}
                >
                  {stat.value}
                </div>
                <div className="text-sunstone-white text-xs sm:text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-4">
              Why Sunstone Powered Programs Stand Out?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See how our programs compare with traditional colleges
            </p>
          </div>

          <div className="bg-sunstone-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up delay-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark text-sunstone-white">
                    <th className="px-6 py-6 text-left text-lg font-bold">
                      Key Offerings
                    </th>
                    <th className="px-6 py-6 text-center text-lg font-bold bg-sunstone-gold/20">
                      Sunstone-Powered Programs
                    </th>
                    <th className="px-6 py-6 text-center text-lg font-bold">
                      Other Colleges
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 animate-fade-in-up`}
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <td className="px-6 py-6 font-semibold text-sunstone-black bg-gray-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-6 text-center bg-sunstone-gold/10 border-l-4 border-sunstone-gold">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-sunstone-gold" />
                          <span className="text-sunstone-black font-medium">
                            {row.sunstone}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-center bg-gray-100 border-l-4 border-gray-400">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-gray-500" />
                          <span className="text-sunstone-black font-medium">
                            {row.others}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sunstone-navy/5 to-sunstone-gold/5 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-sunstone-navy mb-6">
              📊 Our Impact in Numbers
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium">
              Proven track record of transforming careers
            </p>
            <div className="h-2 w-40 bg-gradient-to-r from-sunstone-gold via-sunstone-navy to-sunstone-gold rounded-full mx-auto mt-6 animate-pulse"></div>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {/* Highest Salary Card */}
            <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-sunstone-gold-light to-sunstone-gold rounded-3xl p-8 text-center transform transition-all duration-700 hover:scale-110 animate-fade-in-up shadow-2xl">
              <div className="text-5xl font-black text-sunstone-black mb-3 animate-float">₹26</div>
              <div className="text-sunstone-black font-semibold text-lg">LPA Highest</div>
              <div className="text-sunstone-black/70 text-sm mt-2">Salary Package</div>
            </div>

            {/* ROI Card */}
            <div className="bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-3xl p-8 text-center transform transition-all duration-700 hover:scale-110 animate-fade-in-up delay-200 shadow-2xl border border-sunstone-gold/30">
              <div className="text-4xl font-black text-sunstone-gold mb-3 animate-bounce-gentle">63%</div>
              <div className="text-sunstone-white font-semibold">Higher ROI</div>
              <div className="text-gray-300 text-sm mt-2">Better Returns</div>
            </div>

            {/* Total Offers Card */}
            <div className="bg-gradient-to-br from-sunstone-black to-gray-800 rounded-3xl p-8 text-center transform transition-all duration-700 hover:scale-110 animate-fade-in-up delay-400 shadow-2xl border border-sunstone-gold/30">
              <div className="text-4xl font-black text-sunstone-gold mb-3 animate-pulse">1400+</div>
              <div className="text-sunstone-white font-semibold">Total Offers</div>
              <div className="text-gray-300 text-sm mt-2">Placement Success</div>
            </div>

            {/* Students with 2+ Offers Card */}
            <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-sunstone-gold to-sunstone-gold-light rounded-3xl p-8 text-center transform transition-all duration-700 hover:scale-110 animate-fade-in-up delay-600 shadow-2xl">
              <div className="text-5xl font-black text-sunstone-black mb-3 animate-wiggle">306</div>
              <div className="text-sunstone-black font-semibold text-lg">Multiple Offers</div>
              <div className="text-sunstone-black/70 text-sm mt-2">Students with 2+ Offers</div>
            </div>
          </div>


        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-4">
              Our Industry Partners
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Trusted by leading companies across industries
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-4"></div>
          </div>
          <div className="bg-sunstone-white rounded-2xl shadow-2xl p-8 sm:p-12 animate-fade-in-up delay-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F0ed648de05c74644b6212e6b9a125b4b?format=webp&width=800"
              alt="Industry Partners - Leading companies that hire our graduates"
              className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Bright Minds Scholarship Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sunstone-gold/10 to-sunstone-navy/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-sunstone-navy mb-6">
              🎓 Bright Minds Scholarship
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
              Unlock Your Potential with Financial Support Worth Up to ₹6 Lacs
            </p>
            <div className="h-2 w-40 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-6 animate-pulse"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Scholarship Info */}
            <div className="animate-slide-in-left">
              <div className="bg-sunstone-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-sunstone-gold/20">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-sunstone-gold rounded-full p-3">
                      <Award className="h-8 w-8 text-sunstone-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sunstone-navy">Merit-Based Awards</h3>
                      <p className="text-gray-600">For exceptional academic performance</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-sunstone-gold/10 rounded-xl">
                      <span className="text-sunstone-navy font-semibold">Top 10% Performers</span>
                      <span className="text-sunstone-navy font-bold text-lg">₹6,00,000</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-sunstone-navy/10 rounded-xl">
                      <span className="text-sunstone-navy font-semibold">Top 25% Performers</span>
                      <span className="text-sunstone-navy font-bold text-lg">₹4,00,000</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                      <span className="text-sunstone-navy font-semibold">Top 50% Performers</span>
                      <span className="text-sunstone-navy font-bold text-lg">₹2,00,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-sunstone-gold to-sunstone-navy p-6 rounded-2xl text-center">
                  <h4 className="text-white font-bold text-lg mb-2">Apply Today & Secure Your Future</h4>
                  <p className="text-white/90 text-sm">Limited scholarships available - First come, first served</p>
                </div>
              </div>
            </div>

            {/* Right - Scholarship Image */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sunstone-gold/20 to-sunstone-navy/20 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F13b8398546b349eea73b05379cea83a0?format=webp&width=800"
                  alt="Bright Minds Scholarship - Transform your dreams into reality with financial support"
                  className="relative w-full h-auto object-cover rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-sunstone-navy/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-sunstone-navy mb-6">
              Success Stories That Inspire
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Real students, Real achievements, Real transformations
            </p>
            <div className="h-2 w-40 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-6"></div>
          </div>
          
          {/* Auto-Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll-x" style={{ width: 'calc(100% + 400px)' }}>
              {[...successStories, ...successStories].map((story, index) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-80 animate-slide-in-right"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    scrollSnapAlign: 'start'
                  }}
                >
                  <div className="bg-sunstone-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-sunstone-gold/20 h-full">
                    {/* Header */}
                    <div className="relative h-40 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark flex items-center justify-center overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-sunstone-white z-10 transition-all duration-500 hover:scale-110 shadow-xl"
                      />
                      
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-sunstone-gold text-sunstone-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          {story.package.split(" ").slice(-2).join(" ")}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-sunstone-navy mb-2">
                        {story.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-sunstone-navy/10 text-sunstone-navy px-2 py-1 rounded-full text-xs font-medium">
                          {story.campus}
                        </span>
                        <span className="bg-sunstone-gold/20 text-sunstone-black px-2 py-1 rounded-full text-xs font-medium">
                          {story.year}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                          {story.course}
                        </span>
                      </div>
                      
                      <div className="mb-4 p-3 bg-sunstone-gold/10 rounded-xl border-l-4 border-sunstone-gold">
                        <p className="font-bold text-sunstone-navy text-sm">
                          {story.package}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        "{story.testimonial}"
                      </p>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <div className="bg-sunstone-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-sunstone-gold/20">
              <h3 className="text-2xl font-bold text-sunstone-navy mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of successful professionals who transformed their careers with Sunstone
              </p>
              <Button 
                onClick={handleApplyNow}
                size="lg" 
                className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-sunstone-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sunstone-gold to-sunstone-gold-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-black mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl text-sunstone-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals. Take the first step
            towards your dream career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleApplyNow}
              size="lg"
              className="bg-sunstone-navy text-sunstone-white hover:bg-sunstone-navy-dark px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl rounded-xl shadow-xl"
            >
              Apply Now - Secure Your Seat
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-navy text-sunstone-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="col-span-full sm:col-span-2 md:col-span-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2Ff83e93f9590748d9b1f3c540b752d182?format=webp&width=800"
                alt="Sunstone"
                className="h-10 w-auto mb-6 transition-all duration-300 hover:scale-110"
              />
              <p className="text-gray-200 max-w-md text-sm sm:text-base mb-6">
                Transforming careers through industry-focused education and
                unmatched placement support.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.youtube.com/@SunstoneIND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/sunstone.in/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/sunstoneedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://in.linkedin.com/school/sunstone-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6 text-sunstone-gold">Programs</h4>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>
                  <a href="#" className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300">
                    MBA/PGDM
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300">
                    BBA
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300">
                    B.Tech
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300">
                    BCA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6 text-sunstone-gold">Contact Us</h4>
              <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
                <li className="flex items-center hover:text-sunstone-gold transition-colors duration-300">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 70653 03030
                </li>
                <li className="flex items-center hover:text-sunstone-gold transition-colors duration-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  Multiple Locations
                </li>
                <li className="mt-4">
                  <Button 
                    onClick={handleApplyNow}
                    className="bg-sunstone-gold text-sunstone-black hover:bg-sunstone-gold-dark transition-all duration-300 transform hover:scale-105 font-bold"
                  >
                    Apply Now
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sunstone-navy-light mt-8 pt-8 text-center text-gray-200 text-sm">
            <p>&copy; 2024 Sunstone. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap');
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wiggle {
          0%, 7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%, 100% {
            transform: rotateZ(0);
          }
        }

        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}
