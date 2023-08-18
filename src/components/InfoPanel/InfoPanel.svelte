<script lang="ts">
  import { Behance, Dribbble, LinkedinBox } from '@steeze-ui/remix-icons';

  import SocialBox from './SocialBox/SocialBox.svelte';
</script>

<div
  class="top-4 flex w-full flex-col gap-12 rounded-2xl bg-slate-(lighten)-slate-900 p-4 md:sticky md:top-6 md:h-[calc(100vh-48px)] md:max-w-xs md:p-6"
>
  <div class="flex w-full items-center gap-2">
    <figure class="relative h-12 w-12 overflow-hidden">
      <img class="absolute top-0 z-0 h-full w-full rounded-full" src="/avatar_alpha.webp" alt="" />
      <img
        class="absolute left-1/2 top-1/2 z-10 h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        src="/avatar.webp"
        alt=""
      />
    </figure>
    <h1 class="font-syne font-bold -tracking-[2%] text-base-white">Kuba Mikołajczyk</h1>
  </div>

  <article class="flex flex-col gap-4 md:h-full">
    <h2 class="font-syne text-5xl font-semibold -tracking-[0.1%] text-base-white">
      Digital Product Designer
    </h2>

    <p class="font-inter text-base font-light text-default">
      Product designer @ Netguru. Focused on creating user-centered and user-friendly digital
      products that people love to use. I have 3+ years of experience in creating and maintaining
      design systems & digital experiences.
    </p>

    <div class="flex items-center gap-4">
      <SocialBox icon={Behance} link="https://www.behance.net/kubamikolajczyk" />
      <SocialBox icon={Dribbble} link="https://dribbble.com/kuba_mikolajczyk" />
      <SocialBox icon={LinkedinBox} link="https://www.linkedin.com/in/kuba-mikolajczyk/" />
    </div>

    <div class="mt-auto flex flex-col gap-4">
      <a
        href="/assets/cv/kuba_mikolajczyk.pdf"
        target="_blank"
        referrerpolicy="no-referrer"
        class="btn secondary">Download CV</a
      >
      <a href="mailto:qba600@gmail.com" class="btn primary">Contact me</a>
    </div>
  </article>
</div>
