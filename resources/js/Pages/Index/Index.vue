<script setup>
import { Link } from "@inertiajs/vue3";
import Header from "../../Components/Header.vue";
</script>

<template>
  <Header></Header>

  <div class="bg-w-gray rounded-br-[10rem] p-32">
    <div class="container">
      <div class="bg-white flex rounded-3xl p-20">
        <div class="flex-1">
          <img src="@/images/hero/hero.svg" alt="" />
        </div>

        <div class="flex-1 flex flex-col items-center justify-center">
          <h4 class="font-prompt-medium text-center text-4xl mb-7">
            Da li si spreman da <br />
            raščistiš svoj ormar?
          </h4>

          <Link
            class="flex items-center justify-center border border-w-primary bg-w-primary text-white font-prompt-medium rounded-3xl px-8 py-3"
            href="/"
            >Postani prodavac</Link
          >
        </div>
      </div>
    </div>
  </div>

  <div class="bg-w-gray">
    <div class="bg-white p-32 rounded-tl-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center mb-24">
          <h4 class="text-5xl text-w-tertiary font-semibold">Promovisano</h4>

          <span class="text-xl font-medium text-w-primary">Pogledaj celu ponudu</span>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="../../../images/korisnik.jpg" alt="" />
                <span class="font-normal">Johanna002</span></a
              >

              <div>
                <img
                  src="../../../images/icons/prodaja-garderobe-three-dots.svg"
                  alt=""
                />
              </div>
            </div>
            <img class="w-full mb-4" src="../../../images/kartica.jpg" alt="" />

            <div>
              <div class="flex items-center justify-between mb-9">
                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-like.svg"
                    alt=""
                  />

                  <span class="text-sm font-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-share.svg"
                    alt=""
                  />
                  <img
                    class="w-[1.5rem]"
                    src="../../../images/icons/prodaja-garderobe-saved.svg"
                    alt=""
                  />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-5">2500 RSD</h4>

              <p>Bela pamučna majica (Balenciaga)</p>
              <p>M veličina</p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="../../../images/korisnik.jpg" alt="" />
                <span class="font-normal">Johanna002</span></a
              >

              <div>
                <img
                  src="../../../images/icons/prodaja-garderobe-three-dots.svg"
                  alt=""
                />
              </div>
            </div>
            <img class="w-full mb-4" src="../../../images/kartica.jpg" alt="" />

            <div>
              <div class="flex items-center justify-between mb-9">
                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-like.svg"
                    alt=""
                  />

                  <span class="text-sm font-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-share.svg"
                    alt=""
                  />
                  <img
                    class="w-[1.5rem]"
                    src="../../../images/icons/prodaja-garderobe-saved.svg"
                    alt=""
                  />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-5">2500 RSD</h4>

              <p>Bela pamučna majica (Balenciaga)</p>
              <p>M veličina</p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="../../../images/korisnik.jpg" alt="" />
                <span class="font-normal">Johanna002</span></a
              >

              <div>
                <img
                  src="../../../images/icons/prodaja-garderobe-three-dots.svg"
                  alt=""
                />
              </div>
            </div>
            <img class="w-full mb-4" src="../../../images/kartica.jpg" alt="" />

            <div>
              <div class="flex items-center justify-between mb-9">
                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-like.svg"
                    alt=""
                  />

                  <span class="text-sm font-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-share.svg"
                    alt=""
                  />
                  <img
                    class="w-[1.5rem]"
                    src="../../../images/icons/prodaja-garderobe-saved.svg"
                    alt=""
                  />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-5">2500 RSD</h4>

              <p>Bela pamučna majica (Balenciaga)</p>
              <p>M veličina</p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="../../../images/korisnik.jpg" alt="" />
                <span class="font-normal">Johanna002</span></a
              >

              <div>
                <img
                  src="../../../images/icons/prodaja-garderobe-three-dots.svg"
                  alt=""
                />
              </div>
            </div>
            <img class="w-full mb-4" src="../../../images/kartica.jpg" alt="" />

            <div>
              <div class="flex items-center justify-between mb-9">
                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-like.svg"
                    alt=""
                  />

                  <span class="text-sm font-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img
                    class="w-[1.5rem] mr-3"
                    src="../../../images/icons/prodaja-garderobe-share.svg"
                    alt=""
                  />
                  <img
                    class="w-[1.5rem]"
                    src="../../../images/icons/prodaja-garderobe-saved.svg"
                    alt=""
                  />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-5">2500 RSD</h4>

              <p>Bela pamučna majica (Balenciaga)</p>
              <p>M veličina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
