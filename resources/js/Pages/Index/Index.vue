<script setup>
import { Link } from "@inertiajs/vue3";
import Header from "../../Components/Header.vue";
</script>

<template>
  <Header></Header>

  <div class="bg-w-gray rounded-br-[10rem] p-32">
    <div class="container">
      <div class="bg-white flex rounded-3xl py-12 px-32 pr-0">
        <div class="flex-1 flex flex-col justify-center">
          <div class="w-fit">
            <h4 class="relative font-prompt-medium text-[2.5rem] leading-normal mb-7">
              <span> Da li si spreman da <br /></span> raščistiš svoj
              <span class="text-w-secondary">ormar</span>?
            </h4>

            <Link
              class="w-fit flex items-center justify-center border border-w-primary bg-w-primary text-white font-prompt-medium rounded-3xl px-8 py-3"
              href="/"
              >Postani prodavac</Link
            >
          </div>
        </div>

        <div class="flex-1">
          <img src="@/images/hero/hero.svg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-w-gray">
    <div class="bg-white p-32 rounded-tl-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center mb-24">
          <h4 class="text-5xl text-w-tertiary font-prompt-bold">Promovisano</h4>

          <span class="text-xl font-prompt-medium">Pogledaj celu ponudu</span>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div class="bg-w-gray-1 p-32 rounded-tr-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center mb-24">
          <h4 class="text-5xl text-w-tertiary font-prompt-bold">Top influenseri</h4>

          <span class="text-xl font-prompt-medium">Pogledaj sve influensere</span>
        </div>

        <div class="flex items-center gap-8">
          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-w-gray-1">
    <div class="bg-white p-32 rounded-tl-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center mb-24">
          <h4 class="text-5xl text-w-tertiary font-prompt-bold">Popularno</h4>

          <span class="text-xl font-prompt-medium">Pogledaj celu ponudu</span>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div class="bg-w-gray-1 p-32 rounded-tr-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center mb-24">
          <h4 class="text-5xl text-w-tertiary font-prompt-bold">Kupuj po brendu</h4>

          <span class="text-xl font-prompt-medium">Pogledaj sve brendove</span>
        </div>

        <div class="flex items-center gap-8">
          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-w-gray">
    <div class="bg-white p-32 rounded-tl-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center mb-24">
          <h4 class="text-5xl text-w-tertiary font-prompt-bold">
            Nedavno objavljeni proizvodi
          </h4>

          <span class="text-xl font-prompt-medium">Pogledaj celu ponudu</span>
        </div>

        <div class="grid grid-cols-4 gap-8">
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>

          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <a class="flex items-center" href="#">
                <img class="mr-3" src="@/images/korisnik.jpg" alt="" />
                <span class="font-prompt-regular">Johanna002</span></a
              >

              <div>
                <img class="w-5" src="@/images/icons/dots.svg" alt="" />
              </div>
            </div>

            <img class="w-full" src="@/images/kartica.jpg" alt="" />

            <div class="bg-w-gray-light rounded py-4 px-3">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/like.svg" alt="" />

                  <span class="text-sm font-prompt-medium">355 likes</span>
                </div>

                <div class="flex items-center">
                  <img class="w-5 mr-3" src="@/images/icons/send.svg" alt="" />
                  <img class="w-5" src="@/images/icons/save.svg" alt="" />
                </div>
              </div>

              <h4 class="text-xl font-semibold mb-6">2500 RSD</h4>

              <p class="mb-2">Bela pamučna majica (Balenciaga)</p>
              <p><span class="font-prompt-regular">M</span> veličina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
