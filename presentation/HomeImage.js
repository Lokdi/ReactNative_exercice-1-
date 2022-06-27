import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";


const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    }
  });

class HomeImage extends Component
{
    constructor(props)
    {       
       super(props)
    }
    render()
    {
        return(
            <>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
            </>
        )

    }
}
export default HomeImage