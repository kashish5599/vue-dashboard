<template>
  <div id="app">
    <Navbar v-bind:filepath="filepath" />
    <div class="container-fluid">
      <div class="row">
        <Sidebar v-bind:tabs="sidebar" />
        <Content />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Sidebar from './components/Sidebar.vue'
  import Content from './components/Content.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Sidebar,
      Content,
      Footer
    },
    data() {
      return {
        filepath: [
          {
            id: 1,
            title: 'rohitr90',
            type: 'root'
          },
          {
            id: 2,
            title: 'Projects',
            type: 'subfolder'
          },
          {
            id: 3,
            title: 'sample-project',
            type: 'project-name'
          },
          {
            id: 4,
            title: 'Runs',
            type: 'subfolder'
          },
          {
            id: 5,
            title: 'denim-plant-5',
            type: 'filename'
          }
        ],
        sidebar: [
          {
            id: 1,
            title: "info",
            icon: "las la-info-circle",
            active: false
          },
          {
            id: 2,
            title: "analytics",
            icon: "las la-chart-line",
            active: true
          },
          {
            id: 3,
            title: "details",
            icon: "las la-microchip",
            active: false
          },
          {
            id: 4,
            title: "flow",
            icon: "las la-sitemap",
            active: false
          },
          {
            id: 5,
            title: "terminal",
            icon: "las la-terminal",
            active: false
          },
          {
            id: 6,
            title: "files",
            icon: "las la-copy",
            active: false
          },
        ]
      }
    }
  }
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    padding: 0;
    margin: 0;
  }

</style>
