import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Apply = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    // For example, sending data to your backend
    
    setTimeout(() => {
      setIsSubmitting(false);
      // Add success notification or redirect
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Join Our Team</h1>
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        name="phone"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Years of Experience</label>
                      <Input
                        name="experience"
                        placeholder="e.g., 3 years"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Portfolio/GitHub URL</label>
                    <Input
                      name="portfolio"
                      placeholder="https://your-portfolio.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Cover Letter</label>
                    <Textarea
                      name="coverLetter"
                      placeholder="Tell us about yourself..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-border-alt hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Profile"}
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply; 
