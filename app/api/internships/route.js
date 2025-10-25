export async function GET() {
  const data = [
    {
      title: 'Digital India Internship Scheme 2025',
      description: 'Government-backed program offering real-world tech projects and mentorship.',
      link: 'https://www.meity.gov.in/offerings/schemes-and-services/details/digital-india-internship-scheme-2025-UjN0IjMtQWa',
      image: 'https://ts1.mm.bing.net/th?id=OIP.BgPC9uE-hJQk2kwRhikOzgHaFj&pid=15.1',
    },
    {
      title: 'Technical Internship Programme – NeGD',
      description: 'Live projects in e-Governance for engineering graduates with 75%+ marks.',
      link: 'https://dic.gov.in/jobs/technical-internship-programme-2025/',
      image: 'https://ts2.mm.bing.net/th?id=OIP.thzrI-IOPUTHIyco64RpmgHaHa&pid=15.1',
    },
    {
      title: 'Top Tech Internships in India 2025',
      description: 'AI, cloud, web dev, and data science roles with stipends up to ₹50,000/month.',
      link: 'https://freshershunt.in/latest-internship-opportunities-october-2025/',
      image: 'https://ts2.mm.bing.net/th?id=OIP.bVCBH91BYkNoqFgjhIOHswHaC7&pid=15.1',
    },
    {
      title: 'Google Summer Internship 2025',
      description: 'Work on cutting-edge tech with Google mentors. Open to CS and related fields.',
      link: 'https://techgnana.blogspot.com/2024/07/apply-for-google-summer-internship-2025.html',
      image: 'https://ts3.mm.bing.net/th?id=OIP.mx-WGW0fbTUbJhnsQIY2IwHaD4&pid=15.1',
    },
    {
      title: 'Adobe Internship 2025',
      description: 'Non-tech and tech roles for freshers with mentorship and project exposure.',
      link: 'https://jobs.cybertecz.in/adobe-internship-2025-hiring-non-tech-intern-bs-apply-now/',
      image: 'https://ts1.mm.bing.net/th?id=OIF.chRRO7P%2bpvzUzaHnyK9hDw&pid=15.1',
    },
    {
      title: 'Free Summer Internship by Softpro India',
      description: 'B.Tech students can apply for hands-on training in software and hardware.',
      link: 'https://notesgallery.com/free-summer-internship-for-b-tech-students/',
      image: 'https://ts3.mm.bing.net/th?id=OIP.CKc6gPcuP7xT5p_HrXDGGQHaDp&pid=15.1',
    },
  ];

  return Response.json({ opportunities: data });
}
