import { RouteModel } from "../common/models/route.model";

export const routeList: RouteModel[] = [
    {
        name: "Home",
        icon: "ph-house",
        link: "/",
        subsMenu: []
    },
    {
        name: "Products",
        icon: "ph-codesandbox-logo",
        link: "/products",
        subsMenu: []
    },
    {
        name: "Roles",
        icon: "ph-check-square",
        link: "/roles",
        subsMenu: []
    },
    {
        name: "General pages",
        icon: "ph-cards",
        link: "/",
        subsMenu: [
            {
                name: "Feed",
                icon: "",
                link: "general_feed.html",
                subsMenu: []
            },
            {
                name: "Embeds",
                icon: "",
                link: "general_feed.html",
                subsMenu: []
            },
            {
                name: "Blog",
                icon: "",
                link: "/",
                subsMenu: [
                    {
                        name: "Classic vertical",
                        link: "/",
                        icon: "",
                        subsMenu:[]
                    },
                    {
                        name: "Classic vertical",
                        link: "/",
                        icon: "",
                        subsMenu:[]
                    },
                    {
                        name: "Classic vertical",
                        link: "/",
                        icon: "",
                        subsMenu:[]
                    }
                ]
            }
        ]
    }
]