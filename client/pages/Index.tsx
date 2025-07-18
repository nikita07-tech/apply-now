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
  { value: "28 LPA", label: "Highest Salary", color: "text-sunstone-orange" },
  { value: "1400+", label: "Total Offers", color: "text-blue-400" },
  {
    value: "1000+",
    label: "Unique Job Opportunities",
    color: "text-purple-400",
  },
  { value: "65%", label: "Higher ROI", color: "text-sunstone-orange" },
  { value: "300+", label: "Students with 2+ Offers", color: "text-blue-400" },
  { value: "7+", label: "More Companies", color: "text-purple-400" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
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
                className="text-gray-700 hover:text-sunstone-navy"
              >
                Programs
              </a>
              <a
                href="#placements"
                className="text-gray-700 hover:text-sunstone-navy"
              >
                Placements
              </a>
              <a
                href="#success-stories"
                className="text-gray-700 hover:text-sunstone-navy"
              >
                Success Stories
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-sunstone-navy"
              >
                About
              </a>
            </nav>
            <Button className="bg-sunstone-orange hover:bg-sunstone-orange/90 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shape Your Future with
              <span className="text-sunstone-orange block mt-2">Sunstone</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
              Transform your career with industry-focused education, expert
              faculty, and unmatched placement support. Join thousands of
              successful professionals who started their journey with us.
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
              Don't miss out on the opportunity to secure your dream job. Our
              proven track record speaks for itself - with the highest packages,
              extensive industry partnerships, and personalized career guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-sunstone-orange hover:bg-sunstone-orange/90 text-white px-8 py-4 text-lg font-semibold"
              >
                Apply Now - Limited Seats Available
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sunstone-navy px-8 py-4 text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sunstone-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-white text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sunstone-navy mb-4">
              Why Choose Sunstone?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience education that transforms careers and lives
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-sunstone-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-sunstone-orange" />
                </div>
                <h3 className="text-xl font-semibold text-sunstone-navy mb-3">
                  Industry-Focused Curriculum
                </h3>
                <p className="text-gray-600">
                  Modern curriculum designed with industry experts to meet
                  current market demands
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-sunstone-navy mb-3">
                  Expert Faculty
                </h3>
                <p className="text-gray-600">
                  Learn from experienced professionals and industry leaders
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-sunstone-navy mb-3">
                  Proven Placements
                </h3>
                <p className="text-gray-600">
                  Outstanding placement record with top companies and high
                  packages
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-sunstone-navy mb-3">
                  Holistic Development
                </h3>
                <p className="text-gray-600">
                  Complete personality development and skill enhancement
                  programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6da493dd54948398735dc4759779933%2Fad583a5f26404dab80ad4d33bb599317?format=webp&width=800"
              alt="Bright Minds Scholarship"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sunstone-navy mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who have transformed their careers with
              Sunstone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-sunstone-navy to-sunstone-navy-dark flex items-center justify-center">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-sunstone-navy">
                        {story.name}
                      </h3>
                      <Badge className="bg-sunstone-orange text-white">
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
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
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
      <section className="bg-gradient-to-br from-sunstone-orange to-sunstone-orange-light py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals. Take the first step
            towards your dream career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sunstone-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Apply Now - Secure Your Seat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sunstone-orange px-8 py-4 text-lg"
            >
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/e6da493dd54948398735dc4759779933/sunstonelogo2x-1-92104e?format=webp&width=800"
                alt="Sunstone"
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-blue-200 max-w-md">
                Transforming careers through industry-focused education and
                unmatched placement support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#programs"
                    className="text-blue-200 hover:text-white"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#placements"
                    className="text-blue-200 hover:text-white"
                  >
                    Placements
                  </a>
                </li>
                <li>
                  <a
                    href="#success-stories"
                    className="text-blue-200 hover:text-white"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-blue-200 hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li>1800-XXX-XXXX</li>
                <li>info@sunstone.in</li>
                <li>Apply Now</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Sunstone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
