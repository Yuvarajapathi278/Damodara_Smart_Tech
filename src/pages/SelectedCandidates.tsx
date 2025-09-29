import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Trophy, CheckCircle } from "lucide-react";

export default function SelectedCandidates() {
  const navigate = useNavigate();

  const selectedCandidates = [
    { name: "Kathir K", location: "Chennai", position: "Full Stack Developer" },
    { name: "Ramesh P", location: "Chennai", position: "Full Stack Developer" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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

            {/* Announcement Message */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300 rounded-2xl px-8 py-6 shadow-lg animate-pulse">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  📧 We have sent emails to the selected candidates regarding further details
                </h3>
                <p className="text-green-700">
                  Selected candidates will receive onboarding instructions and next steps.
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
                Selected Candidates
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                We are pleased to announce the candidates who have been selected to join our team. 
                Welcome aboard!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" />
                  <span className="font-semibold">{selectedCandidates.length} Selected</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold">Team Ready</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  <MapPin className="h-4 w-4" />
                  <span className="font-semibold">Chennai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Welcome to Our Team!
              </h3>
            </div>

            {/* Selected Candidates */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-blue-800 mb-6 text-center bg-blue-50 py-3 rounded-lg">
                🚀 Selected Team Members
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {selectedCandidates.map((candidate, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {candidate.name.charAt(0)}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {candidate.name}
                      </h4>
                      <p className="text-sm font-semibold text-blue-600 mb-2">
                        {candidate.position}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {candidate.location}
                      </p>
                      <div className="mt-4">
                        <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Welcome Message */}
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-green-800 mb-2">
                🎉 Welcome to the Team!
              </h4>
              <p className="text-green-700 text-sm">
                We are excited to have you join our team. Your journey with us begins now, 
                and we look forward to achieving great things together!
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
        </div>
      </div>
    </div>
  );
}
