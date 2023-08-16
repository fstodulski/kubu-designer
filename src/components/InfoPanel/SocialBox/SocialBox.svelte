<script lang="ts">
  import type { IconSource } from '@steeze-ui/svelte-icon';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let icon: IconSource;
</script>

<figure
  class="bg-slate-(lighten)-slate-900 border-slate-(lighten)-slate-900 text-default flex h-12 w-12 items-center justify-center rounded-lg border p-2"
>
  <Icon src={icon} theme="solid" size="24px" />
</figure>
