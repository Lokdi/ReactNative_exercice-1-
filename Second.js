import React, { Component } from "react";
import { Text , View } from "react-native";

class Second extends Component
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
                    <Text>Hello {this.props.user}</Text>
                </View>
            </>
        )
    }
}
export default Second