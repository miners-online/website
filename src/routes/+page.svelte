<script>
    import {
        Row,
        Column,
        Button
    } from "carbon-components-svelte";

    // @ts-ignore -- this markdown is a Svelte component now ...
    import Content from '../content/home.md'
    // @ts-ignore -- this markdown is a Svelte component now ...
    import Section1_Part1 from '../content/home/section1/part1.md'
    // @ts-ignore -- this markdown is a Svelte component now ...
    import Section1_Part2 from '../content/home/section1/part2.md'
    // @ts-ignore -- this markdown is a Svelte component now ...
    import Section2_Part1 from '../content/home/section2/part1.md'
    // @ts-ignore -- this markdown is a Svelte component now ...
    import Section2_Part2 from '../content/home/section2/part2.md'
</script>

<Row>
    <Column>
        <Section1_Part1/>
        <Button>Join now</Button>
        <Section1_Part2/>
    </Column>
    <Column>
    </Column>
</Row>
<Row>
    <Column>
        <Section2_Part1/>
    </Column>
    <Column>
        <Section2_Part2/>
    </Column>
    <Column>
    
    </Column>
</Row>
