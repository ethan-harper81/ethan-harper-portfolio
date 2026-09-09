export const projects = [
  {
    title: "LumoDoc",
    category: "Full Stack Web Application",
    year: "2026",
    path: "/projects/project-one",
    subtitle: "A web application for viewing DICOM Total Body Photography studies.",
    tech: ["React", "TypeScript", "Cornerstone.js", "Python", "FastAPI", "PostgreSQL", "Orthanc"],
    problem: 
        "The Total Body Photography (TBP) scans that the Lumo Imaging's LumoScanner captures consist of over 30GB of High-Resolution images of the body." 
        + " These images are stored in the DICOM format, which is a standard for medical imaging." 
        + "However, traversing and viewing these images can be cumbersome and inefficient." 
        + "LumoDoc aims to streamline this process by providing a user-friendly platform for healthcare professionals to view and analyze these images, saving patients time and allowing doctors to triage malignant lesions more easily.",
    highlights: [
      {
        title: "Purpose-Built Medical Imaging Viewer",
        description: "Designed and developed a specialized medical imaging experience on top of the OHIF framework, transforming a general-purpose DICOM viewer into a focused workflow for reviewing whole-body imaging studies and skin lesions."
      },
      {
        title: "Longitudinal Study Comparison",
        description: "Built a multi-study workflow that allows clinicians to compare current and historical exams, match corresponding lesions across studies, and review changes in clinically relevant characteristics over time."
      },
      {
        title: "Intelligent Lesion Analysis",
        description: "Created a lesion-focused analysis interface that surfaces outliers based on asymmetry, border, color, and diameter measurements, with adjustable sensitivity controls for refining which findings require closer review."
      },
      {
        title: "Interactive Lesion Review Workflow",
        description: "Implemented an end-to-end workflow for displaying, selecting, inspecting, dismissing, and restoring detected lesions while keeping visual annotations, application state, and backend records synchronized."
      },
      {
        title: "High-Resolution On-Demand Imaging",
        description: "Developed a workflow that transitions from overview imagery to high-resolution lesion images on demand, providing detailed diagnostic context without loading every large image upfront."
      },
      {
        title: "Browser Performance and Memory Optimization",
        description: "Improved performance for large medical imaging datasets by moving DICOM metadata processing into a web worker, managing high-resolution image lifecycles, and addressing cache growth and memory leaks."
      },
      {
        title: "DICOM-Driven Adaptive Layouts",
        description: "Built a layout engine that interprets structured DICOM presentation metadata to reconstruct scanner-defined image positioning, ordering, body sides, and pose groupings instead of relying on hard-coded arrangements."
      },
      {
        title: "Specialized Thumbnail Navigation",
        description: "Created a responsive thumbnail browser and carousel for large, structured image sets, supporting rapid navigation between body positions, synchronized viewport selection, smooth scrolling, and touch interactions."
      },
      {
        title: "Custom Medical Imaging Annotations",
        description: "Extended the Cornerstone annotation system with specialized lesion bounding boxes and dynamic coloring that communicates lesion state, statistical significance, and longitudinal change directly in the viewport."
      },
      {
        title: "Clinical Feature Visualization",
        description: "Designed lesion detail views that clearly present computed characteristics, derived scores, comparison values, and percentage changes in a concise clinical interface."
      },
      {
        title: "Multi-Viewport Synchronization",
        description: "Implemented coordinated viewport behavior for side-by-side and overlaid study review, including synchronized image selection, camera presentation, window and level settings, and lesion annotations."
      },
      {
        title: "Backend Integration Architecture",
        description: "Developed a typed client and service layer connecting the viewer to APIs for lesion annotations, computed features, correspondence data, high-resolution images, system preferences, and lesion-state updates."
      },
      {
        title: "Configurable Clinical Experience",
        description: "Added server-managed preferences for annotation colors, outlier thresholds, and feature selection, allowing the application's behavior to be adjusted without rebuilding the frontend."
      },
      {
        title: "Responsive and Touch-Friendly UX",
        description: "Adapted the application for desktop, ultrawide, and touch-screen environments through dynamic panel sizing, swipe navigation, contextual controls, and input-aware hover behavior."
      },
    ],
    role: "Lead Developer",
    sourceLabel: "",
    sourceUrl: "",
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
    sourceLabel: "",
    sourceUrl: "",
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
    sourceLabel: "",
    sourceUrl: "",
    complete: true,
  },
  {
    title: "Rare Disease Detection",
    category: "Graduate Research",
    year: "2025",
    path: "/projects/project-four",
    subtitle: "Few-shot and semi-supervised learning for rare neurological disease detection from MRI scans",
    tech: ["Python","PyTorch","Torchvision","DenseNet-121","NumPy","scikit-learn"],
    problem: "Developed a medical imaging classification system for detecting rare neurological diseases when only a handful of labeled MRI scans are available. Conventional deep learning methods depend on large, balanced datasets, making them poorly suited to rare conditions where expert annotations are costly and positive cases are severely underrepresented."
      + "\n"
      + "The system combines domain-specific DenseNet-121 pretraining, prototypical few-shot classification, and confidence-based pseudo-labeling to adapt to a previously unseen disease using five labeled examples while learning from additional unlabeled scans.",

    highlights: [
      {
        title: "Hybrid Few-Shot and Semi-Supervised Learning",
        description: "Designed a two-stage framework that combines prototypical few-shot learning with semi-supervised fine-tuning, allowing the model to learn from scarce annotations while extracting additional value from a larger pool of unlabeled MRI scans."
      },
      {
        title: "Domain-Specific DenseNet Pretraining",
        description: "Pretrained a DenseNet-121 model as an 18-class classifier on neurological conditions excluding the target disease. Reused the learned feature extractor to provide medically relevant image representations for downstream detection of an unseen condition."
      },
      {
        title: "Five-Shot Disease Adaptation",
        description: "Implemented a prototypical network that represents positive and negative classes using the mean embeddings of their support examples. Query scans are classified according to their distance from these prototypes, enabling adaptation to Walker-Warburg Syndrome from only five labeled positive cases."
      },
      {
        title: "Confidence-Based Pseudo-Labeling",
        description: "Applied the prototypical network to unlabeled scans and selected positive predictions with at least 90% confidence. These pseudo-labeled cases were added to the supervised training set to increase representation of the rare target class while limiting label noise."
      },
      {
        title: "Medical Image Preprocessing Pipeline",
        description: "Built a standardized MRI preprocessing workflow with 224×224 resizing, Otsu-based background removal, Gaussian denoising, and channel-wise z-score normalization to reduce irrelevant variation and produce consistent model inputs."
      },
      {
        title: "11-Point Recall Improvement",
        description: "Improved recall from 0.77 to 0.88 over the limited-data supervised baseline while increasing F1 score from 0.82 to 0.85. The gain demonstrates greater sensitivity to rare positive cases, where reducing false negatives is especially important."
      },
    ],
    role: "Contributing Researcher",
    sourceLabel: "Github Link",
    sourceUrl: "https://github.com/ethan-harper81/Leveraging-FSL-in-Rare-Disease-Detection",
    complete: true,
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
    sourceLabel: "",
    sourceUrl: "",
    complete: false,
  }
];