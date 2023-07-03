<script setup>
import { Link } from "@inertiajs/vue3";
import Header from "../../Components/Header.vue";
import Footer from "../../Components/Footer.vue";

const numbers = [];

for (let i = 0; i <= 50; i++) {
  numbers.push[i];
}

console.log(numbers);
</script>

<template>
  <Header></Header>

  <div class="bg-white">
    <div class="bg-w-gray p-32 rounded-br-[10rem]">
      <div class="container">
        <div class="flex justify-between items-center">
          <h4 class="text-5xl font-prompt-bold">Odeća</h4>

          <span class="text-xl font-prompt-medium">255 proizvoda</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-w-gray">
    <div class="bg-white p-32 rounded-tl-[10rem]">
      <div class="container">
        <div class="grid grid-cols-4 gap-8">
          <div class="card mb-10" v-for="index in 100" :key="index">
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

  <div class="py-32 bg-w-gray rounded-br-[10rem]">
    <div class="container">
      <div class="flex justify-between items-center">
        <h5 class="text-5xl text-w-tertiary font-prompt-bold leading-snug">
          Ostanite povezani sa <br />
          bilo kim i bilo gde!
        </h5>

        <div>
          <p class="text-xl font-prompt-medium mb-3">Društvene mreže</p>
          <div class="flex gap-5">
            <div class="rounded-md border border-w-primary-text p-2 box-content">
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                role="img"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                ></path>
              </svg>
            </div>

            <div class="rounded-md border border-w-primary-text p-2 box-content">
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                role="img"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.94043 5.00002C6.94016 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002V5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002V8.48002Z"
                ></path>
              </svg>
            </div>

            <div class="rounded-md border border-w-primary-text p-2 box-content">
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                role="img"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7V7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75V6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.739 4.558 5.426 4.759 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.259 19.442 18.574 19.241 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
                ></path>
              </svg>
            </div>

            <div class="rounded-md border border-w-primary-text p-2 box-content">
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                role="img"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.70301 5.63814 10.1708 5.82293 10.59 6.0921C10.984 6.3391 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.77 8.1211 11.77 8.7141C11.77 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.77 12.8691C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.77 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3825 9.92084 18.6165 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6641 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.28137 16.5819 8.51628 16.4805 8.721 16.3321C8.92138 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7101 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291H7.197V16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9861H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5581C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.2179 16.295 18.9541C15.6887 18.7266 15.148 18.3529 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9745 11.4082 14.3245 10.8378 14.77 10.3461C15.213 9.9011 15.754 9.5061 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.148 10.6931C22.5499 11.2636 22.8494 11.8998 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0391 17.18 11.1871C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8691 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841V11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p class="text-xl font-prompt-medium mb-3">Newsletter</p>
          <form class="flex" action="#">
            <button
              class="hover:bg-w-gray rounded-s-3xl px-5 border border-r-0 border-w-primary-text"
            >
              <img
                class="w-5"
                src="http://[::1]:5173/resources/images/icons/send.svg"
                alt=""
              /></button
            ><input
              class="grow border-w-primary-text focus:ring-0 focus:ring-offset-0 hover:border-w-gray-border-dark bg-w-gray focus:border-w-gray-border-dark rounded-e-3xl px-5 py-3"
              type="text"
              placeholder="Prijavi se"
            />
          </form>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>

  <div
    class="fixed bottom-5 left-1/2 -translate-x-1/2 bg-w-gray-1 text-white p-3 rounded-md"
  >
    <div class="flex gap-2">
      <div
        class="flex items-center px-6 py-3 bg-w-white-opacity-2 text-white rounded font-prompt-regular"
      >
        Size

        <img class="ml-1 w-5" src="@/images/icons/down-arrow.svg" alt="" />
      </div>
      <div
        class="flex items-center px-6 py-3 bg-w-white-opacity-2 text-white rounded font-prompt-regular"
      >
        Color

        <img class="ml-1 w-5" src="@/images/icons/down-arrow.svg" alt="" />
      </div>
      <div
        class="flex items-center px-6 py-3 bg-w-white-opacity-2 text-white rounded font-prompt-regular"
      >
        Brand

        <img class="ml-1 w-5" src="@/images/icons/down-arrow.svg" alt="" />
      </div>
      <div
        class="flex items-center px-6 py-3 bg-w-white-opacity-2 text-white rounded font-prompt-regular"
      >
        Price

        <img class="ml-1 w-5" src="@/images/icons/down-arrow.svg" alt="" />
      </div>
      <div
        class="flex items-center px-6 py-3 bg-w-white-opacity-2 text-white rounded font-prompt-regular"
      >
        Sort By

        <img class="ml-1 w-5" src="@/images/icons/down-arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
