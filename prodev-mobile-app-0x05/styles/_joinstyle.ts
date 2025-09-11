import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  largeText: {
    fontWeight: "700",
    fontSize: 39,
    color: "#222",
    marginBottom: 0,
  },
  smallText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7E7B7B",
    marginBottom: 10,
  },
  formGroup: {
    marginTop: 10,
    rowGap: 4,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 0,
  },
  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "300",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 2,
    marginTop: 20,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: "500",
    fontVariant: ["small-caps"],
    color: "#C2C2C2",
  },
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 10,
  },
  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#222",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  subText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7E7B7B",
  },
  subTextJoin: {
    fontWeight: "600",
    fontSize: 12,
    color: "#34967C",
    marginLeft: 5,
  },
});

export { styles };
