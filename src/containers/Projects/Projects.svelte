<script lang="ts">
  import PortfolioItem from './components/PortfolioItem/PortfolioItem.svelte';
  import { PROJECTS } from './projects';

  const halfItems = Math.ceil(PROJECTS.length / 2);
  const colOne = PROJECTS.slice(0, halfItems);
  const colTwo = PROJECTS.slice(halfItems);
</script>

<section class="mb-4 grid w-full grid-cols-1 gap-6 lg:hidden lg:grid-cols-2">
  {#each PROJECTS as project}
    <PortfolioItem data={project}></PortfolioItem>
  {/each}
</section>

<section class="mb-4 hidden w-full grid-cols-1 gap-6 lg:grid lg:grid-cols-2">
  <div class="flex flex-col gap-6">
    {#each colOne as project}
      <PortfolioItem data={project}></PortfolioItem>
    {/each}
  </div>
  <div class="flex flex-col gap-6">
    {#each colTwo as project}
      <PortfolioItem data={project}></PortfolioItem>
    {/each}
  </div>
</section>
