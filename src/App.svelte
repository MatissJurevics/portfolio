<script lang="ts">
  import Logo from './components/name.svelte'


  export let x, y;
  document.addEventListener('mousemove', e => {
    x = e.clientX
    y = e.clientY
  })
</script>
<!-- Primary: F27A54 -->
<!-- Secondary: A154F2 -->
<!-- Tertiary: 6FCF97 -->
<!--- BG: 30363D--->
<main class="snap-y h-screen w-screen overflow-hidden cursor-none snap-mandatory">
  <section class="relative h-screen bg-dark-bg snap-start flex flex-col justify-center items-center">
    <a href="https://blog.saetom.xyz" class="p-3 z-20 cursor-pointer px-8 tracking-widest absolute top-4 right-12 bg-gradient-to-r from-primary to-secondary rounded-3xl text-white font-semibold text-lg drop-shadow-lg hover:bg-fuchsia-500">Blog</a>
    <div id='cursor' style='top:{y}px; left:{x}px;transform: translate(-50%, -50%);scrolling: yes;' class='absolute rounded-full w-20 h-20 z-10 cursor-none border-2 border-white opacity-25' />
    <Logo x={x} y={y}/>
  </section>
 
</main>