import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Send } from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    
    const emailBody = `
Hello Damodara Smart Tech Team,

You have received a new message from your website contact form:

CONTACT DETAILS:
===============
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

MESSAGE:
========
${formData.message}

---
This message was sent from your website contact form.
Please reply directly to: ${formData.email}
    `.trim();

    // Open Gmail compose
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=damodarasmarttech@gmail.com&su=${encodeURIComponent(`Website Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      alert("✅ Gmail opened successfully! Click Send to submit your message.");
      
      // Reset form after submission
      setFormData({
        name: '', email: '', subject: '', message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className="mt-6 inline-block bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 px-8 py-4 rounded-xl shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-bold text-lg">📧 Quick Contact</span>
            </div>
            <p className="text-green-700 font-semibold text-base leading-relaxed">
              Fill out the form - we'll open Gmail for you to send instantly!
            </p>
          </div>
        </div>

        <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Send us a Message</h2>
            <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  👤 Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`border-2 transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  📧 Your Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`border-2 transition-colors ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                📋 Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={`border-2 transition-colors ${errors.subject ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                ✍️ Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                className={`min-h-[150px] border-2 transition-colors ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-purple-400'}`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
              <div className="text-center">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  📬 How It Works
                </h3>
                <div className="text-blue-700 font-medium text-sm space-y-1">
                  <p>1. ✅ Fill out all required fields</p>
                  <p>2. 📧 Click "Send Message" to open Gmail</p>
                  <p>3. ✉️ Click Send to deliver your message</p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 text-base shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? (
                <>⏳ Opening Gmail...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  📧 Send Message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
