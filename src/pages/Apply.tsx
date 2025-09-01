import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Apply() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    portfolio_links: ''
  });

  // Auto-fill position if coming from job opportunity
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const position = searchParams.get('position');
    if (position) {
      setFormData(prev => ({
        ...prev,
        position: decodeURIComponent(position)
      }));
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent submission since applications are closed
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-transparent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-muted-foreground text-lg">
            We're expanding our team with 3 exciting positions! Choose your role and start your journey with us.
          </p>
          
          {/* ORIGINAL COLORS RETAINED */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full Stack Developer (2 openings)</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">UI/UX Designer (2 openings)</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Python Web Scraper (2 openings)</span>
          </div>
          
          {/* UPDATED DEADLINE NOTICE - APPLICATIONS CLOSED */}
          <div className="mt-4 inline-block bg-red-100 text-red-800 px-6 py-3 rounded-lg font-semibold border border-red-200">
            🚫 Applications Closed
          </div>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  disabled
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Applications are closed"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  disabled
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Applications are closed"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  disabled
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Applications are closed"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-medium">
                  Position *
                </label>
                <select
                  id="position"
                  name="position"
                  disabled
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm cursor-not-allowed opacity-60"
                >
                  <option value="">Applications are closed</option>
                  <option value="Full Stack Developer">Full Stack Developer (2 openings)</option>
                  <option value="UI/UX Designer">UI/UX Designer (2 openings)</option>
                  <option value="Python Web Scraper">Python Web Scraper (2 openings)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Years of Experience *
              </label>
              <Input
                id="experience"
                name="experience"
                type="number"
                disabled
                min="0"
                step="0.1"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Applications are closed"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio_links" className="text-sm font-medium">
                Portfolio/GitHub Links (Optional)
              </label>
              <Input
                id="portfolio_links"
                name="portfolio_links"
                disabled
                value={formData.portfolio_links}
                onChange={handleChange}
                placeholder="Applications are closed"
              />
              <p className="text-xs text-muted-foreground">
                For developers: GitHub profile is highly recommended. For designers: Behance/Dribbble portfolio.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Cover Letter (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                disabled
                value={formData.message}
                onChange={handleChange}
                placeholder="Applications are closed"
                className="min-h-[150px]"
              />
            </div>

            {/* Updated Notice for Closed Applications */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-red-600 text-xl">🚫</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Applications Closed
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>Thank you for your interest! The application period has ended and we are no longer accepting new applications for these positions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-functional Submit Button */}
            <Button 
              type="button" 
              disabled 
              className="w-full bg-gray-400 cursor-not-allowed opacity-60"
            >
              Applications Closed
            </Button>
          </form>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>📍 Location: Chennai | 💼 Employment Type: Full-time | ❌ Application period has ended</p>
        </div>
      </div>
    </div>
  );
}
