<script>
    import { resolve } from '$app/paths';
    let { href, children, ...props } = $props();
</script>

<a href={resolve(href)} {...props}>
    {@render children()}
</a>