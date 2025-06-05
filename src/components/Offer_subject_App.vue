<template>
  <v-app>
    <Sidebar />
    <v-main>
      <div class="main-class">
        <v-list class="main-list">
          <v-list-item class="main-item">
            <v-list-item-title class="main-title">
              Offer Subjects
            </v-list-item-title>
            <v-divider class="main-divider" />
          </v-list-item>
          <v-card class="search-table" flat>
            <template #text>
              <div class="search-filter-fields">
                <v-text-field
                  v-model="search"
                  class="search-field"
                  density="comfortable"
                  hide-details
                  label="Search subjects"
                  prepend-inner-icon="mdi-magnify"
                  single-line
                  variant="solo-filled"
                />
                <v-menu class="list-menu">
                  <template #activator="{ props: activatorProps, isActive }">
                    <v-btn
                      v-bind="activatorProps"
                      class="filter-icon"
                      :class="{ 'rotate-180': isActive }"
                      prepend-icon="mdi-filter"
                    >Filter
                    </v-btn>
                  </template>
                  <v-list class="filter-list">
                    <v-list-item v-for="(item, index) in filterlist" :key="index">
                      <v-list-item-title class="filter-title-list">{{ item.title }}</v-list-item-title>
                      <v-list-item-title class="filter-subfilter-list">
                        <div
                          v-for="sub in item.submenu"
                          :key="sub"
                          class="filter-submenu-chip"
                          :class="{ 'chip-selected': selectedFilters.includes(sub) }"
                          @click="toggleFilter(sub)"
                        >
                          {{ sub }}
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template>
            <div class="scrollable-table">
              <v-data-table
                class="display-data-table"
                fixed-header
                :headers="headers"
                height="700px"
                hide-default-footer
                :items="filteredSubjects"
                :items-per-page="100"
                :search="search"
              >
                <template #item.time="{ item }">
                  <div v-for="(time, index) in item.time" :key="index">
                    {{ time.day }} {{ time.start }} - {{ time.end }}<br>
                  </div>
                </template>
                <template #item.restriction="{ item }">
                  <span
                    :class="item.restriction === 'Restricted' ? 'restricted-bg' : ''"
                  >
                    {{ item.restriction }}
                  </span>
                </template>
                <template #item.offering="{ item }">
                  <span
                    :class="item.offering === 'Regular' ? 'regular-bg' : ''"
                  >
                    {{ item.offering }}
                  </span>
                </template>
              </v-data-table>
            </div>
          </v-card>
        </v-list>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import Sidebar from './Sidebar.vue';
  import { VApp, VBtn, VCard, VDataTable, VDivider, VList, VListItem, VListItemTitle, VMain, VMenu, VTextField } from 'vuetify/components';
  import { computed } from 'vue';


  const selectedFilters = ref([]);

  const filteredSubjects = computed(() => {
    if(selectedFilters.value.length === 0) return subjects;

    return subjects.filter(subj => selectedFilters.value.some(f =>
      subj.offering === f ||
      subj.restriction === f ||
      subj.course === f
    ))
  })
  function toggleFilter (sub){
    const idx = selectedFilters.value.indexOf(sub);
    if(idx === -1) {
      selectedFilters.value.push(sub);
    } else {
      selectedFilters.value.splice(idx, 1);
    }
  }

  const search = ref('');
  const filterlist = ref([
    { title: 'Offering', submenu: ['Regular', 'Closed'] },
    { title: 'Restriction', submenu: ['Restricted', 'Open'] },
  ]);
  const headers = [
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: 'No.',
    },
    { key: 'subject', sortable: false, title: 'Subject' },
    { key: 'section', sortable: false, title: 'Section' },
    { key: 'course', sortable: false, title: 'Course' },
    { key: 'time', sortable: false, title: 'Time' },
    { key: 'description', sortable: false, title: 'Description' },
    { key: 'units', sortable: false, title: 'Units' },
    { key: 'slots', sortable: false, title: 'Slots' },
    { key: 'offering', sortable: false, title: 'Offering' },
    { key: 'restriction', sortable: false, title: 'Restriction' },
  ];
  const subjects = [
    {
      name: '1',
      subject: 'ABE 110',
      section: 'AEF 1',
      course: 'BSABE 4',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'AB ELECTRRIFICATION AND CONTROL',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '2',
      subject: 'ABE 118',
      section: 'BCNO1',
      course: 'BSABE 4',
      time: [
        { day: 'TF', start: '04:00PM', end: '05:00PM' },
        { day: 'Th', start: '09:00PM', end: '12:00PM' },
      ],
      description: 'AB ENVIRONMENTAL CONTROL AND WASTE MANGEMENT ENGINEERING',
      units: 3,
      slots: 30,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '3',
      subject: 'ABE 118',
      section: 'BCNO2',
      course: 'BSABE 4',
      time: [
        { day: 'T', start: '09:00AM', end: '12:00AM' },
        { day: 'W', start: '01:00PM', end: '03:00PM' },
      ],
      description: 'AB MACHINERY AND MECHANIZATION',
      units: 3,
      slots: 30,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '4',
      subject: 'ABE 109',
      section: 'JKTU1',
      course: 'BSABE 3',
      time: [
        { day: 'TF', start: '04:00PM', end: '05:00PM' },
        { day: 'Th', start: '09:00AM', end: '12:00PM' },
      ],
      description: 'AB ENVIRONMENTAL CONTROL AND WASTE MANGEMENT ENGINEERING',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '5',
      subject: 'ABE 114',
      section: 'DLIQ1',
      course: 'OPEN 0',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'AB ENVIRONMENTAL CONTROL AND WASTE MANGEMENT ENGINEERING',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '6',
      subject: 'ABE 112',
      section: 'JKQR1',
      course: 'BSABE 3',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'AB PRODUCTS PROCESSING AND STORAGE',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '7',
      subject: 'ABE 198',
      section: 'KQR1',
      course: 'BSABE 3',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ABE INDUSTRY IMMERSION PROGRAM (360 HOURS)',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '8',
      subject: 'PSYCH 110',
      section: 'L1',
      course: 'BS PSYCH 3',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ABNORMAL PSYCHOLOGY',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '9',
      subject: 'MATH 111',
      section: 'K1',
      course: 'BSED-MATH 3',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ABSTRACT ALGEBRA',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '10',
      subject: 'MATH 311',
      section: 'EFG1',
      course: 'PHD-MATH 1',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ABSTRACT ALGEBRA 1',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '11',
      subject: 'MATH 312',
      section: 'EFG1',
      course: 'PHD-MATH 1',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ABSTRACT ALGEBRA 2',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '12',
      subject: 'MATH 161',
      section: 'C1',
      course: 'BSMATH 3',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ACTUARIAL MATHEMATICS 1',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '13',
      subject: 'PA 211',
      section: 'Y21',
      course: 'OPEN 0',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ADMINISTRATIVE INNOVATION AND REFORM',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '14',
      subject: 'ENS 207',
      section: 'Z21',
      course: 'MEM 1',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ADVANCE AQUATIC ECOLOGY',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
    {
      name: '15',
      subject: 'MATH 118',
      section: 'TW1',
      course: 'BSMATH 4',
      time: [
        { day: 'MTh', start: '08:00AM', end: '09:00AM' },
        { day: 'Th', start: '01:30PM', end: '04:30PM' },
      ],
      description: 'ADVANCED CALCULUS 2',
      units: 3,
      slots: 50,
      offering: 'Regular',
      restriction: 'Restricted',
    },
  ];
  </script>

  <style>
  .main-class {
    background-color: #f2f2f2 !important;
    padding: 30px;
    min-height: 100vh;
  }

  .main-list {
    background-color: transparent !important;
    padding: 0;
    min-height: 100vh;
    border-radius: 10px;
  }

  .main-title {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: bolder;
    color: #000000;
  }

  .main-divider {
    margin: 0;
    width: 100%;
    opacity: 1 !important;
    border: 1px solid rgb(49, 43, 43) !important;
    border-radius: 50px !important;
  }

  .search-filter-fields {
    display: flex !important;
    align-items: center !important;
  }

  .search-table {
    background-color: transparent !important;
    border-radius: 10px !important;
    padding: 20px;
    margin-top: 0 !important;
  }

  /* Fixed search field styling */
  .search-field {
    max-width: 400px;
    margin-bottom: 20px;
  }

  .search-field .v-field {
    border-radius: 50px !important;
    background-color: #f0f0f0 !important;
    border: #a19393 1px solid !important;
    transition: border-color 0.3s ease !important;
  }

  .search-field .v-field__input {
    color: #252121 !important;
    padding: 0 16px !important;
  }

  .display-data-table {
    background-color: #f5f5f5 !important;
    border-radius: 10px !important;
    width: 100% !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10) !important;
  }

  .display-data-table .v-table__wrapper {
    scrollbar-width: none;        /* Firefox */
    -ms-overflow-style: none;     /* IE and Edge */
  }
  .display-data-table .v-table__wrapper::-webkit-scrollbar {
    display: none;                /* Chrome, Safari, Opera */
  }

  /* Make table header sticky */
  .display-data-table thead tr {
    position: sticky !important;
    top: 0;
    z-index: 2;
    background-color: #6417f1 !important; /* Match your header color */
  }

  .display-data-table thead th {
    background-color: #6417f1 !important; /* Or your preferred color */
    color: #f7f7f7 !important;
    font-weight: normal !important;
    font-size: 16px !important;
    font-family: 'poppins', sans-serif !important;
  }

  .filter-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    margin-bottom: 14px !important;

    background-color: #1932c4 !important;
    color: #f3f3f3 !important;
    font-size: 14px !important;
    font-weight: lighter !important;
    border-radius: 50px !important;
    cursor: pointer;
  }

  .filter-icon:hover {
    background-color: #3a5fd8 !important;
  }

  .chip-selected {
    background-color: #632dc7 !important;
    color: #f3f3f3 !important;
  }

  .filter-list {
    margin-left: 10px !important;
    margin-top: 5px !important;
  }

  .filter-title-list {
    font-size: 16px !important;
    color: #302929 !important;
    margin-bottom: 5px !important;
  }

  .filter-subfilter-list {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    /* background-color: #4e0cc7; */
    gap: 5px !important;
    font-size: 14px !important;
    color: #1d1919 !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .filter-submenu-chip {
    background-color: #ebe9ee; /* Choose your color */
    color: #333;
    border-radius: 2px;
    padding: 2px 10px;
    margin: 2px 4px;
    display: inline-block;
    font-size: lighter !important;
    font-weight: 500;
    cursor: pointer;
  }

  .restricted-bg {
    background-color: #ffe0e0; /* Light red, change as needed */
    color: #b71c1c;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: normal !important;
    display: inline-block;
  }

  .regular-bg {
    background-color: #e5ffe0; /* Light red, change as needed */
    color: #0c7211;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: normal !important;
    display: inline-block;
  }

  </style>
