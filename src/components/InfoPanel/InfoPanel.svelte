<script lang="ts">
  import { Behance, Dribbble, LinkedinBox } from '@steeze-ui/remix-icons';

  import SocialBox from './SocialBox/SocialBox.svelte';

  let windowHeight: number;
  let sidebarHeight: number = 0;

  $: sidebarHeight = windowHeight - 32;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
  class="bg-slate-(lighten)-slate-900 top-4 flex w-full flex-col gap-8 rounded-2xl p-4 md:sticky md:top-6 md:h-[calc(100vh-48px)] md:max-w-xs md:p-6"
>
  <div class="flex w-full items-center gap-2">
    <figure class="relative h-10 w-10 overflow-hidden">
      <img class="absolute top-0 z-0 h-full w-full" src="/avatar_alpha.svg" alt="" />
      <img
        class="absolute left-1/2 top-1/2 z-10 h-[35.556px] w-[35.556px] -translate-x-1/2 -translate-y-1/2"
        src="/avatar.svg"
        alt=""
      />
    </figure>
    <h1 class="text-base-white font-syne text-sm font-bold -tracking-[2%]">Kuba Mikołajczyk</h1>
  </div>

  <article class="flex flex-col gap-4 md:h-full">
    <h2 class="font-syne text-base-white text-4xl font-semibold leading-10 -tracking-[0.1%]">
      Digital Product Designer
    </h2>

    <p class="text-default font-inter text-sm leading-5">
      Product designer @ Netguru. Focused on creating user-centered and user-friendly digital
      products that people love to use. I have 3+ years of experience in creating and maintaining
      design systems & digital experiences.
    </p>

    <div class="flex items-center gap-4">
      <SocialBox icon={Behance}></SocialBox>
      <SocialBox icon={Dribbble}></SocialBox>
      <SocialBox icon={LinkedinBox}></SocialBox>
    </div>

    <div class="mt-auto flex flex-col gap-4">
      <a href="" class="btn secondary">Download CV</a>
      <a href="" class="btn primary">Contact me</a>
    </div>
  </article>
</div>
