import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const Certifications = () => {
  const getCertificationIcon = (title: string) => {
    if (title.includes("IoT")) return "🌐";
    if (title.includes("Data Analytics")) return "📊";
    if (title.includes("ChatGPT") || title.includes("AI")) return "🤖";
    if (title.includes("Coding")) return "💻";
    return "🏆";
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-portfolio-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development in emerging
            technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">
                      {getCertificationIcon(cert.title)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg text-gray-900 leading-tight group-hover:text-portfolio-600 transition-colors">
                          {cert.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="ml-2 bg-portfolio-100 text-portfolio-800"
                        >
                          {cert.year}
                        </Badge>
                      </div>

                      <p className="text-portfolio-600 font-medium mb-3">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <Calendar size={16} />
                        <span className="text-sm">
                          Completed in {cert.year}
                        </span>
                      </div>

                      {/* Certification Details */}
                      <div className="space-y-2 text-sm text-gray-700">
                        {cert.title.includes("IoT") && (
                          <p>
                            • Comprehensive understanding of Internet of Things
                            technologies and applications
                          </p>
                        )}
                        {cert.title.includes("Data Analytics") && (
                          <p>
                            • Proficiency in Python, SQL, Excel, and Statistical
                            Analysis
                          </p>
                        )}
                        {cert.title.includes("ChatGPT") && (
                          <p>
                            • Advanced techniques for content creation using AI
                            and Generative models
                          </p>
                        )}
                        {cert.title.includes("Coding Challenge") && (
                          <p>
                            • 30-day intensive coding practice and
                            problem-solving skills
                          </p>
                        )}
                      </div>

                      {/* View Certificate Button */}
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <button
                          onClick={() => {
                            // In a real application, this would open the certificate
                            console.log(`Viewing certificate: ${cert.title}`);
                          }}
                          className="flex items-center gap-2 text-portfolio-600 hover:text-portfolio-700 transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={14} />
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-portfolio-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Award size={32} className="mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">4</div>
                  <div className="text-sm opacity-90">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl mb-3">🎯</div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Completion Rate</div>
                </div>
                <div>
                  <div className="text-3xl mb-3">📈</div>
                  <div className="text-2xl font-bold mb-1">2024</div>
                  <div className="text-sm opacity-90">Latest Year</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Commitment to Continuous Learning
                </h3>
                <p className="text-sm opacity-90 max-w-2xl mx-auto">
                  Staying updated with the latest technologies and industry
                  trends through certified courses and hands-on practice in IoT,
                  AI, and data analytics.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Learning Journey Timeline
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "2023: IoT Foundation",
              "2024: Data Analytics",
              "2024: AI & Content Creation",
              "2024: Coding Mastery",
            ].map((milestone, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 bg-white border-portfolio-300 text-portfolio-700"
              >
                {milestone}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
