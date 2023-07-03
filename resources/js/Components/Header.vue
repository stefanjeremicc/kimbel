<script setup>
import { Link } from "@inertiajs/vue3";
import { reactive } from "vue";

const categories = reactive([
  { id: 1, title: "Žene", slug: "zene" },
  { id: 2, title: "Muškarci", slug: "muskarci" },
  { id: 3, title: "Deca", slug: "deca" },
  { id: 4, title: "Ljubimci", slug: "ljubimci" },
]);
</script>

<template>
  <header class="mb-10">
    <nav
      aria-label="Main Navigation"
      class="flex items-center justify-center bg-w-gray rounded-b-[6rem] p-6"
    >
      <ul class="flex items-center divide-x-2">
        <li v-for="(category, index) in categories" :key="category.id">
          <Link
            :href="`/category`"
            :class="[
              'uppercase',
              'px-4',
              'font-prompt-medium',
              'text-lg',
              { 'text-w-primary': index === 0 },
            ]"
          >
            {{ category.title }}
          </Link>
        </li>
      </ul>
    </nav>

    <div class="mt-10">
      <div class="container">
        <div class="flex items-stretch">
          <div class="self-center w-fit mr-16">
            <Link href="/">
              <img src="@/images/icons/logo.svg" alt="" />
            </Link>
          </div>

          <div class="flex-grow mr-16">
            <form class="flex" action="#">
              <button
                class="hover:bg-w-gray rounded-s-3xl px-5 border border-r-0 border-w-gray-border"
              >
                <img class="w-5" src="@/images/icons/search.svg" alt="" />
              </button>

              <input
                class="grow border-w-gray-border focus:ring-0 focus:ring-offset-0 hover:border-w-gray-border-dark focus:border-w-gray-border-dark rounded-e-3xl px-5 py-3"
                type="text"
                placeholder="Pretraži proizvod"
              />
            </form>
          </div>

          <div class="flex items-center w-fit">
            <img class="w-6 mr-8" src="@/images/icons/profile.svg" alt="" />
            <img class="w-6 mr-8" src="@/images/icons/like.svg" alt="" />
            <img class="w-6" src="@/images/icons/save.svg" alt="" />
          </div>

          <Link
            class="flex items-center justify-center border border-w-primary text-w-primary font-prompt-medium rounded-3xl px-8 hidden"
            href="/"
            >Postani prodavac</Link
          >
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="container">
        <div class="flex items-center justify-center gap-12">
          <div class="flex flex-col items-center border-b-[3px] border-w-primary-text">
            <img class="mb-3 w-6" src="@/images/icons/shirts.svg" alt="" />
            <span class="font-prompt-regular text-lg mb-1"> Odeća </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-7" src="@/images/icons/obuca.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Obuća </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-7" src="@/images/icons/aksesoari.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Aksesoari </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-7" src="@/images/icons/kozmetika.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Kozmetika </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-5" src="@/images/icons/torbe.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Torbe </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-7" src="@/images/icons/obuca.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Sport </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-7" src="@/images/icons/aksesoari.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Pokloni </span>
          </div>

          <div class="flex flex-col items-center">
            <img class="mb-3 opacity-70 w-7" src="@/images/icons/kozmetika.svg" alt="" />
            <span class="font-prompt-regular text-lg"> Novo </span>
          </div>

          <div class="flex flex-col items-center bg-w-gray p-2 rounded-md">
            <img class="mb-3 opacity-70 w-5" src="@/images/icons/torbe.svg" alt="" />
            <span class="font-prompt-medium text-lg"> FOR YOU </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
