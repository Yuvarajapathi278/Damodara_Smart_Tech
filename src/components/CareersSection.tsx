import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CareersSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Experience: ${formData.experience || 'Not provided'}
Portfolio/GitHub URL: ${formData.portfolio || 'Not provided'}

Cover Letter:
${formData.coverLetter || 'Not provided'}

Please attach your resume to this email.`;

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=damodarasmarttech@gmail.com&su=${encodeURIComponent('Career Application - Future Opportunities')}&body=${encodeURIComponent(emailBody)}`;
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you when new positions become available.",
    });
  };

  return (
    <section id="careers" className="py-20 relative" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--royal-blue))]/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[hsl(var(--royal-purple))]/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-5xl md:text-6xl uppercase tracking-wider text-neon-purple mb-3 font-bold">Careers</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Join Our <span className="gradient-text">Innovation Journey</span>
          </h3>
          <p className="text-base text-muted-foreground">
            We're always looking for talented individuals who are passionate about technology and innovation.
            Join our team and be part of something extraordinary. Apply now for future opportunities!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="gradient-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users size={24} />
                Apply for Future Opportunities
              </CardTitle>
              <CardDescription>
                Submit your application and we'll contact you when new positions become available that match your skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Years of Experience</label>
                    <Input
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g., 3 years"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Portfolio/GitHub URL</label>
                  <Input
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Cover Letter</label>
                  <Textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and your career interests..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-border-alt hover:opacity-90"
                >
                  Apply for Future Opportunities
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
