<script lang="ts">
  import type { IconSource } from '@steeze-ui/svelte-icon';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let icon: IconSource;
  export let link: string;
</script>

<a href={link} referrerpolicy="no-referrer" aria-label={link} target="_blank">
  <figure
    class="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-(lighten)-slate-900 bg-slate-(lighten)-slate-900 p-2 text-default hover:border-slate-(lighten)-slate-800 hover:text-slate-slate-50"
  >
    <Icon src={icon} theme="solid" size="24px" />
  </figure>
</a>
