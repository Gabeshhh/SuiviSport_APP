import { use, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

// Type pour un exercice
type Exercice = {
  id: number;
  nom: string;
  series: string;
  reps: string;
  ressenti: string;
};

export default function NouvelleSeance() {
  const [typeSeance, setTypeSeance] = useState('');
  const [nombreExercices, setNombreExercices] = useState('');
  const [exercices, setExercices] = useState<Exercice[]>([]);
  const [bpm, setBPM] = useState('');

  // Génère les exercices vides
  const genererExercices = () => {
    const nb = parseInt(nombreExercices);
    if (nb > 0 && nb <= 20) {
      const exos: Exercice[] = []; // ← FIX ICI
      for (let i = 0; i < nb; i++) {
        exos.push({
          id: i,
          nom: '',
          series: '',
          reps: '',
          ressenti: ''
        });
      }
      setExercices(exos);
    }
  };

  // Mise à jour d'un exo spé
  const updateExercice = (id: number, field: keyof Exercice, value: string) => { // ← FIX ICI
    const newExos = [...exercices];
    newExos[id][field] = value as any; // ← FIX ICI
    setExercices(newExos);
  };

  // Sauvegarde de la nouvelle séance 
  const sauvegarder = () => {
    console.log('Type:', typeSeance);
    console.log('Exercices:', exercices);
    alert('Séance enregistrée ! 💪');
    router.back();
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nouvelle Séance 🏋️</Text>

      {/* Type de séance */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Type de séance</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Musculation, Cardio..."
          value={typeSeance}
          onChangeText={setTypeSeance}
        />
      </View>

      {/* Nombre d'exercices */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre d'exercices</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5"
          keyboardType="numeric"
          value={nombreExercices}
          onChangeText={setNombreExercices}
        />
        <TouchableOpacity style={styles.generateButton} onPress={genererExercices}>
          <Text style={styles.generateButtonText}>Générer les exercices</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des exercices */}
      {exercices.map((exo, index) => (
        <View key={exo.id} style={styles.exerciceCard}>
          <Text style={styles.exerciceTitle}>Exercice {index + 1}</Text>

          <TextInput
            style={styles.input}
            placeholder="Nom de l'exercice"
            value={exo.nom}
            onChangeText={(text) => updateExercice(index, 'nom', text)}
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.smallLabel}>Séries</Text>
              <TextInput
                style={styles.input}
                placeholder="3"
                keyboardType="numeric"
                value={exo.series}
                onChangeText={(text) => updateExercice(index, 'series', text)}
              />
            </View>

            <View style={styles.halfInput}>
              <Text style={styles.smallLabel}>Reps</Text>
              <TextInput
                style={styles.input}
                placeholder="12"
                keyboardType="numeric"
                value={exo.reps}
                onChangeText={(text) => updateExercice(index, 'reps', text)}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.smallLabel}>Ressenti (1-10)</Text>
              <TextInput
                style={styles.input}
                placeholder="8"
                keyboardType="numeric"
                value={exo.ressenti}
                onChangeText={(text) => updateExercice(index, 'ressenti', text)}
              />
            </View>
          </View>
        </View>
      ))}

        {exercices.length > 0 && (
                <View style={styles.inputGroup}>
                <Text style={styles.label}>BPM Moyen de la séance</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex : 140"
                    keyboardType="numeric"
                    value={bpm}
                    onChangeText={setBPM}
                />
                </View>
            )}

      {/* Bouton Sauvegarder */}
      {exercices.length > 0 && (
        <TouchableOpacity style={styles.saveButton} onPress={sauvegarder}>
          <Text style={styles.saveButtonText}>💾 Enregistrer la séance</Text>
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
    backgroundColor: '#4f46e5',
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
  exerciceCard: {
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
  exerciceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  halfInput: {
    flex: 1,
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