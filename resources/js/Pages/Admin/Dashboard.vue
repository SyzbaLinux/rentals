<template>
    <AppLayout  title="Dashboard">
        <v-row class="mt-3">
            <v-col cols="6">
                <v-row>
                    <v-col cols="6">
                        <StatCard
                            color="black"
                            icon="mdi-map-marker"
                            title="All Suites"
                            :num="$page.props.suites"
                            :url="route('admin.suites.index')"
                        />
                    </v-col>
                    <v-col cols="6">
                        <StatCard
                            color="primary"
                            icon="mdi-account-group"
                            title="All Clients"
                            :num="$page.props.clients"
                            :url="route('admin.clients.index')"
                        />
                    </v-col>
                    <v-col cols="6">
                        <StatCard
                            color="success"
                            icon="mdi-file-document-edit"
                            title="Active Leases"
                            :num="$page.props.active"
                            :url="route('admin.lease-agreements.index')"
                        />
                    </v-col>
                    <v-col cols="6">
                        <StatCard
                            color="error"
                            icon="mdi-account-cancel"
                            title="Cancelled Leases"
                            :num="$page.props.cancelled"
                            :url="route('admin.lease-agreements.index')"
                        />
                    </v-col>
                    <v-col cols="6">
                        <StatCard
                            color="purple-darken-4"
                            icon="mdi-account-group"
                            :title="currentMonth +' Payments'"
                            :num="'$'+$page.props.totalpayments"
                            :url="route('admin.payments.index')"
                        />
                    </v-col>

                    <v-col cols="6">
                        <StatCard
                            color="orange-darken-4"
                            icon="mdi-bell"
                            title="Notifications'"
                            :num="0"
                            url="#"
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6">
                Graph
            </v-col>
        </v-row>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import StatCard from "@/Components/StatCard.vue";
import moment from "moment";

export default {
    name: "Dashboard",
    components: {AppLayout,StatCard},
    computed:{

        currentMonth(){
            return moment(new Date()).format("MMMM");
        }
    }
}
</script>
