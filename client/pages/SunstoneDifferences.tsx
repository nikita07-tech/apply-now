import { CheckCircle, XCircle, Zap, Users, Building, BookOpen, Award, Lightbulb, TrendingUp, Target } from "lucide-react";

const comparisonData = [
  {
    feature: "Specializations",
    sunstone: "5 Advanced New-Age Specializations",
    others: "Limited Or No Specialization Choices",
  },
  {
    feature: "Industry Exposure",
    sunstone: "6+ Months Of Industry Internships",
    others: "Minimal Or No Internship Opportunities",
  },
  {
    feature: "Placement Support",
    sunstone: "200+ Assured Placement Opportunities",
    others: "Limited Placement Assistance",
  },
  {
    feature: "Learning Methodology",
    sunstone: "Project-Based & Experiential Learning",
    others: "Traditional Theoretical Learning",
  },
  {
    feature: "Faculty",
    sunstone: "Corporate Leaders Turned Educators",
    others: "Academic Faculty Only",
  },
  {
    feature: "Skill Development",
    sunstone: "10+ Industry Certifications & Skills",
    others: "Basic Course Curriculum Only",
  },
  {
    feature: "Technology Integration",
    sunstone: "AI-Powered Learning Platform",
    others: "Traditional Teaching Methods",
  },
  {
    feature: "Entrepreneurship Support",
    sunstone: "Incubation Center & Startup Support",
    others: "No Entrepreneurship Ecosystem",
  },
];

const keyFeatures = [
  {
    icon: Zap,
    title: "Future Ready Learning",
    description: "Skills and knowledge needed for tomorrow's careers",
    color: "from-[#22336a] to-[#1a2851]",
  },
  {
    icon: Building,
    title: "Corporate Leaders Turned Educators",
    description: "Learn from corporate leaders with real work experience",
    color: "from-[#22336a] to-[#1a2851]",
  },
  {
    icon: Lightbulb,
    title: "Start Your Own Business",
    description: "Get help and support to start your business idea",
    color: "from-[#22336a] to-[#1a2851]",
  },
  {
    icon: BookOpen,
    title: "Modern Learning Tools",
    description: "Use latest technology and software for better learning",
    color: "from-[#22336a] to-[#1a2851]",
  },
  {
    icon: TrendingUp,
    title: "Industry Visits & Projects",
    description: "Visit real companies and work on real world projects",
    color: "from-[#22336a] to-[#1a2851]",
  },
];

export default function SunstoneDifferences() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
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
      <section 
        className="text-white py-8 md:py-16 lg:py-20 overflow-hidden relative"
        style={{ backgroundColor: "#22336a" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl mb-6 border border-white/30 shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg md:text-xl">
                Experience New Age Education
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="block text-white">
                Why Sunstone Powered Programs
              </span>
              <span className="block text-yellow-400">
                Stand Out?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transform your career with industry-integrated programs designed by corporate leaders, 
              featuring cutting-edge curriculum, practical learning experiences, and assured placement support.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-4" style={{ color: "#22336a" }}>
              Revolutionizing Higher Education for Tomorrow's Leaders
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our programs are designed to prepare you for the future of work with industry-relevant skills and real-world experience.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border hover:shadow-xl transition-all duration-500 hover:scale-105 text-center"
                style={{ borderColor: "#22336a20" }}
              >
                <div 
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#22336a" }}>
                  {feature.title.split(' ')[0]} {feature.title.split(' ')[1]}
                </h3>
                <p className="font-semibold mb-2" style={{ color: "#22336a" }}>
                  {feature.title.split(' ').slice(2).join(' ')}
                </p>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scrolling */}
          <div className="md:hidden mb-12">
            <div className="flex space-x-4 overflow-x-auto pb-4 px-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 bg-white rounded-2xl p-6 border shadow-lg text-center"
                  style={{ borderColor: "#22336a20" }}
                >
                  <div 
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#22336a" }}>
                    {feature.title.split(' ')[0]} {feature.title.split(' ')[1]}
                  </h3>
                  <p className="font-semibold mb-2" style={{ color: "#22336a" }}>
                    {feature.title.split(' ').slice(2).join(' ')}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-4" style={{ color: "#22336a" }}>
              See How Our Programs Compare
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the key differences that make Sunstone powered programs the superior choice for your education
            </p>
          </div>

          <div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4"
            style={{ borderColor: "#22336a" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr 
                    className="text-white"
                    style={{ background: "linear-gradient(135deg, #22336a 0%, #1a2851 100%)" }}
                  >
                    <th className="px-4 md:px-6 py-4 text-left text-sm md:text-lg font-bold">
                      Key Offerings
                    </th>
                    <th className="px-4 md:px-6 py-4 text-center text-sm md:text-lg font-bold bg-yellow-400/20">
                      Sunstone-Powered Programs
                    </th>
                    <th className="px-4 md:px-6 py-4 text-center text-sm md:text-lg font-bold">
                      Other Colleges
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-300"
                    >
                      <td 
                        className="px-4 md:px-6 py-6 font-semibold text-sm md:text-base bg-gray-50"
                        style={{ color: "#22336a" }}
                      >
                        {row.feature}
                      </td>
                      <td className="px-4 md:px-6 py-6 text-center bg-yellow-400/10 border-l-4 border-yellow-400">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 flex-shrink-0" />
                          <span 
                            className="font-medium text-sm md:text-base leading-tight"
                            style={{ color: "#22336a" }}
                          >
                            {row.sunstone}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-6 text-center bg-gray-100 border-l-4 border-gray-400">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />
                          <span 
                            className="font-medium text-sm md:text-base leading-tight"
                            style={{ color: "#22336a" }}
                          >
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

      {/* CTA Section */}
      <section 
        className="py-16 md:py-20 text-white"
        style={{ backgroundColor: "#22336a" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Experience the
            <span className="block text-yellow-400">Sunstone Difference?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Join thousands of students who have transformed their careers with our industry-leading programs
          </p>
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm">
                  PLACEMENT OPPORTUNITY PROGRAM
                </span>
              </div>
            </div>
            <blockquote className="text-xl md:text-3xl font-bold leading-relaxed mb-6">
              "200+ Assured Placement Opportunities or Get Your 1st Year Tuition-Fee Back*"
              <br />
              <span className="text-base text-gray-300 mt-2 block">
                *Terms and Conditions Applied
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
