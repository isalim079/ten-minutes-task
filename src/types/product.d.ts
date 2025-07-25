export interface MetaItem {
  content: string;
  type: string;
  value: string;
}

export interface SchemaItem {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface SectionValue {
  id?: string;
  name?: string;
  description?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
  color?: string;
  text?: string;
  image?: string;
  slug?: string;
  has_instructor_page?: boolean;
  short_description?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  background?: {
    image?: string;
    primary_color?: string;
    secondary_color?: string;
  };
  cta?: {
    clicked_url?: string;
    color?: string;
    text?: string;
  };
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;
  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  answer?: string;
  question?: string;
  [key: string]: unknown;
}

export interface Checklist {
  id?: number | string;
  title?: string;
  description?: string;
  color?: string;
  icon?: string;
  list_page_visibility?: boolean;
  text?: string;
  [key: string]: unknown;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Medium {
  type?: string;
  url?: string;
  name?: string;
  resource_type?: string;
  resource_value?: string;
  thumbnail_url?: string;
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
  name?: string;
  description?: string;
  bg_color?: string;
  order_idx?: number;
  values?: SectionValue[];
}

export interface Seo {
  defaultMeta: MetaItem[];
  description: string;
  keywords: string[];
  schema: SchemaItem[];
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
