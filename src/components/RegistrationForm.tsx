import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  fullName: string;
  hallTicket: string;
  email: string;
  branch: string;
  year: string;
  section: string;
  mobile: string;
  whatsappGroup: string;
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    hallTicket: '',
    email: '',
    branch: '',
    year: '',
    section: '',
    mobile: '',
    whatsappGroup: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxcDXLD0PjXCtTwF_X2szSrZ5czx1dZ2jdJyFl9qVU5YT_mtmyJtpG66IDdsRUWYkVH/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.result === 'success') {
        setMessage('Registration successful!');
        setFormData({
          fullName: '',
          hallTicket: '',
          email: '',
          branch: '',
          year: '',
          section: '',
          mobile: '',
          whatsappGroup: '',
        });
      } else if (result.result === 'exists') {
        setError('User already exists. Registration not allowed.');
      } else {
        throw new Error(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof Error) {
        setError(error.message || 'Registration failed. Please try again.');
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Register Now</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'fullName', label: 'Full Name', type: 'text' },
              { name: 'hallTicket', label: 'Hall Ticket Number', type: 'text' },
              { name: 'email', label: 'Email ID', type: 'email' },
              { name: 'branch', label: 'Branch', type: 'text' },
              { name: 'mobile', label: 'Mobile Number', type: 'tel' },
              { name: 'section', label: 'Section', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-blue-300 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">Year</label>
              <select
                name="year"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-300 mb-2">Joined WhatsApp Group?</label>
              <select
                name="whatsappGroup"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                value={formData.whatsappGroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://chat.whatsapp.com/invite/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 block mb-6"
            >
              Join WhatsApp Group
            </a>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 flex items-center mx-auto"
              disabled={loading}
            >
              <Send className="w-5 h-5 mr-2" />
              {loading ? 'Submitting...' : 'Submit Registration'}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {message && <p className="text-green-500 mt-4">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}