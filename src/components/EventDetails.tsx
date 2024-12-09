import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Laptop } from 'lucide-react';

export function EventDetails() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Event Details
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Calendar className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Date</h3>
                <p className="text-gray-300">March 15-17, 2024</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Clock className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Time</h3>
                <p className="text-gray-300">Starts at 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <MapPin className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Venue</h3>
                <p className="text-gray-300">Innovation Hub, Block C<br />University Campus</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Users className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Eligibility</h3>
                <ul className="text-gray-300 list-disc list-inside">
                  <li>Open to all university students</li>
                  <li>Teams of 2-4 members</li>
                  <li>Basic programming knowledge required</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Laptop className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-white">Requirements</h3>
                <ul className="text-gray-300 list-disc list-inside">
                  <li>Laptop with required software</li>
                  <li>Student ID card</li>
                  <li>Basic blockchain knowledge</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}