export interface Course {
  _id: string;
  instructor_id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  status: 'draft' | 'published' | 'archived';
  prerequisites: string[];
  start_date: Date;
  end_date: Date;
  is_certified: boolean;
  duration_weeks: number;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string;
  order_index: number;
  is_published: boolean;
  duration_hours: number;
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  content: string;
  content_type: 'text' | 'video' | 'audio';
  video_url?: string;
  duration_minutes: number;
  order_index: number;
  is_free_preview: boolean;
}

export interface Resource {
  id: string;
  lesson_id: string;
  title: string;
  file_url: string;
  resource_type: 'pdf' | 'doc' | 'video' | 'audio' | 'other';
  download_count: number;
  file_size: number;
}