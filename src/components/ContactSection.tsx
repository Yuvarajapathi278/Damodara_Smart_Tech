import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=damodarasmarttech@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="contact" className="py-16 relative" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl tracking-wider text-neon-purple mb-3 font-bold">Contact Us</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Start Your <span className="gradient-text">Digital Journey</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="glass-card rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-white/10"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-white/10"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-secondary/50 border-white/10"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-secondary/50 border-white/10"
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
