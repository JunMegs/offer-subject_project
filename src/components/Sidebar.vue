<template>
  <v-navigation-drawer app class="fixed-sidebar" permanent>
    <v-list class="sidebar">
      <!-- Logo Section -->
      <div class="logo-container">
        <v-list class="head">
          <v-list-item class="logo">
            <v-list-item-avatar class="logo-avatar">
              <v-img
                alt="User Avatar"
                class="logo-img"
                src="@/assets/1v5lomro.png"
              />
            </v-list-item-avatar>
          </v-list-item>
          <v-list class="id-name">
            <v-list-item-title class="name">JUNWARD MEGULLAS</v-list-item-title>
            <p class="id">200-00001 | BSCS - 4</p>
          </v-list>
        </v-list>
      </div>

      <!-- Divider -->
      <v-divider class="v-divider" />

      <!-- Menu Section -->
      <div class="menu scrollable-menu">
        <v-expansion-panels v-model="activePanel" accordion focusable inset>
          <v-expansion-panel
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-item"
            elevation="0"
          >
            <v-expansion-panel-title>
              <v-list-item-content class="menu-item-content">
                <v-list-item-icon class="menu-item-icon">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="menu-item-title">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-expansion-panel-title>
            <v-expansion-panel-text v-if="item.submenu.length">
              <v-list dense>
                <v-list-item
                  v-for="(submenu, subIndex) in item.submenu"
                  :key="subIndex"
                  class="submenu-item"
                >
                  <v-list-item-title>{{ submenu }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        activePanel: null,
        sidebarWidth: '350px',
        menuItems: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            submenu: ['SABA', 'HILOM'],
          },
          { title: 'Academic Record', icon: 'mdi-school', submenu: [] },
          {
            title: 'Enrollment',
            icon: 'mdi-book',
            submenu: [
              'Online Enrollment',
              'Offer Subject',
              'Graduation Application',
            ],
          },
          { title: 'Finance', icon: 'mdi-currency-usd', submenu: [] },
          { title: 'Evaluation', icon: 'mdi-check-circle', submenu: [] },
          { title: 'Votes', icon: 'mdi-vote', submenu: [] },
          { title: 'Help & Support', icon: 'mdi-help-circle', submenu: [] },
          { title: 'Settings', icon: 'mdi-cog', submenu: [] },
          { title: 'Log out', icon: 'mdi-logout', submenu: [] },
        ],
      };
    },
  };
</script>

<style>
.v-navigation-drawer {
  background: rgb(107, 85, 233) !important;
  border-radius: 0 10px 10px 0;
  height: 100vh;
  width: 300px;
  overflow: hidden;
  position: relative;
}

.fixed-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 300px;
  z-index: 1000;
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 20px;
}

.logo-container {
  width: 100%;
  text-align: center;
}

.head {
  margin-top: 5%;
}

.logo {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  text-align: center !important;
}

.logo-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.logo-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.id-name {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  text-align: center !important;
}
.name {
  font-size: 100%;
  font-weight: bold !important;
  color: rgb(235, 225, 225) !important;
  margin-top: 10px;
}

.id {
  margin: 5px;
  color: rgb(235, 225, 225) !important;
}

.v-divider {
  margin: 5px 10px;
  width: 90%;
  opacity: 1 !important;
  border: 1px solid rgb(212, 212, 212) !important;
}

.menu {
  margin-top: 20px;
  width: 100%;
}

.scrollable-menu {
  max-height: 70vh;
  overflow-y: auto;
}

/* Hide scrollbar */
.scrollable-menu::-webkit-scrollbar {
  display: none;
}
.scrollable-menu {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.menu-item-content {
  display: flex;
  align-items: center;
  /* padding: 10px; */
}

.menu-item-icon {
  margin-right: 10px;
  color: rgb(235, 225, 225);
}

.menu-item-title {
  font-size: 16px;
  color: rgb(247, 247, 247);
}

.menu-item {
  background-color: transparent !important;
  color: rgb(235, 225, 225) !important;
}
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.menu-item:focus {
  background-color: rgba(255, 255, 255, 0) !important;
}

.v-expansion-panel {
  box-shadow: none !important;
}

.v-expansion-panels {
  background-color: transparent !important;
  color: rgb(235, 225, 225) !important;
  margin-top: 20px;
  box-shadow: none !important;
}

.submenu-item {
  transition: background-color 0.3s ease;
}

.submenu-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  cursor: pointer;
  color: rgb(235, 225, 225) !important;
  font-weight: bold !important;
}
</style>
