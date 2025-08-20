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
    
    const emailBody = `Hi,

Job Application Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Experience: ${formData.experience} years

${formData.portfolio_links ? `Portfolio Links:\n${formData.portfolio_links}\n` : ''}

${formData.message ? `Cover Letter:\n${formData.message}\n` : ''}

Thank you for considering my application!

Best regards,
${formData.name}

==================================================
📎 ⭐ IMPORTANT: PLEASE ATTACH YOUR RESUME ⭐ 📎
==================================================
    `.trim();

    // Use Gmail's mailto format
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=damodarasmarttech@gmail.com&su=${encodeURIComponent(`New Job Application - ${formData.position} by ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
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
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full Stack Developer (2 openings)</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">UI/UX Designer (2 openings)</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Python Web Scraper (2 openings)</span>
          </div>
          {/* NEW DEADLINE NOTICE */}
  <div className="mt-4 inline-block bg-red-100 text-red-800 px-6 py-3 rounded-lg font-semibold border border-red-200">
    ⏰ Application Deadline: 26th August 2025
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
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
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
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
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
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-medium">
                  Position *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                >
                  <option value="">Select a position</option>
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
                required
                min="0"
                step="0.1"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Your years of experience (e.g., 2.5)"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio_links" className="text-sm font-medium">
                Portfolio/GitHub Links (Optional)
              </label>
              <Input
                id="portfolio_links"
                name="portfolio_links"
                value={formData.portfolio_links}
                onChange={handleChange}
                placeholder="https://github.com/yourname or https://yourportfolio.com"
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself, your relevant experience, and why you want to join our team..."
                className="min-h-[150px]"
              />
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-yellow-600 text-xl">📋</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Important: Resume Required
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>Please attach your updated resume when the email opens. Applications without resumes will not be considered.</p>
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90">
              Submit Application
            </Button>
          </form>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>📍 Location: Chennai | 💼 Employment Type: Full-time | ⏰ We'll respond within 3-5 business days</p>
        </div>
      </div>
    </div>
  );
}
