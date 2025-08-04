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
    name: "Jaya Tiwari",
    package: "Sunstone Graduate",
    campus: "SRMU",
    year: "2022-2025",
    course: "BCA",
    testimonial:
      "Sunstone has been a game-changer in my journey. The practical curriculum, supportive faculty, and collaborative environment have sharpened my skills and broadened my perspective. It's more than an institution—it's a community fostering growth and success.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F186690ab4fef44fe970178b31091c6a8?format=webp&width=800",
  },
  {
    id: 2,
    name: "Balram Jat",
    package: "Current Student",
    campus: "JNU",
    year: "2024-2027",
    course: "BCA",
    testimonial:
      "The admission process at Sunstone was seamless, with clear guidance at every step. The diverse student community and supportive faculty create an engaging learning experience. Modern facilities and a focus on skill development have added immense value to my journey.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F46d9e7da8b4d4986a23ac7bc3bc57c77?format=webp&width=800",
  },
  {
    id: 3,
    name: "Devraj Tripathi",
    package: "Current Student",
    campus: "SRMU",
    year: "2022-2026",
    course: "B.Tech",
    testimonial:
      "Sunstone has been a game-changer for me! The hands-on learning, expert faculty, and supportive environment have boosted my skills and confidence. It's more than just an institution—it's a community that nurtures success.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F46d9c36d98b44d46827f381a7afe15ec?format=webp&width=800",
  },
  {
    id: 4,
    name: "Pulkit Singh",
    package: "Dhanguard 10 LPA",
    campus: "GDG",
    year: "22-24",
    course: "MBA",
    testimonial:
      "I am immensely grateful to Sunstone for the incredible international placement opportunity at Dhanguard. The unwavering support, exceptional faculty, and comprehensive curriculum played a pivotal role in shaping my career.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F2be463e1c8b0473bb0fd5f659ac02eae?format=webp&width=800",
  },
  {
    id: 5,
    name: "Harpreet Kaur",
    package: "Zenoti 8.6 LPA",
    campus: "RBU",
    year: "2021-2023",
    course: "MBA",
    testimonial:
      "My MBA experience with Sunstone has been incredible. The experienced faculty and comprehensive curriculum helped me secure a position at Zenoti and an internship at FundsRoom.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/harpreet-kaur-mba-2021-0fb231?format=webp&width=800",
  },
  {
    id: 6,
    name: "Bijan Biswas",
    package: "Piramal Capital 7 LPA",
    campus: "RGI",
    year: "2021-2023",
    course: "MBA",
    testimonial:
      "I would like to express my gratitude to Sunstone for the invaluable support and guidance that helped me secure a placement at Piramal Capital and Housing Finance Limited.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/1684043070051-670752?format=webp&width=800",
  },
];

