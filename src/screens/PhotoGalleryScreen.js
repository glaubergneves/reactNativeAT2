import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { storage } from '../config/firebaseConfig';
import { Camera } from 'expo-camera';

const PhotoGalleryScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);
  

  const handleTakePhoto = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      const storageRef = storage.ref();
      const photosRef = storageRef.child('user_photos');
      const imageFileName = `${Date.now()}.jpg`;
      const imageRef = photosRef.child(imageFileName);
      await imageRef.putFile(photo.uri);
      setPhotos([...photos, photo.uri]);
    }
  };

  if (cameraPermission === null) {
    return <View />;
  }
  if (cameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCamera(ref)}
      />
      <TouchableOpacity onPress={handleTakePhoto} style={styles.captureButton}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photo} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '50%',
  },
  captureButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  photo: {
    width: 200,
    height: 200,
    margin: 10,
  },
});

export default PhotoGalleryScreen;
