import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PersonalAppPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <Button variant="outline" className="mb-6" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Personal App: Your Digital Identity, Income Engine & Creative Space
      </h1>
      <p className="mb-4">
        We have seen many revolutions.<br/>
        The agricultural revolution gave us food security.<br/>
        The industrial revolution gave us machines.<br/>
        The information revolution gave us access to knowledge.<br/>
        <b>And now, we stand at the edge of the next great shift: The Personal App Revolution.</b>
      </p>
      <p className="mb-4">
        If someone asked you, “What’s your most valuable digital asset?”<br/>
        You might say your LinkedIn profile, your social media account, or maybe your email list.<br/>
        But here is the truth: none of those are truly yours.<br/>
        They are borrowed spaces. Controlled by companies. Limited by policies. Vulnerable to bans, blocks, and breakdowns.<br/>
        <b>A Personal App changes that—giving you your own space on the internet. A space you design, own, manage, and grow—without permission from anyone.</b>
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">💡 A Personal App Is Not Just Another App</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>🧠 <b>Mind Space</b> — where your ideas, journals, plans, and learning live</li>
        <li>💼 <b>Work Space</b> — where you offer services, schedule meetings, or sell products</li>
        <li>📈 <b>Growth Space</b> — where you track goals, build habits, and reflect daily</li>
        <li>🌐 <b>Connect Space</b> — where your tribe can interact, learn from you, or collaborate</li>
        <li>🏦 <b>Income Space</b> — where people pay you for knowledge, skills, time, or value</li>
        <li>🔐 <b>Secure Space</b> — where your data is your own, not sold behind your back</li>
      </ul>
      <p className="mb-4">In simple, it is your OS for life—powered by your values, not algorithms.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">🔍 What Does a Personal App Look Like?</h2>
      <table className="mb-4 border border-gray-300 w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Role / Person</th>
            <th className="border px-2 py-1">What Their Personal App Does</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">A language teacher</td><td className="border px-2 py-1">Hosts lessons, schedules classes, shares PDFs, and collects payments</td></tr>
          <tr><td className="border px-2 py-1">A fitness coach</td><td className="border px-2 py-1">Offers custom workout plans, logs client progress, shares videos</td></tr>
          <tr><td className="border px-2 py-1">A small farmer</td><td className="border px-2 py-1">Lets customers order produce, track delivery, and give feedback</td></tr>
          <tr><td className="border px-2 py-1">A college student</td><td className="border px-2 py-1">Shows resume, projects, certifications, and offers tutoring on the side</td></tr>
          <tr><td className="border px-2 py-1">A spiritual guide</td><td className="border px-2 py-1">Shares daily reflections, offers one-on-one guidance, collects donations</td></tr>
          <tr><td className="border px-2 py-1">A homemaker</td><td className="border px-2 py-1">Runs a recipe vault, mini-course, and earns through affiliate links</td></tr>
        </tbody>
      </table>
      <p className="mb-4">No code. No team. Just one app—entirely their own.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">🧩 Components of a Personal App</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>Profile & Identity – Your bio, photo, core beliefs</li>
        <li>Dashboard – Central hub to manage all activities</li>
        <li>Journal or Blog – Daily writing, learning, or teaching space</li>
        <li>Shop or Services – Offer products, sessions, time slots</li>
        <li>Courses or Learning Tracks – Share structured knowledge</li>
        <li>Goal Tracker – Reflect, log progress, and build accountability</li>
        <li>Chat or Community – Stay connected with your tribe or clients</li>
        <li>Wallet/Payments – Collect fees, donations, subscriptions</li>
        <li>Portfolio – Showcase your work, talents, and testimonials</li>
        <li>AI Assistant – Answer FAQs, guide users, or manage bookings</li>
      </ol>
      <p className="mb-4">You choose what’s relevant to your life—and leave out what isn’t. The key difference? This is not one app fits all. This is your life, your flow, your digital blueprint.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">🧠 Why It Matters</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Intentional: Designed for your goals</li>
        <li>Self-upgrading: Grows as you evolve</li>
        <li>Income-friendly: Monetizes your time, not just your content</li>
        <li>Private and secure: Your data, your control</li>
        <li>Purposeful: It helps you become who you want to be—not who the algorithm suggests</li>
      </ul>
      <p className="mb-4">It’s not just an app. It’s a mirror of your mission.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">🧭 Not only for Techies, it’s for everyone</h2>
      <p className="mb-4">You don’t need to be a coder. You don’t need to hire a developer. Thanks to no-code platforms and AI tools, anyone—yes, anyone—can create their own app in days, not months.<br/>Whether you are a: Student, Farmer, Coach, Artist, Homemaker, Freelancer, Doctor, Young entrepreneur—this revolution is for you.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">🎯 Key Takeaway</h2>
      <p className="mb-8">A Personal App is your digital home, your income engine, and your life compass—fully owned, fully yours.</p>
      <Button variant="outline" onClick={() => navigate(-1)}>
        ← Back to Home
      </Button>
    </div>
  );
};

export default PersonalAppPage; 