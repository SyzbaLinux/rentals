<template>
    <AppLayout :title="$page.props.property.title">
        <div class="glass pa-3">
            <v-toolbar class="rounded-lg px-2 mb-5" density="comfortable">
                <v-toolbar-title>
                    {{ $page.props.property.title }}
                </v-toolbar-title>
                <v-spacer />
                <v-btn @click="roomDialog = true" variant="flat" color="primary">
                    Add Room/Suite
                </v-btn>
            </v-toolbar>


            <!-- Add/Edit Suite Dialog -->
            <v-dialog max-width="500" v-model="roomDialog">
                <v-card>
                    <v-card-title>
                        <span v-if="form.id">Edit Suite</span>
                        <span v-else>Add Suite</span>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                            v-model="form.name"
                            label="Suite Name"
                            prepend-inner-icon="mdi-home"
                            :rules="[rules.required]"
                            :error-messages="$page.props.errors.name"
                        />
                        <v-textarea
                            v-model="form.description"
                            label="Suite Description"
                            prepend-inner-icon="mdi-text"
                            :error-messages="$page.props.errors.description"
                        />
                        <v-text-field
                            v-model="form.monthly_rental"
                            label="Monthly Rental"
                            prepend-inner-icon="mdi-currency-usd"
                            :rules="[rules.required]"
                            :error-messages="$page.props.errors.monthly_rental"
                        />
                        <v-switch
                            inset
                            color="primary"
                            v-model="form.is_available"
                            label="Available"
                            :true-value="1"
                            :false-value="0"
                        />
                    </v-card-text>
                    <v-card-actions class="glass">
                        <v-spacer />
                        <v-btn @click="closeDialog" variant="flat" color="warning">Cancel</v-btn>
                        <v-btn @click="submitForm" :loading="form.processing" variant="flat" color="primary">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-data-table
                :items="$page.props.property.suites"
                :headers="headers"
            >
                <template v-slot:item.is_available="{ item }">
                    <v-chip v-if="item.is_available" color="success" variant="flat" size="small">
                        Available
                    </v-chip>

                    <v-chip v-else color="error" variant="flat" size="small">
                        Taken
                    </v-chip>
                </template>
                <template v-slot:item.actions="{ item }">

                    <InertiaLink :href="route('admin.suites.show',item.id)">
                        <v-btn variant="flat" color="success">View</v-btn>
                    </InertiaLink>

                    <v-btn class="ml-1" @click="editSuite(item)" color="info" variant="flat">
                        <EditIcon size="25" />
                    </v-btn>
                    <v-btn class="ml-1" @click="deleteSuite(item)" color="error" variant="flat">
                       <TrashIcon size="25" />
                    </v-btn>
                </template>
            </v-data-table>

        </div>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import TrashIcon from "@/Components/TrashIcon.vue";
import EditIcon from "@/Components/EditIcon.vue";

export default {
    components: {EditIcon, TrashIcon, AppLayout},

    data() {
        return {
            headers:[
                {title: 'ID', key: 'id'},
                {title: 'Title', key: 'name'},
                {title: 'Rental', key: 'monthly_rental'},
                {title: 'Available?', key: 'is_available'},
                {title: 'More', key: 'actions',sortable:false},
            ],
            roomDialog: false,
            form: this.$inertia.form({
                id: null,
                name: '',
                description: '',
                monthly_rental: '',
                is_available: 1,
                property_id: this.$page.props.property.id,
            }),
            rules: {
                required: (value) => !!value || 'This field is required.',
            },
        };
    },

    methods: {
        submitForm() {

            this.form.post(route('admin.suites.store'), {
                onSuccess: () => {
                    this.closeDialog();
                },
            });
        },
        closeDialog() {
            this.roomDialog = false;
            this.form.reset();
            this.form.is_available = true;
        },
        editSuite(suite) {

            this.form.name                = suite.name
            this.form.description         = suite.description
            this.form.monthly_rental      = suite.monthly_rental
            this.form.is_available        = suite.is_available
            this.form.property_id         = suite.property_id
            this.form.lease_agreement_id  = suite.lease_agreement_id

            this.roomDialog = true;
        },
        deleteSuite(suite) {
            this.$swal.fire({
                title: "Are you sure you want to delete this suite?",
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.delete(route('admin.suites.destroy', suite), {
                        method: 'delete',
                    });
                }
            });
        },
    },
};
</script>
