import React, { Component } from "react";
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { globalImages } from '../styles/globalImages'
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import { registerSchema } from "../helpers/formValidationSchema";
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/RegisterAction';
import Spinner from 'react-native-loading-spinner-overlay';

class Register extends Component {

  state = {
    spinner: false
  };
  
  pressHandlerLogin = () => {
    this.props.navigation.navigate("Login");
  };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       spinner: !this.state.spinner
  //     });
  //   }, 3000);
  // }

  registerUser = (payload) =>{
    this.props.registerUser(payload);
    const { loading } = this.props.newUser
    if(loading) {
      this.setState({spinner: true})
    } else {
      this.props.navigation.navigate("Login");
    }
      this.setState({spinner: false})
      
  }


  render() {
    
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.RegisterBanner}>
        <Spinner
          animation="none"
          color='#f0a500'
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{color: '#f0a500'}}
          overlayColor='rgba(0, 0, 0, .5)'

        />
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={60}>
          <ScrollView>
          {/* <ActivityIndicator animating={true} /> */}
            <View style={GlobalStyles.authForm}>
            <Text style={GlobalStyles.authText}>Register</Text>

              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  password: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  this.registerUser(values)
                }}
              >
                {(props) => (
                  <View style={GlobalStyles.authFormInput}>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="First Name"
                      onChangeText={props.handleChange("first_name")}
                      value={props.values.first_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.first_name && props.errors.first_name}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Last Name"
                      onChangeText={props.handleChange("last_name")}
                      value={props.values.last_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.last_name && props.errors.last_name}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Email"
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                      placeholderTextColor={"black"}
                      autoCapitalize="none"
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      keyboardType={"email-address"}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.email && props.errors.email}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Phone"
                      onChangeText={props.handleChange("phone")}
                      value={props.values.phone}
                      placeholderTextColor={"black"}
                      keyboardType={"numeric"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.phone && props.errors.phone}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Password"
                      onChangeText={props.handleChange("password")}
                      value={props.values.password}
                      placeholderTextColor={"black"}
                      secureTextEntry={true}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.password && props.errors.password}
                    </Text>
                    <TouchableOpacity
                      onPress={this.pressHandlerLogin}
                      style={GlobalStyles.loginTextSpanWrapper}
                    >
                      <Text style={GlobalStyles.registerTextSpan}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={GlobalStyles.formButton}
                      onPress={props.handleSubmit}
                    >
                      <Text style={GlobalStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.emptyInput}></Text>
                    <Text style={GlobalStyles.emptyInput}></Text>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  newUser: state.newUser
})

export default connect(mapStateToProps, {registerUser})(Register);
