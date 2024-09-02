<template>
    <AppLayout title="All Payments">
        <div class="glass pa-3">
            <v-toolbar class="rounded-lg px-2 mb-5" density="comfortable">
                <v-toolbar-title>
                    All Payments ({{ $page.props.payments.length }})
                </v-toolbar-title>
                <v-spacer />
                <v-btn @click="dialog = true" variant="flat">
                    Add Payment
                </v-btn>
            </v-toolbar>

            <v-dialog max-width="600" v-model="dialog">
                <v-card variant="flat">
                    <v-card-title class="mb-5">Payment Information Form</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.lease_agreement_id"
                                    label="Lease Agreement ID"
                                    prepend-inner-icon="mdi-clipboard-list"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.lease_agreement_id"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.client_id"
                                    label="Client ID"
                                    prepend-inner-icon="mdi-account"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.client_id"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.payment_date"
                                    label="Payment Date"
                                    prepend-inner-icon="mdi-calendar"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.payment_date"
                                    type="date"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.room_number"
                                    label="Room Number"
                                    prepend-inner-icon="mdi-door"
                                    :error-messages="$page.props.errors.room_number"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.receipt_number"
                                    label="Receipt Number"
                                    prepend-inner-icon="mdi-receipt"
                                    :error-messages="$page.props.errors.receipt_number"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.amount_paid"
                                    label="Amount Paid"
                                    prepend-inner-icon="mdi-currency-usd"
                                    :rules="[rules.required, rules.numeric]"
                                    :error-messages="$page.props.errors.amount_paid"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-select
                                    v-model="form.payment_method"
                                    :items="['cash', 'credit_card', 'bank_transfer']"
                                    label="Payment Method"
                                    prepend-inner-icon="mdi-credit-card"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.payment_method"
                                />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-select
                                    v-model="form.currency"
                                    :items="['usd', 'eur', 'gbp']"
                                    label="Currency"
                                    prepend-inner-icon="mdi-currency-usd"
                                    :rules="[rules.required]"
                                    :error-messages="$page.props.errors.currency"
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
                            <v-col cols="12">
                                <v-textarea
                                    rows="2"
                                    v-model="form.amount_in_words"
                                    label="Amount in Words"
                                    prepend-inner-icon="mdi-alphabetical"
                                    :error-messages="$page.props.errors.amount_in_words"
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
                :items="$page.props.payments"
                :headers="headers"
            >
                <template v-slot:item.actions="{ item }">
                    <div class="d-flex">
                        <InertiaLink :href="route('admin.payments.show', item)">
                            <v-btn class="mx-1" color="success">View</v-btn>
                        </InertiaLink>
                        <v-btn class="mx-1" @click="editPayment(item)">Edit</v-btn>
                        <v-btn color="error" class="mx-1" @click="deletePayment(item)">
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
                lease_agreement_id: '',
                client_id: '',
                payment_date: '',
                room_number: null,
                receipt_number: '',
                amount_paid: '',
                description: '',
                payment_method: 'cash',
                currency: 'usd',
                amount_in_words: '',
            }),
            headers: [
                { title: 'ID', key: 'id' },
                { title: 'Lease Agreement ID', key: 'lease_agreement_id' },
                { title: 'Client ID', key: 'client_id' },
                { title: 'Amount Paid', key: 'amount_paid' },
                { title: 'Payment Date', key: 'payment_date' },
                { title: 'Actions', key: 'actions', sortable: false },
            ],
            dialog: false,
            rules: {
                required: (value) => !!value || 'This field is required.',
                numeric: (value) => !isNaN(value) || 'Must be a number.',
            },
        };
    },
    methods: {
        submitForm() {
            this.form.post(route('admin.payments.store'), {
                onSuccess: () => {
                    this.closeDialog();
                },
            });
        },
        closeDialog() {
            this.dialog = false;
            this.form.reset();
        },
        editPayment(payment) {
            this.form.id = payment.id;
            this.form.lease_agreement_id = payment.lease_agreement_id;
            this.form.client_id = payment.client_id;
            this.form.payment_date = payment.payment_date;
            this.form.room_number = payment.room_number;
            this.form.receipt_number = payment.receipt_number;
            this.form.amount_paid = payment.amount_paid;
            this.form.description = payment.description;
            this.form.payment_method = payment.payment_method;
            this.form.currency = payment.currency;
            this.form.amount_in_words = payment.amount_in_words;
            this.dialog = true;
        },
        deletePayment(payment) {
            this.$swal.fire({
                title: "Are you sure you want to delete this payment?",
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.visit(route('admin.payments.destroy', payment), {
                        method: 'delete',
                    });
                }
            });
        },
    },
};
</script>
