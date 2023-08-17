<script lang="ts">
  import type { PortfolioItem } from './portfolio-item.model';

  export let data: PortfolioItem;

  const aspect = `${data.image.aspectRatio}`;
</script>

<a
  href={data.href.url}
  aria-label={data.href.ariaLabel}
  target="_blank"
  referrerpolicy="no-referrer"
>
  <div class=" flex w-full flex-col gap-2">
    <figure class="w-full overflow-hidden rounded-xl">
      <img class=" w-full aspect-[{aspect}]" src={data.image.src} alt={data.image.alt} />
    </figure>

    <div class="font-inter flex items-center justify-between">
      <span class="text-sm text-slate-slate-50">{data.title}</span>
      <span class="text-sm text-default">{data.type}</span>
    </div>
  </div>
</a>
