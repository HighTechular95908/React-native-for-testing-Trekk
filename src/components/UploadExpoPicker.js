// import React, { useState, useEffect } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// // import DocumentPicker from 'react-native-document-picker';

// export function component() {
//   const [uri, seturi] = useState('');
//   const [file, setFile] = useState(null);
//   // trigger the handler method as soon as the function component
//   // SelectImage is mounted
//   useEffect(() => {
//     onHandlePermission();
//   }, []);
//   miidata = "";
//   // promot a dialog box by asking for a user's permission
//   // to allow the app to open the phone's library
//   // and select the image
//   const onHandlePermission = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     // if permissions are not granted, display an alert box
//     if (permissionResult.granted === false) {
//       alert('Permission to access Photos is required!');
//       return;
//     };
//   };

//   // hanlder function to select the image
//   // from the media library
//   const onSelectImage = async () => {
//     /////////////////////////expo-picker
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1
//     });
//     // if the process of selecting the image is cancelled or interrupted by the app user in between
   
//       // seturi(result.assets[0].uri);
//       seturi(miidata);
//       let uri2 = result.assets[0].uri;
//       // let formData = new FormData();
//       let data = {
//         "file": uri
//       };
//       // formData.append('file', {
//       //   uri,
//       //   type: 'image/jpg',
//       //   name: 'xyz.jpg'
//       // });
//       // formData.append('file', result.assets[0].uri);
//       formData.file = result.assets[0].uri;
//       console.log("result-------->", result);
//       console.log("result.type-------->", result.assets[0].uri.type);
//       console.log("result.uri-------->", result.assets[0].uri);
//       // formData.append('file', uri);
//       // 
//       // fetch('http://127.0.0.1:3500/api/image/upload-single', {
//       // await fetch('http://127.0.0.1:5000/image', {
//       //   method: 'POST',
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify(data)
//       // })
//       //   .then(response => response.json())
//       //   .then(data => {
//       //     console.log('File uploaded successfully', data);
//       //   })
//       //   .catch(error => {
//       //     console.error('Error uploading file', error);
//       //   });
    
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: uri }} style={styles.image} />
//       <TouchableOpacity style={styles.button} onPress={onSelectImage}>
//         <Text style={styles.buttonText}>Select an image</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     paddingVertical: 10,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 4,
//     backgroundColor: '#d7d7d7'
//   },
//   button: {
//     marginTop: 10,
//     borderRadius: 8,
//     padding: 10,
//     height: 44,
//     backgroundColor: '#5A45FF',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18
//   }
// });