import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { RegistrationForm } from '../components/RegistrationForm';
import { Footer } from '../components/Footer';

export function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-6 border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center justify-center w-full h-24 bg-gray-800 rounded-lg">
              {/* Space for the banner */}
              <img src="path/to/your/banner.png" alt="Banner" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </header>
      <RegistrationForm />
      <Footer clubLogo="public/blockckainlogo.png" />
    </div>
  );
}