import React, { Component } from "react";
import { Text, View } from "react-native";

class TextPresentation extends Component
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
                    <Text>je suis {this.props.user}</Text>
                </View>
            </>
        )

    }
}
export default TextPresentation