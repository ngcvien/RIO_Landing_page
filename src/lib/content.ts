import { achievements } from "@/content/achievements";
import { activities } from "@/content/activities";
import { features } from "@/content/features";
import { gallery } from "@/content/gallery";
import { members } from "@/content/members";
import { projects } from "@/content/projects";
import { technologies } from "@/content/technologies";
import type { SectionId } from "@/content/types";

export const visibleSections: Record<SectionId, boolean> = {
  about: true,
  disciplines: true,
  join: true,
  contact: true,
  projects: features.projects && projects.length > 0,
  achievements: features.achievements && achievements.length > 0,
  activities: features.activities && activities.length > 0,
  members: features.members && members.length > 0,
  gallery: features.gallery && gallery.length > 0,
  technologies: features.technologies && technologies.length > 0,
};
