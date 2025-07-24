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
  Mail,
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
      "I am immensely grateful to Sunstone for the incredible international placement opportunity. The unwavering support, exceptional faculty, and comprehensive curriculum played a pivotal role in shaping my career. Sunstone's commitment to excellence and its robust placement cell ensured I was well-prepared to meet global standards. This international placement is a testament to the quality education and professional grooming provided at Sunstone.",
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
      "My MBA experience with Sunstone has been incredible. The experienced faculty and comprehensive curriculum helped me secure a high package and an internship at FundsRoom. Now, I'm working as a consultant at Zenoti, thanks to the practical learning and support from Sunstone.",
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
      "My MBA in Finance and Analytics at Malla Reddy University powered by Sunstone has been an amazing experience. With excellent faculty support, industry expert lectures, and enriching campus life, I've gained valuable knowledge and skills. The personalized guidance and extracurricular activities have shaped me into a well-rounded professional, ready to excel in the finance industry.",
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
      "Sunstone equipped me with in-demand industry skills, and I'm grateful for the guidance from Dr. Omkar Dange and the dedicated faculty. The paid internships and live projects greatly boosted my resume, with the internship being a career-changing experience. Co-curricular activities and fests created lifelong memories, and the smooth onboarding process, along with the helpful mobile app, made everything seamless. Thanks to Sunstone, I secured a cross-border job in my field.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/1684043070051-670752?format=webp&width=800",
  },
  {
    id: 5,
    name: "Bijan Biswas",
    package: "Piramal Capital and Housing Finance Limited 7 LPA",
    campus: "RGI",
    year: "21-23",
    course: "MBA",
    testimonial:
      "I would like to express my gratitude to Sunstone for the invaluable support and guidance that helped me secure a placement at Piramal Capital and Housing Finance Limited. This support has brought me immense joy and a sense of achievement as I embark on my career. A special thanks to the Sunstone Training & Placement department for organizing skill-building activities that were crucial in reaching this milestone.",
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
      "I am incredibly grateful to Sunstone for their constant support and guidance, which were pivotal in helping me secure a placement as a Business Development Manager at Hike Education. The Sunstone team's dedication, particularly through skill-building sessions and placement assistance, has greatly influenced my professional growth.",
    image:
      "https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/anushree-soni-sageb-1-0bcdb6?format=webp&width=800",
  },
];

const stats = [
  { value: "28 LPA", label: "Highest Salary", color: "text-sunstone-yellow" },
  { value: "1400+", label: "Total Offers", color: "text-blue-400" },
  {
    value: "1000+",
    label: "Unique Job Opportunities",
    color: "text-purple-400",
  },
  { value: "65%", label: "Higher ROI", color: "text-sunstone-yellow" },
  { value: "300+", label: "Students with 2+ Offers", color: "text-blue-400" },
  { value: "7+", label: "More Companies", color: "text-purple-400" },
];

