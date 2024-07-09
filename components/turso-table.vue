<template>
    <div class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-white">
                        Users
                    </h1>
                    <p class="mt-2 text-sm text-gray-300">
                        A list of all the users in your account
                        including their name, title, email and role.
                    </p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" @click="seedRemoteDb"
                        class="block rounded-md bg-turso px-3 py-2 text-center text-sm font-semibold hover:bg-turso-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Seed Remote db
                    </button>

                    <button type="button"
                        class="block rounded-md bg-turso px-3 py-2 text-center text-sm font-semibold hover:bg-turso-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Refresh data
                    </button>
                    <button type="button" @click="addPerson"
                        class="block rounded-md bg-turso px-3 py-2 text-center text-sm font-semibold hover:bg-turso-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Add Random Person
                    </button>
                </div>
            </div>
            <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-700">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                        Data Source
                                    </th>

                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Title
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Email
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-800">
                                <tr v-for="person in peopleStock" :key="person.email">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                        {{ person.source }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                        {{ person.name }}
                                    </td>

                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                        {{ person.title }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                        {{ person.email }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        <a href="#" class="text-indigo-400 hover:text-indigo-300">Edit<span
                                                class="sr-only">,
                                                {{ person.name }}</span></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { logme } from "~/utils/logger";

const seedRemoteDb = async () => {
    try {
        const response = await $fetch("/api/people.seed");
        logme("seedRemoteDb", response);
    } catch (error) {
    }
};

const fetchPeople = async () => {
    try {
        const response = await $fetch("/api/people.seed");
        logme("seedRemoteDb", response);
    } catch (error) {
    }
};

const addPerson = async () => {
    try {
        const response = await $fetch("/api/people.add");
        logme("addPerson", response.rows);
    } catch (error) {
    }
};



const peopleStock = [
    {
        source: ".vue file",
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@taecho.tech",
    },
    {
        source: ".vue file",
        name: "James Walton",
        title: "Engineer",
        email: "james.Walton@taecho.tech",
    },
    {
        source: ".vue file",
        name: "Alton Ainsley",
        title: "Designer",
        email: "alton.ainsley@taecho.tech",
    },

];
</script>
