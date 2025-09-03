import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Trophy, CheckCircle } from "lucide-react";

export default function ShortlistedCandidates() {
  const navigate = useNavigate();

  const fullStackCandidates = [
    { name: "Sundhar A", location: "Chennai" },
    { name: "Rithik S", location: "" },
    { name: "Thangapandi B", location: "Chennai" },
    { name: "Ramesh P", location: "Chennai" },
    { name: "Monisha C", location: "Dharmapuri" },
    { name: "Jayakandhan R", location: "Chennai" },
    { name: "Praveen Kumar", location: "Chennai" },
    { name: "Harini S", location: "Thanjavur" },
    { name: "Kathir k", location: "Chennai" },
    { name: "Natshatra U", location: "Vellore" },
    { name: "Nisha Jayakumar", location: "Chennai" }
  ];

  const uiUxCandidates = [
    { name: "Akash", location: "Arani" },
    { name: "Natarajan p", location: "Chennai" },
    { name: "Julaika R", location: "Chennai" },
    { name: "Vasanth k", location: "Salem" },
    { name: "Meharaj Banu", location: "" },
    { name: "Poornima M", location: "Chennai" },
    { name: "Ashok Kumar", location: "Tiruvannamalai" },
    { name: "Nithyasri Thirumal", location: "Ariyalur" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 hover:bg-transparent text-purple-600 hover:text-purple-700"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>

            {/* Simple Announcement Message */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300 rounded-2xl px-8 py-6 shadow-lg animate-pulse">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  📧 We have sent emails to the respective candidates regarding further details
                </h3>
                <p className="text-green-700">
                  All shortlisted candidates will receive interview schedules and instructions soon.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 animate-bounce">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                🎉 Congratulations!
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Shortlisted Candidates
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                We are thrilled to announce the candidates who have been shortlisted for our exciting job opportunities. 
                Thank you to everyone who applied!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" />
                  <span className="font-semibold">{fullStackCandidates.length + uiUxCandidates.length} Shortlisted</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold">2 Positions</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span className="font-semibold">Multiple Locations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Selected Candidates for Interview Round
              </h3>
              
              {/* Position Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:scale-105 transition-transform">
                  <h4 className="font-bold text-blue-800 mb-2">🚀 Full Stack Developer</h4>
                  <p className="text-sm text-blue-600">2 Positions Available</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 hover:scale-105 transition-transform">
                  <h4 className="font-bold text-green-800 mb-2">🎨 UI/UX Designer</h4>
                  <p className="text-sm text-green-600">2 Positions Available</p>
                </div>
              </div>
            </div>

            {/* Full Stack Developer Candidates */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-blue-800 mb-6 text-center bg-blue-50 py-3 rounded-lg">
                🚀 Full Stack Developer - Shortlisted Candidates
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fullStackCandidates.map((candidate, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">
                            {candidate.name}
                          </h4>
                          {candidate.location && (
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {candidate.location}
                            </p>
                          )}
                        </div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UI/UX Designer Candidates */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-green-800 mb-6 text-center bg-green-50 py-3 rounded-lg">
                🎨 UI/UX Designer - Shortlisted Candidates
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {uiUxCandidates.map((candidate, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">
                            {candidate.name}
                          </h4>
                          {candidate.location && (
                            <p className="text-xs text-gray-600 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {candidate.location}
                            </p>
                          )}
                        </div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thank You Message */}
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-green-800 mb-2">
                🙏 Thank You to All Applicants
              </h4>
              <p className="text-green-700 text-sm">
                We received an overwhelming response and appreciate every single application. 
                While not everyone could be shortlisted this time, we encourage you to stay connected 
                with us for future opportunities!
              </p>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-6 bg-gray-100 px-8 py-4 rounded-full text-sm text-gray-600">
              <span className="flex items-center gap-2">
                📍 <strong>Location:</strong> Chennai
              </span>
              <span className="flex items-center gap-2">
                💼 <strong>Type:</strong> Full-time
              </span>
              <span className="flex items-center gap-2">
                🎯 <strong>Openings:</strong> 4 Positions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
