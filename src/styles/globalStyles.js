import { StyleSheet, Platform } from "react-native";

export const GlobalStyles = StyleSheet.create({
  flastList:{
    // width: Platform.OS === 'ios' ? 173 : 190,
    height: 150,
    margin: 4,
  },
  authForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 43,
    justifyContent: "center",
    top: "10%",
  },
  authLoginForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 40,
    justifyContent: "center",
    top: "20%",
  },
  registerInput: {
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 6,
    color: "black",
    marginTop: "3%",
    borderColor: "#fff",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  authText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
  },
  loginInput: {
    borderBottomWidth: 1.5,
    padding: 7,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 6,
    color: "black",
    marginTop: "4%",
    borderColor: "#fff",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  emptyInput: {},

  authFormInput: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
  },
  formText: {
    color: "red",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
  formButton: {
    marginTop: "5%",
    backgroundColor: "#f0a500",
    alignSelf: "center",
    alignItems: "center",
    width: "40%",
    padding: 10,
    borderRadius: 30,
  },
  formTextWrapper: {
    alignItems: "center",
    width: "100%",
    top: "12%",
  },
  dashboard: {
    width: "98%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#fff",
    padding: 30,
    width: "95%",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    bottom: "12%",
  },
  link: {
    alignItems: "center",
    width: "100%",
    bottom: "9%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f0a500",
    color: "#fff",
    padding: 13,
    width: "44%",
    borderRadius: 30,
  },
  buttonWrapper: {
    marginTop: "50%",
    alignItems: "center",
    width: "100%",
    bottom: "10%",
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  logo: {
    borderRadius: 100,
    width: 140,
    height: 140,
  },
  logoWrapper: {
    alignItems: "center",
    top: "8%",
    flex: 1,
  },
  loginText: {
    paddingRight: 7,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    top: "7%",
  },
  loginTextWrapper: {
    flexDirection: "row",
    top: 35,
    alignSelf: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  registerText: {
    paddingTop: 8,
    paddingRight: 7,
    alignSelf: "flex-end",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  registerTextSpan: {
    color: "#fff",
    paddingRight: 12,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  loginTextSpan: {
    color: "#fff",
    paddingRight: 8,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  keyboardViewContainer: {
    flex: 1,
  },
  errorText: {
    color: "#fff",
    paddingTop: ".5%",
    paddingLeft: "2%",
    fontWeight: "bold",
  },
  FooterWrapper: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    height: "8%",
    backgroundColor: "#f0a500",
  },
  footerText: {
    fontSize: 8,
  },
  tinyIcon: {
    width: 25,
    height: 25,
    borderColor: "grey",
  },
  shoppingCartNotification: {
    position: "absolute",
    height: 22,
    width: 22,
    borderRadius: 15,
    backgroundColor: "#1eb2a6",
    right: 25,
    bottom: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
  searchBar: {
    width: "100%",
  },
  headerText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    letterSpacing: 0.5,
    padding: 5,
  },
  icon: {
    color: "#fff",
    flexDirection: "row",
  },
  imageCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  cardText: {
    color: 'black',
    borderRadius: 1,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  safeArea: {
    height: "100%",
  },
  profitTop: {
    height: "45%",
    width: "90%",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#f0a500",
  },
  profileBottom: {
    padding: 15,
    height: "45%",
    width: "90%",
    margin: 5,
    backgroundColor: "#f7b32d",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  profileAvartarImage: {
    height: "70%",
    width: "50%",
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 60,
  },
  profileWrapper: {
    flexDirection: "row",
    width: "100%",
    padding: 7,
  },
  profileBottomText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  profileBottomTextKey: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  profileBottomButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    width: "30%",
    borderRadius: 5,
  },
  profileBottomButtonText: {
    fontWeight: "bold",
    color: "black",
    padding: 3,
  },
  profileTopButton: {
    backgroundColor: "#dd3e3e",
    alignItems: "center",
    alignSelf: "center",
    width: "20%",
    borderRadius: 5,
  },
  profileTopButtonText: {
    fontWeight: "bold",
    color: "#fff",
    padding: 3,
  },
  cartList: {
    alignSelf: "center",
    backgroundColor: "red",
    width: "95%",
    height: "40%",
    padding: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartButtonWrapper: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cartListText: {
    color: "#fff",
    padding: 3,
  },
  cartListInput: {
    fontSize: 8,
    color: "#fff",
    borderColor: "#fff",
    backgroundColor: "#f0a500",
    padding: 5,
    alignItems: "center",
    width: "12%",
    height: "13%",
  },
  cartListbutton: {
    backgroundColor: "#f0a500",
    alignItems: "center",
    width: "10%",
    margin: 5,
  },
  editProfileFormWrapper: {
    padding: 15,
    height: "40%",
    width: "90%",
    margin: 5,
    backgroundColor: "#f0a500",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  editProfileForm: {
    marginTop: "10%",
    width: "80%",
    justifyContent: "center",
    height: "100%",
    // top: 10,
  },
  editProfileFormButton: {
    marginTop: "5%",
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    width: "35%",
    padding: 2,
    borderRadius: 5,
  },
  editProfileFormTop: {
    marginTop: 25,
    height: "45%",
    width: "90%",
    padding: 5,
    margin: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#f0a500",
  },
  cartModalScroolView: {
    width: "100%",
    marginLeft: 15,
  },
  cartItemViewWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
  },
  cartItemViewImage: {
    borderRadius: 3,
    width: 30,
    height: 30,
  },
  cartItemViewText: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
  },
  cartItemViewText2: {
    marginRight: 15,
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
  },
  cartItemViewIcon: {
    marginLeft: 5,
    backgroundColor: "#dd3e3e",
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5,
    color: "#fff",
  },
});
