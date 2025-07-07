// This file is now deprecated - use the JSON data instead
// Import from the new JSON structure
import { verbConjugations, getVerbConjugationsByLevel, getVerbConjugationsByType } from './index';

// Re-export for backward compatibility
export { verbConjugations, getVerbConjugationsByLevel, getVerbConjugationsByType };

// Re-export the VerbConjugation interface for backward compatibility
export interface VerbConjugation {
  infinitive: string;
  arabic: string;
  pronunciation: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  type: 'regular' | 'irregular' | 'modal' | 'separable';
  present: {
    ich: string;
    du: string;
    er_sie_es: string;
    wir: string;
    ihr: string;
    sie_Sie: string;
  };
  past: {
    ich: string;
    du: string;
    er_sie_es: string;
    wir: string;
    ihr: string;
    sie_Sie: string;
  };
  perfect: {
    ich: string;
    du: string;
    er_sie_es: string;
    wir: string;
    ihr: string;
    sie_Sie: string;
  };
  future: {
    ich: string;
    du: string;
    er_sie_es: string;
    wir: string;
    ihr: string;
    sie_Sie: string;
  };
  imperative: {
    du: string;
    ihr: string;
    Sie: string;
  };
  participle: {
    present: string;
    past: string;
  };
}