const comparisonData = [
  {
    feature: "Specializations",
    sunstone: "5 Advanced New-Age Specializations",
    others: "Limited Or No Specialization Choices",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
  {
    feature: "Industry Exposure",
    sunstone: "8+ Months Of Industry Internships",
    others: "Minimal Or No Internship Opportunities",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
  {
    feature: "Hands-On Learning",
    sunstone: "3 Capstone Projects (1 Every Year)",
    others: "Projects With Minimal Industry Use",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
  {
    feature: "Expert Sessions",
    sunstone: "70+ Sessions By Industry Leaders & Top Faculty",
    others: "Few Or No Sessions With Industry Experts",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
  {
    feature: "Certifications",
    sunstone: "10 In-Demand Advanced Certifications",
    others: "Limited Or No Certification Options",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
  {
    feature: "Placement Readiness",
    sunstone: "180+ Hours Of Mock GD/PI Training",
    others: "Basic Or No Placement Preparation",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
  {
    feature: "Career Boost",
    sunstone: "Build A Job-Ready Portfolio",
    others: "No Structured Portfolio Development",
    sunstoneIcon: <CheckCircle className="h-5 w-5 text-green-500" />,
    othersIcon: <XCircle className="h-5 w-5 text-red-500" />,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50 animate-fade-in backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/sunstonelogo2x-1-92104e?format=webp&width=800"
                alt="Sunstone"
                className="h-14 w-auto animate-pulse transition-all duration-500 hover:scale-110"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#programs"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300 relative group"
              >
                Programs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#placements"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300 relative group"
              >
                Placements
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#success-stories"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300 relative group"
              >
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunstone-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse">
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunstone-navy via-sunstone-navy-dark to-slate-900 text-white py-16 md:py-24 overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sunstone-yellow/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-sunstone-yellow/5 to-blue-500/5 rounded-full animate-rotate-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 animate-fade-in-up leading-tight">
                  <span className="block text-white animate-slide-up">
                    Big Dreams Need
                  </span>
                  <span className="block text-sunstone-yellow animate-bounce-gentle animate-pulse bg-gradient-to-r from-sunstone-yellow to-sunstone-yellow-light bg-clip-text text-transparent">
                    the Right Start
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-sunstone-yellow to-blue-500 rounded-full mx-auto lg:mx-0 animate-pulse"></div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in-up delay-300 font-medium leading-relaxed">
                Get{" "}
                <span className="text-sunstone-yellow font-bold animate-pulse">
                  200+ assured placement opportunities
                </span>{" "}
                with{" "}
                <span className="text-white font-semibold">
                  Placement Opportunity Program
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in-up delay-700">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl w-full sm:w-auto rounded-xl animate-pulse shadow-xl border-2 border-blue-400 hover:border-blue-300"
                >
                  Apply Now - Limited Seats Available
                  <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
                </Button>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div className="lg:flex lg:justify-end animate-slide-in-right">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-lg mx-auto lg:mx-0 transform transition-all duration-500 hover:shadow-3xl animate-float hover:scale-105 border border-sunstone-yellow/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-sunstone-navy animate-pulse">
                    Apply Now
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-300 animate-wiggle"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Help
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="animate-fade-in-up delay-100">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunstone-yellow focus:border-sunstone-yellow outline-none transition-all duration-500 transform focus:scale-105 hover:shadow-lg focus:shadow-xl"
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up delay-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I want to pursue*
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunstone-yellow focus:border-sunstone-yellow outline-none bg-white transition-all duration-500 transform focus:scale-105 hover:shadow-lg focus:shadow-xl appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="text-gray-500">
                        Select Program
                      </option>
                      <option value="mba" className="text-gray-900">
                        MBA/PGDM
                      </option>
                      <option value="bba" className="text-gray-900">
                        BBA
                      </option>
                      <option value="btech" className="text-gray-900">
                        B.Tech
                      </option>
                      <option value="bcom" className="text-gray-900">
                        B.Com
                      </option>
                      <option value="bca" className="text-gray-900">
                        BCA
                      </option>
                      <option value="diploma" className="text-gray-900">
                        Diploma Programs
                      </option>
                      <option value="certification" className="text-gray-900">
                        Certification Courses
                      </option>
                      <option value="other" className="text-gray-900">
                        Other Programs
                      </option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up delay-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunstone-yellow focus:border-sunstone-yellow outline-none transition-all duration-500 transform focus:scale-105 hover:shadow-lg focus:shadow-xl"
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up delay-400">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select State*
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunstone-yellow focus:border-sunstone-yellow outline-none bg-white transition-all duration-500 transform focus:scale-105 hover:shadow-lg focus:shadow-xl appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="text-gray-500">
                        Select State
                      </option>
                      <option value="andhra-pradesh" className="text-gray-900">
                        Andhra Pradesh
                      </option>
                      <option value="delhi" className="text-gray-900">
                        Delhi
                      </option>
                      <option value="gujarat" className="text-gray-900">
                        Gujarat
                      </option>
                      <option value="haryana" className="text-gray-900">
                        Haryana
                      </option>
                      <option value="karnataka" className="text-gray-900">
                        Karnataka
                      </option>
                      <option value="maharashtra" className="text-gray-900">
                        Maharashtra
                      </option>
                      <option value="punjab" className="text-gray-900">
                        Punjab
                      </option>
                      <option value="rajasthan" className="text-gray-900">
                        Rajasthan
                      </option>
                      <option value="tamil-nadu" className="text-gray-900">
                        Tamil Nadu
                      </option>
                      <option value="telangana" className="text-gray-900">
                        Telangana
                      </option>
                      <option value="uttar-pradesh" className="text-gray-900">
                        Uttar Pradesh
                      </option>
                      <option value="west-bengal" className="text-gray-900">
                        West Bengal
                      </option>
                      <option value="other" className="text-gray-900">
                        Other
                      </option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl font-bold rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-fade-in-up delay-500 animate-pulse hover:animate-wiggle shadow-lg border-2 border-blue-400 hover:border-blue-300"
                  >
                    Send OTP
                  </Button>

                  <p className="text-xs text-gray-500 text-center animate-fade-in-up delay-600">
                    By clicking "Send OTP", you agree to our Terms & Conditions
                    and Privacy Policy
                  </p>
                </form>
              </div>
            </div>
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
                <div className="text-white text-xs sm:text-sm md:text-base opacity-90">
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

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up delay-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-sunstone-navy to-sunstone-navy-dark text-white">
                    <th className="px-6 py-6 text-left text-lg font-bold">
                      Key Offerings
                    </th>
                    <th className="px-6 py-6 text-center text-lg font-bold bg-sunstone-yellow/20">
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
                      <td className="px-6 py-6 font-semibold text-gray-800 bg-gray-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-6 text-center bg-green-50 border-l-4 border-green-500">
                        <div className="flex items-center justify-center space-x-2 animate-slide-in-left">
                          {row.sunstoneIcon}
                          <span className="text-gray-800 font-medium">
                            {row.sunstone}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-center bg-red-50 border-l-4 border-red-500">
                        <div className="flex items-center justify-center space-x-2 animate-slide-in-right">
                          {row.othersIcon}
                          <span className="text-gray-800 font-medium">
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

      {/* Company Partners Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sunstone-yellow/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-4">
              Our Industry Partners
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Trusted by leading companies across industries
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-sunstone-yellow to-blue-500 rounded-full mx-auto mt-4"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 animate-fade-in-up delay-300 transform hover:scale-105 transition-all duration-500 border border-sunstone-yellow/20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F0ed648de05c74644b6212e6b9a125b4b?format=webp&width=800"
              alt="Industry Partners - Zepto, Amazon, Shoppers Stop, IndusInd Bank, NobroKer, DHL, Axis Bank, PhonePe, Jaro Education, Dhanguard, SAI General, Kotak Life, PropertyPistol, VII, HDFC Ergo, Nivarti, DeHaat and many more"
              className="w-full h-auto object-contain transition-all duration-500 hover:scale-110 animate-float"
            />
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <p className="text-xl sm:text-2xl text-sunstone-navy font-bold">
              Unlock Your Potential with Financial Support
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up delay-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F9c289d6793094909b8b7f3550585aebd?format=webp&width=800"
              alt="Bright Minds Scholarship - Scholarships worth up to 90 lacs for global"
              className="w-full h-auto object-cover max-w-full transition-all duration-500 hover:scale-110 animate-float"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-4">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who have transformed their careers with
              Sunstone
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-sunstone-yellow to-blue-500 rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.id}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:scale-110 animate-fade-in-up group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0 relative">
                  <div className="h-52 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sunstone-yellow/30 to-transparent animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white z-10 transition-all duration-500 hover:scale-125 animate-bounce-gentle shadow-xl"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-sunstone-yellow text-sunstone-navy font-bold animate-pulse shadow-lg">
                        {story.package.split(" ").slice(-2).join(" ")}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-sunstone-navy group-hover:text-sunstone-yellow transition-colors duration-300">
                        {story.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs bg-blue-50 animate-fade-in">
                        {story.campus}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-green-50 animate-fade-in delay-100">
                        {story.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-purple-50 animate-fade-in delay-200">
                        {story.course}
                      </Badge>
                    </div>
                    <div className="mb-4">
                      <p className="font-bold text-sunstone-navy text-sm mb-2 animate-slide-in-left">
                        📍 {story.package}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-4 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {story.testimonial}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-500 hover:scale-150 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 animate-fade-in delay-500">
                        ⭐ Verified Success Story
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sunstone-yellow to-sunstone-yellow-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sunstone-navy/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl text-sunstone-navy/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals. Take the first step
            towards your dream career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-sunstone-navy text-white hover:bg-sunstone-navy-dark px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl rounded-xl shadow-xl"
            >
              Apply Now - Secure Your Seat
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-sunstone-navy text-sunstone-navy hover:bg-sunstone-navy hover:text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl transition-all duration-500 rounded-xl font-bold transform hover:scale-105 hover:shadow-xl"
            >
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-navy text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-full sm:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/sunstonelogo2x-1-92104e?format=webp&width=800"
                alt="Sunstone"
                className="h-12 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-blue-200 max-w-md text-sm sm:text-base mb-6">
                Transforming careers through industry-focused education and
                unmatched placement support.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.youtube.com/@SunstoneIND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/sunstone.in/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/sunstoneedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://in.linkedin.com/school/sunstone-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href="#programs"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#placements"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    Placements
                  </a>
                </li>
                <li>
                  <a
                    href="#success-stories"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-3 text-blue-200 text-sm sm:text-base">
                <li className="flex items-center hover:text-white transition-colors duration-300 cursor-pointer">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 70653 03030
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-300 cursor-pointer">
                  <Mail className="h-4 w-4 mr-2" />
                  info@sunstone.in
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-300 cursor-pointer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Multiple Locations
                </li>
                <li className="mt-4">
                  <Button className="bg-sunstone-yellow text-sunstone-navy hover:bg-sunstone-yellow-dark transition-all duration-300 transform hover:scale-105 font-bold">
                    Apply Now
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2024 Sunstone. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-fade-in {
          animation: fade-in 1s ease-out;
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

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
