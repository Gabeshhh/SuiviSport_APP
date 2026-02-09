import AsyncStorage from '@react-native-async-storage/async-storage';

export type Seance = {
    id: string;
    typeSeance: string;
    bpm: string;
    date: string;

    exercices: {
        id: number;
        nom: string;
        series: string;
        reps: string;
        ressenti: string;
    }[];
};

// Sauvegarder la séance 
export const saveSeance = async (seance: Seance) => {
    try {
        const existe = await AsyncStorage.getItem('seances');
        const seances: Seance[] = existe ? JSON.parse(existe) : [];
        seances.push(seance);
    
        await AsyncStorage.setItem('seances', JSON.stringify(seances));
        return true;
    } catch (error) {
        console.error("Erreur de sauvegarde ", error);
        return false;
    }
};


// Récupérer les séances 
export const getSeance = async (): Promise<Seance[]> => {
    try {
        const data = await AsyncStorage.getItem('seances');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Erreur de récupération des séances");
        return [];
    }
};


// Calcul pour les stats de la page d'Accueil
export const getStats = async () => {
    const seances = await getSeance(); // ← Ajoute "await" ici !
    return {
      entrainements: seances.length,
      minutes: seances.reduce((acc: number, s: Seance) => acc + (parseInt(s.bpm) || 0), 0),
      km: 0,
    };
  };