import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Apply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    portfolio_links: ''
  });

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
IMPORTANT: PLEASE ATTACH YOUR RESUME TO THIS EMAIL
==================================================
    `.trim();

    // Use Gmail's mailto format
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=damodarasmarttech@gmail.com&su=${encodeURIComponent(`New Job Application by ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            We're always looking for talented individuals to join our team. 
            Fill out the form below to apply for a position.
          </p>
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
                <Input
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position you're applying for"
                />
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
                placeholder="Your years of experience"
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
                placeholder="https://your-portfolio.com"
              />
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
                placeholder="Tell us about yourself and why you want to join us..."
                className="min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
} 
