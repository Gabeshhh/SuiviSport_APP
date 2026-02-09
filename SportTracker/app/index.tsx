import { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  // États des stats 
  const [entrainements, setEntrainement] = useState(0);
  const [garde, setGarde] = useState(0);
  const [sommeil, setSommeil] = useState(0);


  const handlePress = () => {
    alert("Création d'une nouvelle séance");
  };

  const handleNouvelleSeance = () => {
      router.push('/nouvelle_seance');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Dashboard Life</Text>
        <Text style = {styles.name}>Bienvenue, Gabriel</Text>
      </View>
      
    
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{entrainements}</Text>
          <Text style={styles.statLabel}>entraînements</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{garde}</Text>
          <Text style={styles.statLabel}>garde</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{sommeil}</Text>
          <Text style={styles.statLabel}>sommeil</Text>
        </View>
      </View>
  
      {/* Bouton ajouter une séance */}
      <TouchableOpacity style={styles.addButton1} onPress={handleNouvelleSeance}>
        <Text style={styles.addButtonText1}>➕ Nouvelle séance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton2} onPress={handlePress}>
        <Text style={styles.addButtonText2}>📊 Ajouter une garde</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton1} onPress={handlePress}>
        <Text style={styles.addButtonText1}>😴 Ajouter sommeil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton2} onPress={handlePress}>
        <Text style={styles.addButtonText2}>📊 Voir statistiques</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Scroll View
  scrollContent : {
    flexGrow: 1,
  },

  // Accueil simple
  top: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 14,
    width: 390,
    marginTop: 0,
    alignItems: 'flex-start'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 17,
    fontWeight: 'light',
    color: "#BFB9B8",
    marginBottom: 30,
    marginTop: 4
  },

  // Style de la roue 
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E8EDF5',
    padding: 20,
    borderRadius: 15,
    marginTop: 30
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A5F8C',
  },
  statLabel: {
    fontSize: 14,
    color: '#4A5F8C',
    marginTop: 5,
  },
  
  // Style bouton Séance
  addButton1: {
    backgroundColor: '#4f46e5',
    padding: 17,
    borderRadius: 15,
    marginTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10.84,
    paddingLeft: 80,
    paddingRight: 80,
    minWidth: 330,
  },
  addButtonText1: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '700'
  },  

  // Style bouton Statistiques
  addButton2: {
    backgroundColor: '#fff',
    padding: 17,
    borderRadius: 15,
    marginTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10.84,
    paddingLeft: 80,
    paddingRight: 80,
    minWidth: 330,
  }, 
  addButtonText2: {
    color: "#4f46e5",
    fontSize: 16,
    fontWeight: 700,
  }
});