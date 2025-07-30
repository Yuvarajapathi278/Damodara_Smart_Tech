import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-background to-secondary/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold neon-glow text-neon-blue mb-4 inline-block">
              DAMODARA<span className="text-neon-purple"> SMART TECH</span>
            </Link>
            <p className="text-muted-foreground mt-2 mb-6">
              Founded in 2024 by Dr. Dev and Dr. Chirag, creating innovative digital solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919342832456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-blue transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-muted-foreground" />
                <a href="mailto:contact@damodarastech.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  contact@damodarastech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-muted-foreground" />
                <a href="tel:+919342832456" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 9342832456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-muted-foreground" />
                <span className="text-muted-foreground">
                  Damodara Smart Tech Private Limited, Thalambur-SIPCOT Road, Siruseri, Chennai-603103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Damodara Smart Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
