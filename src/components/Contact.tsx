import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4 text-white"
        >
          Got Queries? Reach Out to Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Our team is here to help you with any questions
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="font-semibold mb-4 text-white">Technical Coordinator</h3>
            <div className="space-y-3">
              <p className="text-gray-300">Alex Chen</p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>alex.chen@university.edu</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="font-semibold mb-4 text-white">Event Coordinator</h3>
            <div className="space-y-3">
              <p className="text-gray-300">Sarah Johnson</p>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>sarah.j@university.edu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}