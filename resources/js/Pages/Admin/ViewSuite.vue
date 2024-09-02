<template>
    <AppLayout :title="$page.props.suite.name">
        <div class="glass pa-3">
            <v-toolbar class="rounded-lg px-2 mb-5" density="comfortable">
                <v-toolbar-title>
                   {{ $page.props.suite.property.title }} | {{ $page.props.suite.name }}
                </v-toolbar-title>
                <v-spacer />
            </v-toolbar>

            <v-container>
                <v-row>
                    <v-col cols="12" sm="5">
                        <v-card variant="tonal" color="primary">
                           <v-form @submit.prevent="addLease">
                               <v-card-title class="d-flex">
                                   Lease Agreements
                                   <v-spacer/>
                                   <v-btn class="mx-1"  variant="flat" color="primary">
                                       <v-icon>mdi-plus</v-icon> Tenant
                                   </v-btn>
                               </v-card-title>
                               <v-card-text>

                               </v-card-text>
                           </v-form>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="7">
                        <v-card variant="tonal" color="primary">
                            <v-card-title class="d-flex">
                                Payments
                                <v-spacer/>
                                <v-btn class="mx-1" variant="flat" color="primary">
                                    <v-icon>mdi-plus</v-icon> Payment
                                </v-btn>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </AppLayout>
</template>

<script setup>
    import AppLayout from "@/Layouts/AppLayout.vue";
    import {useForm} from "@inertiajs/vue3";
    import {ref} from 'vue'

    const leaseFormDialog   = ref(false)
    const paymentFormDialog = ref(false)

    const leaseForm =  useForm({
        property_id:null,
        client_id:null,
        start_date:null,
        end_date:null,
        rent_amount:null,
        security_deposit:null,
        is_signed:null,
        terms:null,
        is_active:null,
    })

    const addLease = ()=>{
        alert()
    }
</script>
