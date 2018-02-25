Vue.component("city", {
  props: ["cityData"],
  data: function() {
    return {
      hover: false,
      constructedLinkStyle: {
        fontSize: "14px",
        fontFamily: "Open Sans, sans-serif",
        lineHeight: "32px"
      }
    }
  },
  computed: {
    constructedDivStyle: function() {
      return {
        width: "300px",
        height: "100px",
        backgroundColor: this.cityData.primaryColor,
        border: "0px solid transparent",
        borderRadius: "10px",
        color: this.cityData.textColor,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "all 150ms ease-in-out",
        padding: "10px",
        margin: "10px auto",
        cursor: "pointer"
      };
    },
    constructedDivHoverStyle: function() {
      return {
        width: "300px",
        height: "100px",
        backgroundColor: this.cityData.primaryColor,
        border: "0px solid transparent",
        borderRadius: "10px",
        color: this.cityData.textColor,
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.6)",
        transition: "all 150ms ease-in-out",
        padding: "10px",
        margin: "10px auto",
        cursor: "pointer"
      };
    },
    constructedHeaderStyle: function() {
      return {
        fontSize: "36px",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "bold",
        lineHeight: "48px"
      };
    }
  },
  methods: {
    routeToCity: function() {
      window.location = this.cityData.link;
    }
  },
  template: `
    <div v-if="hover"
    v-on:mouseleave="hover = !hover"
    v-on:click="routeToCity"
    v-bind:style="constructedDivHoverStyle">
      <h3 v-bind:style="constructedHeaderStyle">{{cityData.name}}</h3>
      <p v-bind:style="constructedLinkStyle">{{cityData.link}}</p>
    </div>
    <div v-else
    v-on:mouseenter="hover = !hover"
    v-on:click="routeToCity"
    v-bind:style="constructedDivStyle">
      <h3 v-bind:style="constructedHeaderStyle">{{cityData.name}}</h3>
      <p v-bind:style="constructedLinkStyle">{{cityData.link}}</p>
    </div>
  `
});

// register
Vue.component("city-blocks", {
  data: function() {
    return {
      cities: [
        {"name": "Seattle",
        "primaryColor": "#4747FF",
        "textColor": "white",
        "link": "https://councildataproject.github.io/seattle/"}
      ],
      appStyle: {
        height: "70vh",
        width: "60%",
        margin: "100px 20%"
      },
      headerStyle: {
        fontSize: "38px",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "bold",
        lineHeight: "60px",
        display: "block",
        borderBottom: "2px solid black",
        marginBottom: "20px"
      },
      blockStyle: {
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
      }
    };
  },
  template: `
    <div v-bind:style="appStyle">
      <h1 v-bind:style="headerStyle">Council Data Project Cities:</h1>
      <div v-bind:style="blockStyle">
        <city v-for="c in cities"
          v-bind:cityData="c">
        </city>
      </div>
    </div>
  `
});


// create a root instance
new Vue({
  el: "#app"
});
