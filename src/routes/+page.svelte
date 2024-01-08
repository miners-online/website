<script>
    import {
        truncate,
        breakpoints,
        Content,
        Grid,
        Row,
        Column,
        Button,
    } from "carbon-components-svelte";

</script>

<Content>
    <Grid>
        <Row>
        <Column>
            <Button>Primary button</Button>

            <div use:truncate>Text...</div>
            
            {JSON.stringify(breakpoints)}
        </Column>
        </Row>
    </Grid>
</Content>