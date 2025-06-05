import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import Settings from '@/views/Settings.vue';
import Help from '@/views/Help.vue';
import Logout from '@/views/Logout.vue';
import Icons from '@/components/Icons.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/profile', component: Profile },
    { path: '/settings', component: Settings },
    { path: '/help', component: Help },
    { path: '/logout', component: Logout },
    { path: '/icons', component: Icons },
  ],
});
