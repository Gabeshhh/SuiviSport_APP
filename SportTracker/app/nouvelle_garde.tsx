import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
// A faire après import { saveGarde } from '../utils/storage'

// Intervention
type Intervention = {
    id: number,
    engin: string,
    intitule: string
};

export default function NouvelleGarde() {
    const [typeGarde, setTypeGarde] = useState('');
    const [dateGarde, setDateGarde] = useState('');
    const [nombreInterventions, setNombreInterventions] = useState('');
    const [interventions, setInterventions] = useState<Intervention[]>([]);

    // Fonction qui génère le nombre de cases selon le nombre d'interventions
    const genererInterventions = () => {
        const nb = parseInt(nombreInterventions);
        if (nb > 0 && nb <= 20) {
            const inter: Intervention[] = [];
            for (let i = 0; i < nb; i++) {
                inter.push({
                    id: i,
                    engin: '',
                    intitule: '',
                });
            }
            setInterventions(inter);
        }
    };

    // Mise à jour d'une intervention
    const updateIntervention = (id: number, field: keyof Intervention, value: string) => {
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

        console.log('Garde enregistrée:', nouvelleGarde);
        alert("Garde enregistrée ! 🚒");
        router.back();
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Nouvelle Garde 🧑‍🚒</Text>

            {/* Type de garde */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Type de garde</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Jour, Nuit..."
                    value={typeGarde}
                    onChangeText={setTypeGarde}
                />
            </View>

            {/* Date de garde */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Date de garde</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 10/02/2026"
                    value={dateGarde}
                    onChangeText={setDateGarde}
                />
            </View>

            {/* Nombre d'interventions */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Nombre d'interventions</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: 5'
                    keyboardType='numeric'
                    value={nombreInterventions}
                    onChangeText={setNombreInterventions}
                />
                <TouchableOpacity style={styles.generateButton} onPress={genererInterventions}>
                    <Text style={styles.generateButtonText}>Générer les interventions</Text>
                </TouchableOpacity>
            </View>

            {/* Liste d'interventions */}
            {interventions.map((inter, index) => (
                <View key={inter.id} style={styles.interventionCard}>
                    <Text style={styles.interventionTitle}>Intervention {index + 1}</Text>

                    {/* Engin */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.smallLabel}>Engin</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Ex: VSAV, FPT...'
                            value={inter.engin}
                            onChangeText={(text) => updateIntervention(index, 'engin', text)}
                        />
                    </View>

                    {/* Intitulé */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.smallLabel}>Intitulé</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Ex: Secours à personne, Feu...'
                            value={inter.intitule}
                            onChangeText={(text) => updateIntervention(index, 'intitule', text)}
                        />
                    </View>
                </View>
            ))}

            {/* Bouton Sauvegarder */}
            {interventions.length > 0 && (
                <TouchableOpacity style={styles.saveButton} onPress={sauvegarderGarde}>
                    <Text style={styles.saveButtonText}>💾 Enregistrer la garde</Text>
                </TouchableOpacity>
            )}

            <View style={{ height: 50 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1a1a1a',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    smallLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
        color: '#666',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        fontSize: 16,
    },
    generateButton: {
        backgroundColor: '#ef4444',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    generateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    interventionCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    interventionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ef4444',
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: '#10b981',
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});