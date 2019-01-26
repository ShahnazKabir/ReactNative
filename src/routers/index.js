import HomeComp from '../components/HomeComponent'
import IconComp1 from '../components/IconComponent1'
import IconComp2 from '../components/IconComponent2'
import MapComp from '../components/MapComponent'
import React from "react";

const routes = [
    {
        path: "/",
        exact: true,
        icon: "ios-home",
        component: HomeComp,
        name: 'Home',
        sidebar: () => <Text style={styles.sidebarText}><Icon name="ios-home" size={24}/>Home!</Text>,
    },
    {
        path: "/icon1",
        exact: true,
        icon: "ios-home",
        component: IconComp1,
        name: 'Icon1',
        sidebar: () => <Text style={styles.sidebarText}><Icon name="ios-home" size={24}/>Icon1!</Text>
    },
    {
        path: "/icon2",
        exact: true,
        icon: "ios-home",
        component: IconComp2,
        name: 'Icon2',
        sidebar: () => <Text style={styles.sidebarText}><Icon name="ios-home" size={24}/>Icon2!</Text>,
    },
    {
        path: "/map",
        exact: true,
        icon: "ios-home",
        component: MapComp,
        name: 'Map',
        sidebar: () => <Text style={styles.sidebarText}><Icon name="ios-home" size={24}/>Map!</Text>,
    }
]

export default routes