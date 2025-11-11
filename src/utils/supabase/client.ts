import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

const supabaseUrl = `https://${projectId}.supabase.co`;

export const supabase = createClient(supabaseUrl, publicAnonKey);

export type Database = {
  public: {
    Tables: {
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          kelantan: number;
          terengganu: number;
          pahang: number;
          total_points: number;
          completed_lessons: string[];
          last_active_date: string;
          streak_days: number;
          achievements: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          kelantan?: number;
          terengganu?: number;
          pahang?: number;
          total_points?: number;
          completed_lessons?: string[];
          last_active_date?: string;
          streak_days?: number;
          achievements?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          kelantan?: number;
          terengganu?: number;
          pahang?: number;
          total_points?: number;
          completed_lessons?: string[];
          last_active_date?: string;
          streak_days?: number;
          achievements?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      quiz_scores: {
        Row: {
          id: string;
          user_id: string;
          quiz_type: string;
          score: number;
          total_questions: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          quiz_type: string;
          score: number;
          total_questions: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          quiz_type?: string;
          score?: number;
          total_questions?: number;
          created_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          full_name: string;
          email: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          full_name: string;
          email: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          full_name?: string;
          email?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
