import React, { useState } from "react";

const Home = ({ setPage }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6"
 
  >
   <h2 className="text-xl font-semibold text-blue-400 shadow-lg">Restricted by opportunity?</h2>
    <h1 className="text-4xl font-bold mb-4 mt-2">Get the tech career <br/> you deserve. Faster.</h1>
    <p className="text-lg text-gray-300 mb-6">Structured coding courses that get you there faster with confidence.</p>
 
    <div className="flex justify-center">
      <button onClick={() => setPage("courses")} className="px-4 py-2 bg-orange-500 text-white rounded-lg text-lg font-bold flex items-center">
        Explore Offerings ▼
      </button>
    </div>
  </div>
);

const Courses = ({ setPage }) => (
  <div className="p-6 bg-white text-black">
    <h2 className="text-3xl font-bold mb-4">Our Offerings</h2>
    <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        <h3 className="text-xl font-bold">Full Stack Development</h3>
        <p className="text-gray-700">Master MERN stack with hands-on projects.</p>
      </div>
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        <h3 className="text-xl font-bold">Data Structures & Algorithms</h3>
        <p className="text-gray-700">Enhance problem-solving skills with DSA.</p>
      </div>
      <div className="p-4 border rounded-lg shadow bg-gray-100">
        <h3 className="text-xl font-bold">Machine Learning</h3>
        <p className="text-gray-700">Dive into AI and ML with real-world projects.</p>
      </div>
    </div>
    <button onClick={() => setPage("home")} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg">Go Back</button>
  </div>
);

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="font-bold text-gray-700 px-4 py-2">{title} ▼</button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-600 rounded shadow-lg">
          {options.map((option, index) => (
            <button key={index} className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-white font-bold">{option}</button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ setPage }) => (
  <nav className="p-4 bg-white shadow-md flex justify-between items-center px-8 font-bold">
    <div className="flex space-x-8 mx-auto">
      <Dropdown title="Coding Ninjas" options={["Programs", "Events", "Community"]} />
      <Dropdown title="Job Bootcamp" options={["Placement Prep", "Internships", "Career Guidance"]} />
      <Dropdown title="IIT Certifications" options={["AI & ML", "Web Development", "Data Science"]} />
    </div>
    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">Login</button>
  </nav>
);
const Footer = () => (
  <footer className="bg-[#2b221f] text-white py-10 px-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Coding Ninjas</h3>
        <div className="text-gray-400">
          <p className="flex items-center"><span>📞</span> 1800-123-3598</p>
          <p className="flex items-center mt-2"><span>✉️</span> contact@codingninjas.com</p>
        </div>
        <h3 className="text-lg font-semibold mt-4">Our Offerings</h3>
        <div className="mt-2 text-gray-400">
          <p>Coding Ninjas /job-bootcamp</p>
          <p className="mt-2">Code 360</p>
        </div>
      </div>

      {/* Links Sections */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Coding Ninjas</h3>
        <ul className="text-gray-400 space-y-1">
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Pricing & Refund Policy</li>
          <li>Bug Bounty</li>
          <li>Review</li>
          <li>Press Release</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Products</h3>
        <ul className="text-gray-400 space-y-1">
          <li>Job Bootcamp</li>
          <li>Code 360</li>
          <li>Professional Certifications</li>
          <li>Student Certifications</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Community</h3>
        <ul className="text-gray-400 space-y-1">
          <li>10X Club</li>
          <li>Student Chapters</li>
          <li>Hire from Us</li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
      <p>© 2025 Sunrise Mentors Pvt. Ltd.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <span>📘</span> <span>🔗</span> <span>🐦</span> <span>▶️</span>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [page, setPage] = useState("home");
  
  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" ? <Home setPage={setPage} /> : <Courses setPage={setPage} />}
      <Footer />
    </div>
    
  );
};

export default App;
