import { use, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
// A faire après import { saveGarde } from './utils/storage'


// Intervention
type Intervetion = {
    id: number,
    engin: string,
    intitule: string
};

// Garde 
type Garde = {
    id: number,
    date: string,
    interventions: string,
    engin: string,
    intitule: string
};


export default function NouvelleGarde() {
    const [typeGarde, setTypeGarde] = useState('');
    const [dateGarde, setDateGarde] = useState('');
    const [nombreInterventions, setIntervention] = useState('');
    const [interventions, setInterventions] = useState<Intervetion[]>([]);

    // Fonction qui génère le nombre de case selon le nombre d'interventions
    const genererInterventions = () => {
    const nb = parseInt(nombreInterventions)
    if (nb > 0 && nb <= 20){
        const inter: Intervetion[] = [];
        for (let i = 0; i < nb; i++) {
            inter.push({
                id: i,
                engin: '',
                intitule: '',
            });
        }
        setInterventions(inter);
    };
};

// Mise à jour d'une intervention
const updateIntervention = (id: number, field: keyof Intervetion, value: string) => {
    const newInter = [...interventions];

    newInter[id][field] = value as any;
    setInterventions(newInter);
};

// Sauvegarder la garde
const sauvegarderGarde = async () => {
    const nouvelleGarde = {
        id: Date.now().toString(),
        typeGarde,
        dateGarde,
        interventions,
    };

    alert("Garde enregistrée !");
    router.back();
}

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Nouvelle Garde 🧑‍🚒</Text>

            {/* Type de garde */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Type de garde</Text>
                <TextInput
                    style={StyleSheet.input}
                    placeholder="Ex: Jour, Nuit.."
                    value={typeGarde}
                    onChangeText={setTypeGarde}
                />
            </View>



        </ScrollView>
    )
}