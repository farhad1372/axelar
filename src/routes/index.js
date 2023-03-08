import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../components/base-layout.vue";
import Home from "../pages/home.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HomeLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
                meta: {
                    next: {
                        text: "General > Concepts",
                        link: "general.concepts"
                    },
                    prev: null,
                    title: ['Introduction']
                }
            },
            {
                path: "general/concepts",
                name: "general.concepts",
                component: () => import("../pages/general/concepts.vue"),
                meta: {
                    title: ['General', 'Concepts'],
                    next: {
                        text: "General > Analytics",
                        link: "general.analytics"
                    },
                    prev: {
                        text: "Introduction",
                        link: "Home"
                    },
                }
            },

            {
                path: "general/analytics",
                name: "general.analytics",
                component: () => import("../pages/general/analytics.vue"),
            },

            {
                path: "axelar/analytics",
                name: "axelar.analytics",
                component: () => import("../pages/axelar/analytic.vue"),
            },

            {
                path: "gmp/analytics",
                name: "gmp.analytics",
                component: () => import("../pages/gmp/index.vue"),
            },

            {
                path: "ibc/transfer-in",
                name: "IBC.in",
                component: () => import("../pages/ibc-in/index.vue"),
            },

            {
                path: "ibc/transfer-out",
                name: "IBC.out",
                component: () => import("../pages/ibc-out/index.vue"),
            },

            {
                path: "bridge",
                name: "Bridge",
                component: () => import("../pages/bridge/analytics.vue"),
            },

            {
                path: "Comparing",
                name: "Comparing",
                component: () => import("../pages/comparing/index.vue"),
            },


      

            {
                path: "refrences",
                name: "refrences",
                component: () => import("../pages/refrences/index.vue"),
                meta: {
                    title: ['Refrences'],
                    next: {
                        text: "Resources",
                        link: "resources"
                    },
                    prev: {
                        text: "Bridge > Analytics",
                        link: "bridge.analytics"
                    },
                }
            },

            {
                path: "resources",
                name: "resources",
                component: () => import("../pages/resources/index.vue"),
                meta: {
                    title: ['Resources']
                }
            },





        ]
    },
    {
        path: "*",
        redirect: { name: "404" }
    },
    {
        path: "/not-found/404",
        component: () => import("../pages/errors/404.vue"),
        name: "404"
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    // base: "",
    routes,
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0, behavior: "smooth" });
            }, 100);
        });
    },
});








export default router;
