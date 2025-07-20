import { StyleSheet, Dimensions } from "react-native";

const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34967C",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 24,
  },
  largeText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginTop: 24,
    marginLeft: 24,
  },
  smallText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 24,
    marginTop: 8,
    marginBottom: 16,
  },
  formGroup: {
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  placeholderText: {
    color: "#7B7B7B",
    marginBottom: 4,
    fontWeight: "500",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  forgotPasswordText: {
    color: "#34967C",
    textAlign: "right",
    marginTop: 8,
    marginBottom: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#FFA800",
    marginHorizontal: 24,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e6e6e6",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#C2C2C2",
    fontSize: 17,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  socialMediaButtonGroup: {
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 16,
    gap: 12,
  },
  socialMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  socialMediaButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7B7B7B",
    marginLeft: 8,
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  subText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  subTextJoin: {
    color: "#FFA800",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 4,
  },
});

export { styles };
