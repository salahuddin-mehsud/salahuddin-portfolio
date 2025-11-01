// Temporary video URLs - replace with your actual hosted videos
export const getVideoUrl = (videoName) => {
  const videoMap = {
    'ecommerce_store.mp4': 'https://your-cdn.com/ecommerce_store.mp4', // Replace with actual URL
    'gasless_voting.mp4': 'https://your-cdn.com/gasless_voting.mp4',   // Replace with actual URL
    'job_portal.mp4': 'https://your-cdn.com/job_portal.mp4'           // Replace with actual URL
  };
  
  return videoMap[videoName] || '';
};

// Fallback video component
export const VideoFallback = ({ project }) => (
  <div className="video-fallback rounded-lg w-full h-48 flex items-center justify-center">
    <div className="text-center">
      <div className="text-4xl mb-2">📹</div>
      <p className="text-white font-semibold mb-2">Video Demo</p>
      <p className="text-gray-300 text-sm mb-3">Project: {project.title}</p>
      <a 
        href={project.demo || project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#8245ec] font-medium hover:text-[#00f5ff] transition-colors text-sm"
      >
        View Live Demo →
      </a>
    </div>
  </div>
);