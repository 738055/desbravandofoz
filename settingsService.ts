import { supabase } from '@/lib/supabaseClient';
import { AppSetting } from '@/types';

export const SettingsService = {
  getAll: async (): Promise<AppSetting[]> => {
    if (!supabase) return [];
    
    const { data, error } = await supabase
      .from('app_settings')
      .select('*')
      .order('label');
      
    if (error) {
      console.error('Error fetching settings:', error);
      return [];
    }
    return data || [];
  },

  update: async (key: string, value: string): Promise<void> => {
    if (!supabase) return;

    const { error } = await supabase
      .from('app_settings')
      .update({ value, updated_at: new Date().toISOString() })
      .eq('key', key);

    if (error) throw error;
  },
  
  getSettingsMap: async (): Promise<Record<string, string>> => {
     if (!supabase) return {};
     const { data } = await supabase.from('app_settings').select('key, value');
     
     const settings: Record<string, string> = {};
     data?.forEach(item => {
         settings[item.key] = item.value;
     });
     return settings;
  }
};