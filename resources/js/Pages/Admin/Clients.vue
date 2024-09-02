<template>
    <AppLayout title="All Clients">
        <div class="glass pa-3">
            <v-toolbar class="rounded-lg px-2 mb-5" density="comfortable">
                <v-toolbar-title>
                    All Clients ({{ $page.props.clients.length }})
                </v-toolbar-title>
                <v-spacer />
                <v-btn @click="dialog = true" variant="flat">
                    Add Client
                </v-btn>
            </v-toolbar>

            <v-dialog max-width="600" v-model="dialog">
                <v-card variant="flat">
                    <v-card-title class="mb-5">Client Information Form</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.first_name"
                                    label="First Name"
                                    prepend-inner-icon="mdi-account"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.first_name"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.middle_name"
                                    label="Middle Name"
                                    prepend-inner-icon="mdi-account"
                                    :error-messages="$page.props.errors.middle_name"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.last_name"
                                    label="Last Name"
                                    prepend-inner-icon="mdi-account"
                                    :error-messages="$page.props.errors.last_name"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.email"
                                    label="Email"
                                    prepend-inner-icon="mdi-email"
                                    :error-messages="$page.props.errors.email"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.phone"
                                    label="Phone"
                                    prepend-inner-icon="mdi-phone"
                                    :error-messages="$page.props.errors.phone"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.tax_number"
                                    label="Tax Number"
                                    prepend-inner-icon="mdi-currency-usd"
                                    :error-messages="$page.props.errors.tax_number"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.bpn_number"
                                    label="BPN Number"
                                    prepend-inner-icon="mdi-currency-usd"
                                    :error-messages="$page.props.errors.bpn_number"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.address"
                                    label="Address"
                                    prepend-inner-icon="mdi-map-marker"
                                    :error-messages="$page.props.errors.address"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.city"
                                    label="City"
                                    prepend-inner-icon="mdi-city"
                                    :error-messages="$page.props.errors.city"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.state"
                                    label="State"
                                    prepend-inner-icon="mdi-map-marker"
                                    :error-messages="$page.props.errors.state"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.country"
                                    label="Country"
                                    prepend-inner-icon="mdi-earth"
                                    :error-messages="$page.props.errors.country"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.zipcode"
                                    label="Zipcode"
                                    prepend-inner-icon="mdi-map-marker"
                                    :error-messages="$page.props.errors.zipcode"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.natID"
                                    label="National ID"
                                    prepend-inner-icon="mdi-card-account-details"
                                    :error-messages="$page.props.errors.natID"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.dob"
                                    label="Date of Birth"
                                    prepend-inner-icon="mdi-calendar"
                                    :error-messages="$page.props.errors.dob"
                                    type="date"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions class="mt-n5">
                        <v-btn class="mx-1" variant="flat" color="warning" @click="closeDialog">Cancel</v-btn>
                        <v-btn
                            variant="flat"
                            class="mx-1"
                            color="primary"
                            @click="submitForm"
                            :loading="form.processing"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-data-table
                :items="$page.props.clients"
                :headers="headers"
            >
                <template v-slot:item.actions="{ item }">
                    <div class="d-flex">
                        <InertiaLink :href="route('admin.clients.show', item)">
                            <v-btn class="mx-1" color="success">View</v-btn>
                        </InertiaLink>
                        <v-btn class="mx-1" @click="editClient(item)">Edit</v-btn>
                        <v-btn color="error" class="mx-1" @click="deleteClient(item)">
                            <v-icon>mdi-trash-can</v-icon>
                        </v-btn>
                    </div>
                </template>
            </v-data-table>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
    components: { AppLayout },
    data() {
        return {
            form: this.$inertia.form({
                id: null,
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                phone: '',
                tax_number: '',
                bpn_number: '',
                address: '',
                country: '',
                state: '',
                city: '',
                zipcode: '',
                natID: '',
                dob: '',
            }),
            headers: [
                { title: 'ID', key: 'id' },
                { title: 'First Name', key: 'first_name' },
                { title: 'Last Name', key: 'last_name' },
                { title: 'Email', key: 'email' },
                { title: 'Phone', key: 'phone' },
                { title: 'Actions', key: 'actions', sortable: false },
            ],
            dialog: false,
            rules: {
                required: (value) => !!value || 'This field is required.',
                email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
            },
        };
    },
    methods: {
        submitForm() {
            this.form.post(route('admin.clients.store'), {
                onSuccess: () => {
                    this.closeDialog();
                },
            });
        },
        closeDialog() {
            this.dialog = false;
            this.form.reset();
        },
        editClient(client) {
            this.form.fill(client);
            this.dialog = true;
        },
        deleteClient(client) {
            this.$swal.fire({
                title: "Are you sure you want to delete this client?",
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.visit(route('admin.clients.destroy', client), {
                        method: 'delete',
                    });
                }
            });
        },
    },
};
</script>
