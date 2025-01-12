import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const camps = [
  {
    id: 'residential-camp-2025',
    title: '2025 UST Summer Residential Camp',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6783ed3169da5f2e9022fd5b.png',
    fullFlyer: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6783d4598fcd5078c368efeb.png',
    type: 'Residential Camp',
    status: 'upcoming'
  },
  {
    id: 'spring-break-camp-2024',
    title: 'Spring Break Camp',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67642a827e62116f0aabf095.png',
    fullFlyer: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/676423509b7d9a1792f3569a.jpeg',
    type: 'Day Camp',
    status: 'upcoming'
  },
  {
    id: 'intense-summer-2025',
    title: '2025 Intense Summer Camp Series',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6764322f9ea100a3a8951ff2.png',
    fullFlyer: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/6783d45969da5f5b2b22d48e.png',
    type: 'Intense Training',
    status: 'upcoming'
  }
];

export default function CampsClinics() {
  const [selectedFlyer, setSelectedFlyer] = React.useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Camps & Clinics - UST Soccer Academy</title>
        <meta name="description" content="Join our specialized soccer camps and clinics at UST Soccer Academy. Programs for all age groups and skill levels." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Upcoming Camps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8">Upcoming Camps & Clinics</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp, index) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 cursor-pointer" onClick={() => setSelectedFlyer(camp.fullFlyer)}>
                  <img
                    src={camp.thumbnail}
                    alt={camp.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-[#8ED204] text-black px-2 py-1 rounded text-sm font-semibold">
                        {camp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{camp.title}</h3>
                  <div className="mt-6">
                    <button
                      onClick={() => setSelectedFlyer(camp.fullFlyer)}
                      className="w-full bg-[#8ED204] text-black px-6 py-2 rounded-lg hover:bg-[#8ED204]/90 text-center"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Flyer Modal */}
        {selectedFlyer && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedFlyer(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
              <button
                onClick={() => setSelectedFlyer(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedFlyer}
                alt="Camp Flyer"
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Registration CTA */}
        <div className="bg-black text-white p-8 rounded-lg mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
            <p className="mb-6">
              Secure your spot in our upcoming camps and clinics. Early registration discounts available!
            </p>
            <a 
              href="https://ustsoccer.demosphere-secure.com/_registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8ED204] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#8ED204]/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
