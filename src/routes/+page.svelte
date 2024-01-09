<script>
    import {
        truncate,
        breakpoints,
        Row,
        Button,
        Column,
    } from "carbon-components-svelte";
</script>

<Row>
    <Column>
        <Button>Primary button</Button>

        <div use:truncate>Text...</div>
        
        {JSON.stringify(breakpoints)}
    </Column>
</Row>
