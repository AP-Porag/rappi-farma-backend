<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="6" cols="12">
                <v-card class="bg pt-8" elevation="2">
                    <v-row justify="center">
                        <v-col align-self="start" class="d-flex justify-center align-center pa-0" cols="12">
                            <v-avatar class="profile avatar-center-heigth avatar-shadow" color="grey" size="164">
                                <v-btn @click="onButtonClick" class="upload-btn" x-large icon>
                                    <v-icon>
                                        mdi-camera
                                    </v-icon>
                                </v-btn>
                                <input ref="uploader" class="d-none" type="file" accept="image/*" :change="onFileChanged">
                                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>

                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-list-item color="#0000" class="profile-text-name ma-4 pt-8">
                        <v-list-item-content>
                            <v-list-item-title class="text-h6 text-center">
                                Marcus Obrien
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-center">Network Engineer</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col lg="6" cols="12">
                <v-card elevation="2" class="rounded-lg">
                    <v-simple-table class="p-5">
                        <template>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Key
                                </th>
                                <th class="text-left">
                                    Value
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>Jhon</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>Doe</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>

        </v-row>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            Phone: '00 00000-0000',
            editBio: false,
            Bio: "my bio test about myself, what do you know about me?",
            bioIcon: "mdi-pencil",
            focus: "",
            type: "month",
            typeToLabel: {
                month: "Month",
                week: "Week",
                day: "Day",
                "4day": "4 Days"
            },
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            events: [],
            colors: [
                "blue",
                "indigo",
                "deep-purple",
                "cyan",
                "green",
                "orange",
                "grey darken-1"
            ],
            names: [
                "Meeting",
                "Holiday",
                "PTO",
                "Travel",
                "Event",
                "Birthday",
                "Conference",
                "Party"
            ],
            tab: null,
            items: ["Minha agenda", "Sobre Mim"],
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
    },
    mounted() {
        //this.$refs.calendar.checkChange();
    },
    methods: {
        saveBio() {
            this.editBio = !this.editBio;
            this.bioIcon = 'mdi-content-save'
            if (!this.editBio) {
                this.bioIcon = 'mdi-pencil'

                alert("salvo com sucesso!");
            }
        },
        onButtonClick() {
            this.isSelecting = true;
            window.addEventListener(
                "focus",
                () => {
                    this.isSelecting = false;
                },
                { once: true }
            );

            this.$refs.uploader.click();
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files[0];

            // do something
        },
        viewDay({ date }) {
            this.focus = date;
            this.type = "day";
        },
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.focus = "";
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event;
                this.selectedElement = nativeEvent.target;
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => (this.selectedOpen = true))
                );
            };

            if (this.selectedOpen) {
                this.selectedOpen = false;
                requestAnimationFrame(() => requestAnimationFrame(() => open()));
            } else {
                open();
            }

            nativeEvent.stopPropagation();
        },
        updateRange({ start, end }) {
            const events = [];

            const min = new Date(`${start.date}T00:00:00`);
            const max = new Date(`${end.date}T23:59:59`);
            const days = (max.getTime() - min.getTime()) / 86400000;
            const eventCount = this.rnd(days, days + 20);

            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 3) === 0;
                const firstTimestamp = this.rnd(min.getTime(), max.getTime());
                const first = new Date(firstTimestamp - (firstTimestamp % 900000));
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
                const second = new Date(first.getTime() + secondTimestamp);

                events.push({
                    name: this.names[this.rnd(0, this.names.length - 1)],
                    start: first,
                    end: second,
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay
                });
            }

            this.events = events;
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        }
    },
}
</script>

<style scoped>
.upload-btn{
    position: absolute !important;
    z-index: 1;
    top: 121px;
    color: cadetblue;
    background: blueviolet;
    background: rgb(125,198,163);
    background: linear-gradient(50deg, rgba(125,198,163,1) 0%, rgba(35,216,227,1) 72%);
}

.bg{
    background: rgb(255,197,185);
    background: linear-gradient(0deg, rgba(255,197,185,0.711922268907563) 0%, rgba(220,246,223,0.6671043417366946) 35%, rgba(255,255,255,0.7539390756302521) 74%), url(http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg);
}

.avatar-shadow{
    box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
}
</style>
