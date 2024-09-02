<template>
    <AppLayout title="All Properties">
        <div class="glass pa-3">
            <v-toolbar class="rounded-lg px-2 mb-5" density="comfortable">
                <v-toolbar-title>
                    All Properties ({{ $page.props.properties.length }})
                </v-toolbar-title>
                <v-spacer />
                <v-btn @click="dialog = true" variant="flat">
                    Add Property
                </v-btn>
            </v-toolbar>

            <v-dialog max-width="600" v-model="dialog">
                <v-card variant="flat">
                    <v-card-title class="mb-5">Property Information Form</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-text-field
                                    v-model="form.title"
                                    label="Title"
                                    prepend-inner-icon="mdi-book"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.title"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    rows="3"
                                    v-model="form.description"
                                    label="Description"
                                    prepend-inner-icon="mdi-text"
                                    :error-messages="$page.props.errors.description"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.address"
                                    label="Address"
                                    prepend-inner-icon="mdi-map-marker"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.address"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="form.number_of_rooms"
                                    label="Number of Rooms"
                                    prepend-inner-icon="mdi-door"
                                    :rules="[rules.required, rules.integer]"
                                    :error-messages="$page.props.errors.number_of_rooms"
                                />
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-select
                                    v-model="form.type"
                                    :items="['commercial', 'residential']"
                                    label="Type"
                                    prepend-inner-icon="mdi-home"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.type"
                                />
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-switch
                                    v-model="form.is_available"
                                    label="Available"
                                    :true-value="1"
                                    :false-value="0"
                                    inset
                                    color="primary"
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
                :items="$page.props.properties"
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
                    <div class="d-flex">
                        <InertiaLink :href="route('admin.properties.show', item)">
                            <v-btn class="mx-1" color="success">View</v-btn>
                        </InertiaLink>
                        <v-btn class="mx-1" @click="editProperty(item)">Edit</v-btn>
                        <v-btn color="error" class="mx-1" @click="deleteProperty(item)">
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
                title: '',
                description: '',
                address: '',
                number_of_rooms: 0,
                is_available: true,
                type: 'commercial',
            }),
            headers: [
                {title: 'ID', key: 'id'},
                {title: 'Title', key: 'title'},
                {title: 'Is Available', key: 'is_available'},
                {title: 'Description', key: 'description'},
                {title: 'Actions', key: 'actions', sortable: false},
            ],
            dialog: false,
            rules: {
                required: (value) => !!value || 'This field is required.',
                integer: (value) => Number.isInteger(Number(value)) || 'Must be an integer.',
            },
        };
    },
    methods: {
        submitForm() {
            this.form.post(route('admin.properties.store'), {
                onSuccess: () => {
                    this.closeDialog();
                },
            });
        },
        closeDialog() {
            this.dialog = false;
            this.form.reset();
        },

        editProperty(property) {
            this.form.id = property.id;
            this.form.title = property.title;
            this.form.description = property.description;
            this.form.address = property.address;
            this.form.number_of_rooms = property.number_of_rooms;
            this.form.is_available = property.is_available;
            this.form.type = property.type;
            this.dialog = true;
        },

        deleteProperty(property) {
            this.$swal.fire({
                title: "Are you sure you want to delete this property?",
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.visit(route('admin.properties.destroy', property), {
                        method: 'delete',
                    });
                }
            });
        },
    },
}
</script>
