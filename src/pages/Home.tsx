import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, TrendingUp, Target, Users, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">Strategji Rritjeje</h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-2xl">
              Transformoni biznesin tuaj me udhëzimet tona eksperte financiare dhe shërbimet e planifikimit strategjik.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              Filloni Tani
            </a>
          </motion.div>
        </div>
      </section>

      {/* Unique Consulting Firm Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Një Firmë Unike Konsulence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ne kombinojmë strategji inovative me metodologji të provuara për të ofruar rezultate të jashtëzakonshme për klientët tanë.
              </p>
              <div className="space-y-4">
                {[
                  'Planifikim Strategjik Financiar',
                  'Optimizim Tatimor',
                  'Konsulencë për Rritje Biznesi',
                  'Menaxhim Risku',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Takim biznesi"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="Puna në zyrë"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Si Punojmë Ne
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Konsultimi Fillestar',
                  description: 'Fillojmë me një vlerësim të plotë të nevojave dhe objektivave të biznesit tuaj.',
                },
                {
                  step: '02',
                  title: 'Zhvillimi i Strategjisë',
                  description: 'Ekipi ynë krijon një plan të personalizuar sipas kërkesave tuaja specifike.',
                },
                {
                  step: '03',
                  title: 'Zbatimi',
                  description: 'Ne zbatojmë strategjinë duke mbajtur komunikim të qartë gjatë gjithë procesit.',
                },
              ].map((item, index) => (
                <div key={index} className="relative p-8 bg-white rounded-xl shadow-sm">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">Shërbimet Tona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
                <Target className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strategji Rritjeje</h3>
                <p className="text-gray-400">
                  Zhvillojmë plane gjithëpërfshirëse për rritje të qëndrueshme të biznesit.
                </p>
              </div>
              <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
                <Calculator className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Planifikim Financiar</h3>
                <p className="text-gray-400">
                  Udhëzime eksperte për performancë optimale financiare.
                </p>
              </div>
              <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ekselencë në Ekip</h3>
                <p className="text-gray-400">
                  Ndërtojmë dhe mbajmë ekipe me performancë të lartë.
                </p>
              </div>
              <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
                <Clock className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mbështetje 24/7</h3>
                <p className="text-gray-400">
                  Asistencë në çdo kohë për nevojat e biznesit tuaj.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Gati për të Transformuar të Ardhmen Tuaj Financiare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Planifikoni një konsultim me ekipin tonë ekspert sot.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Na Kontaktoni
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;