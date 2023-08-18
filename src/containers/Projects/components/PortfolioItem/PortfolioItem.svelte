<script lang="ts">
  import type { PortfolioItem } from './portfolio-item.model';

  export let data: PortfolioItem;
</script>

<a
  href={data.href.url}
  aria-label={data.href.ariaLabel}
  target="_blank"
  referrerpolicy="no-referrer"
>
  <div class="flex w-full flex-col gap-2">
    <figure class="w-full overflow-hidden rounded-xl border border-slate-(lighten)-slate-800">
      <img
        class="aspect-auto w-full"
        width={data.image.width}
        height={data.image.width}
        src={data.image.src}
        alt={data.image.alt}
      />
    </figure>

    <div class="font-inter flex items-center justify-between">
      <span class="text-slate-slate-50">{data.title}</span>
      <span class="text-default">{data.type}</span>
    </div>
  </div>
</a>
