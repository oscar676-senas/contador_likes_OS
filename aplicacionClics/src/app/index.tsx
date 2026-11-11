
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface Registro {
  cantidad: number;
  hora: string;
}

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);
  const [historial, setHistorial] = useState<Registro[]>([]);

  const obtenerHora = () => {
    return new Date().toLocaleTimeString('es-CO', {
      hour12: false,
    });
  };

  const registrarCambio = (nuevaCantidad: number) => {
    setLikes(nuevaCantidad);

    setHistorial((anterior) => [
      {
        cantidad: nuevaCantidad,
        hora: obtenerHora(),
      },
      ...anterior,
    ]);
  };

  const sumarLike = () => {
    registrarCambio(likes + 1);
  };

  const restarLike = () => {
    if (likes > 0) {
      registrarCambio(likes - 1);
    }
  };

  const reiniciar = () => {
    registrarCambio(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Contador de Likes</Text>

      <Text style={styles.subtitulo}>
        ¡Cuenta tus interacciones!
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Total de Likes</Text>

        <Text
          style={[
            styles.contador,
            likes > 10 && styles.contadorActivo,
          ]}
        >
          {likes}
        </Text>

        <Text style={styles.mensaje}>
          {likes > 10
            ? '¡Excelente! Superaste los 10 likes'
            : 'Sigue sumando likes'}
        </Text>

        <TouchableOpacity
          style={styles.botonSumar}
          onPress={sumarLike}
        >
          <Text style={styles.textoBoton}>+ Me gusta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonRestar}
          onPress={restarLike}
        >
          <Text style={styles.textoBoton}>- Restar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonReiniciar}
          onPress={reiniciar}
        >
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tituloHistorial}>Historial de registros</Text>
       
      <Text style={styles.subtitulo}>
         Total de movimientos: {historial.length}
      </Text>

      {historial.length === 0 ? (
        <Text style={styles.vacio}>
          Todavía no hay registros.
        </Text>
      ) : (
        historial.map((registro, index) => (
          <View style={styles.registro} key={index}>
            <Text style={styles.registroCantidad}>
              {registro.cantidad} likes
            </Text>

            <Text style={styles.registroHora}>
              {registro.hora}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    padding: 25,
    paddingTop: 65,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitulo: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 8,
    marginBottom: 30,
  },
  tarjeta: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 4,
  },
  etiqueta: {
    fontSize: 17,
    color: '#475569',
  },
  contador: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#2563eb',
    marginVertical: 10,
  },
  contadorActivo: {
    color: '#16a34a',
  },
  mensaje: {
    color: '#64748b',
    marginBottom: 20,
  },
  botonSumar: {
    backgroundColor: '#2563eb',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  botonRestar: {
    backgroundColor: '#64748b',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  botonReiniciar: {
    backgroundColor: '#dc2626',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tituloHistorial: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 30,
    marginBottom: 15,
  },
  vacio: {
    color: '#64748b',
    marginTop: 10,
  },
  registro: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registroCantidad: {
    fontWeight: 'bold',
    color: '#1e293b',
  },
  registroHora: {
    color: '#64748b',
  },
});
