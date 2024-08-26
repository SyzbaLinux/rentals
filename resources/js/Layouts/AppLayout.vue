<script>

export default {
    watch: {
        $page: {
            handler() {
                const message = this.$page.props.flash.message;
                if (message != null) {
                    if(!message.optionRoute){
                        this.$swal.fire({
                            icon: message.type,
                            title: message.title,
                            text: message.description
                        })

                    }else{

                        this.$swal.fire({
                            title: message.title,
                            text:message.optiontext,
                            icon: message.type,
                            showCancelButton: true,
                            confirmButtonColor: '#42a848',
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Close',
                            confirmButtonText: 'Yes, Proceed'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.$inertia.visit(message.optionRoute)
                            }
                        })
                    }
                }
            },
        },
    },

    data(){
        return{
            drawer:null,
            items:[
                {
                    text: 'Dashboard',
                    icon: 'mdi-devices',
                    url:route('admin.dashboard'),
                },

                {
                    text: 'Properties',
                    icon: 'mdi-office-building-marker-outline',
                    url:route('admin.properties.index'),
                },

                {
                    text: 'Lease Agreements',
                    icon: 'mdi-file-edit-outline',
                    url:route('admin.lease-agreements.index'),
                },

                {
                    text: 'Payments',
                    icon: 'mdi-cash-plus',
                    url:route('admin.payments.index'),
                },

                {
                    text: 'Clients List',
                    icon: 'mdi-account-group-outline',
                    url:route('admin.clients.index'),
                },

            ]
        }
    },
    props:{
        title:{
            default:'Rentals Management System'
        }
    },

    methods:{
        getPath(stringG){
            if(stringG){
                let url = new URL(stringG)
                return url.pathname
            }
        },

        logout(){
            this.$inertia.visit('/logout',{
                method: 'POST',
            });
        }
    }

}
</script>

<template>
    <Head :title="title"></Head>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" class="glass-shadow">
            <v-list  density="compact" class="mt-n3">
                <v-list>
                    <v-list-item class="text-center">
                        <img height="40" src="/images/logo.png" :alt="$page.props.appName" />
                        <v-list-item-title>
                            <b> {{ $page.props.auth.user.name }}</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ $page.props.auth.user.email }}
                        </v-list-item-subtitle>

                        <InertiaLink class="InertiaLink" :href="route('profile.show')">
                            <v-btn class="mt-2" size="small" color="primary" variant="flat" block>
                                Systems Administrator
                            </v-btn>
                        </InertiaLink>

                    </v-list-item>
                </v-list>
                <v-divider/>
                <v-list-subheader class="my-3">{{ $page.props.appName}}</v-list-subheader>
                <InertiaLink
                    class="InertiaLink raleway"
                    v-for="(item, i) in items"
                    :key="i"
                    :href="item.url"
                >
                    <v-list-item
                        :class="{ 'active-sidebar':$page.url.includes(getPath(item.url)) }"
                    >
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title class="raleway" v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </InertiaLink>
            </v-list>


        </v-navigation-drawer>

        <v-app-bar   class="glass-shadow">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>{{ $page.props.appName }}</v-app-bar-title>
            <v-btn
                color="primary"
            >
                <v-icon icon="mdi-account-circle"/>
                {{ $page.props.auth.user.name }}
                <v-menu activator="parent">
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                {{ $page.props.auth.user.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ $page.props.auth.user.email }}
                            </v-list-item-subtitle>
                        </v-list-item>
                        <v-divider class="my-2" />

                        <v-list-item :href="route('profile.show')">
                            <v-list-item-title>
                                <v-icon>mdi-account-circle</v-icon>  Profile
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item class="cursor-pointer" @click="logout">
                            <v-list-item-title>
                                <v-icon>mdi-login</v-icon> Logout
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <slot/>
            </v-container>
        </v-main>
    </v-app>
</template>


