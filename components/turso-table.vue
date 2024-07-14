<template>
    <div class="overflow-hidden rounded-lg bg-turso-bg shadow p-12">
        <div class="py-8">

            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-5xl font-black leading-6 text-white">
                        TURSO + NUXT
                    </h1>
                    <p class="mt-4 text-sm text-gray-300">
                        An example of using Turso with Nuxt.js. Read the full tutorial at <a
                            href="https://taecho.tech/blog/turso-nuxt"
                            class="border-b border-taecho hover:bg-taecho hover:text-white transition-colors">Taecho
                            Tech</a>
                    </p>
                </div>

                <div>
                    <div class="flex gap-2 place-content-end">
                        <UTooltip text=" Seed Remote db" :popper="{ placement: 'top' }">
                            <button type="button" @click="seedRemoteDb"
                                class="block rounded-md bg-turso w-8 h-8 text-center text-sm font-semibold hover:bg-turso-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <CircleStackIcon class="size-4 mx-auto" />
                            </button>
                        </UTooltip>

                        <UTooltip text="Manually Refresh Data" :popper="{ placement: 'top' }">
                            <button type="button" @click="fetchPeople"
                                class="block rounded-md bg-turso w-8 h-8 text-center text-sm font-semibold hover:bg-turso-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <ArrowPathIcon class="size-4 mx-auto" />
                            </button>
                        </UTooltip>
                        <UTooltip text="Add Random Person" :popper="{ placement: 'top' }">
                            <button type="button" @click="addPerson"
                                class="block rounded-md bg-turso w-8 h-8 text-center text-sm font-semibold hover:bg-turso-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <UserCircleIcon class="size-4 mx-auto" />
                            </button>
                        </UTooltip>
                    </div>
                    <div class="flex mt-4 items-center">
                        <span class="text-xs">Local Data</span>
                        <UToggle on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid"
                            v-model="remoteData" @click="swapData" color="primary" class="mx-2" /><span
                            class="text-xs">Turso
                            Data</span>
                    </div>
                </div>
            </div>
        </div>

        <UTable :rows="people"
            :columns="[{ key: 'dataSource', label: 'Source', class: 'firstCol' }, { key: 'name', label: 'Name' }, { key: 'title', label: 'Title' }, { key: 'email', label: 'Email' }]"
            :loading="pending">
            <template #loading-state>
                <div class="flex items-center justify-center h-32">
                    <i class="loader --6" />
                </div>
            </template>
        </UTable>

    </div>

    <div class="text-center my-20">
        <p class="mt-2 text-xs text-gray-300 mx-auto">
            Questions? Drop us a line at <a
                href="mailto:hello@taecho.tech?subject=Via the TAECHO TECH TRIO:TURSO + NUXT // Tutorial"
                class="font-bold  hover:text-taecho hover:border-taecho bg-taecho text-white px-1 mx-1 py-1 hover:text-white hover:bg-taecho/90 transition-colors">hello@taecho.tech</a>
        </p>

    </div>
</template>

<script setup>
// pretty logger
import { logme } from "~/utils/logger";

// icons
import { ArrowPathIcon, CircleStackIcon, UserCircleIcon } from "@heroicons/vue/16/solid";

let people = ref([]);
let pending = ref(true);
const remoteData = ref(false)

onMounted(() => {
    pending.value = false
    people.value = peopleStock;
})

const swapData = () => {

    remoteData.value = !remoteData.value

    if (remoteData.value) {
        fetchPeople()
    } else {
        people.value = peopleStock
    }

};

const seedRemoteDb = async () => {
    pending.value = true
    try {
        const response = await $fetch("/api/people.seed");
        logme("seedRemoteDb", response);

        // Save the click. Save the world. Automatically refresh people.value
        fetchPeople()

    } catch (error) {
    }
};

const fetchPeople = async () => {
    pending.value = true
    try {
        const response = await $fetch("/api/people.fetch");
        logme("fetchPeople", response);

        people.value = response;
        pending.value = false
        remoteData.value = true

        return response;
    } catch (error) {
    }
};

const addPerson = async () => {
    pending.value = true
    try {
        const response = await $fetch("/api/people.add");
        logme("addPerson", response.rosws);

        // Save the click. Save the world. Automatically refresh people.value
        fetchPeople()

    } catch (error) {
    }
};

const peopleStock = [
    {
        dataSource: ".vue file",
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@taecho.tech",
    },
    {
        dataSource: ".vue file",
        name: "James Walton",
        title: "Engineer",
        email: "james.Walton@taecho.tech",
    },
    {
        dataSource: ".vue file",
        name: "Alton Ainsley",
        title: "Designer",
        email: "alton.ainsley@taecho.tech",
    },

];
</script>