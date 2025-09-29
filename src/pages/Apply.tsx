import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Send, Mail } from "lucide-react";

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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Indian phone number format: +91 followed by 10 digits or just 10 digits
    const phoneRegex = /^(\+91[\s\-]?)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/[\s\-]/g, ''));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number';
    }

    // Position validation
    if (!formData.position) {
      newErrors.position = 'Please select a position';
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = 'Experience is required';
    } else if (parseFloat(formData.experience) < 0) {
      newErrors.experience = 'Experience cannot be negative';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create email body with all form details
    const emailBody = `
Dear Damodara Smart Tech Team,

I am interested in applying for a position at your company. Please find my application details below:

APPLICANT INFORMATION:
======================
Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Position: ${formData.position}
Years of Experience: ${formData.experience}

${formData.portfolio_links ? `Portfolio/GitHub: ${formData.portfolio_links}` : ''}

COVER LETTER:
=============
${formData.message || 'No cover letter provided'}

Note: I will attach my resume to this email.

Best regards,
${formData.name}
    `.trim();

    // Create Gmail compose URL
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=damodarasmarttech@gmail.com&su=${encodeURIComponent(`Job Application - ${formData.position} - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail compose
    window.open(gmailURL, '_blank');

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      alert("✅ Gmail opened successfully! Please attach your resume and click Send to submit your application.");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-muted-foreground text-lg">
            Apply now for future opportunities with our growing team!
          </p>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Full Stack Developer</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">UI/UX Designer</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Python Web Scraper</span>
          </div>
          
          <div className="mt-6 inline-block bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 px-8 py-4 rounded-xl shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-bold text-lg">📧 Email Application</span>
            </div>
            <p className="text-blue-700 font-semibold text-base leading-relaxed">
              Complete the form below - we'll open Gmail for you to attach resume and send!
            </p>
          </div>
        </div>

        <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Application Form</h2>
            <p className="text-gray-600">Complete your application details below</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  👤 Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`border-2 transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  📧 Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`border-2 transition-colors ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  📱 Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={`border-2 transition-colors ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                <p className="text-xs text-gray-500">Format: +91 XXXXXXXXXX or XXXXXXXXXX</p>
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  💼 Preferred Position *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 bg-white rounded-md focus:outline-none text-sm transition-colors ${errors.position ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                  required
                >
                  <option value="">Select your preferred position</option>
                  <option value="Full Stack Developer">🚀 Full Stack Developer</option>
                  <option value="UI/UX Designer">🎨 UI/UX Designer</option>
                  <option value="Python Web Scraper">🐍 Python Web Scraper</option>
                </select>
                {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                ⭐ Years of Experience *
              </label>
              <Input
                id="experience"
                name="experience"
                type="number"
                min="0"
                step="0.1"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 2.5"
                className={`border-2 transition-colors ${errors.experience ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                required
              />
              {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio_links" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                🔗 Portfolio/GitHub Links (Optional)
              </label>
              <Input
                id="portfolio_links"
                name="portfolio_links"
                value={formData.portfolio_links}
                onChange={handleChange}
                placeholder="https://github.com/yourusername or https://behance.net/yourprofile"
                className="border-2 border-gray-200 focus:border-purple-400 transition-colors"
              />
              <p className="text-xs text-gray-500 bg-blue-50 p-2 rounded-md border border-blue-200">
                💡 <strong>Tip:</strong> For developers: GitHub profile is highly recommended. For designers: Behance/Dribbble portfolio.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                ✍️ Cover Letter (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself, your passion for technology, and why you'd like to join our team..."
                className="min-h-[150px] border-2 border-gray-200 focus:border-purple-400 transition-colors"
              />
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-blue-50 border-2 border-amber-200 rounded-xl p-6 shadow-sm">
              <div className="text-center">
                <h3 className="text-lg font-bold text-amber-800 mb-2">
                  📧 How It Works
                </h3>
                <div className="text-amber-700 font-medium text-sm space-y-2">
                  <p>1. ✅ Fill out the form completely</p>
                  <p>2. 📧 Click "Apply Now" to open Gmail</p>
                  <p>3. 📎 Attach your resume to the email</p>
                  <p>4. ✉️ Click Send to submit your application</p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 text-base shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? (
                <>⏳ Opening Gmail...</>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  📧 Apply Now (Open Gmail)
                </>
              )}
            </Button>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 bg-gray-50 px-8 py-4 rounded-full text-sm text-gray-600 shadow-sm">
            <span className="flex items-center gap-2">
              📍 <strong>Location:</strong> Chennai
            </span>
            <span className="flex items-center gap-2">
              💼 <strong>Type:</strong> Full-time
            </span>
            <span className="flex items-center gap-2">
              ⏰ <strong>Status:</strong> Open for Applications
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
