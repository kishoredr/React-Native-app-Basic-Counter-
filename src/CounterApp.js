import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'


class CounterApp extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={styles.text}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={styles.text}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



// it is a function which takes state as an argument
function mapStateToProps(state) { // It gets the state.counter from the store and mapping it to a prop called counter for the class
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp) // connect method connects the created props to the respective component

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    container: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 20
    }
})
