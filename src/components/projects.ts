export const projects = [
  {
    title: "LumoDoc",
    category: "Full Stack Web Application",
    year: "2026",
    path: "/projects/project-one",
    subtitle: "A web application for viewing DICOM Total Body Photography studies.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Orthanc"],
    problem: 
        "The Total Body Photography (TBP) scans that we capture consist of over 30GB of High-Resolution images of the body." 
        + "These images are stored in the DICOM format, which is a standard for medical imaging." 
        + "However, traversing and viewing these images can be cumbersome and inefficient." 
        + "LumoDoc aims to streamline this process by providing a user-friendly platform for healthcare professionals to view and analyze these images, saving patients time and allowing doctors to triage malignant lesions more easily.",
    highlights: [
      { title: "User Authentication", description: "Implemented secure user authentication using keycloak." },
      { title: "Document Management", description: "Developed a document management system with upload, download, and search functionalities." },
    ],
    role: "Lead Developer",
    complete: true,

  },
  {
    title: "LumoTrack Local",
    category: "System Design",
    year: "2026",
    path: "/projects/project-two",
    subtitle: "A web application for managing and tracking medical documents.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    problem: "Managing and tracking medical documents can be cumbersome and inefficient. LumoDoc aims to streamline this process by providing a user-friendly platform for healthcare professionals.",
    highlights: [
      { title: "User Authentication", description: "Implemented secure user authentication using JWT and bcrypt." },
      { title: "Document Management", description: "Developed a document management system with upload, download, and search functionalities." },
    ],
    role: "Lead Developer",
    complete: false,
  },
  {
    title: "Lesion Detection",
    category: "Professional Research",
    year: "2026",
    path: "/projects/project-three",
    subtitle: "High-resolution keypoint detection using self-supervised vision transformers",
    tech: ["Python", "Pytorch", "NumPy", "OpenCV", "Dinov3", "Hugging Face Transformers"],
    problem: "Developed  a computer vision system for detecting sparse, lesion dependent keypoints in extremely high resolution imagery. The task combines several challenging constraints: keypoints occupy only a tiny fraction of the image, training supervision is sparse, full-resolution images are too large for conventional end-to-end inference, and visually similar regions create significant class imbalance and false-positive risk."
          + "\n"
          + "The system converts sparse point annotations into dense heatmap supervision and uses a pretrained DINOv3 vision backbone to learn spatial features for keypoint localization.",
    highlights: [
      { title: "DINOv3-Based Detection Architechture", description: "Adapted a pretrained DINOv3 Vision Transformer into a dense keypoint detector, transforming patch-level transformer representations into spatial feature maps and decoding them into full-resolution probability heatmaps, The architecture suports frozen-backbone transfer learning, allowing task specific features to be learned efficiently from limited labeled data." },
      { title: "Sparse Point Annotations \u2192 Dense Supervision", description: "Designed a point-supervised training pipeline that converts sparse coordinate annotations into Gaussian heatmaps, enabling the localization problem to be optimized as a dense prediction rather than direct coordinate regression." },
      { title: "High-Resolution Tiled Inference", description: "Built an overlapping tiled inference pipeline for processing images far beyond the models native input resolution. Predictions from neighboring tiles are smoothly blended using spatial weighting to suppress boundary artifacts and reconstruct a continuous full-image probability map."},
      { title: "Keypoint Extraction & Post Processing", description: "Developed a post-processing pipeline that converts dense model predictions into discrete keypoint candidates using local peak detection, confidence thresholding, and spatial non-maximum suppression."},
      { title: "Recall Improvement", description: "Increased lesion recall from 80% to 96% compared to previously deployed detection technique while simultaneously reducing unmatched detections. Importantly, evaluation accounted for imperfect ground-truth annotations: manual review indicated that some unmatched model predictions represented plausible true positives from the original annotations, suggesting measured precision may undersetimate actual performance."}
    ],
    images: [],
    role: "Lead Developer",
    complete: true,
  },
  {
    title: "Rare Disease Detection",
    category: "Graduate Research",
    year: "2025",
    path: "/projects/project-four",
    subtitle: "A web application for managing and tracking medical documents.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    problem: "Managing and tracking medical documents can be cumbersome and inefficient. LumoDoc aims to streamline this process by providing a user-friendly platform for healthcare professionals.",
    highlights: [
      { title: "User Authentication", description: "Implemented secure user authentication using JWT and bcrypt." },
      { title: "Document Management", description: "Developed a document management system with upload, download, and search functionalities." },
    ],
    role: "Lead Developer",
    complete: false,
  },
  {
    title: "MedQA DPO",
    category: "Graduate Research",
    year: "2025",
    path: "/projects/project-five",
    subtitle: "A web application for managing and tracking medical documents.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    problem: "Managing and tracking medical documents can be cumbersome and inefficient. LumoDoc aims to streamline this process by providing a user-friendly platform for healthcare professionals.",
    highlights: [
      { title: "User Authentication", description: "Implemented secure user authentication using JWT and bcrypt." },
      { title: "Document Management", description: "Developed a document management system with upload, download, and search functionalities." },
    ],
    role: "Lead Developer",
    complete: false,
  }
];