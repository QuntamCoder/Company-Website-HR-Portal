import { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import './careers.css';

const CareerSection = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  // Sample job data
  useEffect(() => {
    const sampleJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        domain: "Development",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        posted: "2 days ago",
        description: "We're looking for a skilled Frontend Developer with React experience to join our growing team."
      },
      {
        id: 2,
        title: "UX Designer",
        company: "Creative Minds LLC",
        location: "Remote",
        domain: "Design",
        type: "Full-time",
        salary: "$85,000 - $110,000",
        posted: "1 week ago",
        description: "Join our design team to create beautiful and intuitive user experiences for our products."
      },
      {
        id: 3,
        title: "DevOps Engineer",
        company: "Cloud Solutions Co.",
        location: "New York, NY",
        domain: "Operations",
        type: "Contract",
        salary: "$70 - $90 per hour",
        posted: "3 days ago",
        description: "Looking for a DevOps specialist to help us build and maintain our cloud infrastructure."
      },
      {
        id: 4,
        title: "Data Scientist",
        company: "Analytics Pro",
        location: "Boston, MA",
        domain: "Data",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        posted: "Just now",
        description: "Seeking a data scientist to develop machine learning models and analyze complex datasets."
      },
      {
        id: 5,
        title: "Product Manager",
        company: "Digital Products Ltd",
        location: "Chicago, IL",
        domain: "Management",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        posted: "5 days ago",
        description: "Lead product development from conception to launch in this exciting PM role."
      },
      {
        id: 6,
        title: "Backend Developer",
        company: "API Masters",
        location: "Remote",
        domain: "Development",
        type: "Part-time",
        salary: "$60 - $80 per hour",
        posted: "1 day ago",
        description: "Node.js expert needed to build and maintain our server infrastructure."
      }
    ];
    setJobs(sampleJobs);
    setFilteredJobs(sampleJobs);
  }, []);

  // Filter jobs based on search and filters
  useEffect(() => {
    let results = jobs;
    
    if (searchTerm) {
      results = results.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (domainFilter !== 'all') {
      results = results.filter(job => job.domain === domainFilter);
    }
    
    if (locationFilter !== 'all') {
      results = results.filter(job => 
        locationFilter === 'Remote' ? 
        job.location === 'Remote' : 
        job.location !== 'Remote'
      );
    }
    
    setFilteredJobs(results);
  }, [searchTerm, domainFilter, locationFilter, jobs]);

  const domains = [...new Set(jobs.map(job => job.domain))];
  const locations = [...new Set(jobs.map(job => job.location.includes(',') ? 'On-site' : job.location))];

  return (
    <section className="career-section" id="careers">
      <div className="career-hero">
        <h1>Join Our Team</h1>
        <p>Find your dream job at our innovative company</p>
      </div>
      
      <div className="search-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters">
          <select 
            value={domainFilter} 
            onChange={(e) => setDomainFilter(e.target.value)}
          >
            <option value="all">All Domains</option>
            {domains.map(domain => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
          
          <select 
            value={locationFilter} 
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="all">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>
      </div>
      
      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="company">{job.company}</span>
              </div>
              
              <div className="job-details">
                <div className="detail">
                  <FaMapMarkerAlt />
                  <span>{job.location}</span>
                </div>
                <div className="detail">
                  <FaBriefcase />
                  <span>{job.domain}</span>
                </div>
                <div className="detail">
                  <FaMoneyBillWave />
                  <span>{job.salary}</span>
                </div>
                <div className="detail">
                  <FaClock />
                  <span>{job.posted}</span>
                </div>
              </div>
              
              <p className="job-description">{job.description}</p>
              
              <button className="apply-btn">Apply Now</button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No jobs found matching your criteria</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      
      <div className="career-cta">
        <h2>Can't find what you're looking for?</h2>
        <p>Send us your resume and we'll contact you when a matching position opens up</p>
        <button className="cta-btn">Submit Your Resume</button>
      </div>
    </section>
  );
};

export default CareerSection;