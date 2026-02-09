import { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function Index() {
  // États des stats 
  const [entrainements, setEntrainement] = useState(0);
  const [km, setKm] = useState(0);
  const [minutes, setMinutes] = useState(0);


  const handlePress = () => {
    alert("Création d'une nouvelle séance");
  };

  const hadleWork = () => {
    set
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Workout Dashboard 🏋️</Text>
        <Text style = {styles.name}>Bienvenue, Gabriel</Text>
      </View>
      
    
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{setKm}</Text>
          <Text style={styles.statLabel}>entraînements</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{setKm}</Text>
          <Text style={styles.statLabel}>km</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{setMinutes}</Text>
          <Text style={styles.statLabel}>minutes</Text>
        </View>
      </View>
  
      {/* Bouton ajouter une séance */}
      <TouchableOpacity style={styles.addButtonSeance} onPress={handlePress}>
        <Text style={styles.addButtonTextSeance}>➕ Nouvelle séance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButtonStats} onPress={handlePress}>
        <Text style={styles.addButtonTextStats}>📊 Voir statistiques</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  addButtonSeance: {
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
    paddingRight: 80
  },
  addButtonTextSeance: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '700'
  },  

  // Style bouton Statistiques
  addButtonStats: {
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
    paddingRight: 80
  }, 
  addButtonTextStats: {
    color: "#4f46e5",
    fontSize: 16,
    fontWeight: 700,
  }
});