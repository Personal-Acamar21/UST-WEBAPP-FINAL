import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CampsClinics() {
  return (
    <>
      <Helmet>
        <title>Camps & Clinics - UST Soccer Academy</title>
        <meta name="description" content="Join our specialized soccer camps and clinics at UST Soccer Academy. Programs for all age groups and skill levels." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Upcoming Clinics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8">Upcoming Clinics & Training</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Winter Skill Clinic Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67521955846fe5a9d2c87f82.png"
                  alt="Winter Skill Clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block bg-[#8ED204] text-black px-2 py-1 rounded text-sm font-semibold">
                      Winter Clinic
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">UST Winter Skill Clinic</h3>
                
                <div className="space-y-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-[#8ED204]" />
                    <span>Christ Lutheran Church, East Northport</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-[#8ED204]" />
                    <span>Ages: 2017-2008</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-3 text-[#8ED204]" />
                    <span>$380</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/winter-skill-clinic"
                    className="w-full bg-[#8ED204] text-black px-6 py-2 rounded-lg hover:bg-[#8ED204]/90 text-center block"
                  >
                    Learn More & Register
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Winter Intramural Training Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/675219567585b5072c390513.png"
                  alt="Winter Intramural Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block bg-[#8ED204] text-black px-2 py-1 rounded text-sm font-semibold">
                      Winter Training
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">UST Winter Intramural Training</h3>
                
                <div className="space-y-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-[#8ED204]" />
                    <span>Christ Lutheran Church, East Northport</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-[#8ED204]" />
                    <span>Ages: 2021-2017</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-3 text-[#8ED204]" />
                    <span>$175</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/winter-intramural-training"
                    className="w-full bg-[#8ED204] text-black px-6 py-2 rounded-lg hover:bg-[#8ED204]/90 text-center block"
                  >
                    Learn More & Register
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}