const stats = [
  { value: "26 LPA", label: "Highest Package", color: "text-sunstone-gold" },
  { value: "4.6 LPA", label: "Average Package", color: "text-sunstone-gold" },
  {
    value: "306",
    label: "Students with 2+ Offers",
    color: "text-sunstone-gold",
  },
  { value: "5000+", label: "Students Placed", color: "text-sunstone-gold" },
  { value: "1400+", label: "Total Offers", color: "text-sunstone-gold" },
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
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const awards = [
    {
      id: "edtech",
      title: "EdTech 100",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Fbda3bb72988c4d1795299362330be8b0?format=webp&width=800",
    },
    {
      id: "gsv",
      title: "GSV 150",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Fa82dcc397d864ace86260ded1fdc663f?format=webp&width=800",
    },
    {
      id: "innovation",
      title: "Innovation",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F2a2af0b7fb294dc48ea196fb5e95eedc?format=webp&width=800",
    },
    {
      id: "assocham",
      title: "ASSOCHAM",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F582ba6eebf4642a082afea06cbd56d00?format=webp&width=800",
    },
    {
      id: "indiglobal",
      title: "IndiGlobal",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Ffca98ae9ea584fb59b9aea5254adc256?format=webp&width=800",
    },
  ];

  const handleApplyNow = () => {
    // On mobile, show the form instead of alert
    if (window.innerWidth < 768) {
      setShowApplyForm(true);
    } else {
      alert("Thank you for your interest! Our team will contact you soon.");
    }
  };

  return (
    <div className="min-h-screen bg-sunstone-white font-sans">
      {/* Header */}
      <header className="bg-sunstone-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-start items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2Ff83e93f9590748d9b1f3c540b752d182?format=webp&width=800"
                alt="Sunstone"
                className="h-4 sm:h-5 md:h-6 w-auto transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark text-sunstone-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-center lg:text-left animate-slide-in-left order-1">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 md:mb-6 animate-fade-in-up leading-tight">
                  <span className="block text-sunstone-white">
                    Your Dream Career Starts
                  </span>
                  <span className="block text-sunstone-gold">
                    with the Right Course
                  </span>
                </h1>
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
            </div>

            {/* Right Column - Application Form */}
            <div className="flex justify-center lg:justify-end order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg border border-sunstone-gold/20">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <h3 className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-bold text-sunstone-navy">
                    Apply Now
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden md:flex text-sunstone-navy hover:text-sunstone-navy-dark hover:bg-sunstone-gold/10 transition-colors duration-300 text-xs sm:text-sm p-1 sm:p-2"
                      onClick={() => window.open("tel:+918045681999", "_self")}
                    >
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" />
                      <span className="hidden sm:inline">Help</span>
                    </Button>
                  </div>
                </div>

                <form
                  className="space-y-2 sm:space-y-3 md:space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Thank you for your interest! Our team will contact you soon.",
                    );
                  }}
                >
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-2 sm:px-4 py-1 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none text-xs sm:text-base text-sunstone-black font-medium placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      I want to pursue*
                    </label>
                    <select
                      className="w-full px-2 sm:px-4 py-1 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none bg-sunstone-white text-xs sm:text-base text-sunstone-black font-medium"
                      required
                    >
                      <option
                        value=""
                        className="text-gray-500 text-xs md:text-base"
                      >
                        Select Program
                      </option>
                      <option
                        value="mba"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        MBA
                      </option>
                      <option
                        value="pgdm"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        PGDM
                      </option>
                      <option
                        value="bba"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        BBA
                      </option>
                      <option
                        value="btech"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        B.Tech
                      </option>
                      <option
                        value="bcom"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        B.Com
                      </option>
                      <option
                        value="bca"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        BCA
                      </option>
                      <option
                        value="mca"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        MCA
                      </option>
                      <option
                        value="bsc"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        B.Sc
                      </option>
                      <option
                        value="msc"
                        className="text-sunstone-black text-xs md:text-base"
                      >
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
                      className="w-full px-2 sm:px-4 py-1 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none text-xs sm:text-base text-sunstone-black font-medium placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-sunstone-black mb-1 sm:mb-2">
                      Select State*
                    </label>
                    <select
                      className="w-full px-2 sm:px-4 py-1 sm:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 sm:focus:ring-3 focus:ring-sunstone-gold focus:border-sunstone-gold outline-none bg-sunstone-white text-xs sm:text-base text-sunstone-black font-medium"
                      required
                    >
                      <option
                        value=""
                        className="text-gray-500 text-xs md:text-base"
                      >
                        Select State
                      </option>
                      <option
                        value="andhra-pradesh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Andhra Pradesh
                      </option>
                      <option
                        value="arunachal-pradesh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Arunachal Pradesh
                      </option>
                      <option
                        value="assam"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Assam
                      </option>
                      <option
                        value="bihar"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Bihar
                      </option>
                      <option
                        value="chhattisgarh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Chhattisgarh
                      </option>
                      <option
                        value="goa"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Goa
                      </option>
                      <option
                        value="gujarat"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Gujarat
                      </option>
                      <option
                        value="haryana"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Haryana
                      </option>
                      <option
                        value="himachal-pradesh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Himachal Pradesh
                      </option>
                      <option
                        value="jharkhand"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Jharkhand
                      </option>
                      <option
                        value="karnataka"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Karnataka
                      </option>
                      <option
                        value="kerala"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Kerala
                      </option>
                      <option
                        value="madhya-pradesh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Madhya Pradesh
                      </option>
                      <option
                        value="maharashtra"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Maharashtra
                      </option>
                      <option
                        value="manipur"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Manipur
                      </option>
                      <option
                        value="meghalaya"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Meghalaya
                      </option>
                      <option
                        value="mizoram"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Mizoram
                      </option>
                      <option
                        value="nagaland"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Nagaland
                      </option>
                      <option
                        value="odisha"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Odisha
                      </option>
                      <option
                        value="punjab"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Punjab
                      </option>
                      <option
                        value="rajasthan"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Rajasthan
                      </option>
                      <option
                        value="sikkim"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Sikkim
                      </option>
                      <option
                        value="tamil-nadu"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Tamil Nadu
                      </option>
                      <option
                        value="telangana"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Telangana
                      </option>
                      <option
                        value="tripura"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Tripura
                      </option>
                      <option
                        value="uttar-pradesh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Uttar Pradesh
                      </option>
                      <option
                        value="uttarakhand"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Uttarakhand
                      </option>
                      <option
                        value="west-bengal"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        West Bengal
                      </option>
                      <option
                        value="delhi"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Delhi
                      </option>
                      <option
                        value="chandigarh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Chandigarh
                      </option>
                      <option
                        value="puducherry"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Puducherry
                      </option>
                      <option
                        value="jammu-kashmir"
                        className="text-sunstone-black text-xs md:text-base"
                      >
                        Jammu & Kashmir
                      </option>
                      <option
                        value="ladakh"
                        className="text-sunstone-black text-xs md:text-base"
                      >
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

      {/* New Age Education Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-sunstone-gold/5 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sunstone-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-sunstone-navy/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sunstone-gold/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sunstone-navy/10 to-sunstone-gold/10 backdrop-blur-sm px-8 py-4 rounded-2xl mb-8 border border-sunstone-gold/20 shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-sunstone-gold to-sunstone-gold-dark rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sunstone-navy font-bold text-lg md:text-xl">
                Experience New Age Education
              </span>
            </div>

            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-sunstone-navy mb-4 sm:mb-6 md:mb-8 leading-tight px-3 sm:px-4 lg:px-0">
              <span className="bg-gradient-to-r from-sunstone-navy to-sunstone-gold bg-clip-text text-transparent">
                Revolutionizing Higher Education for Tomorrow's Leaders
              </span>
              <br />
              <span className="text-sunstone-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                MBA • BBA • MCA • BCA • B.Tech
              </span>
              <br />
              <span className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-4 block max-w-4xl mx-auto leading-relaxed">
                Transform your career with industry-integrated programs designed by corporate leaders,
                featuring cutting-edge curriculum, practical learning experiences, and guaranteed placement support.
              </span>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 max-w-6xl mx-auto">
                <div className="group bg-white rounded-2xl p-6 border border-sunstone-navy/20 hover:border-sunstone-navy/60 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sunstone-navy text-lg font-bold mb-2">Curriculum for</h3>
                  <p className="text-sunstone-navy text-base font-semibold">Jobs of 2030</p>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-sunstone-navy/20 hover:border-sunstone-navy/60 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{animationDelay: '0.2s'}}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-sunstone-navy text-lg font-bold mb-2">Corporate Leaders</h3>
                  <p className="text-sunstone-navy text-base font-semibold">Turned Educators</p>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-sunstone-navy/20 hover:border-sunstone-navy/60 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{animationDelay: '0.4s'}}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-sunstone-navy text-lg font-bold mb-2">Build Your</h3>
                  <p className="text-sunstone-navy text-base font-semibold">First Startup</p>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-sunstone-navy/20 hover:border-sunstone-navy/60 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{animationDelay: '0.6s'}}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-sunstone-navy text-lg font-bold mb-2">NextGen</h3>
                  <p className="text-sunstone-navy text-base font-semibold">Tech Tools</p>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-sunstone-navy/20 hover:border-sunstone-navy/60 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{animationDelay: '0.8s'}}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-sunstone-navy text-lg font-bold mb-2">Practical Learning</h3>
                  <p className="text-sunstone-navy text-base font-semibold">Over Theory</p>
                </div>
              </div>

            </h2>



            {/* Mobile Moving Carousel */}
            <div className="block md:hidden">
              <div className="relative overflow-hidden">
                <div
                  className="flex space-x-4 animate-scroll-right"
                  style={{ width: "calc(200% + 32px)" }}
                >
                  <div className="flex-shrink-0 w-64 bg-sunstone-white rounded-xl p-4 shadow-xl border border-sunstone-gold/20 snap-start">
                    <div className="text-2xl font-black text-sunstone-navy mb-2">
                      7×
                    </div>
                    <div className="text-sunstone-gold font-semibold text-sm mb-1">
                      more companies
                    </div>
                    <div className="text-gray-600 text-xs">
                      vs management institutes
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-64 bg-white rounded-xl p-4 shadow-xl snap-start">
                    <div className="text-2xl font-black text-sunstone-navy mb-2">
                      26 LPA
                    </div>
                    <div className="text-sunstone-black font-semibold text-sm mb-1">
                      Highest Package Achieved
                    </div>
                    <div className="text-gray-600 text-xs">
                      Dreams turned into reality
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-64 bg-white rounded-xl p-4 shadow-xl">
                    <div className="text-2xl font-black text-sunstone-navy mb-2">
                      306
                    </div>
                    <div className="text-sunstone-black font-semibold text-sm mb-1">
                      Multiple Offer Winners
                    </div>
                    <div className="text-gray-600 text-xs">
                      Students with 2+ job offers
                    </div>
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="flex-shrink-0 w-64 bg-sunstone-white rounded-xl p-4 shadow-xl border border-sunstone-gold/20">
                    <div className="text-2xl font-black text-sunstone-navy mb-2">
                      5000+
                    </div>
                    <div className="text-sunstone-gold font-semibold text-sm mb-1">
                      Students Successfully Placed
                    </div>
                    <div className="text-gray-600 text-xs">
                      Across top companies nationwide
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-64 bg-white rounded-xl p-4 shadow-xl">
                    <div className="text-2xl font-black text-sunstone-navy mb-2">
                      ��26 LPA
                    </div>
                    <div className="text-sunstone-black font-semibold text-sm mb-1">
                      Highest Package Achieved
                    </div>
                    <div className="text-gray-600 text-xs">
                      Dreams turned into reality
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-64 bg-white rounded-xl p-4 shadow-xl">
                    <div className="text-2xl font-black text-sunstone-navy mb-2">
                      306
                    </div>
                    <div className="text-sunstone-black font-semibold text-sm mb-1">
                      Multiple Offer Winners
                    </div>
                    <div className="text-gray-600 text-xs">
                      Students with 2+ job offers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sunstone-navy py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 px-3 sm:px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in bg-sunstone-navy/20 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold ${stat.color} mb-0.5 sm:mb-1 md:mb-2 transition-all duration-300 hover:scale-110`}
                >
                  {stat.value}
                </div>
                <div className="text-sunstone-white text-xs leading-tight opacity-90">
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
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-sunstone-navy mb-3 sm:mb-4 px-3 sm:px-4">
              Why Sunstone Powered Programs Stand Out?
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-3 sm:px-4">
              See how our programs compare with traditional colleges
            </p>
          </div>

          <div className="bg-sunstone-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up delay-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark text-sunstone-white">
                    <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                      Key Offerings
                    </th>
                    <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-sunstone-gold/20">
                      Sunstone-Powered Programs
                    </th>
                    <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold">
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
                      <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-6 font-semibold text-xs sm:text-sm md:text-base text-sunstone-black bg-gray-50">
                        {row.feature}
                      </td>
                      <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-6 text-center bg-sunstone-gold/10 border-l-2 sm:border-l-4 border-sunstone-gold">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-sunstone-gold flex-shrink-0" />
                          <span className="text-sunstone-black font-medium text-xs sm:text-sm md:text-base leading-tight">
                            {row.sunstone}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-6 text-center bg-gray-100 border-l-2 sm:border-l-4 border-gray-400">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <XCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />
                          <span className="text-sunstone-black font-medium text-xs sm:text-sm md:text-base leading-tight">
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
              <span className="text-sunstone-navy font-semibold text-base">
                Proven Track Record
              </span>
            </div>

            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-sunstone-navy mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">
              Our Impact Speaks for Itself
            </h2>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium max-w-3xl mx-auto px-3 sm:px-4">
              Real results from real students who chose to transform their
              careers with Sunstone
            </p>
            <div className="h-0.5 sm:h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
          </div>

          {/* Professional Stats Grid - Consistent across all devices */}
          <div className="mb-8">
            {/* Unified Grid Layout */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                {/* Highest Package Card */}
                <div className="bg-sunstone-white rounded-lg p-3 text-center shadow-lg border border-gray-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-sunstone-gold to-sunstone-gold-light rounded-full flex items-center justify-center mx-auto mb-1">
                    <Award className="h-4 w-4 text-sunstone-black" />
                  </div>
                  <div className="text-lg font-black text-sunstone-navy mb-0.5">
                    ₹26 LPA
                  </div>
                  <div className="text-sunstone-black font-bold text-xs mb-0.5">
                    Highest Package
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(74, 74, 74, 1)" }}
                  >
                    Record-breaking
                  </div>
                </div>
              </div>
              <div>
                {/* ROI Card */}
                <div className="bg-white rounded-lg p-3 text-center shadow-lg">
                  <div className="w-8 h-8 bg-sunstone-gold rounded-full flex items-center justify-center mx-auto mb-1">
                    <TrendingUp className="h-4 w-4 text-black" />
                  </div>
                  <div className="text-lg font-black text-sunstone-navy mb-0.5">
                    63%
                  </div>
                  <div className="text-black font-bold text-xs mb-0.5">
                    Higher ROI
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(74, 74, 74, 1)" }}
                  >
                    Better return
                  </div>
                </div>
              </div>
              <div>
                {/* Students Placed Card */}
                <div className="bg-white rounded-lg p-3 text-center shadow-lg border border-sunstone-gold/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-sunstone-gold to-sunstone-gold-light rounded-full flex items-center justify-center mx-auto mb-1">
                    <Award className="h-4 w-4 text-black" />
                  </div>
                  <div className="text-lg font-black text-sunstone-navy mb-0.5">
                    5000+
                  </div>
                  <div className="text-sunstone-black font-bold text-xs mb-0.5">
                    Students Placed
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(74, 74, 74, 1)" }}
                  >
                    Career launches
                  </div>
                </div>
              </div>
              <div>
                {/* Multiple Offers Card */}
                <div className="bg-sunstone-white rounded-lg p-3 text-center shadow-lg border border-sunstone-navy/20">
                  <div className="w-8 h-8 bg-sunstone-gold rounded-full flex items-center justify-center mx-auto mb-1">
                    <TrendingUp className="h-4 w-4 text-black" />
                  </div>
                  <div className="text-lg font-black text-sunstone-navy mb-0.5">
                    306
                  </div>
                  <div className="text-sunstone-black font-bold text-xs mb-0.5">
                    2+ Offers
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(74, 74, 74, 1)" }}
                  >
                    Multiple offers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 px-3 sm:px-4 md:px-0">
            <div className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-xl">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-sunstone-gold mb-1 sm:mb-2">
                1400+
              </div>
              <div className="text-sunstone-white font-bold text-xs sm:text-base md:text-lg mb-1">
                Total Offers
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                5000+ students placed with 7× more companies vs management institutes
              </div>
            </div>
            <div className="bg-sunstone-navy rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-xl">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-sunstone-gold mb-1 sm:mb-2">
                4.6 LPA
              </div>
              <div className="text-sunstone-white font-bold text-xs sm:text-base md:text-lg mb-1">
                Average Package
              </div>
              <div className="text-sunstone-white text-xs sm:text-sm">
                Consistent placement success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-sunstone-navy mb-2 sm:mb-3 px-3 sm:px-4">
              Top Recruiters
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-3 sm:px-4">
              Leading companies that trust our graduates
            </p>
            <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-3 sm:mt-4"></div>
          </div>

          {/* Mobile Horizontal Animation View */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-4 animate-scroll-right"
                style={{ width: "calc(200% + 32px)" }}
              >
                {/* First set */}
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fb057e287196f49d3859e0a43390d7c70?format=webp&width=800"
                    alt="Kotak Mahindra Bank"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fa65ffc8f933a429a83506ef5c99c00cf?format=webp&width=800"
                    alt="Bosch"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F6ab16fa8f4da436294218cc798d0ffb4?format=webp&width=800"
                    alt="HCL"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8b23cfcaa25b45aca6ca60e26ffeee9d?format=webp&width=800"
                    alt="TCS"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Faf2a7e3239fb4ee8b5da22b3633d1f21?format=webp&width=800"
                    alt="Paytm"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5792fa3c5f2b42ef973ec27ccd8922f1?format=webp&width=800"
                    alt="Genpact"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F98e68749b7514575bcde3a52e7dcc9f4?format=webp&width=800"
                    alt="Bajaj Finserv"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5f2464ab689d49b8bbbed84a4bbfbe52?format=webp&width=800"
                    alt="ANZ"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F59d0017fa3d9416ab3ce0ee614d4fe71?format=webp&width=800"
                    alt="Hero"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F210f3f50118b4d20be1ff7b265c9424c?format=webp&width=800"
                    alt="Airtel"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F13cf02d6a8e6484fa30a7ecff760a9de?format=webp&width=800"
                    alt="Axis Bank"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5da5c2524a7e4d53816c33b2a72bb3df?format=webp&width=800"
                    alt="IBM"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fb057e287196f49d3859e0a43390d7c70?format=webp&width=800"
                    alt="Kotak Mahindra Bank"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fa65ffc8f933a429a83506ef5c99c00cf?format=webp&width=800"
                    alt="Bosch"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F6ab16fa8f4da436294218cc798d0ffb4?format=webp&width=800"
                    alt="HCL"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8b23cfcaa25b45aca6ca60e26ffeee9d?format=webp&width=800"
                    alt="TCS"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Faf2a7e3239fb4ee8b5da22b3633d1f21?format=webp&width=800"
                    alt="Paytm"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F5792fa3c5f2b42ef973ec27ccd8922f1?format=webp&width=800"
                    alt="Genpact"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* First Row - Right to Left */}
          <div className="hidden md:block relative overflow-hidden mb-6 md:mb-8">
            <div
              className="flex animate-scroll-right space-x-4 md:space-x-8"
              style={{ width: "calc(200% + 64px)" }}
            >
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
          <div className="hidden md:block relative overflow-hidden">
            <div
              className="flex animate-scroll-left space-x-4 md:space-x-8"
              style={{ width: "calc(200% + 64px)" }}
            >
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

      {/* Awards & Recognition Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-sunstone-navy/5 to-sunstone-gold/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-sunstone-gold/10 px-6 py-3 rounded-full mb-8 border border-sunstone-gold/30">
              <Award className="h-5 w-5 text-sunstone-gold" />
              <span className="text-sunstone-navy font-semibold text-base">
                Awards & Recognition
              </span>
            </div>

            <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black text-sunstone-navy mb-4 md:mb-6 px-4">
              Internationally Recognized Excellence
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto px-4">
              Our commitment to educational excellence has been acknowledged by
              leading industry bodies worldwide
            </p>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-4 md:mt-6"></div>
          </div>

          {/* Mobile Awards Horizontal Scroll */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-4 animate-scroll-left"
                style={{ width: "calc(200% + 32px)" }}
              >
                {/* First set of awards */}
                {awards.map((award, index) => (
                  <div
                    key={`mobile-${award.id}`}
                    className="flex-shrink-0 w-48 h-36 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-16 h-16 mb-2 object-contain"
                    />
                    <p className="text-sm font-bold text-sunstone-navy text-center leading-tight">
                      {award.title}
                    </p>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {awards.map((award, index) => (
                  <div
                    key={`mobile-dup-${award.id}`}
                    className="flex-shrink-0 w-48 h-36 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-16 h-16 mb-2 object-contain"
                    />
                    <p className="text-sm font-bold text-sunstone-navy text-center leading-tight">
                      {award.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Awards - Clean Horizontal Scrolling */}
          <div className="hidden md:block relative overflow-hidden">
            <div
              className="flex animate-wave-scroll space-x-8 md:space-x-12"
              style={{ width: "calc(200% + 96px)" }}
            >
              {/* First set */}
              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-gold/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Fbda3bb72988c4d1795299362330be8b0?format=webp&width=800"
                  alt="EdTech 100 Award"
                  className="w-32 h-32 mb-3 md:mb-4 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "160px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  EdTech 100
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-gradient-to-br from-sunstone-navy/5 to-white rounded-xl shadow-lg border border-sunstone-navy/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-navy/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Fa82dcc397d864ace86260ded1fdc663f?format=webp&width=800"
                  alt="GSV 150"
                  className="w-24 h-24 mb-2 md:mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "128px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  GSV 150
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-gold/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F2a2af0b7fb294dc48ea196fb5e95eedc?format=webp&width=800"
                  alt="Innovation"
                  className="w-32 h-32 mb-3 md:mb-4 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "160px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  Innovation
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-gradient-to-br from-sunstone-navy/5 to-white rounded-xl shadow-lg border border-sunstone-navy/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-navy/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F582ba6eebf4642a082afea06cbd56d00?format=webp&width=800"
                  alt="ASSOCHAM"
                  className="w-24 h-24 mb-2 md:mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "128px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  ASSOCHAM
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-gold/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Ffca98ae9ea584fb59b9aea5254adc256?format=webp&width=800"
                  alt="IndiGlobal"
                  className="w-24 h-24 mb-2 md:mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "129px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  IndiGlobal
                </p>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-gold/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Fbda3bb72988c4d1795299362330be8b0?format=webp&width=800"
                  alt="EdTech 100 Award"
                  className="w-32 h-32 mb-3 md:mb-4 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "160px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  EdTech 100
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-gradient-to-br from-sunstone-navy/5 to-white rounded-xl shadow-lg border border-sunstone-navy/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-navy/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Fa82dcc397d864ace86260ded1fdc663f?format=webp&width=800"
                  alt="GSV 150"
                  className="w-24 h-24 mb-2 md:mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "128px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  GSV 150
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-gold/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F2a2af0b7fb294dc48ea196fb5e95eedc?format=webp&width=800"
                  alt="Innovation"
                  className="w-32 h-32 mb-3 md:mb-4 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "160px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  Innovation
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-gradient-to-br from-sunstone-navy/5 to-white rounded-xl shadow-lg border border-sunstone-navy/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-navy/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F582ba6eebf4642a082afea06cbd56d00?format=webp&width=800"
                  alt="ASSOCHAM"
                  className="w-24 h-24 mb-2 md:mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "128px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  ASSOCHAM
                </p>
              </div>

              <div className="flex-shrink-0 w-64 h-52 md:w-80 md:h-64 bg-white rounded-xl shadow-lg border border-sunstone-gold/20 flex flex-col items-center justify-center p-4 md:p-8 hover:shadow-xl transition-all duration-500 hover:border-sunstone-gold/50 group animate-float-up">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Ffca98ae9ea584fb59b9aea5254adc256?format=webp&width=800"
                  alt="IndiGlobal"
                  className="w-24 h-24 mb-2 md:mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
                  style={{ width: "203px", height: "129px" }}
                />
                <p className="text-sm md:text-base font-bold text-sunstone-navy text-center leading-tight">
                  IndiGlobal
                </p>
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
              <span className="text-sunstone-navy font-semibold text-base">
                Financial Support Available
              </span>
            </div>

            <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black text-sunstone-navy mb-4 md:mb-6 px-4">
              Bright Minds Scholarship Program
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto px-4">
              Recognizing academic excellence with financial support up to{" "}
              <span className="text-sunstone-gold font-bold">₹6 Lacs</span> for
              deserving students
            </p>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
            {/* Left - Scholarship Image */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  // Scroll to the application form in the hero section
                  const applicationForm = document.querySelector("form");
                  if (applicationForm) {
                    applicationForm.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    // Focus on the first input field
                    const firstInput =
                      applicationForm.querySelector('input[type="text"]');
                    if (firstInput) {
                      setTimeout(() => firstInput.focus(), 500);
                    }
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sunstone-gold/20 to-sunstone-navy/20 rounded-2xl transform rotate-2"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F13b8398546b349eea73b05379cea83a0?format=webp&width=800"
                  alt="Bright Minds Scholarship - Financial support for academic excellence"
                  className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sunstone-navy font-bold text-sm">
                      Click to Apply
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Scholarship Info */}
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-50 to-sunstone-gold/5 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-200">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-sunstone-navy mb-3 md:mb-4">
                    Merit-Based Financial Awards
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Scholarships awarded based on academic performance and
                    potential
                  </p>
                </div>

                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-6">
                  {/* Top 10% */}
                  <div className="bg-sunstone-white rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-md sm:shadow-lg border-l-2 sm:border-l-4 border-sunstone-gold">
                    <div className="flex items-center justify-between gap-1 sm:gap-2">
                      <div>
                        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-sunstone-navy">
                          Elite Tier
                        </h4>
                        <p className="text-gray-600 text-xs">Top 10%</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-sunstone-gold">
                          ₹6L
                        </div>
                        <div className="text-xs text-gray-500">Max Award</div>
                      </div>
                    </div>
                  </div>

                  {/* Top 25% */}
                  <div className="bg-sunstone-white rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-md sm:shadow-lg border-l-2 sm:border-l-4 border-sunstone-navy">
                    <div className="flex items-center justify-between gap-1 sm:gap-2">
                      <div>
                        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-sunstone-navy">
                          Excellence
                        </h4>
                        <p className="text-gray-600 text-xs">Top 25%</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-sunstone-navy">
                          <p>₹4L</p>
                        </div>
                        <div className="text-xs text-gray-500">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Top 50% */}
                  <div className="bg-sunstone-white rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-md sm:shadow-lg border-l-2 sm:border-l-4 border-gray-400">
                    <div className="flex items-center justify-between gap-1 sm:gap-2">
                      <div>
                        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-sunstone-navy">
                          Achievement
                        </h4>
                        <p className="text-gray-600 text-xs">Top 50%</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-gray-700">
                          ₹2L
                        </div>
                        <div className="text-xs text-gray-500">Foundation</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark rounded-xl p-4 md:p-6 text-center">
                  <h4 className="text-xs md:text-xl font-bold text-sunstone-white mb-2">
                    Merit-Based Financial Support
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm mb-4">
                    Limited scholarships available on first-come, first-served
                    basis for qualifying students
                  </p>
                  <button
                    onClick={() => {
                      // Scroll to the application form in the hero section
                      const applicationForm = document.querySelector("form");
                      if (applicationForm) {
                        applicationForm.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                        // Focus on the first input field
                        const firstInput =
                          applicationForm.querySelector('input[type="text"]');
                        if (firstInput) {
                          setTimeout(() => firstInput.focus(), 500);
                        }
                      }
                    }}
                    className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-black px-6 py-3 rounded-xl font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 w-full"
                  >
                    Apply Now for Scholarship
                    <ArrowRight className="inline-block ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Colleges Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-sunstone-navy/10 px-4 py-2 rounded-full mb-6 border border-sunstone-navy/20">
              <GraduationCap className="h-4 w-4 text-sunstone-navy" />
              <span className="text-sunstone-navy font-bold text-sm">
                Premier Partner Colleges
              </span>
            </div>

            <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black text-sunstone-navy mb-3 leading-tight relative overflow-hidden">
              <span className="inline-block animate-bounce-in-down">
                <span className="bg-gradient-to-r from-sunstone-navy via-sunstone-navy to-sunstone-gold bg-clip-text text-transparent animate-gradient-x">
                  Discover Your
                </span>
              </span>
              <span className="block animate-bounce-in-up delay-500">
                <span className="bg-gradient-to-r from-sunstone-gold via-sunstone-gold-light to-sunstone-gold-dark bg-clip-text text-transparent animate-shimmer">
                  Dream College
                </span>
              </span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-sunstone-gold rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-sunstone-gold to-transparent animate-pulse"></div>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Choose from India's top institutions with
              <span className="text-sunstone-gold font-bold">
                {" "}
                guaranteed placement opportunities
              </span>
            </p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-3 animate-expand-horizontal delay-700"></div>
          </div>

          {/* Explore All Colleges Button */}
          <div className="text-center mb-8">
            <button
              onClick={() =>
                window.open("https://sunstone.in/campuses", "_blank")
              }
              className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-black px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              Explore All Colleges
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>

          {/* College Showcase - Horizontal Animation */}
          <div className="mb-8">
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-3 animate-scroll-left"
                style={{ width: "calc(200% + 24px)" }}
              >
                {/* ADYPU */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F5025fdb2131949649df42ffd478945d7?format=webp&width=800"
                      alt="AJEENKYA DY PATIL UNIVERSITY"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      <p>AJEENKYA DY PATIL UNIVERSITY</p>
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Pune • BCA • UGC
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ 2 Specialisations</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/ajeenkya-dy-patil-university",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* SAGE University */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2Fd4292f0301e54e758271a20e4be45b78?format=webp"
                      alt="SAGE University"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      SAGE University
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Indore • MBA • AICTE
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ 2 Specialisations</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/sage",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Hi-Tech Institute */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F85d3b45ecf8743c79806f64b71c74b5e?format=webp&width=800"
                      alt="HITECH INSTITUTE OF ENGINEERING AND TECHNOLOGY"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      Hi-Tech Institute of Engineering & Technology
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      <p>Ghaziabad • B.Tech • AICTE</p>
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ 2 Programs</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/hi-tech-institute",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Vivekananda Global University */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F59b6bcb17b9345588c7d09580538f412?format=webp&width=800"
                      alt="Vivekananda Global University"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      Vivekananda Global University
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      <p>Jaipur • B.Tech • UGC</p>
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ Computer Science</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/vivekananda-global-university",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Rathinam College */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2Ff76f4bbe02f44c8fb202d3c56b0397cb?format=webp"
                      alt="Rathinam College"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      Rathinam College of Arts & Science
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Tamil Nadu • BBA • UGC
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>�� BBA (General)</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/rathinam-group-of-institutions",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                {/* ADYPU */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F5025fdb2131949649df42ffd478945d7?format=webp&width=800"
                      alt="AJEENKYA DY PATIL UNIVERSITY"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      AJEENKYA DY PATIL UNIVERSITY
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Pune • BCA • UGC
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ 2 Specialisations</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/ajeenkya-dy-patil-university",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* SAGE University */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2Fd4292f0301e54e758271a20e4be45b78?format=webp"
                      alt="SAGE University"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      SAGE University
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Indore • MBA • AICTE
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ 2 Specialisations</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/sage",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Hi-Tech Institute */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F85d3b45ecf8743c79806f64b71c74b5e?format=webp&width=800"
                      alt="HITECH INSTITUTE OF ENGINEERING AND TECHNOLOGY"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      Hi-Tech Institute of Engineering & Technology
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Ghaziabad • B.Tech • AICTE
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ 2 Programs</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/hi-tech-institute",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Vivekananda Global University */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2F59b6bcb17b9345588c7d09580538f412?format=webp&width=800"
                      alt="Vivekananda Global University"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      Vivekananda Global University
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Jaipur • B.Tech • UGC
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ Computer Science</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/vivekananda-global-university",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>

                {/* Rathinam College */}
                <div className="flex-shrink-0 w-56 md:w-72 lg:w-80 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                  <div className="relative h-32 md:h-40">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe0105df6bb4344f091b8129f66930243%2Ff76f4bbe02f44c8fb202d3c56b0397cb?format=webp"
                      alt="Rathinam College"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-sunstone-navy mb-1 truncate">
                      Rathinam College of Arts & Science
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Tamil Nadu • BBA • UGC
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs md:text-sm text-gray-600 space-y-0.5">
                        <p>✓ BBA (General)</p>
                        <p>✓ 10 Certifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sunstone.in/campuses/rathinam-group-of-institutions",
                          "_blank",
                        )
                      }
                      className="w-full bg-sunstone-navy text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-sunstone-navy-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Book Tour →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center"></div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border border-sunstone-gold/30">
              <h3 className="text-sm sm:text-base md:text-2xl lg:text-3xl font-bold text-sunstone-white mb-2 sm:mb-3 md:mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who chose the right
                college for their career
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
                <button
                  onClick={() => {
                    const heroSection = document.querySelector("section");
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-sunstone-gold hover:bg-sunstone-gold-dark text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="inline-block ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section
        id="success-stories"
        className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-sunstone-navy/5 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-sunstone-navy mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto font-medium px-3 sm:px-4">
              Real students, Real achievements, Real transformations
            </p>
            <div className="h-0.5 sm:h-1 md:h-2 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-sunstone-gold to-sunstone-navy rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
          </div>

          {/* Mobile Success Stories */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Current Story Display */}
              <div className="flex justify-center mb-6">
                <div className="w-80 bg-sunstone-white rounded-3xl shadow-xl overflow-hidden border border-sunstone-gold/20">
                  {/* Header */}
                  <div className="relative h-32 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark flex items-center justify-center overflow-hidden">
                    <img
                      src={successStories[currentStoryIndex].image}
                      alt={successStories[currentStoryIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-sunstone-white z-10 shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-sunstone-navy mb-2">
                      {successStories[currentStoryIndex].name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-sunstone-navy/10 text-sunstone-navy px-2 py-1 rounded-full text-xs font-medium">
                        {successStories[currentStoryIndex].campus}
                      </span>
                      <span className="bg-sunstone-gold/20 text-sunstone-black px-2 py-1 rounded-full text-xs font-medium">
                        {successStories[currentStoryIndex].year}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {successStories[currentStoryIndex].course}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      "{successStories[currentStoryIndex].testimonial}"
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

              {/* Dots Navigation */}
              <div className="flex justify-center space-x-2 mb-4">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStoryIndex
                        ? "bg-sunstone-gold scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Auto-Scrolling Container */}
          <div className="hidden md:block relative overflow-hidden">
            <div
              className="flex space-x-8 animate-scroll-x"
              style={{ width: "calc(100% + 400px)" }}
            >
              {[...successStories, ...successStories].map((story, index) => (
                <div
                  key={`${story.id}-${index}`}
                  className="flex-shrink-0 w-60 sm:w-72 md:w-80 animate-slide-in-right"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    scrollSnapAlign: "start",
                  }}
                >
                  <div className="bg-sunstone-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-sunstone-gold/20 h-full">
                    {/* Header */}
                    <div className="relative h-32 md:h-40 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark flex items-center justify-center overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-sunstone-white z-10 transition-all duration-500 hover:scale-110 shadow-xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 md:p-6">
                      <h3 className="text-xs sm:text-base md:text-lg font-bold text-sunstone-navy mb-1 sm:mb-2">
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

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
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

      {/* Limited Seats Section */}
      <section className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark py-4 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sunstone-gold/10 to-sunstone-gold/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-1 md:gap-3 mb-3 md:mb-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-sunstone-gold rounded-full animate-pulse"></div>
              <h2 className="text-lg md:text-4xl lg:text-5xl font-black text-sunstone-white tracking-tight leading-tight">
                LIMITED SEATS AVAILABLE FOR 2025
              </h2>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-sunstone-gold rounded-full animate-pulse"></div>
            </div>
            <div className="mb-4 md:mb-8">
              <p className="text-gray-200 text-sm md:text-2xl mb-1 md:mb-2 font-medium">
                Exclusive Admission Opportunity
              </p>
              <p className="text-gray-300 text-xs md:text-lg max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
                Secure your spot in India's most sought-after programs. Limited
                seats available for exceptional candidates.
              </p>
            </div>
            <button
              onClick={() => {
                const heroSection = document.querySelector("section");
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-sunstone-gold text-sunstone-navy hover:bg-sunstone-gold-light px-6 py-2.5 md:px-16 md:py-6 rounded-xl md:rounded-2xl font-bold md:font-black text-sm md:text-xl shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transform transition-all duration-300 hover:scale-105 border border-sunstone-gold-light"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-navy text-sunstone-white py-0.5 md:py-8">
        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-6">
            <div className="md:col-span-1">
              <p className="text-gray-200 text-xs mb-1 md:mb-4 leading-tight">
                Transforming careers through industry-focused education.
              </p>
              <div className="flex space-x-0.5 md:space-x-3">
                <a
                  href="https://www.instagram.com/sunstone.in/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 md:p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Instagram className="h-3 w-3 md:h-5 md:w-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@SunstoneIND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 p-1 md:p-2 rounded-full hover:bg-red-700 transition-all duration-300"
                >
                  <Youtube className="h-3 w-3 md:h-5 md:w-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/sunstoneedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-1 md:p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  <Facebook className="h-3 w-3 md:h-5 md:w-5 text-white" />
                </a>
                <a
                  href="https://in.linkedin.com/school/sunstone-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-1 md:p-2 rounded-full hover:bg-blue-900 transition-all duration-300"
                >
                  <Linkedin className="h-3 w-3 md:h-5 md:w-5 text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-base mb-0.5 md:mb-4 text-sunstone-gold">
                Programs
              </h4>
              <ul className="space-y-0 md:space-y-2 text-xs">
                <li>
                  <a
                    href="https://sunstone.in/mba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300"
                  >
                    MBA/PGDM
                  </a>
                </li>
                <li>
                  <a
                    href="https://sunstone.in/bba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300"
                  >
                    BBA
                  </a>
                </li>
                <li>
                  <a
                    href="https://sunstone.in/btech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300"
                  >
                    B.Tech
                  </a>
                </li>
                <li>
                  <a
                    href="https://sunstone.in/bca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300"
                  >
                    BCA
                  </a>
                </li>
                <li>
                  <a
                    href="https://sunstone.in/mca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300"
                  >
                    MCA
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xs md:text-base mb-0.5 md:mb-4 text-sunstone-gold">
                Top Colleges
              </h4>
              <ul className="space-y-0 md:space-y-2 text-xs">
                <li>
                  <a
                    href="https://sunstone.in/campuses/sage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300"
                  >
                    SAGE University
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://sunstone.in/campuses/rathinam-group-of-institutions-group-of-institutions"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300 cursor-pointer mt-2"
                  >
                    <p>Rathinam College of Arts and Science</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sunstone.in/campuses/rayat-bahra-university"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300 mt-2"
                  >
                    Rayat Bahra University
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://sunstone.in/campuses/ajeenkya-dy-patil-university"
                    className="text-gray-200 hover:text-sunstone-gold transition-colors duration-300 cursor-pointer mt-2"
                  >
                    Ajeenkya DY Patil University
                  </a>
                </li>
                <li className="list-item mt-2"></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-xs md:text-base mb-0.5 md:mb-4 text-sunstone-gold">
                Contact
              </h4>
              <div className="space-y-0.5 md:space-y-3 text-xs md:text-base">
                <div className="flex items-center text-gray-200">
                  <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  +91 70653 03030
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-sunstone-navy-light mt-1 md:mt-8 pt-1 md:pt-8 text-center text-gray-200 text-xs">
            <p>&copy; 2025 Sunstone. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap");

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
          0%,
          20%,
          50%,
          80%,
          100% {
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
          0%,
          100% {
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
          0%,
          7% {
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
          40%,
          100% {
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

        .animate-bounce-in-down {
          animation: bounce-in-down 1s ease-out;
        }

        .animate-bounce-in-up {
          animation: bounce-in-up 1s ease-out 0.5s both;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 400% 400%;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
          background-size: 200% 200%;
        }

        .animate-typewriter {
          animation: typewriter 3s steps(60, end);
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .animate-expand-horizontal {
          animation: expand-horizontal 1s ease-out 0.7s both;
        }

        .animate-college-slide {
          animation: college-slide 25s linear infinite;
        }

        .animate-college-wave {
          animation: college-wave 20s ease-in-out infinite;
        }

        .animate-horizontal-scroll {
          animation: horizontal-scroll 60s linear infinite;
        }

        .animate-slide-in-horizontal {
          animation: slide-in-horizontal 1s ease-out forwards;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-wiggle-gentle {
          animation: wiggle-gentle 4s ease-in-out infinite;
        }

        .animate-wave-scroll {
          animation: wave-scroll 15s linear infinite;
        }

        .animate-float-up {
          animation: float-up 3s ease-in-out infinite;
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

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes bounce-soft {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wiggle-gentle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-5deg);
          }
          20% {
            transform: rotateZ(3deg);
          }
          25% {
            transform: rotateZ(-3deg);
          }
          30% {
            transform: rotateZ(2deg);
          }
          35% {
            transform: rotateZ(-1deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }

        @keyframes wave-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes float-up {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes college-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        @keyframes college-wave {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10%);
          }
          50% {
            transform: translateX(-25%);
          }
          75% {
            transform: translateX(-15%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes horizontal-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-in-horizontal {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotateY(-15deg);
          }
          50% {
            opacity: 0.7;
            transform: translateX(10px) rotateY(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        .animate-shadow-glow {
          animation: shadow-glow 3s ease-in-out infinite;
        }

        @keyframes shadow-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(79, 70, 229, 0.6), 0 0 60px rgba(79, 70, 229, 0.4);
          }
        }

        @keyframes bounce-in-down {
          0% {
            opacity: 0;
            transform: translateY(-2000px);
          }
          60% {
            opacity: 1;
            transform: translateY(30px);
          }
          80% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes bounce-in-up {
          0% {
            opacity: 0;
            transform: translateY(2000px);
          }
          60% {
            opacity: 1;
            transform: translateY(-30px);
          }
          80% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes cursor-blink {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 5px #c38935, 0 0 10px #c38935, 0 0 15px #c38935;
          }
          to {
            text-shadow: 0 0 10px #d4a147, 0 0 20px #d4a147, 0 0 30px #d4a147;
          }
        }

        @keyframes expand-horizontal {
          0% {
            width: 0;
          }
          100% {
            width: 4rem;
          }
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
