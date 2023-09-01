import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import HorizontalScrollView from './src/HorizontalScrollView';
 
const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => console.log('Hamburger menu pressed')}>
            <Image
              source={require('./assets/hamburger.png')}
              style={styles.hamburgerIcon}
            />
          </TouchableOpacity>
          <Image
            source={require('./assets/logo1.jpg')}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => console.log('Search bar pressed')}>
            <Image
              source={require('./assets/search.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          
        </View>
        <View style={styles.newsContainer}>
         {/* Other article containers */}
         </View>

        {/* Add the HorizontalScrollView component here */}
           <View style={styles.horizontalScrollContainer}>
               <HorizontalScrollView/>
          </View>

        <View style={styles.newsContainer}>
          <View style={styles.articleContainer}>
            <Image
              source={require('./assets/article1.webp')}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Vogue Williams jokes about 'selling all her weddings to magazines' in new reality show</Text>
              <Text style={styles.articleDescription}>17 minutes ago</Text>
            </View>
          </View>
          <View style={styles.articleContainer}>
            <Image
              source={require('./assets/Article2.webp')}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Netflix captures Ted Bundy's last moments in a chilling new documentary
               </Text>
              <Text style={styles.articleDescription}>22 minutes ago</Text>
            </View>
          </View>
          <View style={styles.articleContainer}>
            <Image
              source={require('./assets/Article3.webp')}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Beauty Inspiration: Nuala Woulfe celebrates 25 years of clinic NUALA Success
                  </Text>
              <Text style={styles.articleDescription}>38 minutes ago</Text>
            </View>
          </View>
          <View style={styles.articleContainer}>
            <Image
              source={require('./assets/Article4.webp')}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Samsung unveils 219-inch TV called 'The Wall' to 'transform your living room into a cinema'</Text>
              <Text style={styles.articleDescription}> 42 minutes ago</Text>
            </View>
          </View>
          <View style={styles.articleContainer}>
            <Image
              source={require('./assets/Article5.webp')}
              style={styles.articleImage}
            />


            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>This zesty shade is officially taking over, here's how to wear it</Text>
              <Text style={styles.articleDescription}>55 minutes ago</Text>
            </View>
          </View>
          <View style={styles.articleContainer}>
            <Image
              source={require('./assets/Article6.webp')}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>This zesty shade is officially taking over, here's how to wear it</Text>
              <Text style={styles.articleDescription}>60 minutes ago</Text>
            </View>
          </View>
          {/* Add more article containers here */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  logo: {
    width: 190,
    height: 60,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  newsContainer: {
    padding: 10,
  },
  articleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  articleImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  articleTextContainer: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleDescription: {
    fontSize: 14,
    color: '#888',
  },
  horizontalScrollContainer: {
    marginTop:-20, // Adjust the margin as needed
  },
  
});

export default NewsScreen;
