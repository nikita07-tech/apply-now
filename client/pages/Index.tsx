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

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/sunstonelogo2x-1-92104e?format=webp&width=800"
                alt="Sunstone"
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#programs"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300"
              >
                Programs
              </a>
              <a
                href="#placements"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300"
              >
                Placements
              </a>
              <a
                href="#success-stories"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300"
              >
                Success Stories
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-sunstone-navy transition-colors duration-300"
              >
                About
              </a>
            </nav>
            <Button className="bg-sunstone-yellow hover:bg-sunstone-yellow-dark text-sunstone-navy font-semibold transition-all duration-300 transform hover:scale-105">
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark text-white py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-in-up">
                Shape Your Future with
                <span className="text-sunstone-yellow block mt-2 animate-bounce-gentle animate-pulse">
                  Sunstone
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 text-blue-100 animate-fade-in-up delay-300 animate-slide-up">
                Transform your career with industry-focused education and
                unmatched placement support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-700">
                <Button
                  size="lg"
                  className="bg-sunstone-yellow hover:bg-sunstone-yellow-dark text-sunstone-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                >
                  Apply Now - Limited Seats Available
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sunstone-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div className="lg:flex lg:justify-end animate-slide-in-right">
              <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0 transform transition-all duration-500 hover:shadow-3xl animate-float hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-sunstone-navy">
                    Apply Now
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Help
                  </Button>
                </div>

                <form className="space-y-4 sm:space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunstone-yellow focus:border-sunstone-yellow outline-none bg-white transition-all duration-300 transform focus:scale-105"
                      required
                    >
                      <option value="">Select Program</option>
                      <option value="mba">MBA/PGDM</option>
                      <option value="bba">BBA</option>
                      <option value="btech">B.Tech</option>
                      <option value="bcom">B.Com</option>
                      <option value="diploma">Diploma Programs</option>
                      <option value="certification">
                        Certification Courses
                      </option>
                      <option value="other">Other Programs</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunstone-yellow focus:border-sunstone-yellow outline-none bg-white transition-all duration-300 transform focus:scale-105"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="andhra-pradesh">Andhra Pradesh</option>
                      <option value="delhi">Delhi</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                      <option value="west-bengal">West Bengal</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-slate-500 hover:bg-slate-600 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-xl animate-fade-in-up delay-500 animate-pulse hover:animate-wiggle"
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

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-4">
              Why Choose Sunstone?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience education that transforms careers and lives
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Industry-Focused Curriculum",
                description:
                  "Modern curriculum designed with industry experts to meet current market demands",
                color: "sunstone-yellow",
                bgColor: "sunstone-yellow/10",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Learn from experienced professionals and industry leaders",
                color: "blue-600",
                bgColor: "blue-100",
              },
              {
                icon: TrendingUp,
                title: "Proven Placements",
                description:
                  "Outstanding placement record with top companies and high packages",
                color: "green-600",
                bgColor: "green-100",
              },
              {
                icon: Award,
                title: "Holistic Development",
                description:
                  "Complete personality development and skill enhancement programs",
                color: "purple-600",
                bgColor: "purple-100",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 bg-${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:rotate-12 animate-wiggle`}
                  >
                    <feature.icon
                      className={`h-8 w-8 text-${feature.color} animate-pulse`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-sunstone-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-sunstone-navy mb-4">
              Our Industry Partners
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Trusted by leading companies across industries
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 animate-fade-in-up delay-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2F0ed648de05c74644b6212e6b9a125b4b?format=webp&width=800"
              alt="Industry Partners - Zepto, Amazon, Shoppers Stop, IndusInd Bank, NobroKer, DHL, Axis Bank, PhonePe, Jaro Education, Dhanguard, SAI General, Kotak Life, PropertyPistol, VII, HDFC Ergo, Nivarti, DeHaat and many more"
              className="w-full h-auto object-contain transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8 animate-fade-in-up">
            <p className="text-lg sm:text-xl text-sunstone-navy font-semibold">
              Unlock Your Potential with Financial Support
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl animate-fade-in-up delay-300">
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
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sunstone-yellow/20 to-transparent"></div>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white z-10 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-sunstone-navy">
                        {story.name}
                      </h3>
                      <Badge className="bg-sunstone-yellow text-sunstone-navy font-semibold">
                        {story.package.split(" ").slice(-2).join(" ")}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {story.campus}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {story.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {story.course}
                      </Badge>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium text-sunstone-navy text-sm mb-2">
                        {story.package}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-4 leading-relaxed">
                      {story.testimonial}
                    </p>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-500 hover:scale-150 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sunstone-yellow to-sunstone-yellow-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sunstone-navy mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl text-sunstone-navy/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals. Take the first step
            towards your dream career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sunstone-navy text-white hover:bg-sunstone-navy-dark px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Apply Now - Secure Your Seat
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sunstone-navy text-sunstone-navy hover:bg-sunstone-navy hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
            >
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-navy text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-full sm:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/sunstonelogo2x-1-92104e?format=webp&width=800"
                alt="Sunstone"
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-blue-200 max-w-md text-sm sm:text-base">
                Transforming careers through industry-focused education and
                unmatched placement support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a
                    href="#programs"
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#placements"
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    Placements
                  </a>
                </li>
                <li>
                  <a
                    href="#success-stories"
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-blue-200 text-sm sm:text-base">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  1800-XXX-XXXX
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  info@sunstone.in
                </li>
                <li>
                  <Button className="bg-sunstone-yellow text-sunstone-navy hover:bg-sunstone-yellow-dark mt-2 text-sm">
                    Apply Now
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-blue-200 text-sm">
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
            transform: translateY(-10px);
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
          animation: bounce-gentle 2s infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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
