<script lang="ts">
  import type { PortfolioItem } from './portfolio-item.model';

  export let data: PortfolioItem;

  const aspect = `${data.image.aspectRatio}`;
</script>

<div class=" flex w-full flex-col gap-2">
  <figure class="w-full overflow-hidden rounded-xl">
    <img class=" w-full aspect-[{aspect}]" src={data.image.src} alt={data.image.alt} />
  </figure>

  <div class="font-inter flex items-center justify-between">
    <span class="text-slate-slate-50 text-sm">{data.title}</span>
    <span class="text-default text-sm">{data.type}</span>
  </div>
</div>

<style lang="scss">
</style>
