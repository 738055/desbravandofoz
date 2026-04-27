// utils/autoTranslate.ts

interface Translations {
  en: string;
  es: string;
}

/**
 * Traduz um texto do Português (pt) para Inglês (en) e Espanhol (es).
 * Usa a API pública do MyMemory.
 */
export async function autoFillTranslations(
  ptText: string, 
  currentEn: string = '', 
  currentEs: string = ''
): Promise<Translations> {
  
  // Se não houver texto original, retorna os atuais ou vazio
  if (!ptText) return { en: currentEn, es: currentEs };

  try {
    const translate = async (text: string, targetLang: string) => {
      // Se já existe uma tradução robusta (>5 chars), preserva ela para não sobrescrever edições manuais
      // Remova este IF se quiser forçar sempre a retradução
      if (targetLang === 'en' && currentEn && currentEn.trim().length > 5) return currentEn;
      if (targetLang === 'es' && currentEs && currentEs.trim().length > 5) return currentEs;

      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt-BR|${targetLang}`;
      
      const res = await fetch(url);
      const data = await res.json();

      if (data.responseStatus === 200 && data.responseData.translatedText) {
        return data.responseData.translatedText;
      }
      return null;
    };

    const [en, es] = await Promise.all([
      translate(ptText, 'en'),
      translate(ptText, 'es')
    ]);

    return {
      en: en || currentEn || ptText, // Fallback: mantem o atual ou repete o PT
      es: es || currentEs || ptText
    };

  } catch (error) {
    console.error("Erro na tradução automática:", error);
    return {
      en: currentEn || ptText,
      es: currentEs || ptText
    };
  }
}