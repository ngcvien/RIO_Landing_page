// A section requires both an enabled flag AND non-empty verified content.
export const features = {
  projects: true,
  achievements: true,
  activities: true,
  members: false,
  gallery: true,
  technologies: true,
} as const;
