import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  universityLogo: string;
  clubLogo: string;
  bannerImage: string;
}

export function Header({ universityLogo, clubLogo, bannerImage }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gray-900 text-white py-8">
      {/* Animated blockchain background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-blue-500/20 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: ['0deg', '360deg'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Top bar with logos */}
        <div className="flex justify-between items-center mb-12">
          {/* University Logo Space */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-40 h-16 flex items-center justify-center"
          >
            <img src={universityLogo} alt="University Logo" className="h-full w-full object-contain" />
          </motion.div>
          
          {/* Club Logo Space */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-40 h-16 flex items-center justify-center"
          >
            <img src={clubLogo} alt="Club Logo" className="h-full w-full object-contain" />
          </motion.div>
        </div>

        {/* Banner Image Space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-96 mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/20"
        >
          <img src={bannerImage} alt="Banner Image" className="w-full h-full object-cover" />
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-12 text-blue-200"
        >
          <div className="flex items-center bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-blue-500/20">
            <Clock className="w-5 h-5 mr-3 text-blue-400" />
            <span>March 15-17, 2024</span>
          </div>
          <div className="flex items-center bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-blue-500/20">
            <MapPin className="w-5 h-5 mr-3 text-blue-400" />
            <span>Innovation Hub, Block C</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}