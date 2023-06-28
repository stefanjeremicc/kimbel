<script setup>
import { Link } from "@inertiajs/vue3";
import Header from "../../Components/Header.vue";
</script>

<template>
  <Header></Header>

  <div class="bg-no-repeat bg-contain bg-w-gray rounded-br-[10rem] p-32">
    <div class="container mx-auto">
      <div class="flex rounded-3xl py-12">
        <div class="flex-1 flex flex-col justify-center">
          <div class="w-[700px]">
            <h4
              class="relative font-prompt-medium text-7xl leading-tight mb-10 uppercase"
            >
              <p class="font-prompt-bold flex">
                <span class="ml-20 inline-block">VAŠA</span>
                <span class="ml-7 mt-11 inline-block">MODNA</span>
              </p>
              <p class="font-prompt-bold">VIRTUELNA</p>

              <div class="relative w-100">
                <span class="absolute -bottom-0 left-10">
                  <svg
                    class="icon icon-right-arrow rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="42.208"
                    viewBox="0 0 84 42.208"
                  >
                    <g transform="translate(0 -127.369)">
                      <g transform="translate(0 127.369)">
                        <path
                          d="M83.445,147.127h0l-19.09-19.091a1.909,1.909,0,1,0-2.692,2.692l15.826,15.845H1.909a1.909,1.909,0,0,0,0,3.818h75.58L61.663,166.218a1.909,1.909,0,1,0,2.692,2.692l19.091-19.091A1.909,1.909,0,0,0,83.445,147.127Z"
                          transform="translate(0 -127.369)"
                          fill="#1b242c"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <p class="font-prompt-bold ml-auto text-right mr-20">VITRINA MODE</p>
              </div>
            </h4>

            <Link
              class="w-fit flex items-center justify-center border border-w-primary bg-w-primary text-white font-prompt-medium rounded-3xl px-8 py-3 hidden"
              href="/"
              >Postani prodavac</Link
            >
          </div>
        </div>

        <div
          class="flex items-center justify-center rounded-s-[1.5rem] rounded-e-[1.5rem] h-[470px] flex-1"
          style="
            background: linear-gradient(
              180deg,
              hsla(40, 5%, 78%, 0.44) 15.62%,
              hsla(0, 0%, 100%, 0)
            );
          "
        >
          <img src="@/images/devojka.webp" alt="" />
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
          <h4 class="text-5xl text-white font-prompt-bold">Top influenseri</h4>

          <span class="text-xl text-white font-prompt-medium"
            >Pogledaj sve influensere</span
          >
        </div>

        <div class="flex items-center gap-8">
          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="mb-3" src="@/images/korisnik.jpg" alt="" />

            <p class="font-prompt-medium">Johanna002</p>

            <p>141k pratilaca</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
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
          <h4 class="text-5xl text-white font-prompt-bold">Kupuj po brendu</h4>

          <span class="text-xl text-white font-prompt-medium">Pogledaj sve brendove</span>
        </div>

        <div class="flex items-center gap-8">
          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>

          <div
            class="flex-grow flex flex-col items-center justify-center p-4 bg-w-white-opacity-2 text-white rounded"
          >
            <img class="w-12 mb-3" src="@/images/icons/nike.svg" alt="" />

            <p class="font-prompt-medium">Nike</p>

            <p>11k proizvoda</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-w-gray-1">
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

  <div class="relative h-[800px]">
    <div class="background-video">
      <video autoplay loop muted>
        <source
          src="https://cdn.shopify.com/videos/c/o/v/ad2ece991bf440ffa93fe71b5b95c853.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <p class="text-white mb-5 text-3xl text-center">
        Postanite i vi deo najveće baze u Srbiji!
      </p>
      <h5 class="text-8xl text-white font-prompt-bold text-center">Kimbel TEAM</h5>
    </div>

    <div class="absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-40"></div>
  </div>

  <div class="p-32">
    <div class="container">
      <div class="flex justify-between items-center mb-24">
        <h4 class="text-5xl text-w-tertiary font-prompt-bold">Žene su sada u trendu</h4>

        <span class="text-xl font-prompt-medium">Pogledaj celu ponudu</span>
      </div>

      <div class="grid grid-cols-3 gap-8">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1368/3463/files/WSG_2306_Summer-Campaign---38_20_281_29_450x_crop_center@2x.progressive.jpeg?v=1684514918"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1368/3463/files/Shortstache_E2_84_A2_Cuts_NewYork_FullRes-540_450x_crop_center@2x.progressive.jpg?v=1680481504"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1368/3463/files/Aeroflight1204_20copy_450x_crop_center@2x.progressive.jpg?v=1680480787"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
