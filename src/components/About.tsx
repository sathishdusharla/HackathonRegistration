import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Trophy } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Why Join BlockHack?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-12 h-12 text-blue-400 mb-4" />,
              title: "Learn & Build",
              description: "Get hands-on experience with blockchain technology and build innovative solutions with industry experts."
            },
            {
              icon: <Users className="w-12 h-12 text-blue-400 mb-4" />,
              title: "Network",
              description: "Connect with like-minded developers, mentors, and industry professionals from the blockchain space."
            },
            {
              icon: <Trophy className="w-12 h-12 text-blue-400 mb-4" />,
              title: "Win Prizes",
              description: "Compete for exciting prizes worth $10,000 and potential internship opportunities with leading blockchain companies."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}