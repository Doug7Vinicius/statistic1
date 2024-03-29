var lightTheme = {
  mainBackground: "bg-light",
  leftBackground: "bg-white",
  skillBackground: "bg-warning",
  mainText: "text-dark",
  linkText: "text-warning",
  toggleIcon: "fa-toggle-off",
  shadow: "shadowsDark"
};

var darkTheme = {
  mainBackground: "bg-black",
  leftBackground: "bg-alt-black",
  skillBackground: "bg-primary",
  mainText: "text-white",
  linkText: "text-primary",
  toggleIcon: "fa-toggle-on",
  shadow: "shadowsLight"
};

var isDark = false;

var themeColor = document.querySelector("meta[name=theme-color]");
