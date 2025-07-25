export interface Checklist {
  id?: number;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Medium {
  type: string;
  url: string;
  [key: string]: unknown;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface Section {
  type: string;
  title?: string;
  content?: string;
  [key: string]: unknown;
}

export interface Seo {
  defaultMeta: Record<string, unknown>[];
  description: string;
  keywords: string[];
  schema: Record<string, unknown>[];
  title: string;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  checklist: Checklist[];
  cta_text: CtaText;
  delivery_method: string;
  is_cohort_based_course: boolean;
  media: Medium[];
  modality: string;
  old_info: OldInfo;
  secondary_cta_group: Record<string, unknown>[];
  sections: Section[];
  seo: Seo;
  start_at: string;
  type: string;
}
