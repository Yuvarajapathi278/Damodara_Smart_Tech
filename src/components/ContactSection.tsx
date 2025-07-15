import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <section id="contact" className="py-20 relative" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-4xl md:text-5xl tracking-wider text-neon-purple mb-3 font-bold">Contact Us</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Start Your <span className="gradient-text">Digital Journey</span>
          </h3>
          <p className="text-base text-muted-foreground">
            Have a project in mind or want to learn more about our services? 
            We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="400">
          {/* Contact Form */}
          <div>
            <div className="glass-card rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Send us a message</h4>
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Subject */}
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary/50 border-white/10"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-blue-purple flex-shrink-0 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm text-muted-foreground mb-1">Email Us</h5>
                    <p className="font-medium">damodarasmarttech@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-pink-orange flex-shrink-0 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm text-muted-foreground mb-1">Call Us</h5>
                    <p className="font-medium">9342832456</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-blue flex-shrink-0 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm text-muted-foreground mb-1">Visit Us</h5>
                    <p className="font-medium">Damodara Smart Tech</p>
                    <p className="font-medium">Thalambur SIPCOT Road, Siruseri, Chennai-603103</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Business Hours</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
