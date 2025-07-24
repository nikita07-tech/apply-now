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
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

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
      "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F2be463e1c8b0473bb0fd5f659ac02eae?format=webp&width=800",
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
    year: "2022-2024",
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
      "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fb0f8c68af5ba46a2bd76dedd450e2c0d",
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
  { value: "306", label: "Students with 2+ Offers", color: "text-sunstone-gold" },
  { value: "5000+", label: "Students Placed", color: "text-sunstone-gold" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleApplyNow = () => {
    alert('Thank you for your interest! Our team will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-sunstone-white font-sans">
      {/* Header */}
      <header className="bg-sunstone-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2Ff83e93f9590748d9b1f3c540b752d182?format=webp&width=800"
                alt="Sunstone"
                className="h-5 md:h-6 w-auto transition-all duration-500 hover:scale-110"
              />
            </div>

            {/* Desktop Navigation */}
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

            {/* Desktop Apply Button */}
            <Button
              onClick={handleApplyNow}
              className="hidden md:block bg-sunstone-navy hover:bg-sunstone-navy-dark text-sunstone-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-sunstone-navy" />
              ) : (
                <Menu className="h-6 w-6 text-sunstone-navy" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#programs"
                  className="block px-3 py-2 text-base font-medium text-sunstone-black hover:text-sunstone-navy hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programs
                </a>
                <a
                  href="#placements"
                  className="block px-3 py-2 text-base font-medium text-sunstone-black hover:text-sunstone-navy hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Placements
                </a>
                <a
                  href="#success-stories"
                  className="block px-3 py-2 text-base font-medium text-sunstone-black hover:text-sunstone-navy hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-base font-medium text-sunstone-black hover:text-sunstone-navy hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <Button
                  onClick={() => {
                    handleApplyNow();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-4 bg-sunstone-navy hover:bg-sunstone-navy-dark text-sunstone-white font-semibold transition-all duration-300 shadow-lg"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark text-sunstone-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden relative">

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 md:mb-6 animate-fade-in-up leading-tight">
                  <span className="block text-sunstone-white animate-slide-up">
                    Big Dreams Need
                  </span>
                  <span className="block text-sunstone-gold animate-bounce-gentle">
                    the Right Start
                  </span>
                </h1>
                <div className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-sunstone-gold to-sunstone-gold-light rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-200 animate-fade-in-up delay-300 font-medium leading-relaxed px-2 sm:px-4 lg:px-0">
                Get{" "}
                <span className="text-sunstone-gold font-bold">
                  200+ assured placement opportunities
                </span>{" "}
                with{" "}
                <span className="text-sunstone-white font-semibold">
                  Placement Opportunity Program
                </span>
              </p>

              <div className="flex justify-center lg:justify-start animate-fade-in-up delay-700 px-2 sm:px-4 lg:px-0">
                <Button
                  onClick={handleApplyNow}
                  size="lg"
                  className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-sunstone-black px-4 sm:px-6 md:px-8 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl rounded-xl shadow-xl w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">Apply Now - Limited Seats Available</span>
                  <span className="sm:hidden">Apply Now</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 md:ml-3 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </Button>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div className="lg:flex lg:justify-end mt-6 lg:mt-0">
              <div className="bg-sunstone-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-lg mx-auto lg:mx-0 border border-sunstone-gold/20">
                <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-sunstone-navy">
                    Apply Now
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sunstone-navy hover:text-sunstone-navy-dark hover:bg-sunstone-gold/10 transition-colors duration-300 text-xs sm:text-sm p-1 sm:p-2"
                  >
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" />
                    <span className="hidden sm:inline">Help</span>
                  </Button>
                </div>

                <form className="space-y-3 sm:space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest! Our team will contact you soon.'); }}>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none text-sm sm:text-base text-sunstone-black font-medium placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      I want to pursue*
                    </label>
                    <select
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none bg-sunstone-white text-sm sm:text-base text-sunstone-black font-medium"
                      required
                    >
                      <option value="" className="text-gray-500">
                        Select Program
                      </option>
                      <option value="mba" className="text-sunstone-black">
                        MBA
                      </option>
                      <option value="pgdm" className="text-sunstone-black">
                        PGDM
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
                      <option value="mca" className="text-sunstone-black">
                        MCA
                      </option>
                      <option value="bsc" className="text-sunstone-black">
                        B.Sc
                      </option>
                      <option value="msc" className="text-sunstone-black">
                        M.Sc
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none text-sm sm:text-base text-sunstone-black font-medium placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      Select State*
                    </label>
                    <select
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none bg-sunstone-white text-sm sm:text-base text-sunstone-black font-medium"
                      required
                    >
                      <option value="" className="text-gray-500">
                        Select State
                      </option>
                      <option value="andhra-pradesh" className="text-sunstone-black">
                        Andhra Pradesh
                      </option>
                      <option value="arunachal-pradesh" className="text-sunstone-black">
                        Arunachal Pradesh
                      </option>
                      <option value="assam" className="text-sunstone-black">
                        Assam
                      </option>
                      <option value="bihar" className="text-sunstone-black">
                        Bihar
                      </option>
                      <option value="chhattisgarh" className="text-sunstone-black">
                        Chhattisgarh
                      </option>
                      <option value="goa" className="text-sunstone-black">
                        Goa
                      </option>
                      <option value="gujarat" className="text-sunstone-black">
                        Gujarat
                      </option>
                      <option value="haryana" className="text-sunstone-black">
                        Haryana
                      </option>
                      <option value="himachal-pradesh" className="text-sunstone-black">
                        Himachal Pradesh
                      </option>
                      <option value="jharkhand" className="text-sunstone-black">
                        Jharkhand
                      </option>
                      <option value="karnataka" className="text-sunstone-black">
                        Karnataka
                      </option>
                      <option value="kerala" className="text-sunstone-black">
                        Kerala
                      </option>
                      <option value="madhya-pradesh" className="text-sunstone-black">
                        Madhya Pradesh
                      </option>
                      <option value="maharashtra" className="text-sunstone-black">
                        Maharashtra
                      </option>
                      <option value="manipur" className="text-sunstone-black">
                        Manipur
                      </option>
                      <option value="meghalaya" className="text-sunstone-black">
                        Meghalaya
                      </option>
                      <option value="mizoram" className="text-sunstone-black">
                        Mizoram
                      </option>
                      <option value="nagaland" className="text-sunstone-black">
                        Nagaland
                      </option>
                      <option value="odisha" className="text-sunstone-black">
                        Odisha
                      </option>
                      <option value="punjab" className="text-sunstone-black">
                        Punjab
                      </option>
                      <option value="rajasthan" className="text-sunstone-black">
                        Rajasthan
                      </option>
                      <option value="sikkim" className="text-sunstone-black">
                        Sikkim
                      </option>
                      <option value="tamil-nadu" className="text-sunstone-black">
                        Tamil Nadu
                      </option>
                      <option value="telangana" className="text-sunstone-black">
                        Telangana
                      </option>
                      <option value="tripura" className="text-sunstone-black">
                        Tripura
                      </option>
                      <option value="uttar-pradesh" className="text-sunstone-black">
                        Uttar Pradesh
                      </option>
                      <option value="uttarakhand" className="text-sunstone-black">
                        Uttarakhand
                      </option>
                      <option value="west-bengal" className="text-sunstone-black">
                        West Bengal
                      </option>
                      <option value="delhi" className="text-sunstone-black">
                        Delhi
                      </option>
                      <option value="chandigarh" className="text-sunstone-black">
                        Chandigarh
                      </option>
                      <option value="puducherry" className="text-sunstone-black">
                        Puducherry
                      </option>
                      <option value="jammu-kashmir" className="text-sunstone-black">
                        Jammu & Kashmir
                      </option>
                      <option value="ladakh" className="text-sunstone-black">
                        Ladakh
                      </option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-sunstone-navy hover:bg-sunstone-navy-dark text-sunstone-white py-2.5 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl font-bold rounded-xl shadow-lg"
                  >
                    Send OTP
                  </Button>

                  <p className="text-xs text-gray-500 text-center px-1 sm:px-2 leading-tight">
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
      <section className="bg-gradient-to-br from-sunstone-gold/5 via-sunstone-white to-sunstone-navy/5 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sunstone-gold/5 to-transparent opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-sunstone-gold/10 px-6 py-3 rounded-full mb-8 border border-sunstone-gold/20">
              <GraduationCap className="h-6 w-6 text-sunstone-gold" />
              <span className="text-sunstone-navy font-bold text-lg">Trusted by 5000++ Successful Students</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-sunstone-navy mb-6 md:mb-8 leading-tight px-4 lg:px-0">
              <span className="bg-gradient-to-r from-sunstone-navy to-sunstone-gold bg-clip-text text-transparent">
                Pursue Your Dream Degree
              </span>
              <br />
              <span className="text-sunstone-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                MBA • BBA • MCA • BCA • B.Tech
              </span>
              <br />
              <span className="text-sunstone-gold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                at 25+ Premier Colleges Across India
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
              <div className="bg-sunstone-white rounded-2xl p-4 md:p-6 shadow-xl border border-sunstone-gold/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-sunstone-navy mb-2">5000+</div>
                <div className="text-sunstone-gold font-semibold text-sm md:text-base">Students Successfully Placed</div>
                <div className="text-gray-600 text-xs md:text-sm mt-2">Across top companies nationwide</div>
              </div>

              <div className="bg-sunstone-navy rounded-2xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-sunstone-gold mb-2">₹26 LPA</div>
                <div className="text-sunstone-white font-semibold text-sm md:text-base">Highest Package Achieved</div>
                <div className="text-gray-300 text-xs md:text-sm mt-2">Dreams turned into reality</div>
              </div>

              <div className="bg-sunstone-gold rounded-2xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-black text-sunstone-black mb-2">306</div>
                <div className="text-sunstone-black font-semibold text-sm md:text-base">Multiple Offer Winners</div>
                <div className="text-sunstone-black/70 text-xs md:text-sm mt-2">Students with 2+ job offers</div>
              </div>
            </div>
            
            <div className="mt-12">
              <Button
                onClick={handleApplyNow}
                size="lg"
                className="bg-sunstone-navy hover:bg-sunstone-navy-dark text-sunstone-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl rounded-2xl shadow-xl border-2 border-sunstone-gold/30 w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Join 5000+ Success Stories</span>
                <span className="sm:hidden">Join Success Stories</span>
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sunstone-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in bg-sunstone-navy/20 rounded-xl p-3 md:p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ${stat.color} mb-1 md:mb-2 transition-all duration-300 hover:scale-110`}
                >
                  {stat.value}
                </div>
                <div className="text-sunstone-white text-xs sm:text-sm md:text-base opacity-90 leading-tight">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sunstone-navy mb-4 px-4">
              Why Sunstone Powered Programs Stand Out?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-sunstone-navy/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-sunstone-navy/10 px-6 py-3 rounded-full mb-8 border border-sunstone-navy/20">
              <TrendingUp className="h-5 w-5 text-sunstone-navy" />
              <span className="text-sunstone-navy font-semibold text-base">Proven Track Record</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-sunstone-navy mb-6">
              Our Impact Speaks for Itself
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Real results from real students who chose to transform their careers with Sunstone
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-6"></div>
          </div>

          {/* Professional Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Highest Package Card */}
            <div className="bg-sunstone-white rounded-2xl p-8 text-center shadow-xl border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-sunstone-gold to-sunstone-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-sunstone-black" />
              </div>
              <div className="text-4xl font-black text-sunstone-navy mb-3">₹26 LPA</div>
              <div className="text-sunstone-black font-bold text-lg mb-2">Highest Package</div>
              <div className="text-gray-600 text-sm">Record-breaking achievement</div>
            </div>

            {/* ROI Card */}
            <div className="bg-sunstone-navy rounded-2xl p-8 text-center shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-sunstone-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-sunstone-black" />
              </div>
              <div className="text-4xl font-black text-sunstone-gold mb-3">63%</div>
              <div className="text-sunstone-white font-bold text-lg mb-2">Higher ROI</div>
              <div className="text-gray-300 text-sm">Better return on investment</div>
            </div>

            {/* Students Placed Card */}
            <div className="bg-gradient-to-br from-sunstone-gold/10 to-sunstone-gold/20 rounded-2xl p-8 text-center shadow-xl border-2 border-sunstone-gold/30 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-sunstone-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-sunstone-white" />
              </div>
              <div className="text-4xl font-black text-sunstone-navy mb-3">5000+</div>
              <div className="text-sunstone-black font-bold text-lg mb-2">Students Placed</div>
              <div className="text-gray-700 text-sm">Successful career launches</div>
            </div>

            {/* Multiple Offers Card */}
            <div className="bg-sunstone-white rounded-2xl p-8 text-center shadow-xl border-2 border-sunstone-navy/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-sunstone-white" />
              </div>
              <div className="text-4xl font-black text-sunstone-navy mb-3">306</div>
              <div className="text-sunstone-black font-bold text-lg mb-2">Students with 2+ Offers</div>
              <div className="text-gray-600 text-sm">Multiple job offers secured</div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark rounded-2xl p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-sunstone-gold mb-2">1200+</div>
              <div className="text-sunstone-white font-bold text-lg mb-1">Total Recruiters</div>
              <div className="text-gray-300 text-sm">Industry partners hiring our graduates</div>
            </div>
            <div className="bg-sunstone-gold rounded-2xl p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-sunstone-black mb-2">4.6 LPA</div>
              <div className="text-sunstone-black font-bold text-lg mb-1">Average Package</div>
              <div className="text-sunstone-black/70 text-sm">Consistent placement success</div>
            </div>
          </div>


        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sunstone-navy mb-4 px-4">
              Top Recruiters
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Leading companies that trust our graduates
            </p>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-4"></div>
          </div>

          {/* First Row - Right to Left */}
          <div className="relative overflow-hidden mb-6 md:mb-8">
            <div className="flex animate-scroll-right space-x-4 md:space-x-8" style={{ width: 'calc(200% + 64px)' }}>
              {/* First set */}
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fb057e287196f49d3859e0a43390d7c70?format=webp&width=800"
                  alt="Kotak Mahindra Bank"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fa65ffc8f933a429a83506ef5c99c00cf?format=webp&width=800"
                  alt="Bosch"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F6ab16fa8f4da436294218cc798d0ffb4?format=webp&width=800"
                  alt="HCL"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8b23cfcaa25b45aca6ca60e26ffeee9d?format=webp&width=800"
                  alt="TCS"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Faf2a7e3239fb4ee8b5da22b3633d1f21?format=webp&width=800"
                  alt="Paytm"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5792fa3c5f2b42ef973ec27ccd8922f1?format=webp&width=800"
                  alt="Genpact"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fb057e287196f49d3859e0a43390d7c70?format=webp&width=800"
                  alt="Kotak Mahindra Bank"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fa65ffc8f933a429a83506ef5c99c00cf?format=webp&width=800"
                  alt="Bosch"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F6ab16fa8f4da436294218cc798d0ffb4?format=webp&width=800"
                  alt="HCL"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8b23cfcaa25b45aca6ca60e26ffeee9d?format=webp&width=800"
                  alt="TCS"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Faf2a7e3239fb4ee8b5da22b3633d1f21?format=webp&width=800"
                  alt="Paytm"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5792fa3c5f2b42ef973ec27ccd8922f1?format=webp&width=800"
                  alt="Genpact"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-4 md:space-x-8" style={{ width: 'calc(200% + 64px)' }}>
              {/* First set */}
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F98e68749b7514575bcde3a52e7dcc9f4?format=webp&width=800"
                  alt="Bajaj Finserv"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5f2464ab689d49b8bbbed84a4bbfbe52?format=webp&width=800"
                  alt="ANZ"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F59d0017fa3d9416ab3ce0ee614d4fe71?format=webp&width=800"
                  alt="Hero"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F210f3f50118b4d20be1ff7b265c9424c?format=webp&width=800"
                  alt="Airtel"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F13cf02d6a8e6484fa30a7ecff760a9de?format=webp&width=800"
                  alt="Axis Bank"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5da5c2524a7e4d53816c33b2a72bb3df?format=webp&width=800"
                  alt="IBM"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F98e68749b7514575bcde3a52e7dcc9f4?format=webp&width=800"
                  alt="Bajaj Finserv"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5f2464ab689d49b8bbbed84a4bbfbe52?format=webp&width=800"
                  alt="ANZ"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F59d0017fa3d9416ab3ce0ee614d4fe71?format=webp&width=800"
                  alt="Hero"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F210f3f50118b4d20be1ff7b265c9424c?format=webp&width=800"
                  alt="Airtel"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F13cf02d6a8e6484fa30a7ecff760a9de?format=webp&width=800"
                  alt="Axis Bank"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 md:p-4 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5da5c2524a7e4d53816c33b2a72bb3df?format=webp&width=800"
                  alt="IBM"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bright Minds Scholarship Section */}
      <section className="py-16 md:py-20 bg-sunstone-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-sunstone-gold/10 px-6 py-3 rounded-full mb-8 border border-sunstone-gold/30">
              <Award className="h-5 w-5 text-sunstone-gold" />
              <span className="text-sunstone-navy font-semibold text-base">Financial Support Available</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-sunstone-navy mb-4 md:mb-6 px-4">
              Bright Minds Scholarship Program
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto px-4">
              Recognizing academic excellence with financial support up to <span className="text-sunstone-gold font-bold">₹6 Lacs</span> for deserving students
            </p>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Scholarship Image */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sunstone-gold/20 to-sunstone-navy/20 rounded-2xl transform rotate-2"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F13b8398546b349eea73b05379cea83a0?format=webp&width=800"
                  alt="Bright Minds Scholarship - Financial support for academic excellence"
                  className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right - Scholarship Info */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-50 to-sunstone-gold/5 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-200">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-sunstone-navy mb-3 md:mb-4">Merit-Based Financial Awards</h3>
                  <p className="text-gray-600 text-base md:text-lg">Scholarships awarded based on academic performance and potential</p>
                </div>

                <div className="space-y-6">
                  {/* Top 10% */}
                  <div className="bg-sunstone-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-sunstone-gold">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-sunstone-navy">Elite Performance Tier</h4>
                        <p className="text-gray-600 text-sm md:text-base">Top 10% Academic Performers</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl font-black text-sunstone-gold">₹6,00,000</div>
                        <div className="text-xs md:text-sm text-gray-500">Maximum Award</div>
                      </div>
                    </div>
                  </div>

                  {/* Top 25% */}
                  <div className="bg-sunstone-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-sunstone-navy">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-sunstone-navy">Excellence Tier</h4>
                        <p className="text-gray-600 text-sm md:text-base">Top 25% Academic Performers</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl font-black text-sunstone-navy">₹4,00,000</div>
                        <div className="text-xs md:text-sm text-gray-500">Substantial Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Top 50% */}
                  <div className="bg-sunstone-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-gray-400">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-sunstone-navy">Achievement Tier</h4>
                        <p className="text-gray-600 text-sm md:text-base">Top 50% Academic Performers</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl font-black text-gray-700">₹2,00,000</div>
                        <div className="text-xs md:text-sm text-gray-500">Foundation Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark rounded-xl p-4 md:p-6 text-center">
                  <h4 className="text-lg md:text-xl font-bold text-sunstone-white mb-2">Apply Today & Secure Your Future</h4>
                  <p className="text-gray-300 text-xs md:text-sm mb-4">Limited scholarships available on first-come, first-served basis</p>
                  <Button
                    onClick={handleApplyNow}
                    className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-sunstone-black font-bold px-6 md:px-8 py-2 md:py-3 text-base md:text-lg transition-all duration-300 transform hover:scale-105 rounded-lg w-full sm:w-auto"
                  >
                    Apply for Scholarship
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-sunstone-navy/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-sunstone-navy mb-4 md:mb-6 px-4">
              Success Stories That Inspire
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-medium px-4">
              Real students, Real achievements, Real transformations
            </p>
            <div className="h-1 md:h-2 w-32 md:w-40 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-4 md:mt-6"></div>
          </div>
          
          {/* Auto-Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll-x" style={{ width: 'calc(100% + 400px)' }}>
              {[...successStories, ...successStories].map((story, index) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-72 sm:w-80 animate-slide-in-right"
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

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
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
