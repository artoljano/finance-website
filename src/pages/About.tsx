import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Landmark,
  Scale,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Rreth FinanceGuard
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ne jemi një ekip profesionistësh të dedikuar financiarë të
              angazhuar për të ndihmuar bizneset të kenë sukses përmes
              udhëzimeve eksperte dhe zgjidhjeve të personalizuara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trashëgimia Jonë e Ekselencës
              </h2>
              <p className="text-gray-600 mb-6">
                E themeluar në vitin 2010, FinanceGuard është vendosur si një
                firmë kryesore e shërbimeve financiare, duke shërbyer mbi 500
                biznese në industri të ndryshme. Angazhimi ynë për ekselencë dhe
                suksesin e klientëve na ka fituar njohjen si një nga emrat më të
                besuar në konsulencën financiare.
              </p>
              <p className="text-gray-600 mb-6">
                Ne kombinojmë ekspertizën e thellë të industrisë me teknologjinë
                inovative për të ofruar zgjidhje gjithëpërfshirëse financiare që
                nxisin rritjen dhe krijojnë vlerë të qëndrueshme për klientët
                tanë.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-2xl text-blue-600 mb-1">95%</h3>
                  <p className="text-gray-600">Mbajtja e Klientëve</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-2xl text-blue-600 mb-1">
                    $2B+
                  </h3>
                  <p className="text-gray-600">Asete të Menaxhuara</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Takim profesional"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-1">
                  15+ Vite
                </h3>
                <p className="text-gray-600">Eksperiencë në Industri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Ekipi Ynë Drejtues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Arben Krasniqi",
                  position: "Drejtor Ekzekutiv",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                  description:
                    "Me mbi 20 vjet përvojë në sektorin financiar dhe konsulencë strategjike.",
                },
                {
                  name: "Elena Prifti",
                  position: "Drejtore e Financës",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                  description:
                    "Eksperte në planifikim financiar dhe analiza të tregut.",
                },
                {
                  name: "Dritan Hoxha",
                  position: "Drejtor i Operacioneve",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  description:
                    "Specialist në optimizimin e proceseve dhe menaxhim risku.",
                },
                {
                  name: "Teuta Shala",
                  position: "Drejtore e Konsulencës",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                  description:
                    "Eksperte në konsulencë biznesi dhe strategji zhvillimi.",
                },
                {
                  name: "Besnik Malaj",
                  position: "Drejtor i Teknologjisë",
                  image:
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                  description:
                    "Specialist në transformim dixhital dhe zgjidhje teknologjike.",
                },
                {
                  name: "Mirela Deda",
                  position: "Drejtore e Burimeve Njerëzore",
                  image:
                    "https://images.unsplash.com/photo-1598550874175-4d0ef436c909",
                  description:
                    "Eksperte në zhvillimin e talenteve dhe kulturës organizative.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vlerat Tona Themelore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integriteti</h3>
                <p className="text-gray-600">
                  Ne mbajmë standardet më të larta të etikës profesionale dhe
                  transparencës.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ekselenca</h3>
                <p className="text-gray-600">
                  Ne synojmë rezultate të jashtëzakonshme në çdo gjë që bëjmë.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Landmark className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Stabiliteti</h3>
                <p className="text-gray-600">
                  Ne ofrojmë zgjidhje financiare të besueshme dhe të
                  qëndrueshme.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Scale className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Balanca</h3>
                <p className="text-gray-600">
                  Ne ruajmë ekuilibrin midis riskut dhe mundësisë.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Kredencialet Tona
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Përputhshmëria Rregullatore
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Këshilltar i Regjistruar i Investimeve SEC",
                      "Anëtar i FINRA",
                      "Ofrues i Licencuar i Sigurimeve",
                      "Kontabilistë të Certifikuar Publikë",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Njohja në Industri
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Top 100 Firmat Këshilluese Financiare 2024",
                      "Çmimi i Ekselencës në Shërbimin ndaj Klientit",
                      "Vendet më të Mira për të Punuar në Financa 2023",
                      "Inovacioni në Teknologjinë Financiare 2023",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Vite Eksperiencë</p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Klientë të Kënaqur</p>
            </div>
            <div className="p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Mbështetje për Klientin</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
